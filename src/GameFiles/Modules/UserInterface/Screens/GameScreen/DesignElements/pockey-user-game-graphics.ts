///<reference path="../../../../GameModule/balls/abstract-ball.ts"/>
///<reference path="pockey-ui-in-game-avatar.ts"/>
///<reference path="../../../../../../Framework/Utils/text-field.ts"/>
///<reference path="pockey-life-bar.ts"/>
namespace Pockey {
    export module UserInterface {
        import BallType = Pockey.GameModule.BallType;
        import TextField = Framework.utils.TextField;
        import Graphics = PIXI.Graphics;
        import TextStyle = PIXI.TextStyle;

        export class PockeyUserGameGraphics extends Container {
            private userAvatar: PockeyUiInGameAvatar;
            private userLifeBar: PockeyLifeBar;
            private userNameTextField: TextField;
            private timerText: TextField;
            private timerTween: TweenMax;

            public type: BallType;
            private side: string;

            constructor(side: string) {
                super();
                this.side = side;


                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 22,
                    fill: 0xffffff,

                    // fontStyle: 'italic',
                    // fontWeight: 'bold',
                    // fill: ['#ffffff', '#00ff99'], // gradient
                    stroke: '#ffffff',
                    // strokeThickness: 5,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 10,
                    // wordWrap: true,
                    // wordWrapWidth: 440
                });
                let timerTextStyle: TextStyle = style.clone();
                timerTextStyle.fontSize = 28;

                this.userAvatar = new PockeyUiInGameAvatar();
                this.userLifeBar = new PockeyLifeBar();
                this.timerText = new TextField("0:" + PockeySettings.ROUND_DURATION_IN_SECONDS.toString(), timerTextStyle);
                this.timerText.visible = false;

                if (this.side == "left") {
                    this.userNameTextField = new TextField("Player", style);
                    this.userLifeBar.x = this.userAvatar.width + 76;
                    this.userNameTextField.x = this.userLifeBar.x;

                }
                else {
                    this.userNameTextField = new TextField("Opponent", style);
                    this.userAvatar.x = this.userLifeBar.width + 76;// this.userAvatar.width - 60;
                    this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                    // this.timerText.x = this.userLifeBar.width - this.timerText.width;
                }

                this.timerText.x = this.userAvatar.x + this.userAvatar.width / 2 - this.timerText.width / 2;

                this.userLifeBar.y = this.userAvatar.height - this.userLifeBar.height;
                this.userNameTextField.y = this.userLifeBar.y - this.userNameTextField.height + 4;

                this.timerText.y = this.userAvatar.y + this.userAvatar.height - 1 - this.timerText.height;

                this.addChild(this.userAvatar);
                this.addChild(this.userLifeBar);
                this.addChild(this.userNameTextField);
                this.addChild(this.timerText);
            }

            public resetTimer(): void {
                this.timerText.visible = false;
                this.timerText.style.fill = 0xffffff;
                this.timerText.setText("0:" + PockeySettings.ROUND_DURATION_IN_SECONDS.toString());
            }

            public updateTimer(timeText: string) {

                if (timeText == "") {
                    this.resetTimer();
                }
                else {
                    this.timerText.visible = true;
                    this.timerText.style.fill = 0xffffff;
                    this.timerText.setText(timeText);
                    this.timerText.x = 2 + this.userAvatar.x + this.userAvatar.width / 2 - this.timerText.width / 2;

                    /*if (this.side == "right")
                        this.timerText.x = this.userLifeBar.width - this.timerText.width;*/

                }
            }

            public updateUsername(text: string): void {
                this.userNameTextField.setText(text);
                if (this.side == "right") {
                    // this.userNameTextField = new TextField("Opponent", style);
                    // this.userAvatar.x = this.userLifeBar.width + 76;// this.userAvatar.width - 60;
                    this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                }
                // if (type == BallType.Op) {
                //     this.userNameTextField = new TextField("Player", style);
                //     this.userLifeBar.x = this.userAvatar.width + 76;
                //     this.userNameTextField.x = this.userLifeBar.x;
                // }
                // else {
                //     this.userNameTextField = new TextField("Opponent", style);
                //     this.userAvatar.x = this.userLifeBar.width + 76;// this.userAvatar.width - 60;
                //     this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                //
                // }
            }

            public reset(): void {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit: Graphics, id: number) => {
                    lifeUnit.alpha = 1;
                });
            }

            public updateScore(score: number) {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit: Graphics, id: number) => {
                    if (this.side == "left") {
                        if (id >= score) {
                            lifeUnit.alpha = 0.5;
                        }
                    } else {
                        if (id < 7 - score) {
                            lifeUnit.alpha = 0.5;
                        }
                    }

                });
            }

            public tint(color: number): void {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit: Graphics, id: number) => {
                    lifeUnit.tint = color;

                });
                this.userNameTextField.tint = color;
            }

            public updateAvatar(avatar: string): void {
                this.userAvatar.updateAvatarImage(avatar);
            }

            public setTimerColor(tintColor: number): void {
                if (this.timerText.style.fill = tintColor) {
                    return;
                }
                else {
                    this.timerText.style.fill = tintColor;
                }
            }

            public animateTimer(): void {
                this.setTimerColor(0xFF0000);
                // this.timerText.style.dropShadowColor = 0xffffff;//0xCA4A5C);
                // this.timerText.style.dropShadowDistance = 6;//0xCA4A5C);

                /* if (this.timerTween && this.timerTween.isActive()) {
                     this.timerTween.kill();
                 }

                 let scaleFactor:number = this.timerText.scale.x + this.timerText.scale.x / 12;
                 this.timerTween = TweenMax.to(this.timerText.scale, 0.2, {x: scaleFactor, y: scaleFactor, yoyo:true, repeat:1});*/
                // }
                // let tweenM
            }
        }
    }
}