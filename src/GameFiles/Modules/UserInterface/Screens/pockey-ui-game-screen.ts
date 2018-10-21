///<reference path="../DesignElements/pockey-user-game-graphics.ts"/>
///<reference path="../DesignElements/pockey-ui-versus-graphics.ts"/>
///<reference path="../../StateMachine/pockey-state-texts.ts"/>
///<reference path="../../../../Framework/Utils/pixi-multistyle-text.ts"/>
///<reference path="../../../../Framework/Settings.ts"/>

namespace Pockey {
    export module UserInterface {

        import BallType = Pockey.GameModule.BallType;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import TextField = Framework.utils.TextField;
        import MultiStyleText = Framework.Utils.MultiStyleText;
        import TextStyle = PIXI.TextStyle;
        import Settings = Framework.Settings;

        export class PockeyUiGameScreen extends Container {

            private leftGameGraphics: PockeyUserGameGraphics;
            private rightGameGraphics: PockeyUserGameGraphics;
            private playerGameGraphics: PockeyUserGameGraphics;
            private opponentGameGraphics: PockeyUserGameGraphics;

            private versus: PockeyUiVersusGraphics;

            private multilineText: MultiStyleText;
            private tipText: TextField;
            private tipTextContainer: Container;

            private graphicsContainer: Container;
            private tipTextWidth: number = 934;

            private poolTableScaleFactor: number = 1;

            private defaultTextStyle: TextStyle;
            private warningTextStyle: TextStyle;
            private opponentTextStyle: TextStyle;
            private textFontSize: number;

            constructor() {
                super();

                this.subscribeToSignals();
                this.defineTextStyles();
                this.addElements();

                // this.playerGameGraphics = new PockeyUserGameGraphics("left");
                // this.opponentGameGraphics = new PockeyUserGameGraphics("right");
            }

            private subscribeToSignals(): void {
                // SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onPoolTableResize.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));


                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_NAME, this.onUpdatePlayerName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_SCORE, this.onUpdatePlayerScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_GAME_SCREEN, this.onReset.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, this.onUpdateCurrentPlayerTimer.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_MATCH_CIRCLES, this.onUpdateMatchCircles.bind(this));


                // SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUIText.bind(this));
            }

            private onUpdateMatchCircles(params: any[]) {
                let leftSideColor: number;
                let rightSideColor: number;

                if (this.leftGameGraphics.type == BallType.Player) {
                    leftSideColor = PockeySettings.PLAYER_COLOR;
                    rightSideColor = PockeySettings.OPPONENT_COLOR;
                }
                else {
                    leftSideColor = PockeySettings.OPPONENT_COLOR;
                    rightSideColor = PockeySettings.PLAYER_COLOR;
                }

                let leftSideMatchesWon: number = params[0];
                let rightSideMatchesWon: number = params[1];

                _.forEach(_.range(leftSideMatchesWon), (i: number) => {
                    this.versus.leftSideMatchCircles[i].activate(leftSideColor);
                });

                _.forEach(_.range(rightSideMatchesWon), (i: number) => {
                    this.versus.rightSideMatchCircles[i].activate(rightSideColor);
                });
            }

            private onUpdateUIText(params: any[]) {
                let text: string = params[0];
                if (text.includes("{opponent"))
                    text = text.replace("{opponent}", PockeySettings.OPPONENT_SOCKET_ID);
                // if (text != this.tipText.text) {
                if (text != this.multilineText.text) {
                    this.multilineText.text = text;
                    if (!Settings.isMobile)
                        this.multilineText.x = -this.multilineText.width;
                    else {
                        this.multilineText.x = -this.multilineText.width / 2;
                    }
                    /*this.tipText.setText(text);
                    this.tipText.x = -this.tipText.width;*/
                }
            }

            private onUpdateCurrentPlayerTimer(params: any[]) {
                let time: string = params[0];
                let playerType: BallType = params[1];
                let animateText: boolean = params[2];

                if (this.leftGameGraphics.type == playerType) {
                    this.leftGameGraphics.updateTimer(time);
                    // this.leftGameGraphics.setTimerColor(tintColor);
                    if (animateText)
                        this.leftGameGraphics.animateTimer();// = this.leftGameGraphics;
                    // this.opponentGameGraphics = this.rightGameGraphics;
                }
                else {
                    this.rightGameGraphics.updateTimer(time);
                    if (animateText)
                        this.rightGameGraphics.animateTimer();
                    // this.playerGameGraphics = this.rightGameGraphics;
                    // this.opponentGameGraphics = this.leftGameGraphics;
                }

            }

            private onResizeBackground(params: any[]): void {

                // if (this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                this.poolTableScaleFactor = params[0];
                // let position: Point = params[1] as Point;
                // let rotation: number = params[2];
            }

            private onReset(param: any[]): void {
                this.leftGameGraphics.reset();
                this.rightGameGraphics.reset();
            }

            private onSetSides(params: any) {
                // let leftSide:BallType = params[0] as BallType;
                this.leftGameGraphics.type = params[0] as BallType;
                this.rightGameGraphics.type = params[1] as BallType;
                if (this.leftGameGraphics.type == BallType.Player) {
                    this.playerGameGraphics = this.leftGameGraphics;
                    this.opponentGameGraphics = this.rightGameGraphics;
                }
                else {
                    this.playerGameGraphics = this.rightGameGraphics;
                    this.opponentGameGraphics = this.leftGameGraphics;
                }
            }

            private onUpdatePlayerScore(score: number) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateScore(score);
            }

            public onUpdatePlayerName(name: string): void {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateUsername(name);
            }

            public onChangePlayerColor(color: number): void {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.tint(color);
            }

            private onUpdateOpponentScore(score: number) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateScore(score);
            }

            public onUpdateOpponentName(name: string): void {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateUsername(name);
            }

            public onChangeOpponentColor(color: number): void {
                if (this.opponentGameGraphics) {
                    this.opponentGameGraphics.tint(color);

                    // this.opponentTextStyle.fill = color;
                }
                this.opponentTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: color,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.multilineText.styles =
                    {
                        "default": this.defaultTextStyle,
                        "warning": this.warningTextStyle,
                        "opponent": this.opponentTextStyle
                    };
            }


            // public onChangeColors(COLORS: number[]): void {
            //     this.leftGameGraphics.tint(COLORS[0]);
            //     this.rightGameGraphics.tint(COLORS[1]);
            //     // if(this.leftGameGraphics.type == BallType.Opponent)
            //     // {
            //     //     this.leftGameGraphics.tint(color);
            //     // }
            //     // else
            //     // {
            //     //     this.rightGameGraphics.tint(color);
            //     // }
            // }

            // public onUpdateScore(score:number[]): void {
            //     this.leftGameGraphics.updateScore(score[0]);
            //     this.rightGameGraphics.updateScore(score[1]);
            // }
            //
            // public onUpdateOpponentScore(score: number): void {
            //     this.rightGameGraphics.updateScore(score);
            // }
            //
            //
            //
            // public onUpdateOpponentName(name: string): void {
            // }

            public handleDesktopLandscape(): void {
                this.graphicsContainer.height = 0.11 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;

                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = 0.05 * Settings.stageHeight;

                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y = this.poolTableScaleFactor;
                this.tipTextContainer.y = Settings.stageHeight - Settings.stageHeight * 0.1;
                this.tipTextContainer.x = Settings.stageWidth / 2 + (this.tipTextWidth / 2) * this.poolTableScaleFactor;

                this.multilineText.x = -this.multilineText.width;
            }

            public onResizeMobileLandscape(): void {
                this.rotation = 0;

                this.tipTextContainer.height = 0.046 * Settings.stageHeight;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y;
                this.tipTextContainer.y = Settings.stageHeight - Settings.stageHeight * 0.0452;
                this.tipTextContainer.x = Settings.stageWidth / 2;// + (this.tipTextWidth / 2) * this.poolTableScaleFactor;

                this.multilineText.x = -this.multilineText.width / 2;

                this.graphicsContainer.height = 0.13 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = Settings.stageHeight * 0.008;
                // this.graphicsContainer.x = Settings.stageWidth / 2 - this.graphicsContainer.width / 2;
            }

            public onResizeMobilePortrait(): void {
                this.rotation = 90 * Math.PI / 180;
                this.tipTextContainer.height = 0.0448 * Settings.stageWidth;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y;

                this.tipTextContainer.x = Settings.stageHeight / 2;
                this.tipTextContainer.y = -Settings.stageWidth * 0.046;

                this.multilineText.x = -this.multilineText.width / 2;

                /*this.tipText.height = 0.046 * Settings.stageWidth;
                this.tipText.scale.x = this.tipText.scale.y;

                this.tipText.y = /!*-Settings.stageWidth * 0.05;*!/
                    -this.tipText.height + 0.002 * Settings.stageWidth;
                this.tipText.x = Settings.stageHeight / 2 - this.tipText.width / 2 + Settings.stageHeight * 0.0024;
*/
                this.graphicsContainer.height = 0.13 * Settings.stageWidth;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageHeight / 2;
                this.graphicsContainer.y = -Settings.stageWidth + 0.008 * Settings.stageWidth;
                // console.log("la resize mobile: " + Settings.stageWidth, Settings.stageHeight);
                // this.tipText.rotation = 90 * Math.PI / 180;
                // this.tipText.height = 0.05 * this.stageHeight;
                // this.tipText.scale.x = this.tipText.scale.y;

                // this.tipText.x = this.stageWidth / 2;
                // this.tipText.y = this.stageHeight / 2;// + this.tipText.height / 2;//

                // this.tipText.x = this.stageWidth / 2 + this.stageWidth * 0.3 - this.tipText.width;
                // this.tipText.x = 450;//this.stageHeight /*- this.stageHeight * 0.1*/ - this.tipText.height;
                // this.tipText.y = 450;//this.stageHeight /*- this.stageHeight * 0.1*/ - this.tipText.height;
                // this.tipText.x = this.stageWidth / 2 + (this.tipTextWidth / 2) * this.tipText.scale.x - this.tipText.width;
            }

            private defineTextStyles(): void {
                this.textFontSize = 56.4;
                if (Settings.isMobile) {
                    this.textFontSize = 28;
                }
                this.defaultTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: 0xffffff,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.warningTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: 0xff0000,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.opponentTextStyle = new TextStyle({});

            }

            private addElements(): void {
                // this.usersUIHolder = new Container();
                this.graphicsContainer = new Container();
                this.addChild(this.graphicsContainer);
                this.addVersusGraphics();
                this.addLeftGameGraphics();
                this.addRightGameGraphics();

                // if (Settings.isMobile) {
                //     this.addTipTextMobile();
                // }
                // else {
                this.addTipText();
                // }
            }

            private addTipText() {
                this.multilineText = new MultiStyleText("",
                    {
                        "default": this.defaultTextStyle,
                        "warning": this.warningTextStyle,
                        "opponent": this.opponentTextStyle
                    });
                // let style = new PIXI.TextStyle({
                //     fontFamily: 'troika',
                //     fontSize: 56.4,
                //     fill: 0xffffff,
                //     // fontStyle: 'italic',
                //     // fontWeight: 'bold',
                //     // fill: ['#ffffff', '#00ff99'], // gradient
                //     // stroke: '#4a1850',
                //     // strokeThickness: 5,
                //     // align: "right",
                //     dropShadow: true,
                //     dropShadowColor: '#000000',
                //     dropShadowBlur: 1,
                //     dropShadowAngle: Math.PI / 3,
                //     dropShadowDistance: 8,
                //     // wordWrap: true,
                //     // wordWrapWidth: this.tipTextWidth,
                // });

                // this.tipText = new TextField("", style);

                this.tipTextContainer = new Container();
                this.tipTextContainer.name = "tipTextContainer";
                this.addChild(this.tipTextContainer);
                this.multilineText.scale.x = this.multilineText.scale.y = 0.5;
                this.addChild(this.multilineText);
                // this.tipTextContainer.addChild(this.tipText);
                this.tipTextContainer.addChild(this.multilineText);
            }

            private addTipTextMobile() {
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 14,
                    fill: 0xffffff,
                    // fontStyle: 'italic',
                    // fontWeight: 'bold',
                    // fill: ['#ffffff', '#00ff99'], // gradient
                    // stroke: '#4a1850',
                    // strokeThickness: 5,
                    // align: "right",
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 6,
                    /* wordWrap: true,
                     wordWrapWidth: 934,*/
                });

                this.tipText = new TextField("", style);

                this.tipTextContainer = new Container();
                this.addChild(this.tipTextContainer);
                this.tipTextContainer.addChild(this.tipText);
            }

            private addVersusGraphics() {
                this.versus = new PockeyUiVersusGraphics();
                this.versus.x -= this.versus.width / 2;
                this.graphicsContainer.addChild(this.versus);
            }

            private addLeftGameGraphics() {
                this.leftGameGraphics = new PockeyUserGameGraphics("left");
                this.leftGameGraphics.x = this.versus.x - this.leftGameGraphics.width - 36;
                this.versus.y = this.leftGameGraphics.height - this.versus.height + 8;
                this.graphicsContainer.addChild(this.leftGameGraphics);

            }

            private addRightGameGraphics() {
                this.rightGameGraphics = new PockeyUserGameGraphics("right");
                this.rightGameGraphics.x = this.versus.x + this.versus.width + 36;
                this.graphicsContainer.addChild(this.rightGameGraphics);
            }


            // private onUpdateOpponentScore(score: number) {
            //     // this.rightGameGraphics.updateScore(score);
            // }

            // public onResize(stageWidth: number, stageHeight: number): void {
            //     // this.stageWidth = stageWidth;
            //     // this.stageHeight = stageHeight;
            //     //
            //     // this.menuBackground.x = stageWidth / 2 - this.menuBackground.width / 2;
            //     // this.menuBackground.y = stageHeight / 2 - this.menuBackground.height / 2;
            // }

        }
    }
}