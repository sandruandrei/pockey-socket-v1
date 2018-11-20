namespace Pockey {
    export module GameModule {


        export class WhiteBall extends AbstractBall {
            private ballWasShot: boolean = false;

            constructor() {
                super();
                this.ballType = BallType.White;
                this.name = "WhiteBall";
                // this.tintBall(0xffffff);
                // (this.getChildAt(0) as Graphics).tint = 0xff9900;
                // this.ci
            }

            protected worldPreSolveHandler(): void {
                if (this.ballWasShot) {
                    this.ballWasShot = false;
                    this.p2Body.velocity = [this.velocity.x, this.velocity.y];
                }
                super.worldPreSolveHandler();


                // if (this.speed() < 100)
                //     this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
            }


            onShoot(rotation: number, power: number): void {
                // this.rotation = rotation;
                // this.moving = true;
                super.onShoot(rotation, power);
                this.ballWasShot = true;


                // this.p2Body.wakeUp();
                // this.p2Body.velocity = [this.velocity.x, this.velocity.y];
                // console.log("speed: " + this.velocity.x, this.velocity.y);
                // this.p2Body.angularVelocity =   0;
                // this.p2Body.applyImpulse( [this.velocity.x,  this.velocity.y], [this.velocity.x,  this.velocity.y])
                // this.p2Body.force = [this.power, this.power];

                // this.p2Body.force = [this.power, this.velocity.y * power];
                // this.p2Body.angularForce = 80;//[this.velocity.x, this.velocity.y];
                // this.p2Body.force = [this.power, this.power];//[this.velocity.x, this.velocity.y];


            }


            update(): void {
              /*  if(this.parent)
                    console.log("white ball parent nickname: " + this.parent.nickname);*/
                super.update();
                // console.log("shoot speed: " + this.speed());
                // console.log("p2 velocity: " + this.p2Body.velocity[0], this.p2Body.velocity[1]);

                // console.log("speed: " + this.speed());

            }

// protected registerSignals() {
            // super.registerSignals();

            // SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
            // }


        }
    }
}
