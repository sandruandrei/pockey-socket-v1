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

                /*P2WorldManager.Instance().world.on("postStep", (evt) => {
                    // this.update();
                }, this);*/
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

                // let time: number = (duration + 1 / 60) / 2;
                this.movingDirection = state.direction;
                this.y = state.position / 10000;
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
