///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../StateMachine/pockey-state-machine.ts"/>
///<reference path="balls/abstract-ball.ts"/>
///<reference path="player.ts"/>
///<reference path="../../../Framework/Signals/signal-types.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
///<reference path="../SoundModule/pockey-sound-names.ts"/>
///<reference path="../../../Framework/Utils/CountdownTimer.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/18/2018
 */


namespace Pockey {
    export module GameModule {
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;
        import PockeyStates = Pockey.StateMachineModule.PockeyStates;
        import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import PockeySocketMessages = Pockey.Connection.PockeySocketMessages;
        import Settings = Framework.Settings;
        import PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        import PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        import CountdownTimer = Framework.Utils.CountdownTimer;
        import AbstractEntryPoint = Framework.AbstractEntryPoint;

        export interface PlayerSettings {
            opponentNickname?: string,
            opponentSocketId?: string,
            opponentColor?: number,
            opponentAvatarId?: string,
            firstToStart?: string
        }

        export enum WinStatus {
            WIN,
            LOST
        }

        // export enum PockeyStates {
        //     StartGame,
        //     PlayerTurn,
        //     PlayerTurnFirstBall,
        //     OpponentTurn,
        //     OpponentTurnFirstBall,
        //
        // }
        export interface GameState {
            changeMyState?: any[];
            stateID?: number,
            pooltableState?: TimeState,
            stateTime?: number,
            timerText?: string,
            timerTextAnimate?: boolean,
            playerScore ?: number,
            opponentScore?: number,
            whiteBallPenalty?: boolean,
            ballsHit?: number,
            opponentScreenTimer?: number,
            popupRemoved?: boolean
            // timerColored?:boolean
        }

        export class GameManager {
            private static instance: GameManager;
            private initialized: boolean = false;
            public player: Player = new Player("player", BallType.Player);
            // public playerScore: number = 7;
            public opponent: Player = new Player("opponent", BallType.Opponent);
            // public opponentScore: number = 7;

            public currentPlayer: Player;
            private whiteBallPenalty: boolean = false;
            private ballsHit: number = 0;
            private ownBallInPocketFault: boolean = false;

            private gameFinished: boolean = false;
            private winStatus: WinStatus;
            private availableForRestart: boolean = false;
            private timerText: string = "";
            private animateOpponentTimer: boolean = false;
            private countdownEnded: boolean = false;

            private myTimeStates: GameState[];
            private opponentGameStates: GameState[];
            private gameTimeStatesIdentifier: number = 0;
            private readyForNextTurn: boolean = false;


            private timeStatesTimerActive: boolean = false;

            private roundTimer: CountdownTimer;
            // private secondAndThirdRoundsTimers: CountdownTimer;
            private timer: CountdownTimer;

            private roundCounter: number = 0;

            private screenPopupTime: number = 0;
            private popupRemoved: boolean = false;
            private popupRemovedSent: boolean = false;

            static Instance(): GameManager {
                if (!GameManager.instance) {
                    GameManager.instance = new GameManager();

                    if (!GameManager.Instance().initialized) {
                        GameManager.Instance().InitializeOthers();
                        GameManager.Instance().registerSignalsHandlers();
                        GameManager.Instance().initialized = true;
                    }
                }

                return GameManager.instance;
            }

            private prepareFirstRound(): void {
                PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundOne);


                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN);

                if (this.player.startedFirst) {
                    this.setCurrentPlayer(this.player);

                    // console.log("culorilefmm: la player " + PockeySettings.OPPONENT_COLOR, +PockeySettings.PLAYER_COLOR_ID);

                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
                    this.player.side = "left";
                    this.opponent.side = "right";

                    PIXI.ticker.shared.add(this.createState, this);
                    this.roundTimer.restart();
                    this.onRoundScreenTimerUpdate();

                }
                else {

                    this.setCurrentPlayer(this.opponent);

                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.opponent.type, this.player.type]);
                    this.player.side = "right";
                    this.opponent.side = "left";

                    let sameColorsUsed: boolean = false;
                    if (PockeySettings.OPPONENT_COLOR == +PockeySettings.PLAYER_COLOR_ID) {
                        sameColorsUsed = true;

                        let itemId: number = 0;//Math.round(Math.random() * (PockeySettings.LARGE_COLORS_ARRAY.length - 1));
                        _.forEach(PockeySettings.LARGE_COLORS_ARRAY, (item: InventoryVO, counter: number) => {
                            if (item.id == PockeySettings.PLAYER_COLOR_ID) {
                                itemId = counter;
                                return true;
                            }
                        });
                        PockeySettings.OPPONENT_COLOR = PockeySettings.LARGE_COLORS_ARRAY[itemId].complementaryColor;

                    }

                    //aiciavemplayersettings////////////////
                    let playerSettings: PlayerSettings = {
                        opponentAvatarId: PockeySettings.PLAYER_AVATAR_ID,
                        opponentNickname: PockeySettings.PLAYER_NICKNAME,
                        opponentSocketId: PockeySettings.PLAYER_SOCKET_ID,
                        opponentColor: (sameColorsUsed) ? PockeySettings.OPPONENT_COLOR : +PockeySettings.PLAYER_COLOR_ID,
                        firstToStart: this.opponent.id
                    };
                    // console.log("opponent nickname:");
                    // console.log(playerSettings);
                    ///////////////////////////////////////

                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);

                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);

                }

                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);

                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.OPPONENT_FOUND}]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [PockeySettings.PLAYER_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_STICK_SKIN, [PockeySettings.PLAYER_CUE_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeySettings.PLAYER_DECAL_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeySettings.POOLTABLE_FELT_ID]);

                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [PockeySettings.OPPONENT_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [PockeySettings.OPPONENT_NICKNAME]);

                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);

                /**/
            }

            private resetPooltable():void
            {
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_POOLTABLE);
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_GAME_SCREEN);
            }

            private prepareSecondRound(): void {

                console.log("intra la prepareSecondRound");
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);
                PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundTwo);

                this.screenPopupTime = 0;
                this.popupRemoved = false;
                // console.log("prepare second round entered")
                // this.onRoundFinished();

                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.player.score = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.opponent.score = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                TweenMax.delayedCall(1, this.resetPooltable.bind(this));
                // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);
                // this.secondAndThirdRoundsTimers.restart();

                let orderArray: BallType[] = [];

                if (this.player.startedFirst) {
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                    }
                    this.opponent.side = "left";
                    this.player.side = "right";
                    this.setCurrentPlayer(this.opponent);
                    orderArray = [this.opponent.type, this.player.type];
                }
                else {

                    this.opponent.side = "right";
                    this.player.side = "left";
                    this.setCurrentPlayer(this.player);
                    orderArray = [this.player.type, this.opponent.type];
                    if (!Settings.singlePlayer) {
                        PIXI.ticker.shared.add(this.createState, this);
                        this.roundTimer = new CountdownTimer("roundTimer", 5, this.onRoundScreenTimerUpdate.bind(this));
                        this.roundTimer.restart();
                        this.onRoundScreenTimerUpdate();
                        /*PIXI.ticker.shared.add(this.createState, this);

                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);*/
                    }
                }

                // SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);

                if (Settings.singlePlayer) {
                    this.beginPlay();
                    // PockeyStateMachine.Instance().changeState(PockeyStates.onStartVersusGame);
                }

                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, orderArray);
                // this.player.side = "left";
                // this.opponent.side = "right";
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [PockeySettings.PLAYER_AVATAR_ID]);

                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [PockeySettings.OPPONENT_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [PockeySettings.OPPONENT_AVATAR_ID]);
                /* if (this.player.score <= 0) {

                     this.winStatus = WinStatus.LOST;
                     this.opponent.matchesWon++;
                     this.gameFinished = true;
                     console.log("la ball in pocket: " + this.winStatus);
                 }
                 else if (this.opponent.score <= 0) {

                     this.winStatus = WinStatus.WIN;
                     this.player.matchesWon++;
                     this.gameFinished = true;

                 }
                 this.availableForRestart = true;*/
                //show round two starts
                // this.secondAndThirdRoundsTimers.restart();
                //
            }

            /*private prepareThirdRound(): void {

            }*/

            private InitializeOthers() {
                this.player = new Player("player", BallType.Player);
                this.opponent = new Player("opponent", BallType.Opponent);

                this.timer = new CountdownTimer("gameTime", PockeySettings.ROUND_DURATION_IN_SECONDS, this.onCounterUpdate.bind(this));
                this.roundTimer = new CountdownTimer("roundTimer", 3, this.onRoundScreenTimerUpdate.bind(this));
                // this.secondAndThirdRoundsTimers = new CountdownTimer("secondAndThirdRoundsTimers", 5, this.onSecondAndThirdRoundsTimerUpdate.bind(this));

                this.myTimeStates = [];
                this.opponentGameStates = [];
            }

            private onRoundScreenTimerUpdate(): void {
                // this.timerText = this.roundTimer.currentTime.toString();
                if (this.roundTimer.currentTime > 0) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, [this.roundTimer.currentTime.toString()]);
                }
                // console.log("timeru on update: " + this.roundTimer.currentTime);

                if (this.roundTimer.complete) {
                    this.timer.restart();
                    this.onCounterUpdate();

                    // asta trebuie mutat la inceput in this.prepareFirstRound()


                    //aici punem timer si ascundem partner found
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
                    // SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);

                    this.beginPlay();

                }

                this.popupRemovedSent = false;
            }

            // private onSecondAndThirdRoundsTimerUpdate(): void {
            //     if (this.roundTimer.currentTime > 0) {
            //         SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, [this.roundTimer.currentTime.toString()]);
            //     }
            //
            //     if (this.roundTimer.complete) {
            //         this.timer.restart();
            //         this.onCounterUpdate();
            //
            //         // asta trebuie mutat la inceput in this.prepareFirstRound()
            //
            //
            //         //aici punem timer si ascundem partner found
            //         SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
            //
            //         this.beginPlay();
            //     }
            //
            //     this.popupRemovedSent = false;
            // }

            private registerSignalsHandlers() {

                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, GameManager.Instance().onAllModuleElementsCreated.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, GameManager.Instance().onWhiteBallRepositioned.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.FIRST_BALL_FAULT, this.onFirstBallFault.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PREPARE_NEXT_TURN, this.prepareNextTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));

                // SignalsManager.AddSignalCallback(PockeySignalTypes.PUCK_IN_POCKET, this.onBallInPocket.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, this.onSendElementsDataToManager.bind(this));

                SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, this.onSocketIOConnectionCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESTART_GAME, this.onRestartGame.bind(this));

                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.YOUR_TURN, this.onMyTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_SETTINGS, this.onOpponentSettings.bind(this));
                // SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_RESTART_GAME, this.onOpponentRestart.bind(this));
                // SignalsManager.AddSignalCallback(PockeyConnectionSignals.SCORE_UPDATE, this.onScoreUpdate.bind(this));
                // SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT, this.onSetOpponent.bind(this));
            }


            private onCounterUpdate(): void {
                let counterText: string = "0:";
                let counter: number = this.timer.currentTime;
                counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                this.timerText = counterText;
                // this.animateOpponentTimer = false;

                this.animateOpponentTimer = false;

                if (counter <= 5) {
                    if (counter == 5) {
                        SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.LAST_FIVE_SECONDS}]);

                    }

                    this.animateOpponentTimer = true;
                }

                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, this.animateOpponentTimer]);
                // this.animateOpponentTimer = animateTimerText;
                // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, this.animateOpponentTimer]);
                if (this.timer.complete) {


                    // The code here will run when
                    // the timer has reached zero.
                    // this.stopCountdown();
                    // this.countdownEnded = true;
                    this.stopCountdown();
                    this.countdownEnded = true;
                    this.prepareNextTurn();
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESET_STICK_POWER);

                    // this.ballsHit = 0;
                    // this.onNextTurn();
                }
            }

            /* private startCountdown(seconds) {
                 let counter = seconds;


                 // console.log('counter intra la start countdown');
                 let counterText: string = "0:";

                 // if(counter == PockeySettings.ROUND_DURATION_IN_SECONDS)
                 // {
                 counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();

                 SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, false]);
                 // }
                 this.roundTimer = setInterval(() => {
                     counterText = "0:";

                     // console.log("counter : " + counter);

                     counter--;
                     counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                     this.timerText = counterText;
                     // let animateTimerText: boolean = true;

                     if (counter <= 5) {
                         if(counter == 5)
                         {
                             SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName:PockeySoundURLS.LAST_FIVE_SECONDS}]);

                         }
                         this.animateOpponentTimer = true;
                     }

                     // this.animateOpponentTimer = animateTimerText;
                     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, this.animateOpponentTimer]);
                     if (counter < 0) {

                         // The code here will run when
                         // the timer has reached zero.
                         this.stopCountdown();
                         this.countdownEnded = true;
                         SignalsManager.DispatchSignal(PockeySignalTypes.RESET_STICK_POWER);

                         // this.ballsHit = 0;
                         // this.onNextTurn();
                     }

                 }, 1000);
             };*/

            private stopCountdown(): void {

                this.timerText = "";
                this.animateOpponentTimer = false;
                this.timer.stop();
                this.timer.reset();
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["", this.currentPlayer.type, false]);
                // console.log('Ding!');
            }

            private onMyTurn(params: any[]): void {
                // this.noBallsHitOnWatch = false;
                // this.currentPlayer = this.player;
                this.changePlayer();

                let state: PockeyStates = params[0] as PockeyStates;
                // console.log("currentSTate: " + PockeyStateMachine.Instance().getCurrentStateName());
                // console.log("new state: " + state);
                if (state == PockeyStates.onRearrangeStick) {

                    // if (params[1]) {
                    //     let balls
                    // }

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);

                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PIXI.ticker.shared.add(this.createState, this);
                    this.timer.restart();
                    this.onCounterUpdate();

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                }
                else if (state == PockeyStates.onRepositionWhiteBall) {

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);

                    // SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PIXI.ticker.shared.add(this.createState, this);
                    this.timer.restart();
                    this.onCounterUpdate();

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                    if (Settings.isMobile) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                    }
                }
                else if (state == PockeyStates.onRoundEnd) {

                    PockeyStateMachine.Instance().changeState(state);
                    this.prepareSecondRound();

                    return;
                }

                PockeyStateMachine.Instance().changeState(state);


                // if(this.whiteBallPenalty)
                // {
                //
                // }
                // else if(this.ballsHit)
                // {
                //
                // }
            }


            private memorySizeOf(obj) {
                let bytes = 0;

                function sizeOf(obj) {
                    if (obj !== null && obj !== undefined) {
                        switch (typeof obj) {
                            case 'number':
                                bytes += 8;
                                break;
                            case 'string':
                                bytes += obj.length * 2;
                                break;
                            case 'boolean':
                                bytes += 4;
                                break;
                            case 'object':
                                let objClass = Object.prototype.toString.call(obj).slice(8, -1);
                                if (objClass === 'Object' || objClass === 'Array') {
                                    for (let key in obj) {
                                        if (!obj.hasOwnProperty(key)) continue;
                                        sizeOf(obj[key]);
                                    }
                                } else bytes += obj.toString().length * 2;
                                break;
                        }
                    }
                    return bytes;
                }

                function formatByteSize(bytes) {
                    if (bytes < 1024) return bytes + " bytes";
                    else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KiB";
                    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MiB";
                    else return (bytes / 1073741824).toFixed(3) + " GiB";
                }

                return formatByteSize(sizeOf(obj));
            };

            private onRestartGame(): void {

                /*   if (Settings.singlePlayer)
                       this.switchSides();
                   else {
                       this.availableForRestart = true;
                       this.switchSides();
                       SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART_ROUND]);

                       // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART]);
                   }*/

            }

            // private onOpponentRestart(): void {
            //     if (this.availableForRestart) {
            //
            //         console.log("Intra la switch sides");
            //         this.switchSides();
            //     }
            //     else {
            //         console.log("nu intra la switch sides");
            //     }
            //
            //     console.log("primesc invitatie switch sides: ");
            // }

            // private switchSides(): void {
            //     console.log("se face switch");
            //
            //
            // }

            private onStartGame(): void {
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, 1]);
                //@ts-ignore
                // console.log("aicisha: " + AbstractEntryPoint.scene.meshes);
                //@ts-ignore

                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_MAIN_MENU);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);

                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_POOLTABLE);

                if (Settings.singlePlayer) {

                    this.setCurrentPlayer(this.player);
                    this.beginPlay();
                    // PockeyStateMachine.Instance().changeState(PockeyStates.onStartVersusGame);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
                    this.player.side = "left";
                    this.opponent.side = "right";
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+PockeySettings.PLAYER_COLOR_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [PockeySettings.OPPONENT_COLOR]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [PockeySettings.PLAYER_NICKNAME]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [PockeySettings.OPPONENT_NICKNAME]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [PockeySettings.PLAYER_AVATAR_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [PockeySettings.OPPONENT_AVATAR_ID]);

                }
                else {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
                }

            }

            private createState(): void {
                // console.log("se trimite");
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onPrepareRoundOne) {
                    this.onPooltableStateCreated(null);
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onPrepareRoundTwo) {
                    this.onPooltableStateCreated(null);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.CREATE_POOLTABLE_STATE, [this.onPooltableStateCreated.bind(this)]);
                }
            }

            private onPooltableStateCreated(timeState: TimeState): void {
                // console.log("on pooltable state created");
                this.gameTimeStatesIdentifier++;
                let gameState: GameState = {};

                gameState.stateID = this.gameTimeStatesIdentifier;
                gameState.stateTime = Math.round(PIXI.ticker.shared.elapsedMS / 1000);

                if (!_.isNull(timeState)) {
                    gameState.pooltableState = timeState;
                }
                gameState.timerText = this.timerText;
                gameState.timerTextAnimate = this.animateOpponentTimer;

                gameState.playerScore = this.player.score;
                gameState.opponentScore = this.opponent.score;
                gameState.whiteBallPenalty = this.whiteBallPenalty;
                gameState.ballsHit = this.ballsHit;

                if (!this.roundTimer.complete && this.screenPopupTime != this.roundTimer.currentTime) {
                    // console.log("se inregistreaza timeru " + this.roundTimer.currentTime);
                    this.screenPopupTime = this.roundTimer.currentTime;
                    gameState.opponentScreenTimer = this.roundTimer.currentTime;
                }
                // else
                // {
                //     console.log("nu se inregistreaza timeru " + this.roundTimer.currentTime);
                //
                // }

                // if (!this.roundTimer.complete && !this.secondAndThirdRoundsTimers.complete && this.screenPopupTime != this.secondAndThirdRoundsTimers.currentTime) {
                //     // console.log("se inregistreaza timeru " + this.roundTimer.currentTime);
                //     this.screenPopupTime = this.secondAndThirdRoundsTimers.currentTime;
                //     gameState.opponentScreenTimer = this.secondAndThirdRoundsTimers.currentTime;
                // }

                if (this.popupRemoved && !this.popupRemovedSent) {
                    gameState.popupRemoved = true;
                    this.popupRemovedSent = true;
                    // console.log("aici se inregistreaza");
                }

                this.myTimeStates.push(gameState);

                if (this.myTimeStates.length == PockeySettings.FRAMES_TO_SEND_ON_WATCH) {
                    if (this.readyForNextTurn) {
                        // console.log("se face remove");
                        this.onNextTurn(gameState);
                        this.readyForNextTurn = false;
                    }

                    let msg: string = JSON.stringify({gameStates: this.myTimeStates});

                    // if(PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall)

                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.WATCH, msg]);

                    //send states
                    this.myTimeStates = [];
                }

                // console.log("game time states length: " + this.myTimeStates.length);
            }

            private prepareNextTurn(): void {
                this.readyForNextTurn = true;
                this.stopCountdown();

                if (Settings.singlePlayer) {
                    this.onNextTurn(null);
                }
            }

            private applyGameState(): void {
                // console.log("opponentGameStates length: " + this.opponentGameStates.length);

                if (this.opponentGameStates.length == 0) {
                    return;
                }
                let gameState: GameState = this.opponentGameStates[0];

                if (this.timerText != gameState.timerText || this.animateOpponentTimer != gameState.timerTextAnimate) {
                    this.timerText = gameState.timerText;
                    this.animateOpponentTimer = gameState.timerTextAnimate;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [gameState.timerText, this.currentPlayer.type, gameState.timerTextAnimate]);
                }

                this.whiteBallPenalty = gameState.whiteBallPenalty;
                this.ballsHit = gameState.ballsHit;

                if (this.player.score != gameState.opponentScore) {
                    this.player.score = gameState.opponentScore;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE, [this.player.score]);
                }

                if (this.opponent.score != gameState.playerScore) {
                    this.opponent.score = gameState.playerScore;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE, [this.opponent.score]);
                }

                if (gameState.opponentScreenTimer) {
                    // console.log("se primeste timeru" + gameState.opponentScreenTimer);
                    // if (+gameState.opponentScreenTimer > 0) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, [gameState.opponentScreenTimer]);
                    // }
                    // this.roundTimer.currentTime
                }

                if (gameState.popupRemoved) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
                    // console.log("de aicisha intra");
                    this.popupRemoved = true;
                }

                if (gameState.pooltableState) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.APPLY_POOLTABLE_STATE, [gameState.pooltableState, (gameState.stateTime)]);
                }


                if (gameState.changeMyState) {
                    PIXI.ticker.shared.remove(this.applyGameState, this);
                    this.timeStatesTimerActive = false;
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);
                    this.onMyTurn(gameState.changeMyState);
                }

                this.opponentGameStates.shift();
            }

            private onWatch(params: any[]): void {

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {


                    // console.log("gm, sunt eu, clientul in plm: ");
                    let msg: string = params[0];

                    let gameStates: GameState[] = JSON.parse(msg).gameStates;

                    // console.log("game states: tada? " + gameStates);

                    _.forEach(gameStates, (gameState: GameState) => {
                        this.opponentGameStates.push(gameState);
                    });

                    if (!this.timeStatesTimerActive && this.opponentGameStates.length >= PockeySettings.FRAMES_TO_SEND_ON_WATCH * 2) {
                        this.timeStatesTimerActive = true;
                        PIXI.ticker.shared.add(this.applyGameState, this);
                        // console.log("se adauaga o data");
                    }
                    // this.opponentTimeStates.shift();

                    // this.timerText = poolTableData.opponentTimerText;
                    // this.animateOpponentTimer = poolTableData.opponentTimerAnimate;
// if()
//                     console.log("this.timerText: " + poolTableData.opponentTimerText);

                    /* SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [poolTableData.opponentTimerText, this.currentPlayer.type, poolTableData.opponentTimerAnimate]);

                     //salam
                     this.whiteBallPenalty = poolTableData.whiteBallPenalty;
                     this.ballsHit = poolTableData.ballsHit;

                     if (this.player.score != poolTableData.opponentScore) {
                         this.player.score = poolTableData.opponentScore;
                         SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE, [this.player.score]);
                     }

                     if (this.opponent.score != poolTableData.playerScore) {
                         this.opponent.score = poolTableData.playerScore;
                         SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE, [this.opponent.score]);
                     }*/
                }
            }

            private onBallInPocket(params: any[]): void {
                if (!this.gameFinished) {
                    let ballType: BallType = params[0] as BallType;
                    console.log("ballType in pocket: " + ballType);
                    if (ballType == BallType.White) {
                        this.whiteBallPenalty = true;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);

                        console.log("%c GameManager -> White ball PENALTY for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    }
                    else if (ballType == BallType.Puck) {
                        this.ballsHit++;
                        // this.whiteBallPenalty = true;
                        let goalType: BallType = params[1];
                        if (goalType == this.player.type) {
                            this.player.score -= 2;
                        }
                        else if (goalType == this.opponent.type) {
                            this.opponent.score -= 2;
                        }

                        if (goalType != this.currentPlayer.type) {
                            console.log("aici se face update ce plm");
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onPuckGoal]);
                        }
                        // console.log("intra la puck gol");
                        // if (params[1] == this.currentPlayer.type) {
                        //     this.currentPlayer.score -= 2;
                        // }
                        // else {
                        //     this.currentPlayer.score -= 2;
                        // }
                    }
                    else if (ballType == this.currentPlayer.type) {
                        this.ballsHit++;
                        this.currentPlayer.score--;
                        this.ownBallInPocketFault = true;
                        if (!this.whiteBallPenalty)
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOwnBallInPocket]);
                        // if(this.currentPlayer == this.player)
                        // {
                        //     this.playerScore--;
                        // }
                        // else
                        // {
                        //
                        // }
                        /*this.whiteBallPenalty = true;
                        */
                    }
                    else if (ballType != this.currentPlayer.type) {
                        this.ballsHit++;
                        if (this.currentPlayer == this.player) {
                            this.opponent.score--;
                        }
                        else {
                            this.player.score--;

                        }
                        // this.whiteBallPenalty = true;
                        /*this.ballsHit++;
                        this.opponentScore--;*/
                    }
                    console.log("ball in the pocket!!! type: " + params);
                    console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE, [this.player.score]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE, [this.opponent.score]);

                    if (this.player.score <= 0) {

                        // PockeyStateMachine.Instance().changeState(PockeyStates.onRoundEnd);
                        this.winStatus = WinStatus.LOST;
                        this.opponent.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);


                    }
                    else if (this.opponent.score <= 0) {
                        // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you lost!"]);
                        // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);

                        this.winStatus = WinStatus.WIN;
                        this.player.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);

                        // PockeyStateMachine.Instance().changeState(PockeyStates.onRoundEnd);

                    }
                }
            }

            private onAllModuleElementsCreated(): void {
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
                //@ts-ignore
                _.forEach(AbstractEntryPoint.scene.meshes, (mesh: any) => {
                    mesh.setEnabled(false);
                });
            }

            private onSocketIOConnectionCreated(params: any[]): void {
                console.log("%c GameManager -> socket io connection created", "color: #00bcd4");
                this.player.id = params[0];
                PockeySettings.PLAYER_SOCKET_ID = this.player.id;
                this.opponent.id = params[1];
                PockeySettings.OPPONENT_SOCKET_ID = this.opponent.id;

                let connectionID: string = params[2];
                if (_.startsWith(connectionID, this.player.id)) {
                    this.currentPlayer = this.player;

                    //aiciavemplayersettings////////////////

                    let playerSettings: PlayerSettings = {
                        opponentAvatarId: PockeySettings.PLAYER_AVATAR_ID,
                        opponentNickname: PockeySettings.PLAYER_NICKNAME,
                        opponentSocketId: PockeySettings.PLAYER_SOCKET_ID,
                        opponentColor: +PockeySettings.PLAYER_COLOR_ID
                    };
                    console.log("opponent avatar socket connection created: " + PockeySettings.PLAYER_AVATAR_ID);
                    console.log(playerSettings);
                    /////////////////////////

                    playerSettings.firstToStart = this.player.id;
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                }
            }


            private onOpponentSettings(params: any[]): void {


                let opponentSettings: PlayerSettings = params[0] as PlayerSettings;
                PockeySettings.OPPONENT_COLOR = opponentSettings.opponentColor;
                PockeySettings.OPPONENT_SOCKET_ID = opponentSettings.opponentSocketId;
                PockeySettings.OPPONENT_NICKNAME = opponentSettings.opponentNickname;
                PockeySettings.OPPONENT_AVATAR_ID = opponentSettings.opponentAvatarId;

                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [PockeySettings.OPPONENT_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME);

                if (opponentSettings.firstToStart == this.player.id) {
                    this.player.startedFirst = true;
                }
                console.log("opponent avatar la opponent settings: " + PockeySettings.OPPONENT_AVATAR_ID);

                this.prepareFirstRound();


            }

            // private on

            private onShoot(): void {
                // this.selectPlayer();
                this.whiteBallPenalty = false;

                this.stopCountdown();
                PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);

            }

            private onWhiteBallRepositioned(): void {
                // this.selectPlayer();
                console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");

                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

            }

            // private onMatchFinised(): void {
            //
            // }

           /* private onRoundFinished(): void {
                if (this.winStatus == WinStatus.WIN) {
                    // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you won!"]);
                    // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);
                    // this.secondAndThirdRoundsTimers.restart();
                } else {
                    // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you lost!"]);

                }

                // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);

                /!* if (this.player.side == "left") {
                     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES,
                         [this.player.matchesWon, this.opponent.matchesWon]);
                 }
                 else {
                     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES,
                         [this.opponent.matchesWon, this.player.matchesWon]);
                 }*!/

            }*/

            private onNextTurn(gameState: GameState): void {
                console.log("onNextTurn: intra");
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);

                if (this.countdownEnded) {

                    this.countdownEnded = false;
                    this.changePlayer();

                    console.log("onNextTurn: intra la countdown");
                    // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStateMachine.Instance().fsm.currentState]);
                    if (gameState) {
                        PIXI.ticker.shared.remove(this.createState, this);
                        gameState.changeMyState = [PockeyStateMachine.Instance().fsm.currentState];
                    }
                    // let currentTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                    // SignalsManager.DispatchSignal(PockeySignalTypes.SET_TIMESTAMP_ON_WATCH, [currentTime]);

                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);

                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onTimeUp]);
                    return;
                }
                // this.selectPlayer();
                if (this.gameFinished) {
                    console.log("onNextTurn: intra la gamefinished");

                    PockeyStateMachine.Instance().changeState(PockeyStates.onRoundEnd);
                    // let opponentStatus:WinStatus = (this.winStatus == WinStatus.WIN)? WinStatus.LOST : WinStatus.WIN;
                    console.log("la next turn: " + this.winStatus);
                    if (gameState) {
                        PIXI.ticker.shared.remove(this.createState, this);
                        gameState.changeMyState = [PockeyStates.onRoundEnd, this.winStatus]
                    }

                    this.prepareSecondRound();

                    return;
                }
                else {
                    console.log("onNextTurn: intra la onEndTurn");

                    // console.log("inainte de on end turn");
                    PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
                    // console.log("dupa de on end turn");

                }

                console.log("%c GameManager -> Checking for next turn...", "color: #00bcd4");

                if (this.whiteBallPenalty) {
                    console.log("onNextTurn: intra la whiteBallPenalty");

                    console.log("%c GameManager -> PENALTY! Round ended for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    // this.onWhiteBallInTheHole();

                    this.changePlayer();

                    if (!Settings.singlePlayer) {

                        // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRepositionWhiteBall]);

                        gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                        PIXI.ticker.shared.remove(this.createState, this);

                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.whiteBallFault]);
                        let currentTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                        SignalsManager.DispatchSignal(PockeySignalTypes.SET_TIMESTAMP_ON_WATCH, [currentTime]);

                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);

                        // if (Settings.isMobile) {
                        //     SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                        // }
                    }
                    else {

                        PockeyStateMachine.Instance().changeState(PockeyStates.onRepositionWhiteBall);
                        if (Settings.isMobile) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                        }
                    }

                    // PockeyStateMachine.Instance().changeState(PockeyStates.onRepositionWhiteBall);

                    //     SignalsManager.DispatchSignal(PockeySignalTypes.REPOSITION_WHITE_BALL);
                }
                else if (this.ownBallInPocketFault) {
                    console.log("onNextTurn: ownBallInPocketFault");

                    console.log("%c GameManager -> Fault! Own ball in pocket! " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    this.ownBallInPocketFault = false;
                    if (!Settings.singlePlayer) {
                        let currentTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                        SignalsManager.DispatchSignal(PockeySignalTypes.SET_TIMESTAMP_ON_WATCH, [currentTime]);

                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        gameState.changeMyState = [PockeyStates.onRearrangeStick];
                        PIXI.ticker.shared.remove(this.createState, this);
                        // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onOwnBallInPocket]);

                        // this.noBallsHitOnWatch = true;

                        // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.noBallScored]);
                        // this.whiteBall

                    }
                    else {
                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                    }
                }
                else {
                    if (this.ballsHit == 0) {
                        console.log("onNextTurn: balls hit 0");

                        console.log("%c GameManager -> No balls hit for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                        this.changePlayer();

                        if (!Settings.singlePlayer) {
                            let currentTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                            SignalsManager.DispatchSignal(PockeySignalTypes.SET_TIMESTAMP_ON_WATCH, [currentTime]);

                            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                            // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
                            gameState.changeMyState = [PockeyStates.onRearrangeStick];
                            PIXI.ticker.shared.remove(this.createState, this);
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.noBallScored]);
                            // this.noBallsHitOnWatch = true;

                            // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.noBallScored]);
                            // this.whiteBall

                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

                            PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                        }
                        return;
                    }
                    else {
                        this.ballsHit = 0;
                    }

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                    // this.timer.restart();
                    console.log("onNextTurn: ajunge in capat");

                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);

                }
                // if()
                console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);


            }

            // private onWhiteBallInTheHole(): void {
            //     this.whiteBallPenalty = true;
            //     // this.changePlayer();
            //     // SignalsManager.DispatchSignal(PockeySignalTypes.REPOSITION_WHITE_BALL);
            // }

            private setCurrentPlayer(player: Player): void {
                // let playersArray: Player[] = [this.player, this.opponent];
                // let rand: number = Math.round(Math.random() * 1);
                // if (this.currentPlayer == this.opponent)
                //     this.currentPlayer = this.player;
                // else
                this.currentPlayer = player;

                // console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                console.log("%c GameManager -> Current player is: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");

                // GameManager.Instance().beginPlay();

            }

            private changePlayer(): void {
                // let playersArray: Player[] = [this.player, this.opponent];
                // let rand: number = Math.round(Math.random() * 1);
                /*   if (Settings.singlePlayer) {
                       this.currentPlayer = this.player;
                   }
                   else {*/
                if (this.currentPlayer == this.opponent)
                    this.currentPlayer = this.player;
                else
                    this.currentPlayer = this.opponent;
                // }


                // console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");

                // GameManager.Instance().beginPlay();

            }

            /* private selectPlayer(): void {
                 let playersArray: Player[] = [this.player, this.opponent];
                 let rand: number = Math.round(Math.random());
                 this.currentPlayer = playersArray[rand];

                 // console.log("%c GameManager -> Selected player: " + this.currentPlayer.id, "color: #00bcd4");
                 console.log("%c GameManager -> Selected player: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");


                 GameManager.Instance().beginPlay();
             }*/

            private onFirstBallFault(): void {
                // console.log("ball repos started");
                this.whiteBallPenalty = true;
                console.log("%c GameManager -> First ball fault!", "color: #00bcd4");

                // let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                // this.poolTable.ballPositionCircle.x = localPoint.x;
                // this.poolTable.ballPositionCircle.y = localPoint.y;
                // this.lastGoodRepositionPoint = new Vector2();
                // this.repositionEnabled = true;
            }

            private beginPlay(): void {

                this.popupRemoved = true;

                /*  this.onRestartGame();*/
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);

                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                // PockeyStateMachine.Instance().changeState(PockeyStates.onStartVersusGame);
                // this.printFsmCurrentState();
            }


        }
    }
}


