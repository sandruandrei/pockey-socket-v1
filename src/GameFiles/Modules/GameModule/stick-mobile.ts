///<reference path="stick.ts"/>
///<reference path="../../../Framework/Utils/touch-handler.ts"/>
namespace Pockey {
    import Stick = Pockey.GameModule.Stick;
    import TouchHandler = Framework.Utils.TouchHandler;
    import Point = PIXI.Point;
    import SignalsManager = Framework.Signals.SignalsManager;
    import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
    import PointLike = PIXI.PointLike;

    export class StickMobile extends Stick {
        // constructor
        constructor() {
            super();
            // console.log("stick constructor");

            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, this.onStickPowerMobile.bind(this));
            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_MOBILE_RELEASE, this.stickMobileRelease.bind(this));
        }

        public activate(position: Point | PointLike): void {
            // console.log("stick la activate");

           super.activate(position);

            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_STICK_POWER_MOBILE);

            // console.log("la activate -> stick rotation enabled: " + this.rotationEnabled);

        }

        private stickMobileRelease(params: any[]): void {
            // let stickPower: number = params[0];

            if (this.power > 6) {
                // console.log("stick intra la power mai mare!!!");

                this.release();
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_STICK_POWER_MOBILE);
            }
            else if (this.power == 0) {
                // console.log("stick intra la power zero!!!");

                this.rotationEnabled = true;
            }
        }

        private onStickPowerMobile(params: any[]): void {
            let stickPower: number = params[0];
            this.rotationEnabled = false;

            this.increasePower(stickPower);
        }

        protected increasePower(stickPower: number): void {
            // if (this.pivot.x - this.initialPivotPoint.x < 100) {
            // TweenMax.to(this.pivot, 0.1, {x: this.initialPivotPoint.x + stickPower});
            this.pivot.x = this.initialPivotPoint.x + stickPower;
            console.log("pivotu pizdii: " + this.initialPivotPoint.x, stickPower, this.pivot.x);
            this.power = stickPower * this.stickPowerFactor;
            // }
        }

        public update(): void {
            // console.log("stick update");

            if (this.isActive) {
                // console.log("stick intra la is active!!");

                // if (!MouseHandler.Instance().left.down) {
                //     console.log("stick NU intra la left button down!!! rotation: " + this.rotationEnabled);
                // }
                // console.log("TouchHandler.Instance().isTouchMoving: " + TouchHandler.Instance().isTouchMoving);

                if (this.rotationEnabled && TouchHandler.Instance().isTouchMoving) {
                    console.log("intra la rotation enabled");
                    // console.log("stick intra la rotation is enabled!!");

                    let localPoint = this.parent.toLocal(
                        new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                    this.opposite = localPoint.y - this.position.y;
                    this.adjacent = localPoint.x - this.position.x;
                    this.rotation = Math.atan2(this.opposite, this.adjacent);

                    this.clickPointRegistered = false;
                    this.pivot.x = this.initialPivotPoint.x;
                    // if(this.raycastFollower)
                }

                /* if (MouseHandler.Instance().left.down) {
                     // console.log("stick intra la left button down!!!");

                     this.rotationEnabled = false;

                     if (!this.clickPointRegistered) {
                         // console.log("stick intra la click point registered!!!");

                         let localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                         this.clickPointRegistered = true;
                         this.clickPoint = new Vector2(localPoint.x, localPoint.y);

                         let oppRot: Vector2 = new Vector2(Math.cos(90 * Math.PI / 180 + this.rotation),
                             Math.sin(90 * Math.PI / 180 + this.rotation)).normalise();

                         this.firstPointOfTangent = new Vector2(localPoint.x - oppRot.x * 1500, localPoint.y - oppRot.y * 1500);
                         this.secondPointOfTangent = new Vector2(localPoint.x + oppRot.x * 1500, localPoint.y + oppRot.y * 1500);

                         // let g: Graphics = new Graphics();
                         // g.beginFill(0xff990);
                         // g.lineStyle(2, 0x000000);
                         // g.moveTo(this.firstPointOfTangent.x, this.firstPointOfTangent.y);
                         // g.lineTo(this.secondPointOfTangent.x, this.secondPointOfTangent.y);
                         // g.endFill();
                         // this.parent.addChild(g);


                     } else {
                         // console.log("stick NU intra la click point registered!!!");

                         let stickPower: number = 0;

                         let localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                         let mouseDirection: number = (localPoint.x - this.firstPointOfTangent.x) * (this.secondPointOfTangent.y - this.firstPointOfTangent.y) - (localPoint.y - this.firstPointOfTangent.y) * (this.secondPointOfTangent.x - this.firstPointOfTangent.x);

                         if (mouseDirection > 0)
                             mouseDirection = -1;
                         else
                             mouseDirection = 1;

                         if (mouseDirection > 0) {
                             stickPower = this.distToSegment(localPoint, this.firstPointOfTangent, this.secondPointOfTangent);
                         }
                         else {
                             stickPower = 0
                         }

                         stickPower /= 2;
                         if (stickPower > 120)
                             stickPower = 120;

                         // console.log("stick powa: " + stickPower);
                         this.increasePower(stickPower);
                     }
                 }
                 else if (this.power > 6) {
                     // console.log("stick intra la power mai mare!!!");

                     this.release();
                 }
                 else if (this.power == 0) {
                     // console.log("stick intra la power zero!!!");

                     this.rotationEnabled = true;

                 }


                 // } else if (this.power <= 0) {
                 //     this.rotationEnabled = true;
                 //     // this.x = this.initialPivotPoint.x;
                 // }
                 if (this.rotationEnabled && TouchHandler.Instance().isTouchMoving) {
                     // console.log("stick intra la rotation is enabled!!");

                     let localPoint = this.parent.toLocal(
                         new Point(TouchHandler.Instance().position.x, MouseHandler.Instance().position.y));
                     this.opposite = localPoint.y - this.position.y;
                     this.adjacent = localPoint.x - this.position.x;
                     this.rotation = Math.atan2(this.opposite, this.adjacent);

                     this.clickPointRegistered = false;
                     this.pivot.x = this.initialPivotPoint.x;
                     // if(this.raycastFollower)
                 }*/
            }
            /*  else {
                  console.log("stick NU active!!");

              }*/

        }
    }
}