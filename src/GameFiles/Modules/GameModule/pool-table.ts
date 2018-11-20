///<reference path="../../../Framework/Utils/Rect.ts"/>
///<reference path="decal.ts"/>
///<reference path="stick.ts"/>
///<reference path="stick-mobile.ts"/>
///<reference path="balls/puck.ts"/>
///<reference path="balls/white-ball.ts"/>
///<reference path="puck-goal.ts"/>

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

        export class PoolTable extends Container {


            private poolTableBackground: Sprite;
            private poolTableBackgroundBottom: Sprite;
            private poolTableOverFrame: Sprite;
            private decalIcon: Decal;


            private ballsDistance: number = 108;

            public leftGoal: PuckGoal;
            public rightGoal: PuckGoal;

            private playerStartXPos: number = 736;
            private opponentStartXPos: number = 1223;


            public leftBallsArray: AbstractBall[];
            public rightBallsArray: AbstractBall[];

            public balls: AbstractBall[];

            private playGround: Rectangle;
            public leftLimit: number;
            public rightLimit: number;
            public upLimit: number;
            public downLimit: number;

            private mouseXOffset: number = 0;
            private mouseYOffset: number = 0;

            public puck: Puck;
            public whiteBall: WhiteBall;
            public ballPositionCircle: Container;
            public ballPositionCircleOnRaycast: Container;
            public raycastFollower: Sprite;

            public poolStick: Stick;

            public BallPositionCircleRadius: number;
            public ballAnimationHolder: Container;

            private ballCanMove: boolean = false;

            public ballPocket1: Sprite;
            public ballPocket2: Sprite;
            public ballPocket3: Sprite;
            public ballPocket4: Sprite;

            // public pockets: Sprite[];
            public limits: Line[];
            public pockets: Pocket[];
            // private pocketsZIndex:number = 0;

            // private gameMechanics: GameMechanics;
            public whiteBallReflectionArrow: Container;
            public otherBallReflectionArrow: Container;

            private shadowsHolder: Container;

            public ballsHolder: Container;

            constructor() {
                super();
                this.name = "poolTable";
                this.createElements();
                // this.startGameMechanics();
            }

//472, 284
//472, 284
//472, 284
//472, 284
//472, 284
            private createElements(): void {
                this.balls = [];

                //poolTableBackground
                this.poolTableBackground = new Sprite(PIXI.Texture.fromFrame("table-default.png"));
                this.poolTableBackground.name = "poolTableBackground";
                this.poolTableBackground.x = -this.poolTableBackground.width / 2;//472;
                this.poolTableBackground.y = -this.poolTableBackground.height / 2;//284;
                this.addChild(this.poolTableBackground);
                ////end poolTableBackground


                PockeySettings.MIDDLE_TABLE_POS = new Vector2(0, 0);
                // PockeySettings.MIDDLE_TABLE_POS = new Vector2(this.poolTableBackground.x + this.poolTableBackground.width / 2, this.poolTableBackground.y + this.poolTableBackground.height / 2);
                // console.log("PockeySettings.MIDDLE_TABLE_POS: " + PockeySettings.MIDDLE_TABLE_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);

                PockeySettings.MIDDLE_TABLE_LEFT_POS = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x - 244, PockeySettings.MIDDLE_TABLE_POS.y);
                PockeySettings.MIDDLE_TABLE_RIGHT_POS = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + 244, PockeySettings.MIDDLE_TABLE_POS.y);


                // PockeySettings.MIDDLE_TABLE_POS.y = ;
                // PockeySettings.MIDDLE_TABLE_POS.x_LEFT = ;
                // PockeySettings.MIDDLE_TABLE_POS.x_RIGHT = PockeySettings.MIDDLE_TABLE_POS.x + 200;
                //
                // let leftAnimationPoint = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x_LEFT, PockeySettings.MIDDLE_TABLE_POS.y);
                // let rightAnimationPoint = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x_RIGHT, PockeySettings.MIDDLE_TABLE_POS.y);
                // let centerAnimationPoint = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);

                //poolTableOverFrame
                this.poolTableOverFrame = new Sprite(PIXI.Texture.fromFrame("table_border-1.png"));
                this.poolTableOverFrame.name = "poolTableOverFrame";
                this.poolTableOverFrame.x = PockeySettings.MIDDLE_TABLE_POS.x - this.poolTableOverFrame.width / 2;
                this.poolTableOverFrame.y = PockeySettings.MIDDLE_TABLE_POS.y - this.poolTableOverFrame.height / 2;
                this.addChild(this.poolTableOverFrame);

                //end poolTableOverFrame
                this.ballAnimationHolder = new Container();
                this.addChild(this.ballAnimationHolder);


                //poolTableBackgroundBottom
                this.poolTableBackgroundBottom = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bottom.png"));
                this.poolTableBackgroundBottom.name = "poolTableBackgroundBottom";
                this.poolTableBackgroundBottom.x = -this.poolTableBackgroundBottom.width / 2;//485;
                this.poolTableBackgroundBottom.y = -this.poolTableBackgroundBottom.height / 2;//300;
                // this.poolTableBackgroundBottom.alpha = 0.6;
                this.addChild(this.poolTableBackgroundBottom);

                ////end poolTableBackgroundBottom


                //play ground
                this.playGround = new Rectangle(-970 / 2, -484 / 2, 970, 484);//Container();
                // this.playGround.nickname = "playGround";
                // this.playGround.interactive = true;

                // let playGroundGraphics: Graphics = new Graphics();
                // playGroundGraphics.nickname = "playGroundGraphics";
                // playGroundGraphics.beginFill(0xff9900, 1);
                // playGroundGraphics.drawRect(0, 0, 970, 484);
                // playGroundGraphics.endFill();
                // this.playGround.addChild(playGroundGraphics);
                // this.playGround.x = 495;
                // this.playGround.y = 307;
                // this.addChild(this.playGround);
                this.setTableLimits();

                /////end play ground

                //Pockets
                this.addPockets();
                //end pockets

                // decal icon
                this.decalIcon = new Decal();
                this.decalIcon.name = "decalIcon";
                this.decalIcon.x = PockeySettings.MIDDLE_TABLE_POS.x;
                this.decalIcon.y = PockeySettings.MIDDLE_TABLE_POS.y;
                this.addChild(this.decalIcon);
                // this.decalIcon.SetDecalIcon(DecalType.AstroJunkie);
                //end decal icon

                this.shadowsHolder = new Container();
                this.addChild(this.shadowsHolder);

                this.ballsHolder = new Container();
                this.ballsHolder.name = "ballsHolder";

                this.addChild(this.ballsHolder);
                // puck
                //
                this.puck = new Puck();
                this.puck.ballAnimationHolder = this.ballAnimationHolder;

                this.puck.createBallShadow();
                // this.puck.nickname = "puck";
                this.puck.tintBall(PockeySettings.PUCK_COLOR);

                // this.puck.anchor.set(0.5, 0.5);
                this.puck.x = PockeySettings.MIDDLE_TABLE_POS.x;
                this.puck.y = PockeySettings.MIDDLE_TABLE_POS.y;
                this.puck.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
                this.puck.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                // this.puck.setLineLimits(this.limits);
                // this.puck.setPockets(this.pockets);
                this.addBallToBallsHolder(this.puck);
                this.balls.push(this.puck);
                // this.addChild(this.puck);
                //end puck

                //rightGoal
                this.rightGoal = new PuckGoal("right");
                // new Sprite(PIXI.Texture.fromFrame("goalTop_right.png"));
                // this.rightGoal.tint = PockeySettings.OPPONENT_COLOR;
                this.rightGoal.name = "rightGoal";
                this.rightGoal.x = PockeySettings.MIDDLE_TABLE_POS.x + 487;
                this.rightGoal.y = PockeySettings.MIDDLE_TABLE_POS.y - 116;
                this.addChild(this.rightGoal);
                //end rightGoal

                // rightGoalTop
                // this.rightGoalTop = new Sprite(PIXI.Texture.fromFrame("goalTop_righttTopper.png"));
                // this.rightGoalTop.nickname = "rightGoalTop";
                // this.rightGoalTop.x = this.rightGoal.x;
                // this.rightGoalTop.y = this.rightGoal.y;
                // this.addChild(this.rightGoalTop);
                //end rightGoalTop

                //leftGoal
                this.leftGoal = new PuckGoal("left");

                // new Sprite(PIXI.Texture.fromFrame("goalTop_left.png"));
                // this.leftGoal.tint = PockeySettings.PLAYER_COLOR;

                this.leftGoal.name = "leftGoal";
                this.leftGoal.x = PockeySettings.MIDDLE_TABLE_POS.x - 483 - this.leftGoal.width;
                this.leftGoal.y = PockeySettings.MIDDLE_TABLE_POS.y - 116;

                this.addChild(this.leftGoal);

                this.puck.puckGoals = [this.leftGoal, this.rightGoal];
                this.puck.goalYPosition = this.leftGoal.y;
                this.puck.goalHeight = this.leftGoal.height;
                //end leftGoal

                // leftGoalTop
                // this.leftGoalTop = new Sprite(PIXI.Texture.fromFrame("goalTop_leftTopper.png"));
                // this.leftGoalTop.nickname = "leftGoalTop";
                // this.leftGoalTop.x = this.leftGoal.x;
                // this.leftGoalTop.y = this.leftGoal.y;
                // this.addChild(this.leftGoalTop);
                //end leftGoalTop

                //ball position when raycasting
                this.ballPositionCircleOnRaycast = new Container();
                this.ballPositionCircleOnRaycast.name = "ballPositionCircleOnRaycast";
                let graphics: Graphics = new Graphics();
                graphics.name = "graphics";
                graphics.lineStyle(4, 0xffffff);
                graphics.beginFill(0xffffff, 0);
                // graphics.lineStyle(2, 0xffffff)
                graphics.drawCircle(0, 0, PockeySettings.BALL_RADIUS + 6);
                this.ballPositionCircleOnRaycast.addChild(graphics);
                // this.ballPositionCircleOnRaycast.x = 100;
                // this.ballPositionCircleOnRaycast.y = 100;
                this.ballPositionCircleOnRaycast.visible = false;
                this.addChild(this.ballPositionCircleOnRaycast);

                // this.ballPositionCircleOnRaycast.tint = 0x000000;


                // this.addChild(this.whiteBall);

                // this.ballCanMove = true;
                //end ball position


                //white ball
                this.whiteBall = new WhiteBall();
                this.whiteBall.ballAnimationHolder = this.ballAnimationHolder;

                this.whiteBall.createBallShadow();
                this.whiteBall.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_LEFT_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
                this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                // this.whiteBall.setLineLimits(this.limits);
                this.whiteBall.setPockets(this.pockets);

                // pune-l pe mijloc si vezi cum e cu shadowul de jos
                // this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                // this.whiteBall.setPockets(this.pockets);
                // this.whiteBall.pocketsFinalPoints = [PockeySettings.MIDDLE_TABLE_POS, PockeySettings.MIDDLE_TABLE_LEFT_POS, PockeySettings.MIDDLE_TABLE_RIGHT_POS];
                this.balls.push(this.whiteBall);
                // this.whiteBall.x = this.playerStartXPos;
                // this.whiteBall.y = PockeySettings.MIDDLE_TABLE_POS.y;
                this.addBallToBallsHolder(this.whiteBall);
                // this.BallPositionCircleRadius = this.whiteBall.radius;

                //end white ball

                //rightBalls
                let ball: AbstractBall;
                this.rightBallsArray = [];
                this.leftBallsArray = [];
                let angle: number;

                _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
                    // playerBall = new Sprite(PIXI.Texture.fromFrame("ball-colorme.png"));
                    ball = new AbstractBall("right", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();
                    // ball.tintBall(PockeySettings.PLAYER_COLOR);
                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    // ball.setLineLimits(this.limits);
                    ball.setPockets(this.pockets);


                    // ball.nickname = "PlayerBall_" + id.toString();
                    this.balls.push(ball);
                    this.rightBallsArray.push(ball);
                    angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI;

                    ball.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)),
                        PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));
                    // ball.anchor.set(0.5, 0.5);
                    // ball.x = PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle));
                    // ball.y = PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle));
                    this.addBallToBallsHolder(ball);
                });
                //end right balls

                //left balls
                // this.opponentBallsArray = [];
                // let opponentBall: Sprite;

                _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
                    // opponentBall = new Sprite(PIXI.Texture.fromFrame("ball-colorme.png"));
                    ball = new AbstractBall("left", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();

                    // ball.tint = this.opponentColor;
                    // ball.tintBall(PockeySettings.OPPONENT_COLOR);
                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    // ball.setLineLimits(this.limits);
                    ball.setPockets(this.pockets);

                    // ball.nickname = "OpponentBall_" + id.toString();
                    this.balls.push(ball);
                    this.leftBallsArray.push(ball);
                    angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI + Math.PI / PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;

                    // ball.x =
                    // ball.y = ;
                    ball.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)),
                        PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));


                    this.addBallToBallsHolder(ball);
                });
                //end left balls


                //ball position
                this.ballPositionCircle = new Container();
                this.ballPositionCircle.name = "ballPositionCircle";
                graphics = new Graphics();
                graphics.name = "graphics";
                graphics.lineStyle(3, 0xffffff);
                // graphics.beginFill(0x000000, 0);
                // graphics.lineStyle(2, 0xffffff)
                graphics.drawCircle(0, 0, PockeySettings.BALL_RADIUS);
                this.ballPositionCircle.addChild(graphics);
                this.ballPositionCircle.x = 580;
                this.ballPositionCircle.y = 400;
                this.ballPositionCircle.visible = false;
                this.addChild(this.ballPositionCircle);


                this.raycastFollower = new Sprite();
                graphics = new Graphics();
                graphics.name = "graphics"
                graphics.lineStyle(4, 0xffffff);
                graphics.beginFill(0xffffff, 0);
                graphics.drawCircle(0, 0, PockeySettings.BALL_RADIUS - 2);
                graphics.endFill();
                this.raycastFollower.addChild(graphics);
                // this.raycastFollower.position = this.pivot;
                this.raycastFollower.visible = false;
                this.addChild(this.raycastFollower);


                this.whiteBallReflectionArrow = new Container();
                this.otherBallReflectionArrow = new Container();

                _.forEach([this.whiteBallReflectionArrow, this.otherBallReflectionArrow], (arrow: Sprite) => {

                    let g: Graphics = new Graphics();
                    g.lineStyle(4, 0xffffff);
                    /* if (arrow == this.whiteBallReflectionArrow)
                         g.lineStyle(2, 0xffffff);*/

                    let sideLength: number = 6;
                    g.moveTo(-sideLength / 2, -sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, 0.2);
                    g.moveTo(-sideLength / 2, sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, -0.2);

                    arrow.addChild(g);
                    arrow.x = 200;
                    arrow.y = 200;
                    arrow.visible = false;
                    this.addChild(arrow);
                });


                //poolStick
                if (Settings.isMobile) {
                    this.poolStick = new StickMobile();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }
                else {
                    this.poolStick = new Stick();
                    this.poolStick.x = 844;
                    this.poolStick.y = 650;
                }

                this.poolStick.initialPosition = new Point(this.poolStick.x, this.poolStick.y);
                this.poolStick.startPosition = new Point(this.whiteBall.position.x, this.whiteBall.position.y);

                this.poolStick.visible = false;
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

                // var vertices = [[this.leftLimit, this.upLimit / 2], [this.rightLimit, this.upLimit / 2], [this.rightLimit, this.downLimit / 3], [this.leftLimit, this.downLimit / 3]];
                // var convexShape = new p2.Convex({vertices: vertices});
                // let body = new p2.Body({mass: 0});
                // convexShape.material = new p2.Material(MaterialType.LINE_MATERIAL);
                // body.addShape(convexShape);
                //
                // P2WorldManager.Instance().world.addBody(body);
            }

            public addBallToBallsHolder(ball: AbstractBall) {
                this.ballsHolder.addChild(ball);
                this.shadowsHolder.addChild(ball.ballShadow);
            }

            private addPockets() {
                // this.limits = [];
                let rect2A: Rect = this.createRectangle(new Rectangle(-494, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                let rect2B: Rect = this.createRectangle(new Rectangle(497, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
                /*let rect2A: Rect = this.createRectangle(new Rectangle(-494, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                let rect2B: Rect = this.createRectangle(new Rectangle(497, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
*/

                let rect4A: Rect = this.createRectangle(new Rectangle(-492, -250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4a");
                let rect4B: Rect = this.createRectangle(new Rectangle(492, 250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4b");
                let rect5A: Rect = this.createRectangle(new Rectangle(492, -250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5a");
                let rect5B: Rect = this.createRectangle(new Rectangle(-492, 250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5b");
                let rect7A: Rect = this.createRectangle(new Rectangle(0, -270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7a");
                let rect7B: Rect = this.createRectangle(new Rectangle(0, 270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7b");
                // let rect1A = this.createRectangle(new Rectangle(417, 561 - 12, 20, 227), 0, MaterialType.BALL_MATERIAL);
                // let rect1B: Rect = this.createRectangle(new Rectangle(1544, 561 - 12, 20, 227), 0, MaterialType.BALL_MATERIAL);/**/
                /*
                                let rect4A: Rect = this.createRectangle(new Rectangle(486, 309 - 12, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
                                let rect4B: Rect = this.createRectangle(new Rectangle(1475, 813 - 12, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
                                let rect5A: Rect = this.createRectangle(new Rectangle(1475, 309 - 12, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
                                let rect5B: Rect = this.createRectangle(new Rectangle(486, 813 - 12, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
                                */

                // let rect1A = this.createRectangle(new Rectangle(417, 561 - 12, 20, 227), 0, MaterialType.BALL_MATERIAL);
                // let rect1B: Rect = this.createRectangle(new Rectangle(1544, 561 - 12, 20, 227), 0, MaterialType.BALL_MATERIAL);

                // let rect3A: Rect = this.createRectangle(new Rectangle(486, 415 - 12, 20, 99), 0, MaterialType.BALL_MATERIAL);
                // let rect3B: Rect = this.createRectangle(new Rectangle(1475, 413 - 12, 20, 101), 0, MaterialType.BALL_MATERIAL);
                // let rect3C: Rect = this.createRectangle(new Rectangle(1475, 707 - 12, 20, 102), 0, MaterialType.BALL_MATERIAL);
                // let rect3D: Rect = this.createRectangle(new Rectangle(486, 707 - 12, 20, 102), 0, MaterialType.BALL_MATERIAL);

                // let rect6A: Rect = this.createRectangle(new Rectangle(737, 309 - 12, 391, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect6B: Rect = this.createRectangle(new Rectangle(1223, 309 - 12, 391, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect6C: Rect = this.createRectangle(new Rectangle(737, 813 - 12, 391, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect6D: Rect = this.createRectangle(new Rectangle(1224, 813 - 12, 392, 20), 0, MaterialType.BALL_MATERIAL);

                // let rect14A: Rect = this.createRectangle(new Rectangle(442, 437 - 12, 69, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect14B: Rect = this.createRectangle(new Rectangle(1520, 437 - 12, 69, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect14C: Rect = this.createRectangle(new Rectangle(1520, 684 - 12, 69, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect14D: Rect = this.createRectangle(new Rectangle(442, 684 - 12, 69, 20), 0, MaterialType.BALL_MATERIAL);
                // let rect9A : Rect = this.createRectangle(new Rectangle(454,331 - 12,107,20), 26, MaterialType.BALL_MATERIAL, 0xff9900);
                // let rect9B : Rect = this.createRectangle(new Rectangle( 1507,781,107,20), 26, MaterialType.BALL_MATERIAL, 0xff9900);
                // let rect8A: Rect = this.createRectangle(new Rectangle( 507,277-12,107,20), 29, MaterialType.BALL_MATERIAL);
                // let rect8B : Rect = this.createRectangle(new Rectangle( 1454,845-12,107,20), 29, MaterialType.BALL_MATERIAL);
                // let rect10A : Rect = this.createRectangle(new Rectangle( 1453,265,107,20), 15, MaterialType.BALL_MATERIAL);
                // let rect10B : Rect = this.createRectangle(new Rectangle( 507,845-12,107,20), 15, MaterialType.BALL_MATERIAL);
                // let rect11A : Rect = this.createRectangle(new Rectangle( 1508,317,107,20), 18, MaterialType.BALL_MATERIAL, 0xff0000);
                // let rect11B : Rect = this.createRectangle(new Rectangle( 454,791-12,107,20), 18, MaterialType.BALL_MATERIAL);
                // let rect12A: Rect = this.createRectangle(new Rectangle(948,269,80,20), 43, MaterialType.BALL_MATERIAL);
                // let rect12B : Rect = this.createRectangle(new Rectangle( 1013,830,80,20), 43, MaterialType.BALL_MATERIAL);
                // let rect13A : Rect = this.createRectangle(new Rectangle( 1013,268,80,20), 1, MaterialType.BALL_MATERIAL);
                // let rect13B : Rect = this.createRectangle(new Rectangle( 947,830,80,20), 1, MaterialType.BALL_MATERIAL);
                // @ts-ignore
                // let line1: Line = this.createLine(new Vector2(496, 450), new Vector2(496, 351), MaterialType.LINE_MATERIAL);
                // console.log(new Vector2(496, 450)., new Vector2(496, 351), MaterialType.LINE_MATERIAL);
                // let line1: Rect = this.createRectangle(new Rectangle(476, 351, 21, 99), MaterialType.LINE_MATERIAL);
                // let mPoint: Vector2 = new Vector2((line1.firstPoint.x + line1.secondPoint.x) / 2, (line1.firstPoint.y + line1.secondPoint.y) / 2);
                // let c: Graphics = new Graphics();
                // c.beginFill(0xff9900);
                // c.drawCircle(mPoint.x,mPoint.y, 20);
                // c.endFill();
                //
                // this.addChild(c);
                // let line2: Rect = this.createRectangle(new Rectangle(496, 351, 99, 20), MaterialType.LINE_MATERIAL);
                /*let line2to3: Line = this.createLine(new Vector2(472, 321), new Vector2(509, 284), MaterialType.BALL_ONLY_MATERIAL);
                let line3: Line = this.createLine(new Vector2(509, 284), new Vector2(544, 307), MaterialType.LINE_MATERIAL);

                // let line4: Line = this.createLine(new Vector2(544, 307), new Vector2(934, 307), MaterialType.LINE_MATERIAL);
                let line4: Rect = this.createRectangle(new Rectangle(544, 287, 390, 21), MaterialType.LINE_MATERIAL);

                let line5: Line = this.createLine(new Vector2(934, 307), new Vector2(953, 284), MaterialType.LINE_MATERIAL);
                let line5to6: Line = this.createLine(new Vector2(949, 288), new Vector2(1011, 288), MaterialType.BALL_ONLY_MATERIAL);
                let line6: Line = this.createLine(new Vector2(1007, 284), new Vector2(1027, 307), MaterialType.LINE_MATERIAL);

                // let line7: Line = this.createLine(new Vector2(1027, 307), new Vector2(1424, 307), MaterialType.LINE_MATERIAL);
                let line7: Rect = this.createRectangle(new Rectangle(1027, 287, 390, 21), MaterialType.LINE_MATERIAL);

                let line8: Line = this.createLine(new Vector2(1424, 307), new Vector2(1450, 284), MaterialType.LINE_MATERIAL);
                let line8to9: Line = this.createLine(new Vector2(1450, 284), new Vector2(1487, 321), MaterialType.BALL_ONLY_MATERIAL);
                let line9: Line = this.createLine(new Vector2(1487, 321), new Vector2(1466, 351), MaterialType.LINE_MATERIAL);

                // let line10: Line = this.createLine(new Vector2(1466, 351), new Vector2(1466, 450), MaterialType.LINE_MATERIAL);
                let line10: Rect = this.createRectangle(new Rectangle(1466, 351, 21, 99), MaterialType.LINE_MATERIAL);

                // let line11: Line = this.createLine(new Vector2(1466, 644), new Vector2(1466, 748), MaterialType.LINE_MATERIAL);
                let line11: Rect = this.createRectangle(new Rectangle(1466, 644, 21, 99), MaterialType.LINE_MATERIAL);

                // let line10to11: Line = this.createLine(new Vector2(1466, 450), new Vector2(1466, 644), MaterialType.PUCK_ONLY_MATERIAL);
                let line10to11: Rect = this.createRectangle(new Rectangle(1464, 351, 21, 392), MaterialType.PUCK_ONLY_MATERIAL, 0xFFFF00);


                let line12: Line = this.createLine(new Vector2(1466, 748), new Vector2(1487, 776), MaterialType.LINE_MATERIAL);
                let line12to13: Line = this.createLine(new Vector2(1487, 776), new Vector2(1450, 812), MaterialType.BALL_ONLY_MATERIAL);
                let line13: Line = this.createLine(new Vector2(1450, 812), new Vector2(1424, 790), MaterialType.LINE_MATERIAL);

                // let line14: Line = this.createLine(new Vector2(1424, 790), new Vector2(1026, 790), MaterialType.LINE_MATERIAL);
                let line14: Rect = this.createRectangle(new Rectangle(1026, 789, 390, 21), MaterialType.LINE_MATERIAL);

                let line15: Line = this.createLine(new Vector2(1026, 790), new Vector2(1007, 812), MaterialType.LINE_MATERIAL);
                let line15to16: Line = this.createLine(new Vector2(1011, 808), new Vector2(949, 808), MaterialType.BALL_ONLY_MATERIAL);
                let line16: Line = this.createLine(new Vector2(953, 812), new Vector2(934, 790), MaterialType.LINE_MATERIAL);

                // let line17: Line = this.createLine(new Vector2(934, 790), new Vector2(544, 790), MaterialType.LINE_MATERIAL);
                let line17: Rect = this.createRectangle(new Rectangle(544, 789, 390, 21), MaterialType.LINE_MATERIAL);

                let line18: Line = this.createLine(new Vector2(544, 790), new Vector2(509, 812), MaterialType.LINE_MATERIAL);
                let line18to19: Line = this.createLine(new Vector2(509, 812), new Vector2(472, 776), MaterialType.BALL_ONLY_MATERIAL);
                let line19: Line = this.createLine(new Vector2(472, 776), new Vector2(496, 748), MaterialType.LINE_MATERIAL);
                // let line20: Line = this.createLine(new Vector2(496, 748), new Vector2(496, 644), MaterialType.LINE_MATERIAL);
                let line20: Rect = this.createRectangle(new Rectangle(476, 644, 21, 99), MaterialType.LINE_MATERIAL);

                // let line20to1: Line = this.createLine(new Vector2(496, 644), new Vector2(496, 450), MaterialType.PUCK_ONLY_MATERIAL);
                // let line20to1: Rect = this.createRectangle(new Rectangle(476, 450, 21, 196), MaterialType.PUCK_ONLY_MATERIAL, 0xFFFF00);

                let line20to1: Rect = this.createRectangle(new Rectangle(478, 351, 21, 392), MaterialType.PUCK_ONLY_MATERIAL, 0xFFFF00);*/


                this.pockets = [];
                let pocket1: Pocket = new Pocket(-497, -254, 28, new Vector2(-438, -200));
                this.pockets.push(pocket1);
                pocket1.addPoints(this);

                /*let pocketHolder1: Sprite = new Sprite();
                pocketHolder1.nickname = "pocket1";
                let pocket1Gr: Graphics = new Graphics();
                pocket1Gr.beginFill(0x00ff00, 0.5);
                pocket1Gr.drawCircle(0, 0, 5);
                pocket1Gr.endFill();
                pocketHolder1.x = -438;
                pocketHolder1.y = -200;
                pocketHolder1.addChild(pocket1Gr);
                this.addChild(pocketHolder1);*/


                let pocket2: Pocket = new Pocket(0, -264, 26, new Vector2(0, -200));
                this.pockets.push(pocket2);
                pocket2.addPoints(this);


                /*let pocketHolder2: Sprite = new Sprite();
                pocketHolder2.nickname = "pocket2";
                let pocket2Gr: Graphics = new Graphics();
                pocket2Gr.beginFill(0x00ff00, 0.5);
                pocket2Gr.drawCircle(0, 0, 5);
                pocket2Gr.endFill();
                pocketHolder2.x = pocket2.x;
                pocketHolder2.y = -200;
                pocketHolder2.addChild(pocket2Gr);
                this.addChild(pocketHolder2);*/


                let pocket3: Pocket = new Pocket(496, -255, 28, new Vector2(438, -200));
                this.pockets.push(pocket3);
                pocket3.addPoints(this);

                /*let pocketHolder3: Sprite = new Sprite();
                pocketHolder3.nickname = "pocket2";
                let pocket3Gr: Graphics = new Graphics();
                pocket3Gr.beginFill(0x00ff00, 0.5);
                pocket3Gr.drawCircle(0, 0, 5);
                pocket3Gr.endFill();
                pocketHolder3.x = 438;
                pocketHolder3.y = -200;
                pocketHolder3.addChild(pocket3Gr);
                this.addChild(pocketHolder3);*/


                let pocket4: Pocket = new Pocket(497, 254, 28, new Vector2(438, 200));
                this.pockets.push(pocket4);
                pocket4.addPoints(this);

                /*let pocketHolder4: Sprite = new Sprite();
                pocketHolder4.nickname = "pocket4";
                let pocket4Gr: Graphics = new Graphics();
                pocket4Gr.beginFill(0x00ff00, 0.5);
                pocket4Gr.drawCircle(0, 0, 5);
                pocket4Gr.endFill();
                pocketHolder4.x = 438;
                pocketHolder4.y = 200;
                pocketHolder4.addChild(pocket4Gr);
                this.addChild(pocketHolder4);*/


                let pocket5: Pocket = new Pocket(0, 263, 26, new Vector2(0, 200));
                this.pockets.push(pocket5);
                pocket5.addPoints(this);

                /* let pocketHolder5: Sprite = new Sprite();
                 pocketHolder5.nickname = "pocket5";
                 let pocket5Gr: Graphics = new Graphics();
                 pocket5Gr.beginFill(0x00ff00, 0.5);
                 pocket5Gr.drawCircle(0, 0, 5);
                 pocket5Gr.endFill();
                 pocketHolder5.x = pocket5.x;
                 pocketHolder5.y = 200;
                 pocketHolder5.addChild(pocket5Gr);
                 this.addChild(pocketHolder5);*/


                let pocket6: Pocket = new Pocket(-497, 253, 28, new Vector2(-438, 200));
                this.pockets.push(pocket6);
                pocket6.addPoints(this);

                /* let pocketHolder6: Sprite = new Sprite();
                 pocketHolder6.nickname = "pocket6";
                 let pocket6Gr: Graphics = new Graphics();
                 pocket6Gr.beginFill(0x00ff00, 0.5);
                 pocket6Gr.drawCircle(0, 0, 5);
                 pocket6Gr.endFill();
                 pocketHolder6.x = -438;//pocket6.x;
                 pocketHolder6.y = 200;//pocket6.y;
                 pocketHolder6.addChild(pocket6Gr);
                 this.addChild(pocketHolder6);*/


                // TweenMax.delayedCall(0.1, this.createBottomCollisionPolygon.bind(this));
            }

            private createUpperCollisionPolygon(): void {
                let vertices: number[][] = PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let upperCollisionPolygon: p2.Body = new p2.Body({mass: 0});
                P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
                upperCollisionPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionPolygon.shapes, (shape: p2.Shape) => {
                    shape.material = new p2.Material(MaterialType.LINE_MATERIAL);
                });
                // let salam = new Sprite();
              /*   _.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
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

            /*
//                 let newB2 = new p2.Body({mass: 0});
//                 P2WorldManager.Instance().world.addBody(newB2);
//                 newB2.fromPolygon(PockeySettings.MAIN_COLLISION_POLYGON2);
//                 newB2.angle = Math.PI;
// newB2.position [1] += 513;
//
              let newB3 = new p2.Body({mass: 0});
              let newB4 = new p2.Body({mass: 0});
              newB4.position [1] += 402;
              newB4.angle = Math.PI;

//                 newB3.angle = Math.PI;
              // newB3.position [1] += 513;

              // let salam = new Sprite();
              _.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
                  // x1 = lineCoord[0];
                  // y1 = lineCoord[1];
                  // x2 = lineCoord[2];
                  // y2 = lineCoord[3];
                  if (id > 0) {
                      prevPointCounter = id - 1;
                      v1 = new Vector2(lineCoord[0], lineCoord[1]);
                      v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                      this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
                  }
                  // nextPointCounter = id + 1;
                  // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
                  //
                  // }
              });
              // P2WorldManager.Instance().world.addBody(newB3);
              // P2WorldManager.Instance().world.addBody(newB4);
              // newB3.fromPolygon(PockeySettings.MAIN_COLLISION_SHADOW);
              // newB4.fromPolygon(PockeySettings.MAIN_COLLISION_POLYGON4);
          }*/

            private createLine(v1: Vector2, v2: Vector2, materialType: MaterialType, body: p2.Body = null): void {
                // let line = new Line(v1, v2, materialType);
                let graphics: Graphics = new Graphics();
                graphics.name = "line";
                graphics.lineStyle(2, 0xffff00);
                graphics.moveTo(v1.x, v1.y);
                graphics.lineTo(v2.x, v2.y);
                this.addChild(graphics);
                // graphics.x = body.position[0];// - 600;
                // graphics.y = body.position[1];// - 102;

                // this.cacat.nickname = "cacat";
                // this.cacat.addChild(graphics);
                // this.cacat.y = 513;
                // this.cacat.x = 513;
                // this.cacat.scale.x = 0.2;
                // this.cacat.scale.y = 0.2;
                // this.cacat.anchor.set(0.5,0.5);
                // this.cacat.rotation = Math.PI;
                // this.addChild(this.cacat);
                // graphics.drawRect(-28, -31, 56, 62);
                // graphics.endFill();
                // rect.addChild(graphics);
                // this.limits.push(line);
                // return line;
            }

            public reset(): void {
                this.balls = [];

                this.whiteBall.reset();
                this.whiteBall.ballPosition = this.whiteBall.initialPosition;
                this.addBallToBallsHolder(this.whiteBall);
                this.balls.push(this.whiteBall);
                // console.log(this.whiteBall.nickname);

                this.puck.reset();
                this.puck.ballPosition = this.puck.initialPosition;//.x;
                this.balls.push(this.puck);
                this.addBallToBallsHolder(this.puck);

                // console.log(this.puck.nickname);

                _.forEach(this.leftBallsArray, (ball: AbstractBall) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;//.x;
                    this.balls.push(ball);

                    this.addBallToBallsHolder(ball);
                    // console.log(ball.nickname);
                    // ball.y = ball.initialPosition.y;

                    // if (ball.ballType == BallType.Player) {
                    //     ball.tintBall(color);
                    // }
                });
                _.forEach(this.rightBallsArray, (ball: AbstractBall) => {
                    ball.reset();
                    console.log(ball.name);

                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);

                    this.addBallToBallsHolder(ball);

                    // if (ball.ballType == BallType.Player) {
                    //     ball.tintBall(color);
                    // }
                });
            }

            private createRectangle(rectangle: Rectangle, rotationAngle: number, materialType: MaterialType, color = 0xffff00, id: string): Rect {

                let rect = new Rect(rectangle, rotationAngle, materialType);

                /*let graphics: Graphics = new Graphics();
                graphics.beginFill(color, 0.8);
                graphics.drawRect(-rectangle.width / 2, -rectangle.height / 2, rectangle.width, rectangle.height);
                graphics.endFill();
                let s: Sprite = new Sprite();
                s.nickname = id;

                s.addChild(graphics);

                s.rotation = rotationAngle;
                s.x = rectangle.x;
                s.y = rectangle.y;
                this.addChild(s);*/

                return rect;
            }
        }
    }
}

// "ball-black.png"
// "ball-colorme.png" --------------- used
// "ball-highlight.png"
// "ball-puck-01.png"
// "ball-puck-02.png"
// "ball-puck.png" --------------- used
// "ball-puckInvalid.png"
// "ball-scratch.png"
// "ball-shadow.png"
// "barrier-corner.png"
// "barrier-icon.png"
// "barrier-side.png"
// "rightGoal-shine.png"
// "goal_arrowIndicator.png"
// "goalie.png"
// "goalTop_left.png" --------------- used
// "goalTop_leftTopper.png" --------------- used
// "goalTop_right.png" --------------- used
// "goalTop_righttTopper.png" --------------- used
// "penalty-droppuck.png" --------------- used
// "power-bg.png" --------------- used in gameModule
// "power-color.png"
// "powerUp_pocketBlock.png"
// "powerUp_speedBuff.png"
// "puck-icon.png"
// "puck-indicator.png"
// "puck_drop.png"
// "roundcomplete.png"
// "table-default.png" --------------- used
// "table_border-1.png" --------------- used
// "table_english-01.png"
// "table_english-reticle.png"
// "table_power-01a.png"
// "table_power-light1.png"
// "table_power-light2.png"
// "table_power-light3.png"
// "table_power-light4.png"
// "ui_icon-arrow.png"
// "ui_icon-tipsReg.png"
// "ui_versus-empty.png"
// "ui_versus-main.png"
// "ui_versus-won.png"
// "vs.png"--------------- used