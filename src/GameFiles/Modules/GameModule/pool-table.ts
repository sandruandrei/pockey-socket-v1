///<reference path="../../../Framework/Utils/Rect.ts"/>
///<reference path="decal.ts"/>
///<reference path="stick.ts"/>
///<reference path="stick-mobile.ts"/>
///<reference path="balls/puck.ts"/>
///<reference path="balls/white-ball.ts"/>
///<reference path="puck-goal.ts"/>
///<reference path="goalie.ts"/>
///<reference path="Pocket.ts"/>
///<reference path="table-felt.ts"/>

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
import Container = PIXI.Container;

namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Graphics = PIXI.Graphics;
        import Point = PIXI.Point;
        import Vector2 = Framework.Utils.Vector2;
        import Line = Framework.Utils.Line;
        import Rect = Framework.Utils.Rect;
        import Rectangle = PIXI.Rectangle;
        import Settings = Framework.Settings;
        import Circle = PIXI.Circle;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class PoolTable extends Container {

            private poolTableBackground: Sprite;
            private poolTableBumper: Sprite;
            private poolTableOverFrame: Sprite;
            private decalIcon: Decal;

            private ballsDistance: number = 108;

            public leftGoal: PuckGoal;
            public rightGoal: PuckGoal;

            public leftGoalie: Goalie;
            public rightGoalie: Goalie;
            public leftBallsArray: AbstractBall[];
            public rightBallsArray: AbstractBall[];

            public balls: AbstractBall[];

            private playGround: Rectangle;
            public leftLimit: number;
            public rightLimit: number;
            public upLimit: number;
            public downLimit: number;

            public puck: Puck;
            public whiteBall: WhiteBall;
            public poolStick: Stick;

            public BallPositionCircleRadius: number;
            public ballAnimationHolder: Container;

            public ballPocket1: Sprite;
            public ballPocket2: Sprite;
            public ballPocket3: Sprite;
            public ballPocket4: Sprite;

            public limits: Line[];
            public pockets: Pocket[];

            public shadowsHolder: Container;
            public ballsHolder: Container;

            public leftGoalkeeperCircle: Circle;
            public rightGoalkeeperCircle: Circle;
            public goalkeepersCircles: Circle[];

            constructor() {
                super();
                this.name = "poolTable";
                this.createElements();
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameUi.bind(this))
            }

            private onShowGameUi(): void {
                this.shadowsHolder.visible = true;
                this.puck.visible = true;
                _.forEach(this.balls, (ball:AbstractBall)=>{
                   if(ball.ballType != BallType.Puck)
                   {
                       ball.enableSphere();
                   }
                });
            }

            private createElements(): void {
                this.balls = [];

                //poolTableBackground
                this.poolTableBackground = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_felt.png"));


                this.poolTableBackground.name = "poolTableBackground";
                this.poolTableBackground.x = -this.poolTableBackground.width / 2;//472;
                this.poolTableBackground.y = -this.poolTableBackground.height / 2;//284;
                this.addChild(this.poolTableBackground);
                ////end poolTableBackground

                this.shadowsHolder = new Container();
                this.shadowsHolder.visible = false;
                this.addChild(this.shadowsHolder);

                PockeySettings.MIDDLE_TABLE_POS = new Vector2(0, 0);

                PockeySettings.MIDDLE_TABLE_LEFT_POS = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x - 244, PockeySettings.MIDDLE_TABLE_POS.y);
                PockeySettings.MIDDLE_TABLE_RIGHT_POS = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + 400, PockeySettings.MIDDLE_TABLE_POS.y);

                //poolTableOverFrame
                this.poolTableOverFrame = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_border_01.png"));
                this.poolTableOverFrame.name = "poolTableOverFrame";
                this.poolTableOverFrame.x = PockeySettings.MIDDLE_TABLE_POS.x - this.poolTableOverFrame.width / 2;
                this.poolTableOverFrame.y = PockeySettings.MIDDLE_TABLE_POS.y - this.poolTableOverFrame.height / 2;
                this.addChild(this.poolTableOverFrame);

                //end poolTableOverFrame

                this.ballAnimationHolder = new Container();
                this.addChild(this.ballAnimationHolder);

                //poolTableBumper
                this.poolTableBumper = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bumper.png"));
                this.poolTableBumper.name = "poolTableBumper";
                this.poolTableBumper.x = -this.poolTableBumper.width / 2;//485;
                this.poolTableBumper.y = -this.poolTableBumper.height / 2;//300;
                this.addChild(this.poolTableBumper);

                let tableFeltManager: TableFelt = new TableFelt(this.poolTableBackground, this.poolTableBumper);
                ////end poolTableBumper


                //play ground
                this.playGround = new Rectangle(-970 / 2, -484 / 2, 970, 484);
                this.setTableLimits();
                /////end play ground

                //Pockets
                this.addPocketsAndBlockers();
                //end pockets

                // decal icon
                this.decalIcon = new Decal();
                this.decalIcon.name = "decalIcon";
                this.decalIcon.x = PockeySettings.MIDDLE_TABLE_POS.x;
                this.decalIcon.y = PockeySettings.MIDDLE_TABLE_POS.y;
                this.addChild(this.decalIcon);
                //end decal icon

                //ballsHolder
                this.ballsHolder = new Container();
                this.ballsHolder.name = "ballsHolder";
                this.addChild(this.ballsHolder);
                //end ballsHolder

                //puck
                this.puck = new Puck();
                this.puck.visible = false;
                this.puck.ballAnimationHolder = this.ballAnimationHolder;
                this.puck.createBallShadow();
                this.puck.tintBall(PockeySettings.PUCK_COLOR);
                this.puck.x = PockeySettings.MIDDLE_TABLE_POS.x;
                this.puck.y = PockeySettings.MIDDLE_TABLE_POS.y;
                this.puck.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
                this.puck.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.shadowsHolder.addChild(this.puck.ballShadow);
                this.ballsHolder.addChild(this.puck);
                this.balls.push(this.puck);
                //end puck

                //rightGoal
                this.rightGoal = new PuckGoal("right");
                this.rightGoal.name = "rightGoal";
                this.rightGoal.x = PockeySettings.MIDDLE_TABLE_POS.x + 487;
                this.rightGoal.y = PockeySettings.MIDDLE_TABLE_POS.y - 116;
                this.addChild(this.rightGoal);
                //end rightGoal

                //leftGoal
                this.leftGoal = new PuckGoal("left");

                this.leftGoal.name = "leftGoal";
                this.leftGoal.x = PockeySettings.MIDDLE_TABLE_POS.x - 483 - this.leftGoal.width;
                this.leftGoal.y = PockeySettings.MIDDLE_TABLE_POS.y - 116;

                this.addChild(this.leftGoal);
                //end leftGoal

                this.puck.puckGoals = [this.leftGoal, this.rightGoal];
                this.puck.goalYPosition = this.leftGoal.y;
                this.puck.goalHeight = this.leftGoal.height;


                //goalies

                this.leftGoalie = new Goalie("left");
                this.leftGoalie.rotation = Math.PI;
                this.leftGoalie.setPosition(new Vector2(-468, 0));
                this.addChild(this.leftGoalie);

                this.leftGoalkeeperCircle = new Circle(-510, 0, 100);
                this.goalkeepersCircles = [];
                this.goalkeepersCircles.push(this.leftGoalkeeperCircle);

                this.rightGoalie = new Goalie("right");
                this.rightGoalie.setPosition(new Vector2(468, 0));
                this.addChild(this.rightGoalie);

                this.rightGoalkeeperCircle = new Circle(510, 0, 100);
                this.goalkeepersCircles.push(this.rightGoalkeeperCircle);

                //end goalies


                let graphics: Graphics = new Graphics();
                graphics.name = "graphics";

                //white ball
                this.whiteBall = new WhiteBall();
                this.whiteBall.ballAnimationHolder = this.ballAnimationHolder;

                this.whiteBall.createBallShadow();
                this.whiteBall.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_LEFT_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
                this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.whiteBall.setPockets(this.pockets);
                this.balls.push(this.whiteBall);
                this.shadowsHolder.addChild(this.whiteBall.ballShadow);

                //end white ball

                //rightBalls
                let ball: AbstractBall;
                this.rightBallsArray = [];
                this.leftBallsArray = [];
                let angle: number;

                _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
                    ball = new AbstractBall("right", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();
                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    ball.setPockets(this.pockets);
                    this.balls.push(ball);
                    this.rightBallsArray.push(ball);
                    angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI;

                    ball.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)),
                        PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));
                    this.shadowsHolder.addChild(ball.ballShadow);
                });
                //end right balls

                //left balls

                _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
                    ball = new AbstractBall("left", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();

                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    ball.setPockets(this.pockets);

                    this.balls.push(ball);
                    this.leftBallsArray.push(ball);
                    angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI + Math.PI / PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;

                    ball.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)),
                        PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));
                    this.shadowsHolder.addChild(ball.ballShadow);

                });
                //end left balls

                //poolStick
                if (Settings.isMobile) {
                    this.poolStick = new StickMobile();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }
                else {
                    this.poolStick = new Stick();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }

                this.poolStick.initialPosition = new Point(this.poolStick.x, this.poolStick.y);
                this.poolStick.startPosition = new Point(this.whiteBall.position.x, this.whiteBall.position.y);

                // this.poolStick.visible = false;
                this.addChild(this.poolStick);
                //end pool stick

                this.createUpperCollisionPolygon();
                this.createUpperCollisionShadowPolygon();
                this.createBottomCollisionPolygon();
                this.createBottomCollisionShadowPolygon();


            }

            private setTableLimits() {
                this.leftLimit = this.playGround.x;
                this.rightLimit = this.playGround.x + this.playGround.width;
                this.upLimit = this.playGround.y;
                this.downLimit = this.playGround.y + this.playGround.height;
            }

            private addPocketsAndBlockers() {
                let blocker1: Rect = this.createBlocker(new Rectangle(-494, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                let blocker2: Rect = this.createBlocker(new Rectangle(497, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
                let blocker3: Rect = this.createBlocker(new Rectangle(-492, -250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4a");
                let blocker4: Rect = this.createBlocker(new Rectangle(492, 250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4b");
                let blocker5: Rect = this.createBlocker(new Rectangle(492, -250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5a");
                let blocker6: Rect = this.createBlocker(new Rectangle(-492, 250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5b");
                let blocker7: Rect = this.createBlocker(new Rectangle(0, -270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7a");
                let blocker8: Rect = this.createBlocker(new Rectangle(0, 270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7b");


                this.pockets = [];
                let pocket1: Pocket = new Pocket(-497, -254, 26, new Vector2(-438, -200));
                this.pockets.push(pocket1);
                pocket1.addPoints(this);

                let pocket2: Pocket = new Pocket(0, -264, 26, new Vector2(0, -200));
                this.pockets.push(pocket2);
                pocket2.addPoints(this);

                let pocket3: Pocket = new Pocket(496, -255, 26, new Vector2(438, -200));
                this.pockets.push(pocket3);
                pocket3.addPoints(this);

                let pocket4: Pocket = new Pocket(497, 254, 26, new Vector2(438, 200));
                this.pockets.push(pocket4);
                pocket4.addPoints(this);

                let pocket5: Pocket = new Pocket(0, 263, 26, new Vector2(0, 200));
                this.pockets.push(pocket5);
                pocket5.addPoints(this);

                let pocket6: Pocket = new Pocket(-497, 253, 26, new Vector2(-438, 200));
                this.pockets.push(pocket6);
                pocket6.addPoints(this);

            }

            private createUpperCollisionPolygon(): void {
                let vertices: number[][] = PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let upperCollisionPolygon: p2.Body = new p2.Body({mass: 0, angularForce: 0, angularVelocity: 0});
                P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
                upperCollisionPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionPolygon.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.LINE_MATERIAL);
                });
                // let salam = new Sprite();
                /*_.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
                    // x1 = lineCoord[0];
                    // y1 = lineCoord[1];
                    // x2 = lineCoord[2];
                    // y2 = lineCoord[3];
                    if (id > 0) {
                        let prevPointCounter = id - 1;
                        let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                        let v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                        this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
                    }
                    // nextPointCounter = id + 1;
                    // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
                    //
                    // }
                });*/
            }

            private createUpperCollisionShadowPolygon(): void {
                let vertices: number[][] = PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                let upperCollisionShadowPolygon: p2.Body = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(upperCollisionShadowPolygon);
                upperCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionShadowPolygon.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
                });
                upperCollisionShadowPolygon.position [0] -= 1.5;
                upperCollisionShadowPolygon.position [1] += 1.5;

                /*_.forEach(PockeySettings.MAIN_COLLISION_SHADOW, (lineCoord: number[], id: number) => {
                    // x1 = lineCoord[0];
                    // y1 = lineCoord[1];
                    // x2 = lineCoord[2];
                    // y2 = lineCoord[3];
                    if (id > 0) {
                        let prevPointCounter = id - 1;
                        let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                        let v2 = new Vector2(PockeySettings.MAIN_COLLISION_SHADOW[prevPointCounter][0], PockeySettings.MAIN_COLLISION_SHADOW[prevPointCounter][1]);
                        this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
                    }
                    // nextPointCounter = id + 1;
                    // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
                    //
                    // }
                });*/
            }

            private createBottomCollisionPolygon(): void {
                let vertices: number[][] = PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let bottomCollisionPolygon: p2.Body = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(bottomCollisionPolygon);
                bottomCollisionPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionPolygon.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.LINE_MATERIAL);
                });
                bottomCollisionPolygon.angle = Math.PI;
                bottomCollisionPolygon.position [1] += 513;
                bottomCollisionPolygon.position [0] -= 11;


                /*_.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
                    // x1 = lineCoord[0];
                    // y1 = lineCoord[1];
                    // x2 = lineCoord[2];
                    // y2 = lineCoord[3];
                    if (id > 0) {
                        let prevPointCounter = id - 1;
                        let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                        let v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                        this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
                    }
                    // nextPointCounter = id + 1;
                    // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
                    //
                    // }
                });*/

            }


            private createBottomCollisionShadowPolygon(): void {
                let vertices: number[][] = PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                let bottomCollisionShadowPolygon: p2.Body = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(bottomCollisionShadowPolygon);
                bottomCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionShadowPolygon.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
                });
                bottomCollisionShadowPolygon.angle = Math.PI;
                bottomCollisionShadowPolygon.position [1] += 399;
                bottomCollisionShadowPolygon.position [0] -= 2;
            }

            private createLine(v1: Vector2, v2: Vector2, materialType: MaterialType, body: p2.Body = null): void {
                let graphics: Graphics = new Graphics();
                graphics.name = "line";
                graphics.lineStyle(2, 0xffff00);
                graphics.moveTo(v1.x, v1.y);
                graphics.lineTo(v2.x, v2.y);
                this.addChild(graphics);
            }

            public reset(): void {
                // console.log("intra la reset in pooltable");

                this.balls = [];

                this.whiteBall.reset();
                this.whiteBall.ballPosition = this.whiteBall.initialPosition;
                this.balls.push(this.whiteBall);

                this.puck.reset();
                this.puck.ballPosition = this.puck.initialPosition;//.x;
                this.balls.push(this.puck);

                _.forEach(this.leftBallsArray, (ball: AbstractBall) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;//.x;
                    this.balls.push(ball);
                });
                _.forEach(this.rightBallsArray, (ball: AbstractBall) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);
                });

                // console.log("SE RESETEAZA POZITIILE!!!!!!!!!");
            }

            private createBlocker(rectangle: Rectangle, rotationAngle: number, materialType: MaterialType, color = 0xffff00, id: string): Rect {

                let rect = new Rect(rectangle, rotationAngle, materialType);

                return rect;
            }
        }
    }
}