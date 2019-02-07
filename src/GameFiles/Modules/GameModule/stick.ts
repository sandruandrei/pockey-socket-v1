///<reference path="../../../Framework/Utils/mouse-handler.ts"/>
///<reference path="../../../Framework/Signals/signal-types.ts"/>
///<reference path="../ConnectionModule/pocket-connection-channels-and-messages.ts"/>
///<reference path="../SoundModule/pockey-sound-names.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/16/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Point = PIXI.Point;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import Vector2 = Framework.Utils.Vector2;
        import PointLike = PIXI.PointLike;
        import MouseHandler = Framework.Utils.MouseHandler;
        import SignalsType = Framework.Signals.SignalsType;
        import PockeySoundURLS = Pockey.Sound.PockeySoundURLS;

        export enum StickType {
            Basic = "stick_basic.png",
            BlueSteel = "stick_bluesteel.png",
            CandyCue = "stick_candycue.png",
            Default = "stick_default.png",
            Dotty = "stick_dotty.png",
            E = "stick_e.png",
            Facebook1 = "stick_facebook01.png",
            Facebook2 = "stick_facebook02.png",
            Funky = "stick_funky.png",
            Gnarly = "stick_gnarly.png",
            Ivory = "stick_ivory.png",
            KingsGlaive = "stick_kingsglaive.png",
            Ninja = "stick_ninja.png",
            Pinky = "stick_pinky.png",
            GDY = "stick_qdy.png",
            Rocket = "stick_rocket.png",
            Rockstar = "stick_rockstar.png",
            Saber = "stick_saber.png",
            Sevn = "stick_sevn.png",
            Snake = "stick_snake.png",
            TigerMasou = "stick_tigermasou.png",
            Twisted = "stick_twisted.png",
            Twitch = "stick_twitch.png",
            Twitter1 = "stick_twitter01.png"
        }

        export class Stick extends Sprite {
            public power: number = 0;
            public rotationEnabled: boolean = false;
            private leftLimit: number;
            private rightLimit: number;
            private upLimit: number;
            private downLimit: number;
            protected opposite: number;
            protected adjacent: number;
            private shootTimeline: TimelineLite;
            public isActive: boolean = false;
            public startPosition: Point;
            public initialPosition: Point;
            public initialPivotPoint: Point;

            protected clickPoint: Vector2;
            protected clickPointRegistered: boolean = false;
            protected firstPointOfTangent: Vector2;
            protected secondPointOfTangent: Vector2;
            protected stickPowerFactor: number = 3.8;
            protected mouseReleased: boolean = false;

            constructor() {
                super();
                this.SetStickSkin(StickType.Default);
                this.initialPivotPoint = new Point(this.texture.width + 8, this.texture.height / 2);
                this.pivot = this.initialPivotPoint;
                this.defineShootTimeline();

            }

            public SetStickSkin(stickType: StickType) {

                this.texture = PIXI.Texture.fromFrame(stickType.toString());
            }

            public getStickState(): StickState {
                let stickState: StickState = {
                    x: this.x,
                    y: this.y,
                    rotation: this.rotation,
                    pivotX: this.pivot.x,
                    visible: this.visible
                };

                return stickState;
            }

            public setState(stickState: StickState, duration:number): void {
                this.x = stickState.x;
                this.y = stickState.y;
                this.visible = stickState.visible;
                // this.rotation = stickState.rotation;
                this.pivot.x = stickState.pivotX;

                let time: number = (duration + 1 / 60) / 2;

                TweenMax.to(this, time, {
                    rotation: stickState.rotation,
                    ease:Linear.easeNone,
                });
                // this.reset();

            }

            private hide():void
            {
                TweenMax.to(this, 0.1, {alpha:0});
            }

            public update(): void {
                // if (!MouseHandler.Instance().left.down)
                //     this.mouseReleased = true;

                if (this.isActive) {
                    // console.log("stick intra la is active!!");

                    // if (!MouseHandler.Instance().left.down) {
                    //     console.log("stick NU intra la left button down!!! rotation: " + this.rotationEnabled);
                    // }
                    // if (MouseHandler.Instance().left.down && this.mouseReleased) {
                    if (MouseHandler.Instance().left.down) {

                        console.log("stick intra la left button down!!!");

                        this.rotationEnabled = false;
// if(this.mouseReleased)
// {
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
                    if (this.rotationEnabled && (!MouseHandler.Instance().left.down)) {
                        // console.log("stick intra la rotation is enabled!!");

                        let localPoint = this.parent.toLocal(
                            new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                        this.opposite = localPoint.y - this.position.y;
                        this.adjacent = localPoint.x - this.position.x;
                        this.rotation = Math.atan2(this.opposite, this.adjacent);

                        this.clickPointRegistered = false;
                        this.pivot.x = this.initialPivotPoint.x;
                        // if(this.raycastFollower)
                    }

                }
                /*  else {
                      console.log("stick NU active!!");

                  }*/
            }

            protected increasePower(stickPower: number): void {
                // if (this.pivot.x - this.initialPivotPoint.x < 100) {
                // TweenMax.to(this.pivot, 0.1, {x: this.initialPivotPoint.x + stickPower});
                this.pivot.x = this.initialPivotPoint.x + stickPower;
                this.power = stickPower * this.stickPowerFactor;
                // }
            }

            protected release(): void {
                // console.log("la release");
                this.isActive = false;
                this.clickPointRegistered = false;
                this.shootTimeline.play(0);


            }

            // public setWallLimits(left: number, right: number, up: number, down: number): void {
            //     this.leftLimit = left;
            //     this.rightLimit = right;
            //     this.upLimit = up;
            //     this.downLimit = down;
            // }

            public reset(): void {
                this.isActive = false;
                this.rotationEnabled = false;
                this.clickPointRegistered = false;
                // if (MouseHandler.Instance().left.down)
                //     this.mouseReleased = false;
            }

            public GoToStartPosition(): void {
                this.x = this.startPosition.x;
                this.y = this.startPosition.y;
            }

            public activate(position: Point | PointLike): void {
                // console.log("stick la activate");

                this.position.x = position.x;
                this.position.y = position.y;
                this.isActive = true;
                this.rotationEnabled = true;
                this.visible = true;
                // console.log("la activate -> stick rotation enabled: " + this.rotationEnabled);

            }

            private defineShootTimeline(): void {
                this.shootTimeline = new TimelineLite();
                this.shootTimeline.pause();
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.05, {
                    x: this.initialPivotPoint.x - 8,
                    onComplete: this.shoot.bind(this)
                }));
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.1, {
                    x: this.initialPivotPoint.x
                }));

            }


            private shoot(): void {
                // this.power = 0;
                // console.log("stick power: " + this.power);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOOT_BALL);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.SHOOT_BALL}]);
                this.visible = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
                // this.isActive = false;
            }

            private dist2(v: Vector2, w: Vector2) {
                return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
            }

            private distToSegmentSquared(point: Vector2, firstLinePoint: Vector2, secondLinePoint: Vector2): number {
                let l2 = this.dist2(firstLinePoint, secondLinePoint);
                if (l2 == 0)
                    return this.dist2(point, firstLinePoint);

                var t = ((point.x - firstLinePoint.x) * (secondLinePoint.x - firstLinePoint.x) + (point.y - firstLinePoint.y) * (secondLinePoint.y - firstLinePoint.y)) / l2;
                t = Math.max(0, Math.min(1, t));

                return this.dist2(point, new Vector2(
                    firstLinePoint.x + t * (secondLinePoint.x - firstLinePoint.x),
                    firstLinePoint.y + t * (secondLinePoint.y - firstLinePoint.y)
                ));
            }

            protected distToSegment(p, v, w) {
                return Math.sqrt(this.distToSegmentSquared(p, v, w));
            }
        }
    }
}
