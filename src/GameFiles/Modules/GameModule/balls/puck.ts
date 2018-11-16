namespace Pockey {
    export module GameModule {

        import Vector2 = Framework.Utils.Vector2;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class Puck extends AbstractBall {
            public puckGoals: PuckGoal[];
            public goalYPosition: number;
            public goalHeight: number;

            constructor() {
                super();
                this.ballType = BallType.Puck;
                this.name = "Puck";
                this.ballValue = 2;

                this.delta += 0.994;

                this.mass = 0.3;
//                 console.log("puck body id: " + this.p2Body.id);
            }

            protected worldPreSolveHandler(): void {

                if (this.speed() < 18)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
            }

            protected getCircleMaterial(): p2.Material {
                return P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL);
            }

            protected changeDefaultTextureName(): void {
                this.defaultTextureName = "ball-puck.png";
            }

            protected updateTexture(): void {
                this.radius = 25;
                super.updateTexture();
            }

            public animatePocketCollision(pocketPosition: Vector2, newX: number = null, newY: number = null) {
                let animationSpeed: number = 1 / this.speed();

                this.x = pocketPosition.x;
                TweenMax.to(this, animationSpeed, {
                    x: newX
                });
            }

            public update(): void {

                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

                //person.age >=16 ? 'Yes' : 'No';
                if (this.moving && !this.canBeRemoved) {

                    let isCloserToGoal: boolean = false;
                    let goalPosition: Vector2 = new Vector2();
                    let p2BodyPos: Vector2 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let lastDirection: number = 0;
                    let goalScored: boolean = false;
                    let goalType: BallType;
                    /* this.oldPos.x = this.p2Body.velocity[0];
                     this.oldPos.y = this.p2Body.velocity[1];
                     this.oldPos = this.oldPos.normalise();*/

                    // _.forEach(this.puckGoals, (goal: PuckGoal) => {
                    //     goalPosition = new Vector2(goal.x, goal.y);

                    if (p2BodyPos.y > this.goalYPosition && p2BodyPos.y < this.goalYPosition + this.goalHeight) {
                        this.x = p2BodyPos.x;
                        this.y = p2BodyPos.y;

                        isCloserToGoal = true;
                        let distanceToFinalX: number;
                        let finalPoint: Vector2 = new Vector2();
                        let p2BodyVelocityNormalized: Vector2;


                        if (p2BodyPos.x < this.leftLimit) {
                            distanceToFinalX = (this.leftLimit - this.radius) - p2BodyPos.x;
                            p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                            finalPoint.x = this.leftLimit - this.radius - 3;
                            goalScored = true;
                            goalType = this.puckGoals[0].type;

                        }
                        else if (p2BodyPos.x > this.rightLimit) {
                            distanceToFinalX = p2BodyPos.x - (this.rightLimit + this.radius);
                            p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                            finalPoint.x = this.rightLimit + this.radius + 3;
                            goalScored = true;
                            goalType = this.puckGoals[1].type;
                        }

                        if (goalScored) {

                            // return;
                            this.canBeRemoved = true;

                            P2WorldManager.Instance().world.removeBody(this.p2Body);

                            SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType, goalType]);


                            finalPoint.y = this.y - p2BodyVelocityNormalized.y;

                            if (finalPoint.y < this.goalYPosition + this.radius) {
                                finalPoint.y = this.goalYPosition + this.radius;
                            }
                            if (finalPoint.y > this.goalYPosition + this.goalHeight - this.radius) {
                                finalPoint.y = this.goalYPosition + this.goalHeight - this.radius
                            }

                            let duration: number = 1 / (this.speed() / 60);
                            duration *= 2;
                            if (duration > 1.8)
                                duration = 1.8;
                            // if (finalPoint.x < this.goalYPosition + this.radius) {
                            //     finalPoint.y = this.goalYPosition + this.radius;
                            // }
                            // if (finalPoint.y > this.goalYPosition + this.goalHeight - this.radius) {
                            //     finalPoint.y = this.goalYPosition + this.goalHeight - this.radius;
                            // }

                            this.animationInProgress = true;
                            let tl: TimelineMax = new TimelineMax();
                            tl.add(TweenMax.to(this, duration, {
                                x: finalPoint.x,
                                y: finalPoint.y,
                                onComplete: this.declareAnimationFinished.bind(this)
                            }), 0);
                            tl.add(TweenMax.to(this.ballShadow.scale, duration, {
                                x: 0.8,
                                y: 0.8,
                                ease: Linear.easeNone
                            }), 0);
                            tl.add(TweenMax.to(this.ballShadow, duration, {
                                x: finalPoint.x,
                                y: finalPoint.y,
                                ease: Linear.easeNone
                            }), 0);
                            tl.add(TweenMax.to(this.scale, duration, {
                                x: 0.92,
                                y: 0.92
                            }), 0);


                            // let distanceToFinalX:number =
                        }

                    }

                    /* if (pocketPosition.distanceTo(p2BodyPos) <= (this.radius + pocket.radius + 8)) {
                         isCloserToGoal = true;

                         if (pocketPosition.distanceTo(p2BodyPos) <= (pocket.radius + 1)) {

                             this.canBeRemoved = true;
                             P2WorldManager.Instance().world.removeBody(this.p2Body);

                             SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType]);

                             // P2WorldManager.Instance().world.remove(this.p2Body);

                             this.x = p2BodyPos.x;
                             this.y = p2BodyPos.y;

                             let closestDistance: number = 3000;
                             let distanceToNextClosestPoint: number = 3000;
                             let pointId: number = 0;
                             let nextPointId: number = 0;
                             let direction: number = 0;
                             let closestPoint: Vector2 = new Vector2();
                             let nextClosestPoint2: Vector2 = new Vector2();

                             closestPoint.x = pocket.x + this.oldPos.x;
                             closestPoint.y = pocket.y + this.oldPos.y;
                             closestPoint.x = closestPoint.x / 2 + p2BodyPos.x / 2;
                             closestPoint.y = closestPoint.y / 2 + p2BodyPos.y / 2;

                             nextClosestPoint2.x = p2BodyPos.x + this.oldPos.x * PockeySettings.BALL_RADIUS * 2;
                             nextClosestPoint2.y = p2BodyPos.y + this.oldPos.y * PockeySettings.BALL_RADIUS * 2;

                             let finalTouchPoint: Vector2 = new Vector2(closestPoint.x, closestPoint.y);
                             _.forEach(pocket.touchPoints, (touchPoint: Vector2, id: number) => {
                                 let newDist: number = closestPoint.distanceTo(touchPoint);
                                 let dirDist: number = nextClosestPoint2.distanceTo(touchPoint);

                                 if (newDist < closestDistance) {
                                     closestDistance = newDist;
                                     finalTouchPoint = new Vector2(touchPoint.x, touchPoint.y);
                                     pointId = id;
                                 }

                                 if (dirDist < distanceToNextClosestPoint) {
                                     distanceToNextClosestPoint = dirDist;
                                     nextPointId = id;
                                 }

                             });

                             closestPoint.x = finalTouchPoint.x;
                             closestPoint.y = finalTouchPoint.y;

                             let touchPointsArrayLength: number = pocket.touchPoints.length;
                             let clockwiseDistance: number = 0;
                             let counterclockDistance: number = 0;
                             let idCounter: number = pointId;

                             if (nextPointId > pointId) {
                                 clockwiseDistance = nextPointId - pointId;
                                 let tempDist: number = 0;
                                 for (let i = 0; i < touchPointsArrayLength; i++) {
                                     tempDist++;
                                     idCounter--;
                                     if (idCounter < 0)
                                         idCounter = touchPointsArrayLength - 1;

                                     if (idCounter == nextPointId)
                                         counterclockDistance = tempDist;
                                 }

                                 if (counterclockDistance < clockwiseDistance)
                                     direction = -1;
                                 else if (counterclockDistance > clockwiseDistance)
                                     direction = 1;
                                 else
                                     direction = 0;
                             }
                             else {

                                 clockwiseDistance = pointId - nextPointId;
                                 let tempDist: number = 0;
                                 idCounter = nextPointId;
                                 for (let i = 0; i < touchPointsArrayLength; i++) {
                                     tempDist++;
                                     idCounter--;
                                     if (idCounter < 0)
                                         idCounter = touchPointsArrayLength - 1;

                                     if (idCounter == pointId)
                                         counterclockDistance = tempDist;
                                 }

                                 if (clockwiseDistance < counterclockDistance)
                                     direction = -1;
                                 else if (clockwiseDistance > counterclockDistance)
                                     direction = 1;
                                 else
                                     direction = 0;
                             }
                             lastDirection = direction;

                             let bezierPositions: Point[] = [];
                             let testids: number[] = [];
                             idCounter = pointId;

                             if (direction == -1) {
                                 for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                     testids.push(idCounter);
                                     bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                     idCounter--;
                                     if (idCounter < 0)
                                         idCounter = touchPointsArrayLength - 1;

                                 }
                                 bezierPositions.shift();

                             }
                             else if (direction == 1) {
                                 for (let i = 0; i < touchPointsArrayLength; i++) {

                                     testids.push(idCounter);
                                     bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);

                                     idCounter++;
                                     if (idCounter > touchPointsArrayLength - 1)
                                         idCounter = 0;

                                 }
                                 bezierPositions.shift();

                             }
                             else if (direction == 0) {

                                 direction = Math.round(Math.random() * 1) - 1;
                                 lastDirection = direction;
                                 if (direction == 0)
                                     direction = 1;


                                 idCounter = nextPointId;
                                 bezierPositions.push(new Point(pocket.touchPoints[pointId].x, pocket.touchPoints[pointId].y));
                                 bezierPositions.push(new Point(pocket.touchPoints[nextPointId].x, pocket.touchPoints[nextPointId].y));

                                 for (let i = 0; i < touchPointsArrayLength - counterclockDistance; i++) {

                                     if (i == 1) {

                                         let tempPoint: Point = new Point(
                                             pocket.touchPoints[nextPointId].x / 2 + pocket.touchPoints[idCounter].x / 2,
                                             pocket.touchPoints[nextPointId].y / 2 + pocket.touchPoints[idCounter].y / 2
                                         );

                                         tempPoint = new Point(
                                             tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                             tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                         );
                                         tempPoint = new Point(
                                             tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                             tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                         );
                                         tempPoint = new Point(
                                             tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                             tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                         );
                                         bezierPositions.push(tempPoint);
                                         testids.push(idCounter);
                                     }

                                     idCounter -= direction;
                                     if (idCounter > touchPointsArrayLength - 1)
                                         idCounter = 0;
                                     if (idCounter < 0)
                                         idCounter = touchPointsArrayLength - 1;
                                 }

                             }
                             bezierPositions.push(new Point(pocket.finalPoint.x, pocket.finalPoint.y));

                             let duration: number = 1 / (this.speed() / 60);
                             if (lastDirection == 0)
                                 duration *= 2.4;
                             else
                                 duration *= 2;
                             if (duration > 1.8)
                                 duration = 1.8;

                             this.animationInProgress = true;
                             let tl: TimelineMax = new TimelineMax();
                             tl.add(TweenMax.to(this, duration, {
                                 bezier: bezierPositions,
                                 ease: Linear.easeNone,
                                 onUpdate: this.onAnimationUpdate.bind(this),
                                 onUpdateParams: [pocket.x, pocket.y, pocket.radius],
                                 onComplete: this.declareAnimationFinished.bind(this)
                             }), 0);

                             tl.add(TweenMax.to(this.scale, duration - duration / 3, {
                                 x: 0.8,
                                 y: 0.8,
                                 ease: Linear.easeNone
                             }), 0);
                             tl.add(TweenMax.to(this, (duration - duration / 3), {
                                 alpha: 0,
                                 ease: Linear.easeNone
                             }), duration / 3);


                             return;
                         }
                     }*/

                    // });

                    if (this.canBeRemoved)
                        return;

                    /* if (!isCloserToGoal) {

                         if (p2BodyPos.x + this.radius > this.rightLimit) {
                             p2BodyPos.x = this.rightLimit - this.radius;
                         }
                         else if (p2BodyPos.x - this.radius < this.leftLimit) {
                             p2BodyPos.x = this.leftLimit + this.radius;
                         }
                         if (p2BodyPos.y + this.radius > this.downLimit) {
                             p2BodyPos.y = this.downLimit - this.radius;
                         }
                         else if (p2BodyPos.y - this.radius < this.upLimit) {
                             p2BodyPos.y = this.upLimit + this.radius;
                         }
                     }*/

                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;

                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;

                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            }

            protected declareAnimationFinished(): void {
                this.animationInProgress = false;
                // this.visible = false;
                // if (this.parent)
                //     this.parent.removeChild(this);
            }

        }
    }
}
