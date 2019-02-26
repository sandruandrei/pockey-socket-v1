///<reference path="../../../Framework/Settings.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
///<reference path="balls/abstract-ball.ts"/>
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
        import Vector2 = Framework.Utils.Vector2;

        export class Goalie extends PIXI.Container {

            private goalieBottomLayer: Sprite;
            public goalieMiddleLayer: Sprite;
            private goalieTopLayer: Sprite;
            private animationTimeline: TimelineMax;
            public blocked:boolean = false;

            public isGoing: string = "down"; //"up" or "down"

            public type: BallType;
            public moving: boolean = false;

            private goaliePolygonCoord: number[][] = [
                [-25 - 2, 13 + 2],
                [-24 - 2, -5 - 2],
                [-17 - 5, -16 + 2],
                [-22 - 4, -20 + 2],
                [-17 - 2, -30 - 2],
                [-10 - 2, -29 - 2],
                [-6 - 2, -35 - 2],
                [28, -37],
                [28, 37],
                [-5 - 2, 35 + 2],
                [-18 - 2, 35 + 2],
                [-26 - 2, 29 + 2]];

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

            public goalieBody: p2.Body;
            public goalieBodyShadow: p2.Body;
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
            }

            public setBodyPosition(): void {
                this.goalieBody.position[0] = this.x;
                this.goalieBody.position[1] = this.y;

                this.goalieBodyShadow.position[0] = this.x;
                this.goalieBodyShadow.position[1] = this.y;
            }

            public setPosition(position: Vector2): void {
                this.x = position.x;
                this.y = position.y;

                this.setBodyPosition();
            }


        }
    }
}
