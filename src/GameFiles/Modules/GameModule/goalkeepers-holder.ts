/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 1/28/2019
 */


namespace Pockey {
    export module GameModule {
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export interface GoalieState {
            direction?: number,
            position?: number,
            speed?: number
        }

        export class GoalkeepersHolder {
            private goalies: Goalie[];
            private yLimit: number = 50;
            public movingDirection: number = 1;//1 - for down, -1 for top
            public movingSpeed: number = 2;
            public moving: boolean = false;
            public y: number = 0;

            constructor(leftGoalie: Goalie, rightGoalie: Goalie) {
                this.goalies = [];
                this.goalies.push(leftGoalie);
                this.goalies.push(rightGoalie);

                leftGoalie.visible = false;
                rightGoalie.visible = false;
                /*P2WorldManager.Instance().world.on("postStep", (evt) => {
                    // this.update();
                }, this);*/

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameUI.bind(this));
            }

            private onShowGameUI():void
            {
                _.forEach(this.goalies, (goalie: Goalie) => {
                    goalie.visible = true;
                });
            }

            public update(): void {
                if (this.moving) {
                    this.y += this.movingDirection * this.movingSpeed;

                    this.updatePosition();

                    if (this.y >= this.yLimit || this.y <= -this.yLimit) {
                        this.movingDirection *= -1;
                    }
                }
            }

            private lerp(min:number, max:number, fraction:number):number {
                return (max - min) * fraction + min;
            }

            private updatePosition(): void {
                _.forEach(this.goalies, (goalie: Goalie) => {
                    goalie.y = this.y;
                    goalie.goalieBody.position[1] = this.y;
                    goalie.goalieBodyShadow.position[1] = this.y;
                });
            }

            public startMoving(): void {
                this.moving = true;
            }

            public getState(): GoalieState {
                let goalieState: GoalieState = {};
                goalieState.direction = this.movingDirection;
                goalieState.speed = this.movingSpeed;
                goalieState.position = Math.round(this.y * 10000);
                // goalieState.

                return goalieState;
            }

            public setState(state: GoalieState, duration: number): void {
                this.moving = false;

                // let time: number = (duration + 1 / 60) / 2;her
                this.movingDirection = state.direction;
                // this.y = ;
                this.y = this.lerp(this.y, state.position / 10000, 1 - 0.25 * PIXI.ticker.shared.deltaTime);
                this.updatePosition();
                /*TweenMax.to(this, time, {
                    y: state.position / 10000,
                    ease:Linear.easeNone,
                    onUpdate: this.updatePosition.bind(this)
                });*/


            }
        }
    }
}
