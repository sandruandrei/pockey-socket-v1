/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/8/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Graphics = PIXI.Graphics;
        import Point = PIXI.Point;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class MobileStickPower extends Container {
            private stickTexture: Sprite;
            private backgroundGraphics: Sprite;
            private touchGraphics: Container;
            private initialStickY: number = 60;
            private stickMaxY: number = 528;
            private isDown: boolean = false;
            private stickPowerFactor: number = PockeySettings.DELTA * 10;
            private power: number;

            constructor() {
                super();
                this.visible = false;

                this.backgroundGraphics = new Sprite(PIXI.Texture.fromFrame("power-bg.png"));
                this.backgroundGraphics.anchor.x = 0.5;

                this.addChild(this.backgroundGraphics);

                this.stickTexture = new Sprite(PIXI.Texture.fromFrame(StickType.Default));
                this.stickTexture.anchor.y = 0.5;
                this.stickTexture.anchor.x = 1;
                this.stickTexture.rotation = -90 * Math.PI / 180;
                this.stickTexture.y = this.initialStickY;

                this.addChild(this.stickTexture);

                this.touchGraphics = new Container();
                this.touchGraphics.interactive = true;
                let newGr: Graphics = new Graphics();
                newGr.beginFill(0xff9900, 0);
                newGr.drawRect(0, 0, this.backgroundGraphics.width, this.backgroundGraphics.height);
                // newGr.pivot.y = this.stickTexture.anchor.y * newGr.height;
                // newGr.pivot.x = this.stickTexture.anchor.x * newGr.width;
                newGr.x = this.backgroundGraphics.x;
                newGr.y = this.backgroundGraphics.y;
                // newGr.rotation = this.stickTexture.rotation;
                this.touchGraphics.addChild(newGr);
                this.touchGraphics.pivot.x = this.backgroundGraphics.anchor.x * this.touchGraphics.width;

                this.touchGraphics.on("touchstart", (event) => {
                    this.isDown = true;
                    let localPosition: Point = new Point();
                    event.data.getLocalPosition(this.touchGraphics, localPosition, event.data.global);
                    this.stickTexture.y = localPosition.y;
                    if (this.stickTexture.y < this.initialStickY)
                        this.stickTexture.y = this.initialStickY;
                    else if (this.stickTexture.y > this.stickMaxY)
                        this.stickTexture.y = this.stickMaxY;
                    console.log("mobile stick start ");
                    this.power = (this.stickTexture.y - this.initialStickY) * (PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));

                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);

                });

                this.touchGraphics.on("touchmove", (event) => {
                    if (this.isDown) {

                        let localPosition: Point = new Point();
                        event.data.getLocalPosition(this.touchGraphics, localPosition, event.data.global);
                        this.stickTexture.y = localPosition.y;
                        if (this.stickTexture.y < this.initialStickY)
                            this.stickTexture.y = this.initialStickY;
                        else if (this.stickTexture.y > this.stickMaxY)
                            this.stickTexture.y = this.stickMaxY;

                        this.power = (this.stickTexture.y - this.initialStickY) * (PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));

                        SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);

                    }
                });

                this.touchGraphics.on("touchend", () => {
                    this.isDown = false;

                    TweenMax.to(this.stickTexture, 0.05, {y: this.initialStickY});

                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [this.power]);

                    /*let power: number = (this.stickTexture.y - this.initialStickY) * (PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));
                    power *= this.stickPowerFactor;*/
                });

                this.touchGraphics.on("touchendoutside", () => {
                    this.isDown = false;

                    TweenMax.to(this.stickTexture, 0.05, {y: this.initialStickY});

                    /*let power: number = (this.stickTexture.y - this.initialStickY) * (PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));
                    power *= this.stickPowerFactor;*/
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [this.power]);

                });

                this.addChild(this.touchGraphics);

                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_STICK_POWER_MOBILE, this.onHide.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_STICK_POWER_MOBILE, this.onShow.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
            }

            protected onResetStickPower():void
            {
                this.power = 0;

                SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);

                this.isDown = false;

                this.stickTexture.y = this.initialStickY;

                this.onHide();
            }

            private onHide(): void {
                TweenMax.to(this, 0.2, {
                    alpha: 0, onComplete: () => {
                        this.visible = false;
                    }
                });
            }

            private onShow(): void {
                this.visible = true;
                TweenMax.to(this, 0.2, {
                    alpha: 1
                });
            }


        }
    }
}
