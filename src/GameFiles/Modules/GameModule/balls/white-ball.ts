namespace Pockey {
    export module GameModule {


        export class WhiteBall extends AbstractBall {


            private ballWasShot: boolean = false;
            private _isOnReposition: boolean = false;
            private _isOnRearrange: boolean = false;

            constructor() {
                super();

                this.ballType = BallType.White;
                this.name = "WhiteBall";
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

                super.onShoot(rotation, power);
                this.ballWasShot = true;
            }

            set isOnReposition(value: boolean) {
                this._isOnReposition = value;
                if (value == true)
                {
                    // console.log("intra la enabled false!");
                    this.sphere.setEnabled(false);
                    this.ballShadow.scale.x = 0;
                    this.ballShadow.scale.y = 0;
                }
            }

            get isOnReposition(): boolean {
                // console.log("se cere: " +  this._isOnReposition);
                return this._isOnReposition;
            }

            set isOnRearrange(value: boolean) {
                this._isOnRearrange = value;
                if (value == true)
                {
                    // console.log("intra la enabled false!");
                    this.reset();
                }
            }

            get isOnRearrange(): boolean {
                // console.log("se cere: " +  this._isOnReposition);
                return this._isOnRearrange;
            }

            public update(): void {
                super.update();

                // console.log("white ball pos: " + this.x, this.y);
            }

// public getBallData(): Pockey.GameModule.BallData {
            //     // console.log("last pos sent: " + this.lastPositions.length);
            //     return super.getBallData();
            // }
            //
            //
            // public setBallData(ballData: Pockey.GameModule.BallData): void {
            //     // console.log("last pos received: " + this.lastPositions.length);
            //     super.setBallData(ballData);
            // }


        }
    }
}
