///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../StateMachine/pockey-state-machine.ts"/>
///<reference path="balls/abstract-ball.ts"/>
///<reference path="player.ts"/>
///<reference path="../../../Framework/Signals/signal-types.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
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

        export interface PlayerSettings {
            opponentName?: string,
            opponentColor?: number,
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
            private timer: NodeJS.Timer;
            private roundTimer: any;
            private timerText: string = "";
            private animateOpponentTimer: boolean = false;
            private countdownEnded: boolean = false;
            // private noBallsHitOnWatch: boolean = false;

            // private lastBallsAdded
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

            private InitializeOthers() {
                this.player = new Player("player", BallType.Player);
                this.opponent = new Player("opponent", BallType.Opponent);

                // this.timer = global.setTimeout(this.startCountdown, 1000);

            }

            private registerSignalsHandlers() {

                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, GameManager.Instance().onAllModuleElementsCreated.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, GameManager.Instance().onWhiteBallRepositioned.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.FIRST_BALL_FAULT, this.onFirstBallFault.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.NEXT_TURN, this.onNextTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));

                // SignalsManager.AddSignalCallback(PockeySignalTypes.PUCK_IN_POCKET, this.onBallInPocket.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, this.onSendElementsDataToManager.bind(this));

                SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, this.onSocketIOConnectionCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESTART_GAME, this.onRestartGame.bind(this));

                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.YOUR_TURN, this.onMyTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_SETTINGS, this.onOpponentSettings.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_RESTART_GAME, this.onOpponentRestart.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.SCORE_UPDATE, this.onScoreUpdate.bind(this));
                // SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT, this.onSetOpponent.bind(this));
            }

            private startCountdown(seconds) {
                let counter = seconds;


                // console.log('counter intra la start countdown');
                let counterText: string = "0:";

                // if(counter == PockeySettings.ROUND_DURATION_IN_SECONDS)
                // {
                counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                this.timerText = counterText;
                this.animateOpponentTimer = false;
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
            };

            private stopCountdown(): void {
                clearInterval(this.roundTimer);

                this.timerText = "";
                // console.log("timerText stopcountdown: " + this.timerText);
                this.animateOpponentTimer = false;

                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["", this.currentPlayer.type, false]);
                console.log('Ding!');
            }

            private onMyTurn(params: any[]): void {
                // this.noBallsHitOnWatch = false;
                // this.currentPlayer = this.player;
                this.changePlayer();
                let state: PockeyStates = params[0] as PockeyStates;
                console.log("currentSTate: " + PockeyStateMachine.Instance().getCurrentStateName());
                console.log("new state: " + state);
                if (state == PockeyStates.onRearrangeStick) {

                    if (params[1]) {
                        let balls
                    }
                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);

                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                }
                else if (state == PockeyStates.onRepositionWhiteBall) {

                    // this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);

                    // SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                    if (Settings.isMobile) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                    }
                }
                else if (state == PockeyStates.onGameEnd) {

                    if (this.player.score <= 0) {

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

                    this.onGameFinished();

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

            private onSendElementsDataToManager(params: any[]): void {
                let poolTableData: PoolTableData = params[0] as PoolTableData;

                poolTableData.playerScore = this.player.score;
                poolTableData.opponentScore = this.opponent.score;
                poolTableData.whiteBallPenalty = this.whiteBallPenalty;
                poolTableData.ballsHit = this.ballsHit;
                poolTableData.opponentState = PockeyStateMachine.Instance().fsm.currentState;

                poolTableData.opponentTimerText = this.timerText;
                // console.log("timerText la send column: " + this.timerText);

                poolTableData.opponentTimerAnimate = this.animateOpponentTimer;
                if (this.countdownEnded) {
                    poolTableData.opponentTimeFinished = true;
                    console.log("time ended sent");
                }

                SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.WATCH, poolTableData]);

                if (this.countdownEnded) {
                    this.onNextTurn();
                }
            }

            private onRestartGame(): void {

                if (Settings.singlePlayer)
                    this.switchSides();
                else {
                    this.availableForRestart = true;
                    this.switchSides();
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART_GAME]);
                    // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART]);
                }

            }

            private onOpponentRestart(): void {
                if (this.availableForRestart) {
                    this.switchSides();
                }
            }

            private switchSides(): void {
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.player.score = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.opponent.score = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_POOLTABLE);
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_GAME_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WINNING_SCREEN);

                let orderArray: BallType[] = [];

                if (this.player.side == "left") {
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
                    if (!Settings.singlePlayer) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                    }
                    this.opponent.side = "right";
                    this.player.side = "left";
                    this.setCurrentPlayer(this.player);
                    orderArray = [this.player.type, this.opponent.type];
                }

                if (Settings.singlePlayer) {
                    this.beginPlay();
                    // PockeyStateMachine.Instance().changeState(PockeyStates.onStartVersusGame);

                }

                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, orderArray);
                // this.player.side = "left";
                // this.opponent.side = "right";
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);

            }

            private onStartGame(): void {
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, 0.4]);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_MAIN_MENU);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);
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
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);

                }
                else {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
                }

            }

            private onWatch(params: any[]): void {

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {

                    // console.log("gm, sunt eu, clientul in plm: ");
                    let poolTableData: PoolTableData = params[0] as PoolTableData;

                    // this.timerText = poolTableData.opponentTimerText;
                    // this.animateOpponentTimer = poolTableData.opponentTimerAnimate;
// if()
//                     console.log("this.timerText: " + poolTableData.opponentTimerText);

                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [poolTableData.opponentTimerText, this.currentPlayer.type, poolTableData.opponentTimerAnimate]);

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
                    }
                }
            }

            private onScoreUpdate(params: any[]): void {
                // if (PockeyStateMachine.Instance().fsm.currentState != PockeyStates.onWatch)
                // {
                //     PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                //     this.printFsmCurrentState();
                // }
                console.log("on score update");
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

                        // PockeyStateMachine.Instance().changeState(PockeyStates.onGameEnd);
                        this.winStatus = WinStatus.LOST;
                        this.opponent.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);


                    }
                    else if (this.opponent.score <= 0) {
                        // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you lost!"]);
                        // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);

                        this.winStatus = WinStatus.WIN;
                        this.player.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);

                        // PockeyStateMachine.Instance().changeState(PockeyStates.onGameEnd);

                    }
                }
            }

            private onAllModuleElementsCreated(): void {
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
            }

            private onSocketIOConnectionCreated(params: any[]): void {
                console.log("%c GameManager -> socket io connection created", "color: #00bcd4");
                this.player.id = params[0];
                PockeySettings.PLAYER_SOCKET_ID = this.player.id;
                this.opponent.id = params[1];
                PockeySettings.OPPONENT_SOCKET_ID = this.opponent.id;

                let connectionID: string = params[2];
                if (connectionID.startsWith(this.player.id)) {
                    this.currentPlayer = this.player;

                    let playerSettings: PlayerSettings = {
                        opponentName: PockeySettings.PLAYER_NICKNAME,
                        opponentColor: +PockeySettings.PLAYER_COLOR_ID
                    };
                    playerSettings.firstToStart = this.player.id;
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                    // this.beginPlay();
                }
                /**/
                // else {
                //     playerSettings.firstToStart = this.opponent.id;
                // }

                // console.log("on disptach settings: " + playerSettings);
                /*
*/
                // SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [playerSettings]);

                // else {
                //     this.currentPlayer = this.opponent;
                //     // this.onWatch(null);
                // }


                // let poolTableData: PoolTableData = {
                //     /*playerName:string,
                //     playerSocketID:any,
                //     playerColor:number,
                //     poolstickPivotX: number,`
                //     poolstickRotation: number,
                //     poolstickPositionX: number,
                //     poolstickPositionY: number*/
                // };

                // PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                // this.selectPlayer();
                // this.printFsmCurrentState();
                /*this.player.color = PockeySettings.PLAYER_COLOR;
                this.player.id = params[0];
                this.opponent.color = PockeySettings.OPPONENT_COLOR;
                this.opponent.id = params;
                */
            }


            private onOpponentSettings(params: any[]): void {

                console.log(("%c culorilefmm: my color id " + PockeySettings.PLAYER_COLOR_ID + ", " + +PockeySettings.PLAYER_COLOR_ID), "color:black; background:" + PockeySettings.PLAYER_COLOR_ID.replace("0x", "#"));

                console.log("culorilefmm: opponent color la enter " + PockeySettings.OPPONENT_COLOR);

                let opponentSettings: PlayerSettings = params[0] as PlayerSettings;
                PockeySettings.OPPONENT_COLOR = opponentSettings.opponentColor;
                console.log("culorilefmm: opponent color la dupa " + PockeySettings.OPPONENT_COLOR);

                if (opponentSettings.firstToStart == this.player.id) {
                    this.setCurrentPlayer(this.player);

                    // console.log("on opponent settings on player: " + +PockeySettings.PLAYER_COLOR_ID, PockeySettings.OPPONENT_COLOR, opponentSettings.opponentColor);
                    console.log("culorilefmm: la player " + PockeySettings.OPPONENT_COLOR, +PockeySettings.PLAYER_COLOR_ID);

                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
                    this.player.side = "left";
                    this.opponent.side = "right";

                    this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
                    this.beginPlay();
                }
                else {

                    this.setCurrentPlayer(this.opponent);

                    // console.log("on opponent settings on opponent: " + +PockeySettings.PLAYER_COLOR_ID, PockeySettings.OPPONENT_COLOR);

                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.opponent.type, this.player.type]);
                    this.player.side = "right";
                    this.opponent.side = "left";

                    console.log("culorilefmm: la opp " + PockeySettings.OPPONENT_COLOR, +PockeySettings.PLAYER_COLOR_ID);

                    if (PockeySettings.OPPONENT_COLOR == +PockeySettings.PLAYER_COLOR_ID) {

                        console.log("culorilefmm: sunt la fel in plm ");

                        let randNumber: number = Math.round(Math.random() * (PockeySettings.LARGE_COLORS_ARRAY.length - 1));
                        PockeySettings.OPPONENT_COLOR = parseInt("0x" + PockeySettings.LARGE_COLORS_ARRAY[randNumber].color);

                    }

                    let playerSettings: PlayerSettings = {
                        opponentName: PockeySettings.PLAYER_NICKNAME,
                        opponentColor: +PockeySettings.PLAYER_COLOR_ID,
                        firstToStart: this.opponent.id
                    };

                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);

                    // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["0:" + PockeySettings.ROUND_DURATION_IN_SECONDS, this.currentPlayer.type, false]);

                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);

                }

                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);

                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);
                /**/

            }

            // private on

            private onShoot(): void {
                // this.selectPlayer();
                this.whiteBallPenalty = false;
                clearInterval(this.roundTimer);

                this.stopCountdown();
                PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);

            }

            private onWhiteBallRepositioned(): void {
                // this.selectPlayer();
                console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");

                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);

            }

            private onGameFinished(): void {
                if (this.winStatus == WinStatus.WIN) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you won!"]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);
                } else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you lost!"]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);
                }

                if (this.player.side == "left") {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES,
                        [this.player.matchesWon, this.opponent.matchesWon]);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES,
                        [this.opponent.matchesWon, this.player.matchesWon]);
                }

            }

            private onNextTurn(): void {
                if (this.countdownEnded) {

                    this.countdownEnded = false;
                    this.changePlayer();

                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStateMachine.Instance().fsm.currentState]);

                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);

                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onTimeUp]);
                    return;
                }
                // this.selectPlayer();
                if (this.gameFinished) {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onGameEnd);
                    // let opponentStatus:WinStatus = (this.winStatus == WinStatus.WIN)? WinStatus.LOST : WinStatus.WIN;
                    console.log("la next turn: " + this.winStatus);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onGameEnd, this.winStatus]);
                    this.onGameFinished();

                    return;
                }
                else {
                    // console.log("inainte de on end turn");
                    PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
                    // console.log("dupa de on end turn");

                }

                console.log("%c GameManager -> Checking for next turn...", "color: #00bcd4");

                if (this.whiteBallPenalty) {
                    console.log("%c GameManager -> PENALTY! Round ended for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    // this.onWhiteBallInTheHole();

                    this.changePlayer();

                    if (!Settings.singlePlayer) {
                        SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRepositionWhiteBall]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.whiteBallFault]);
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
                    console.log("%c GameManager -> Fault! Own ball in pocket! " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    this.ownBallInPocketFault = false;
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
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
                        console.log("%c GameManager -> No balls hit for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                        this.changePlayer();

                        if (!Settings.singlePlayer) {
                            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                            SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
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

                    this.startCountdown(PockeySettings.ROUND_DURATION_IN_SECONDS);
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

                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                // PockeyStateMachine.Instance().changeState(PockeyStates.onStartVersusGame);
                // this.printFsmCurrentState();
            }


        }
    }
}


