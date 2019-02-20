///<reference path="../../../../GameModule/balls/abstract-ball.ts"/>
///<reference path="../../../../../../Framework/Utils/text-field.ts"/>
namespace Pockey {
    export module UserInterface {
        import BallType = Pockey.GameModule.BallType;
        import Player = Pockey.GameModule.Player;

        export class PockeyUserGameGraphics {
            private userAvatar: HTMLDivElement;
            private userNameTextField: HTMLDivElement;
            private timerText: HTMLDivElement;
            private timerTween: TweenMax;

            public type: BallType;
            private side: string;
            private lifeUnits: HTMLDivElement[];
            private gameGraphic: HTMLDivElement;
            private matchCircles: PockeyUiMatchCircle[];

            private defaultColor: number;

            constructor(side: string, gameGraphic: HTMLDivElement) {
                // super();
                this.side = side;

                this.gameGraphic = gameGraphic;


                // let timerTextStyle: TextStyle = style.clone();
                // timerTextStyle.fontSize = 28;

                this.userAvatar = this.gameGraphic.getElementsByClassName("scoreBoardAvatar")[0] as HTMLDivElement;
                // this.userLifeBar = this.gameGraphic.getElementsByClassName("scoreBoardLives")[0] as HTMLDivElement;
                this.lifeUnits = [];
                _.forEach(this.gameGraphic.getElementsByClassName("scoreBoardLives")[0].children, (life: HTMLDivElement) => {
                    this.lifeUnits.push(life);
                });

                this.timerText = this.gameGraphic.getElementsByClassName("scoreBoardTimer")[0] as HTMLDivElement;
                this.timerText.innerText = "0:" + PockeySettings.ROUND_DURATION_IN_SECONDS.toString();
                // this.timerText.visible = false;
                this.userNameTextField = this.gameGraphic.getElementsByClassName("playerName")[0] as HTMLDivElement;
                // if (this.side == "left") {
                //     this.userNameTextField.innerText = new TextField("Player", style);
                //     // this.userLifeBar.x = this.userAvatar.width + 76;
                //     // this.userNameTextField.x = this.userLifeBar.x;
                //
                // }
                // else {
                //     this.userNameTextField = new TextField("Opponent", style);
                //     // this.userAvatar.x = this.userLifeBar.width + 76;// this.userAvatar.width - 60;
                //     // this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                //     // this.timerText.x = this.userLifeBar.width - this.timerText.width;
                // }

                // this.timerText.x = this.userAvatar.x + this.userAvatar.width / 2 - this.timerText.width / 2;

                // this.userLifeBar.y = this.userAvatar.height - this.userLifeBar.height;
                // this.userNameTextField.y = this.userLifeBar.y - this.userNameTextField.height + 4;

                // this.timerText.y = this.userAvatar.y + this.userAvatar.height - 1 - this.timerText.height;

                // this.addChild(this.userAvatar);
                // this.addChild(this.userLifeBar);
                // this.addChild(this.userNameTextField);
                // this.addChild(this.timerText);

                this.getMatchCircles();
            }

            private getMatchCircles() {
                let versus: PockeyUiVersusGraphics = new PockeyUiVersusGraphics();

                if (this.side == "left")
                    this.matchCircles = versus.leftSideMatchCircles;
                else
                    this.matchCircles = versus.rightSideMatchCircles;

                // this.updateMatchCircles(new Player("bla", BallType.Player));
                // this.versus.x -= this.versus.width / 2;
                // this.graphicsContainer.addChild(this.versus);
            }

            public updateMatchCircles(roundsWon:number): void {
                _.forEach(_.range(roundsWon), (i: number) => {
                    this.matchCircles[i].activate(this.defaultColor);
                });
            }

            public resetTimer(): void {
                // this.timerText.visible = false;
                // this.timerText.style.fill = 0xffffff;
                this.userAvatar.style.border = "3px solid #fff";
                this.timerText.style.display = "none";
                this.timerText.style.color = "white";
                this.timerText.innerText = "0:" + PockeySettings.ROUND_DURATION_IN_SECONDS.toString();
            }

            public updateTimer(timeText: string) {

                if (timeText == "") {
                    this.resetTimer();
                }
                else {
                    // this.timerText.visible = true;
                    // this.timerText.style.fill = 0xffffff;

                    this.timerText.innerText = timeText;
                    this.timerText.style.display = "flex";
                    this.userAvatar.style.border = "3px solid red";
                    // this.timerText.x = 2 + this.userAvatar.x + this.userAvatar.width / 2 - this.timerText.width / 2;

                    /*if (this.side == "right")
                        this.timerText.x = this.userLifeBar.width - this.timerText.width;*/

                }
            }

            public updateUsername(text: string): void {
                this.userNameTextField.innerText = text;//.setText(text);
                // if (this.side == "right") {
                //     // this.userNameTextField = new TextField("Opponent", style);
                //     // this.userAvatar.x = this.userLifeBar.width + 76;// this.userAvatar.width - 60;
                //     // this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                // }
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
                // let score:number = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                // _.forEach(this.lifeUnits, (lifeUnit: HTMLDivElement, id: number) => {
                //
                //     if(id > score - 1)
                //     {
                //         lifeUnit.style.opacity = "0.5";
                //     }
                //
                // });
            }

            public updateScore(score: number) {
                _.forEach(this.lifeUnits, (lifeUnit: HTMLDivElement, id: number) => {
                    // if (this.side == "left") {
                    //     if (score >= score) {
                    //         // lifeUnit.alpha = 0.5;
                    //     }
                    // } else {
                    // if (id < 7 - score) {
                    //     lifeUnit.style.opacity = "0.5";
                    // }

                    if (id > score - 1) {
                        lifeUnit.style.opacity = "0.5";
                    }

                    // }

                });
            }

            public tint(color: number): void {
                let hexColor:string = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
                this.defaultColor = color;

                _.forEach(this.lifeUnits, (lifeUnit: HTMLDivElement, id: number) => {
                    // lifeUnit.tint = color;
                    lifeUnit.style.background = hexColor;

                    if (id > PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER - 1) {
                        lifeUnit.style.opacity = "0.5";
                    }
                    else
                    {
                        lifeUnit.style.opacity = "1";
                    }
                });

                _.forEach(this.matchCircles, (matchCircle: PockeyUiMatchCircle) => {
                    matchCircle.reset();
                });
                this.userNameTextField.style.color = hexColor;
            }

            public updateAvatar(avatarID: string): void {

                let avatarPath: string = "";
                _.forEach(PockeySettings.LARGE_AVATARS_ARRAY, (avatarVO: InventoryVO, counter: number) => {
                    if (avatarVO.id == avatarID) {
                        avatarPath = avatarVO.icon;
                        return true;
                    }
                });
                this.userAvatar.style.background = "center / 97% no-repeat #1a4157 url(" + avatarPath + ")";
            }

            // public setTimerColor(tintColor: number): void {
            //
            // }

            public animateTimer(): void {
                // this.setTimerColor(0xFF0000);

                if (this.timerText.style.color = '#' + ('00000' + (0xFF0000 | 0).toString(16)).substr(-6)) {
                    return;
                }
                else {
                    this.timerText.style.color = '#' + ('00000' + (0xFF0000 | 0).toString(16)).substr(-6);
                }
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