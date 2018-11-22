///<reference path="../../../Framework/Settings.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/21/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Settings = Framework.Settings;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        import Vector2 = Framework.Utils.Vector2;
        import Graphics = PIXI.Graphics;
        import Point = PIXI.Point;
        import DisplayObject = PIXI.DisplayObject;
        import DisplayObjectContainer = PIXI.core.DisplayObjectContainer;

        export class Goalie extends PIXI.Container {

            private goalieBottomLayer: Sprite;
            public goalieMiddleLayer: Sprite;
            private goalieTopLayer: Sprite;
            private animationTimeline: TimelineMax;

            private goDownTween:TweenMax;
            private goUpTween:TweenMax;
            private yLimit:number = 50;
            public isGoing:string = "down"; //"up" or "down"

            public type: string;
            public moving: boolean = false;
            private gr: Graphics;

            private goaliePolygonCoord: number[][] = [
                [-25-2, 13 + 2],
                [-24-2, -5 -2],
                [-17-5, -16 +2],
                [-22-4, -20 +2],
                [-17-2, -30-2],
                [-10-2, -29-2],
                [-6-2, -35-2],
                [28, -37],
                [28, 37],
                // [-2+2, -35-2],
                // [15 + 2, -25-2],
                // [16 + 2, -15-2],
                // [25 + 2, -8-2],
                // [25 + 2, 8 + 2],
                // [16 + 2, 15+ 2],
                // [17 + 2, 27+ 2],
                // [10 + 2, 33+ 2],
                // [0 + 2, 30+ 2],
                [-5-2, 35+ 2],
                [-18-2, 35+ 2],
                [-26-2, 29+ 2]];

            private goalieShadowPolygonCoord: number[][] = [
                [-42, 6],
                [-36, -32],
                [-17, -42],
                [-4, -52],
                [11, -46],
                [31, -24],
                [42, 16],
                [34, 26],
                [22, 48],
                [3, 50],
                [-15, 52],
                [-34, 47],
                [-40, 23]
            ];

            private goalieBody: p2.Body;
            private goalieBodyShadow: p2.Body;
            private side: string;

            constructor(side: string) {
                super();

                this.side = side;
                this.name = side + "Goalie";

                this.goalieBody = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(this.goalieBody);
                this.goalieBody.fromPolygon(this.goaliePolygonCoord);
                _.forEach(this.goalieBody.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.GOALIE_MATERIAL);
                });

                this.goalieBodyShadow = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(this.goalieBodyShadow);
                this.goalieBodyShadow.fromPolygon(this.goalieShadowPolygonCoord);
                _.forEach(this.goalieBodyShadow.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
                });


                this.goalieBottomLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_bottom.png"));
                this.goalieMiddleLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_color.png"));
                this.goalieTopLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_top.png"));
                this.addChild(this.goalieBottomLayer);
                this.addChild(this.goalieMiddleLayer);
                this.addChild(this.goalieTopLayer);

                this.pivot.set(this.width / 2, this.height / 2);

                // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUiText.bind(this));
                // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame])

///////////////////////
                /*this.gr = new Graphics();
                // this.gr.beginFill(0x000000, 0.4);
                this.gr.lineStyle(1, 0xff9900);
                /!*this.gr.moveTo(150, 150);
                this.gr.lineTo(200,200);*!/
                // this.gr.drawRect(0, 0, 50, 70);
                let polygoncoord: Point[] = [];

                _.forEach(this.goaliePolygonCoord, (lineCoord: number[], id: number) => {

                    polygoncoord.push(new Point(lineCoord[0], lineCoord[1]));

                    if (id == 0) {
                        this.gr.moveTo(lineCoord[0], lineCoord[1]);
                    }

                    if (id > 0) {
                        this.gr.lineTo(lineCoord[0], lineCoord[1]);
                        /!*let prevPointCounter = id - 1;
                        let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                        let v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                        this.createLine(v1, v2, MaterialType.LINE_MATERIAL);*!/
                    }
                    // nextPointCounter = id + 1;
                    // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
                    //
                    // }
                });
                // this.gr.drawPolygon(polygoncoord);
                this.gr.endFill();*/

// this.alpha = 0.2
                ///////////////////////

            }

            public setBodyPosition(): void {
                this.goalieBody.position[0] = this.x;
                this.goalieBody.position[1] = this.y;
                this.goalieBody.angle = this.rotation;

                this.goalieBodyShadow.position[0] = this.x;
                this.goalieBodyShadow.position[1] = this.y;
                this.goalieBodyShadow.angle = this.rotation;

                /*this.gr.x = this.goalieBody.position[0];
                this.gr.y = this.goalieBody.position[1];
                this.gr.rotation = this.rotation;

                                if (!this.gr.parent && this.parent) {
                                    this.parent.addChild(this.gr);
                                }*/
            }

            public setPosition(position: Vector2): void {
                this.x = position.x;
                this.y = position.y;

                this.setBodyPosition();
            }

            private onUpdateUiText(params: any[]): void {
                if (params[0] == PockeyStateTexts.beginGame) {
                    this.startMoving();
                }
            }

            public addGrToPool(parent: Container): void {

                parent.addChild(this.gr);
            }

            public startMoving(): void {
                // this.reset();
                this.moving = true;


                if(this.isGoing == "down")
                {
                    this.startGoDownTween();
                }
                else
                {
                    this.startGoUpTween();
                }
            }

            private startGoDownTween():void
            {
                this.resetTweens();

                let tweenTime:number = (this.yLimit - this.y) / (2 * this.yLimit);

                this.goDownTween = TweenMax.to(this, Math.abs(tweenTime), {
                    y: this.yLimit,
                    ease: Linear.easeNone,
                    onUpdate: this.onGoDownUpdate.bind(this),
                    onComplete: this.startGoUpTween.bind(this)
                });
            }

            private startGoUpTween():void
            {
                this.resetTweens();

                let tweenTime:number = (-this.yLimit - this.y) / (2 * this.yLimit);

                this.goUpTween = TweenMax.to(this, Math.abs(tweenTime), {
                    y: -this.yLimit,
                    ease: Linear.easeNone,
                    onUpdate: this.onGoUpUpdate.bind(this),
                    onComplete: this.startGoDownTween.bind(this)
                });
            }

            private onGoDownUpdate():void
            {
                this.isGoing = "down";
                // console.log("se face down update");
                this.setBodyPosition();
            }

            private onGoUpUpdate():void
            {
                this.isGoing = "up";
                // console.log("se face up update");

                this.setBodyPosition();
            }


            public resetTweens(): void {
                this.moving = false;

                if (this.goUpTween && this.goUpTween.isActive()) {
                    this.goUpTween.kill();
                    this.goUpTween = null;
                }

                if (this.goDownTween && this.goDownTween.isActive()) {
                    this.goDownTween.kill();
                    this.goDownTween = null;
                }

                TweenMax.killTweensOf(this);
                // this.goalieMiddleLayer.tint = null;
                // this.y = 0;

            }
        }
    }
}
