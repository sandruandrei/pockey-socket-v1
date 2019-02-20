///<reference path="../../../../Framework/AbstractModules/UserInterface/abstract-screen.ts"/>
///<reference path="../../SignalsModule/pockey-signal-types.ts"/>
///<reference path="../../../../Framework/Signals/signals-manager.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/4/2019
 */


namespace Pockey {
    export module UserInterface {
        import AbstractScreen = Framework.UserInterface.AbstractScreen;
        import Player = Pockey.GameModule.Player;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import BallType = Pockey.GameModule.BallType;
        import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;

        export enum RoundCompleteType {
            matchComplete,
            roundComplete,
            playerDisconnected,
            rematch
        }

        export interface RoundCompleteVO {
            type?: RoundCompleteType,
            roundNumber?: number,
            // playerDisconnected,
            // rematch
        }

        export class RoundCompleteScreen extends AbstractScreen {
            protected div: HTMLDivElement;
            protected textDiv: HTMLDivElement;

            private player: Player;
            private opponent: Player;
            private currentRound: number = 1;

            private mainMenuButton: HTMLDivElement;
            private rematchButton: HTMLDivElement;
            private newOpponentButton: HTMLDivElement;
            private roundNumberDiv: HTMLDivElement;

            private rematchDiv: HTMLDivElement;
            private confirmRematchButton: HTMLDivElement;
            private rejectRematchButton: HTMLDivElement;

            constructor() {
                super();

                SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, this.onRematch.bind(this));

            }

            private onRematch():void
            {
                this.rematchDiv.style.display = "flex";
                this.rematchButton.style.display = "none";
            }

            protected assignDivs(): void {
                this.div = document.getElementById("RoundCompleteScreen") as HTMLDivElement;
                this.textDiv = document.getElementById("RoundCompleteText") as HTMLDivElement;
                this.roundNumberDiv = document.getElementById("RoundCompleteRoundNumber") as HTMLDivElement;
                this.titleDiv = document.getElementById("RoundCompleteTitle") as HTMLDivElement;
                this.rematchDiv = document.getElementById("RematchAsked") as HTMLDivElement;

                this.mainMenuButton = document.getElementById("ScreenMainMenuButton") as HTMLDivElement;
                this.mainMenuButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED);
                    console.log("mainMenuButton clicked");
                };
                this.rematchButton = document.getElementById("ScreenRematchButton") as HTMLDivElement;
                this.rematchButton.onclick = () => {
                    this.rematchButton.style.display = "none";
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED);
                    console.log("rematchButton clicked");
                };
                this.newOpponentButton = document.getElementById("ScreenNewOpponentButton") as HTMLDivElement;
                this.newOpponentButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                    // console.log("newOpponentButton clicked");
                };

                this.confirmRematchButton = document.getElementById("RematchYes") as HTMLDivElement;
                this.confirmRematchButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['accept']);
                    // console.log("newOpponentButton clicked");
                };

                this.rejectRematchButton = document.getElementById("RematchNo") as HTMLDivElement;
                this.rejectRematchButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['reject']);

                    // this.rematchDiv.style.display = "none";
                    // SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                    // console.log("newOpponentButton clicked");

                    this.rematchDiv.style.display = "none";
                };


            }

            private onSetSides(params: any) {

                // this.leftGameGraphics.updateScore(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER);
                // this.rightGameGraphics.updateScore(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER);

                if (this.player.side == 'left') {

                }
                else {
                }

            }

            private onDefinePlayerInterface(params: Player[]): void {
                if (params[0].type == BallType.Player) {
                    this.player = params[0];
                }
                else {
                    this.opponent = params[0];
                }
            }

            public updateText(text: string): void {
                // console.log("la opp screen timeru: " + text);
                this.textDiv.innerText = "get ready for round two in " + text;
            }

            public show(params: RoundCompleteVO): void {

                if (params && params.roundNumber) {
                    this.currentRound = params.roundNumber;
                }

                if (params && params.type == RoundCompleteType.roundComplete) {
                    this.handleRoundComplete();
                }
                else if (params && params.type == RoundCompleteType.matchComplete) {
                    this.handleMatchComplete();
                }
                else if (params && params.type == RoundCompleteType.playerDisconnected) {
                    this.handlePlayerDisconnected();
                }
                else if (params && params.type == RoundCompleteType.rematch) {
                    this.handleRematch();
                }
                super.show();
            }

            private handleRoundComplete(): void {
                this.textDiv.innerText = "";
                this.titleDiv.innerText = "ROUND COMPLETE";
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.rematchButton.style.display = "none";
                this.mainMenuButton.style.display = "none";
                this.newOpponentButton.style.display = "none";
                this.rematchDiv.style.display = "none";
            }

            private handleMatchComplete(): void {
                if (this.player.roundsWon >= 2) {
                    this.textDiv.innerText = "MATCH complete! you WiN!";
                }
                else if (this.opponent.roundsWon >= 2) {
                    this.textDiv.innerText = "MATCH complete! you lost!";
                }
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.titleDiv.innerText = "MATCH COMPLETE";

                this.mainMenuButton.style.display = "block";
                this.newOpponentButton.style.display = "block";
                this.rematchButton.style.display = "block";
            }

            private handleRematch(): void {

            }

            private handlePlayerDisconnected(): void {
                this.titleDiv.innerText = "MATCH COMPLETE";
                this.textDiv.innerText = "opponent DISCONNECTED";
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.mainMenuButton.style.display = "block";
                this.newOpponentButton.style.display = "block";
                this.rematchButton.style.display = "none";
                this.rematchDiv.style.display = "none";
            }

// public show(): void {
            //     console.log("intra la round two");
            //     this.div.style.display = "flex";
            // }
            //
            // public hide(): void {
            //     this.div.style.display = "none";
            // }

            public updateLeftPlayerData(): void {

            }

            public updateRighttPlayerData(): void {

            }

        }
    }
}
