///<reference path="Screens/MainScreen/pockey-ui-main-screen.ts"/>
///<reference path="Screens/pockey-ui-searching-screen.ts"/>
///<reference path="Screens/GameScreen/pockey-ui-game-screen.ts"/>
///<reference path="Screens/pockey-ui-round-complete-screen.ts"/>
///<reference path="Screens/pockey-ui-opponent-found-screen.ts"/>
///<reference path="Screens/MainScreen/pockey-ui-main-screen-mobile.ts"/>
///<reference path="../../../Framework/AbstractModules/UserInterface/abstract-screen.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/8/2018
 */

namespace Pockey {
    export module UserInterface {

        import AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import SignalsType = Framework.Signals.SignalsType;
        import Settings = Framework.Settings;
        import PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        import AbstractScreen = Framework.UserInterface.AbstractScreen;

        export class PockeyUserInterfaceModule extends AbstractUserInterfaceModule {

            private mainScreen: PockeyUiMainScreen;
            private searchingScreen: PockeyUiSearchingScreen;
            private gameScreen: PockeyUiGameScreen;
            private roundCompleteScreen: RoundCompleteScreen;
            private opponentFoundScreen: PockeyUiOpponentFoundScreen;

            private activeRoundScreen: AbstractScreen;

            /*private playerLifeUnitsArray: Sprite[];
            private oppLifeUnitsArray: Sprite[];


            private playerLifeBar: Sprite;
            private oppLifeBar: Sprite;*/

            constructor() {
                super();
            }

            public createElements(): void {

                if (Settings.isMobile) {
                    this.mainScreen = new PockeyUiMainScreenMobile();

                }
                else {
                    this.mainScreen = new PockeyUiMainScreen();
                }

                this.searchingScreen = new PockeyUiSearchingScreen();
                this.gameScreen = new PockeyUiGameScreen();
                this.roundCompleteScreen = new RoundCompleteScreen();
                this.opponentFoundScreen = new PockeyUiOpponentFoundScreen();
                this.activeRoundScreen = this.opponentFoundScreen;

                // this.matchCompleteScreen = new MatchCompleteScreen();
                // this.winningScreen = new PockeyUiWinningScreen();

                // this.addChild(this.mainScreen);

                // this.addChild(this.gameScreen);
                /*this.playerLifeUnitsArray = [];
                this.oppLifeUnitsArray = [];

                this.playerLifeBar = this.createLifeBar(this.playerLifeUnitsArray);
                this.playerLifeBar.nickname = "playerLifeBar";
                this.playerLifeBar.x = 525;
                this.playerLifeBar.y = 90;
                this.addChild(this.playerLifeBar);


                this.oppLifeBar = this.createLifeBar(this.oppLifeUnitsArray);
                this.oppLifeBar.nickname = "oppLifeBar";
                this.oppLifeBar.x = this.playerLifeBar.x + 655;
                this.oppLifeBar.y = this.playerLifeBar.y;
                this.addChild(this.oppLifeBar);*/


                super.createElements();
            }

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_MAIN_MENU, this.onShowMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_MAIN_MENU, this.onHideMainMenu.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_GAME_UI, this.onHideGameMenu.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_SEARCHING_SCREEN, this.onShowSearchingScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_SEARCHING_SCREEN, this.onHideSearchingScreen.bind(this));
                //
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, this.onShowRoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN, this.onHideRoundCompleteScreen.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN, this.onShowOpponentFoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN, this.onHideOpponentFoundScreen.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, this.onUpdateCurrentScreenText.bind(this));

            }

            private onHideOpponentFoundScreen():void
            {
                this.opponentFoundScreen.hide();
            }

            private onHideRoundCompleteScreen():void
            {
                this.roundCompleteScreen.hide();
            }

            private onUpdateCurrentScreenText(params: any): void {
                this.activeRoundScreen.updateText(params[0]);
            }

            // private onUpdateOpponentName(name: string): void {
            //     this.opponentFoundScreen.updateOpponentName();
            // }
            //
            // private onChangeOpponentAvatar(avatarPath: string): void {
            //     this.opponentFoundScreen.updateAvatar(avatarPath);
            // }

            private onShowRoundScreen(params:RoundCompleteVO[]): void {
                 console.log("se arata on show winning!");
                this.onHideOpponentFoundScreen();
                this.onHideSearchingScreen();

                this.activeRoundScreen = this.roundCompleteScreen;
                this.roundCompleteScreen.show(params[0]);
            }

            //
            // private onShowMatchCompleteScreen(): void {
            //     console.log("se arata on show winning!");
            //     this.activeRoundScreen = this.roundCompleteScreen;
            //     this.activeRoundScreen.show();
            // }

            /*private hideActiveRoundScreen(): void {
                console.log("se ascunde winning screen!");

                this.activeRoundScreen.hide();
            }*/

            private onShowOpponentFoundScreen(params:RoundCompleteType[]): void {
                this.activeRoundScreen = this.opponentFoundScreen;

                this.opponentFoundScreen.show(params[0]);
            }

//             private onHideOpponentFoundScreen(): void {
// //                 console.log("intra la onHideOpponentFoundScreen");
//                 this.activeRoundScreen.hide();
//                 // this.
//             }

            private onShowSearchingScreen(): void {
                this.searchingScreen.setVisibleTrue();
            }

            private onHideSearchingScreen(): void {
                this.searchingScreen.setVisibleFalse();
                // this.mainScreen.setVisibleFalse();
            }

            private onShowMainMenu(): void {
                this.mainScreen.setVisibleTrue();

                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.IN_GAME_AMBIANCE}]);

                // this.addChild(this.mainScreen);
            }

            private onHideMainMenu(): void {
                this.mainScreen.setVisibleFalse();
                // this.removeChild(this.mainScreen);
            }

            private onShowGameMenu(): void {
                this.gameScreen.show();
                // this.addChild(this.gameScreen);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                    soundName: PockeySoundURLS.IN_GAME_AMBIANCE,
                    loop: true
                }]);
            }

            private onHideGameMenu(): void {
                this.gameScreen.hide();
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.IN_GAME_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                    soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE,
                    loop: false
                }]);
                // this.removeChild(this.gameScreen);
            }

            protected onResize(params: any[]): void {
                super.onResize(params);

                // if (this.mainScreen)
                //     this.mainScreen.onResize();
                // if (this.searchingScreen)
                //     this.searchingScreen.onResize();
                //
                // if (this.winningScreen)
                //     this.winningScreen.onResize();

            }

            protected handleDesktopLandscape(): void {
                super.handleDesktopLandscape();

                if (this.gameScreen)
                    this.gameScreen.handleDesktopLandscape();
            }

            protected handleMobilePortrait(): void {
                super.handleMobilePortrait();

                if (this.gameScreen)
                    this.gameScreen.onResizeMobilePortrait();
            }

            protected handleMobileLandscape(): void {
                super.handleMobileLandscape();

                if (this.gameScreen)
                    this.gameScreen.onResizeMobileLandscape();
            }

            /*






                        // private onResizeBackground(params: any[]): void {
                        //     let scaleFactor: number = params[0];
                        //
                        //     // let position: Point = params[1] as Point;
                        //     // let rotation: number = params[2];
                        //     //
                        //     // this.Layer.x = position.x;
                        //     // this.Layer.y = position.y;
                        //     //
                        //     // this.Layer.rotation = rotation;
                        //     // this.Layer.scale.x = scaleFactor;
                        //     // this.Layer.scale.y = scaleFactor;
                        // }

                        protected createElements(): void {

                            this.mainScreen = new PockeyUiMainScreen();
                            this.searchingScreen = new PockeyUiSearchingScreen();
                            // this.addChild(this.mainScreen);

                            // this.gameScreen = new PockeyUiGameScreen();
                            // this.addChild(this.gameScreen);
                            /!*this.playerLifeUnitsArray = [];
                            this.oppLifeUnitsArray = [];

                            this.playerLifeBar = this.createLifeBar(this.playerLifeUnitsArray);
                            this.playerLifeBar.nickname = "playerLifeBar";
                            this.playerLifeBar.x = 525;
                            this.playerLifeBar.y = 90;
                            this.addChild(this.playerLifeBar);


                            this.oppLifeBar = this.createLifeBar(this.oppLifeUnitsArray);
                            this.oppLifeBar.nickname = "oppLifeBar";
                            this.oppLifeBar.x = this.playerLifeBar.x + 655;
                            this.oppLifeBar.y = this.playerLifeBar.y;
                            this.addChild(this.oppLifeBar);*!/


                            super.createElements();
                        }


                        */
        }


    }
}

// "ball-black.png"
// "ball-highlight.png"
// "ball-puck-01.png"
// "ball-puck-02.png"
// "ball-puckInvalid.png"
// "ball-scratch.png"
// "ball-shadow.png"
// "barrier-corner.png"
// "barrier-icon.png"
// "barrier-side.png"
// "rightGoal-shine.png"
// "goal_arrowIndicator.png"
// "goalie.png"
// "penalty-droppuck.png"
// "power-bg.png"
// "power-color.png"
// "powerUp_pocketBlock.png"
// "powerUp_speedBuff.png"
// "puck-icon.png"
// "puck-indicator.png"
// "puck_drop.png"
// "roundcomplete.png"
// "table_english-01.png"
// "table_english-reticle.png"
// "table_power-01a.png"
// "table_power-light1.png"
// "table_power-light2.png"
// "table_power-light3.png"
// "table_power-light4.png"
// "ui_icon-arrow.png"
// "ui_icon-tipsReg.png"
// "ui_versus-empty.png"
// "ui_versus-main.png"
// "ui_versus-won.png"
// "vs.png" --------------- used