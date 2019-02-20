namespace Pockey {
    export module GameModule {

        import Vector2 = Framework.Utils.Vector2;
        import Settings = Framework.Settings;
        import Sprite = PIXI.Sprite;
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
                this.mass = 0.8;


            }

            protected worldPreSolveHandler(): void {

                // if (this.speed() < 18)
                //     this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
            }


            protected addP2Body(): void {
                super.addP2Body();
                this.p2Body.damping = 0.12;
                this.p2Body.boundingRadius = this.radius;
                this.p2Body.allowSleep = true;
                this.p2Body.sleepSpeedLimit = 1; // Body will feel sleepy if speed<1 (speed is the norm of velocity)
                this.p2Body.sleepTimeLimit = 0.08;


            }

            protected getCircleMaterial(): p2.Material {
                return P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL);
            }

            protected addTexture(): void {
                this.radius = 25;
                this.ballTexture = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/ballGraphics/puck2.png"));
                //@ts-ignore
                this.ballTexture.pluginName = "picture";

                this.ballTexture.scale.set(0.5);
                this.ballTexture.anchor.set(0.5);

                this.addChild(this.ballTexture);
            }

            public animatePocketCollision(pocketPosition: Vector2, newX: number = null) {
                let animationSpeed: number = 1 / this.speed();

                this.x = pocketPosition.x;
                TweenMax.to(this, animationSpeed, {
                    x: newX
                });
            }



            public update(): void {

                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

                if (this.canBeRemoved) {
                    this.moving = false;
                    return;
                }

                if(!this.moving)
                    return;
// console.log("puck angle: " + this.p2Body.angle);
                //person.age >=16 ? 'Yes' : 'No';
                if (this.moving && !this.canBeRemoved) {

                    let isCloserToGoal: boolean = false;
                    let p2BodyPos: Vector2 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let goalScored: boolean = false;
                    let goalType: BallType;

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
                        }
                    }

                    if (this.canBeRemoved)
                        return;

                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;

                    if (!isCloserToGoal) {

                        //todo if distance to pockets is closer than plm
                        /*if (p2BodyPos.x + this.radius - this.radius / 2 > this.rightLimit) {
                            this.x = this.rightLimit - this.radius + this.radius / 2;
                        }
                        else if (p2BodyPos.x - this.radius + this.radius / 2< this.leftLimit) {
                            this.x = this.leftLimit + this.radius- this.radius / 2;
                        }
                        if (p2BodyPos.y + this.radius - this.radius / 2> this.downLimit) {
                            this.y = this.downLimit - this.radius+ this.radius / 2;
                        }
                        else if (p2BodyPos.y - this.radius + this.radius / 2< this.upLimit) {
                            this.y = this.upLimit + this.radius- this.radius / 2;
                        }*/
                    }

                    this.ballShadow.x = this.x;
                    this.ballShadow.y = this.y;

                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;

                    this.rotation += this.p2Body.angle - this.p2Body.previousAngle;

                    // if(this.speed() < 1)
                    // {
                    //     this.rotation = this.p2Body.angle / Math.PI;
                    // }

                }
            }

            protected declareAnimationFinished(): void {
                this.animationInProgress = false;
                console.log("se termina la puck");
                // this.visible = false;
                // if (this.parent)
                //     this.parent.removeChild(this);
            }

        }
    }
}
