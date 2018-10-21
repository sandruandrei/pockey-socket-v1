///<reference path="../../../../lib/types/lodash/index.d.ts"/>
///<reference path="../StateMachine/pockey-state-machine.ts"/>
///<reference path="../../../Framework/Utils/Vector2.ts"/>
///<reference path="../../../Framework/Utils/pixi-dashed-line.ts"/>
///<reference path="../../../Framework/Utils/mouse-handler.ts"/>
///<reference path="pool-table.ts"/>
///<reference path="../../../../lib/types/greensock/greensock.d.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>


/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/17/2018
 */


namespace Pockey {
    export module GameModule {

        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import Vector2 = Framework.Utils.Vector2;
        import Point = PIXI.Point;
        import Graphics = PIXI.Graphics;
        import PixiDashedLine = Framework.Utils.PixiDashedLine;
        import PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        import PockeyStates = Pockey.StateMachineModule.PockeyStates;
        import MouseHandler = Framework.Utils.MouseHandler;
        import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        import Settings = Framework.Settings;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;

        export interface PoolTableData {
            playerName?: string,
            playerSocketID?: any,
            playerScore?: number,
            playerColor?: number,
            opponentScore?: number,
            opponentColor?: number,
            poolstickPivotX?: number,
            poolstickRotation?: number,
            poolstickPositionX?: number,
            poolstickPositionY?: number,
            opponentTimerText?: string;
            opponentTimerAnimate?: boolean,
            opponentState?: PockeyStates,
            opponentTimeFinished?: boolean,
            // leftBalls?: BallData[],
            // rightBalls?: BallData[],
            whiteBallData?: BallData,
            puckData?: BallData,
            whiteBallPenalty?: boolean,
            ballsHit?: number,
            balls?: BallData[],

            followerVisible?: boolean,
            followerX?: number,
            followerY?: number,

            ballPositionCircleVisible?: boolean,
            ballPositionCircleX?: number,
            ballPositionCircleY?: number,

            ballPositionCircleOnRaycastVisible?: boolean,
            ballPositionCircleOnRaycastX?: number,
            ballPositionCircleOnRaycastY?: number,

            lineBetweenCirclesVisible?: boolean,
            lineBetweenCirclesPoints?: number[],
            graphColor?: number
        }

        export interface Limits {
            left: number,
            right: number,
            up: number,
            down: number
        }

        export class PoolTableManager {

            public poolTable: PoolTable;
            private ticker: PIXI.ticker.Ticker;
            private shootingEnded: boolean = false;
            protected graph: Graphics;
            // private poolTableData: PoolTableData;

            private hitPoint: p2.vec2 = p2.vec2.create();

            protected startRayCastPoint: number[] = [0, 0];
            protected endRayCastPoint: number[] = [0, 0];
            protected raycastResult: p2.RaycastResult = new p2.RaycastResult();
            protected rayClosest: p2.Ray = new p2.Ray({
                mode: p2.Ray.CLOSEST,
                skipBackfaces: true
            });

            protected shortestContactDistance: number;
            protected newPos: Vector2;
            protected repositionWhiteBallEnabled: boolean = false;
            protected lastGoodRepositionPoint: Vector2;
            protected contactEnabled: boolean = false;
            private whiteBallInThePocket: boolean = false;
            private opponentBallInThePocket: boolean = false;

            private playerTurnStarted: boolean = false;
            private ballWasShot: boolean = false;

            protected opponentTimeUp: boolean = false;
            protected repositionStarted: boolean = false;

            protected isFirstShoot: boolean = true;

            protected uiTextOnWatch: string = "";
            protected lineBetweenCirclesPoints: number[];
            protected lineBetweenCirclesVisible: boolean;
            protected graphColor: number = 0xffffff;

            constructor() {
                // console.log("%c Pool T Manager: intra la constructor ", "background: red; color: white; font-weight:bold; ");

                this.registerSignalsHandlers();

                this.poolTable = new PoolTable();
                this.poolTable.visible = false;
                // this.poolTable.x = 650;
                // this.poolTable.y = 380;

                this.ticker = PIXI.ticker.shared;

                if (this.poolTable.poolStick)
                    this.ticker.add(this.poolTable.poolStick.update, this.poolTable.poolStick);

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    this.ticker.add(ball.update, ball);
                    ball.addShadowBody();
                });

                this.ticker.add(this.update, this);

                P2WorldManager.Instance().world.on("beginContact", (evt) => {
                    if (this.contactEnabled) {
                        if (!_.isNull(evt.shapeA.radius) && !_.isUndefined(evt.shapeA.radius) &&
                            !_.isNull(evt.shapeB.radius) && !_.isUndefined(evt.shapeB.radius)) {
                            // console.log("penalty!!!!!");
                            this.contactEnabled = false;
                            let isOwnBall: boolean = false;
                            if (evt.bodyA == this.poolTable.whiteBall.p2Body) {
                                isOwnBall = this.checkIfOwnBall(evt.bodyB);
                            }
                            else if (evt.bodyB == this.poolTable.whiteBall.p2Body) {
                                isOwnBall = this.checkIfOwnBall(evt.bodyA);
                            }

                            if (isOwnBall) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);

                            }

                        }

                    }
                }, this);
            }

            private registerSignalsHandlers(): void {

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_POOLTABLE, this.onShowPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS, this.hideBallRayGraphics.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.REACTIVATE_STICK, this.reactivateStick.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetPuckGoalsSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, this.onUpdateUITextOnWatch.bind(this));

                /* SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL, this.onAnimatePuckGoal.bind(this));
                 SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP, this.onStopAnimatePuckGoal.bind(this));*/

                // SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.ballInPocketHandler.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_WHITE_BALL, this.onRepositionWhiteBall.bind(this));
                // SignalsManager.AddSignalCallback(SignalsType.FIRST_ROUND, this.onStarted.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_STICK, this.repositionStick.bind(this));

            }


            protected onAnimatePuckGoal(): void {
                if (this.poolTable.leftGoal.type == GameManager.Instance().currentPlayer.type) {
                    this.poolTable.rightGoal.animate();
                }
                else {
                    this.poolTable.leftGoal.animate();
                }
            }

            protected onResetStickPower(): void {
                this.poolTable.poolStick.power = 0;
                this.poolTable.poolStick.reset();
            }

            protected onStopAnimatePuckGoal(): void {

                this.poolTable.leftGoal.stopAnimation();
                this.poolTable.rightGoal.stopAnimation();
            }

            protected onUpdateUITextOnWatch(params: any[]): void {
                this.uiTextOnWatch = params["0"];
            }

            protected onSetPuckGoalsSides(params: any[]): void {
                this.poolTable.leftGoal.type = params[0];
                // console.log("leftGoal.type: " + this.poolTable.leftGoal.type);
                this.poolTable.rightGoal.type = params[1];
                // console.log("rightGoal.type: " + this.poolTable.rightGoal.type);

                _.forEach(this.poolTable.leftBallsArray, (ball: AbstractBall) => {
                    // if (ball.side == "left") {
                    ball.ballType = params[0];
                    // }
                    // else if (ball.side == "right") {
                    //     ball.ballType = params[1];
                    // }
                });

                _.forEach(this.poolTable.rightBallsArray, (ball: AbstractBall) => {
                    // if (ball.side == "left") {
                    ball.ballType = params[1];
                    // }
                    // else if (ball.side == "right") {
                    //     ball.ballType = params[1];
                    // }
                });
            }

            protected onChangeOpponentColor(color: number): void {
                if (this.poolTable.leftGoal.type == BallType.Opponent) {
                    this.poolTable.leftGoal.tint = color;
                }
                else {
                    this.poolTable.rightGoal.tint = color;
                }
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ball.ballType == BallType.Opponent) {
                        ball.tintBall(color);
                    }
                });
                // this.poolTable.rightGoalTop.tint = color;
            }

            protected onChangePlayerColor(color: number): void {
                if (this.poolTable.leftGoal.type == BallType.Player) {
                    this.poolTable.leftGoal.tint = color;
                }
                else {
                    this.poolTable.rightGoal.tint = color;
                }
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ball.ballType == BallType.Player) {
                        ball.tintBall(color);
                    }
                });
                // this.poolTable.rightGoalTop.tint = color;
            }

            protected onShowPoolTable(): void {
                this.poolTable.visible = true;
            }

            protected onResetPoolTable(): void {
                // this.poolTable.visible = true;
                this.isFirstShoot = true;
                this.poolTable.reset();
            }

            protected onShoot(): void {
                // console.log("%c Pool T Manager: intra la onShoot ", "background: red; color: white; font-weight:bold; ");

                this.onStopAnimatePuckGoal();

                this.contactEnabled = true;
                // this.ballWasShot = true;
                // this.ticker.add(this.update, this);
                let rotation = this.poolTable.poolStick.rotation;
                // let power = this.poolTable.poolStick.power;

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    ball.p2Body.wakeUp();
                });
                this.poolTable.whiteBall.onShoot(rotation, this.poolTable.poolStick.power);
                this.poolTable.poolStick.power = 0;

                this.isFirstShoot = false;
                // this.shootingEnded = true;
                // if (this.shootingEnded) {
                // console.log("aici la 3");

                // this.shootingEnded = false;
                // this.ballWasShot = true;
                // return;
                // this.repositionStick();
                // }
            }

            protected onRepositionWhiteBall(): void {
                // console.log("%c Pool T Manager: intra la onRepositionWhiteBall", "background: red; color: white; font-weight:bold; ");

                /*       console.log("ball repos started");

                       this.poolTable.whiteBallReflectionArrow.visible = false;
                       this.poolTable.otherBallReflectionArrow.visible = false;
                       this.poolTable.ballPositionCircleOnRaycast.visible = false;
                       this.poolTable.ballPositionCircle.visible = false;
                       // let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                       // this.poolTable.ballPositionCircle.x = localPoint.x;
                       // this.poolTable.ballPositionCircle.y = localPoint.y;
                       this.lastGoodRepositionPoint = new Vector2();
                       this.repositionWhiteBallEnabled = true;*/
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);

                let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));

                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }

                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
                }

                // if (localPoint.x < this.poolTable.rightLimit &&
                //     localPoint.x > this.poolTable.leftLimit &&
                //     localPoint.y < this.poolTable.downLimit &&
                //     localPoint.y > this.poolTable.upLimit) {
                //todo vezi ca mouse-ul sa fie in limita tablei de joc
                //vezi ca daca-i white ball penalty si e la margine, poti sa pui acolo follower-ul. nu-i ok boss
                let ballPositionCirclePosition: Vector2 = new Vector2(localPoint.x, localPoint.y);
                if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + PockeySettings.BALL_RADIUS;

                if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + PockeySettings.BALL_RADIUS;

                let ballPosition: Vector2;// = new Vector2(this.poolTable.ballPositionCircle.x,this.poolTable.ballPositionCircle.y)

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                        let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle: number = Math.atan2(opposite, adjacent);

                        ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        let isInteresectingWithOthers: boolean = false;
                        _.forEach(this.poolTable.balls, (ball2: AbstractBall) => {
                            if (ball2 != ball) {
                                let ball2Position: Vector2 = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers = true;
                                    return;
                                }
                            }
                        });

                        if (isInteresectingWithOthers) {
                            ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                            ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                        }
                        else {
                            this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                            this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        }
                    }

                    this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;
                    /* TweenMax.to(this.poolTable.ballPositionCircle, 0.1, {
                         x: ballPositionCirclePosition.x,
                         y: ballPositionCirclePosition.y
                     });*/
                    this.poolTable.ballPositionCircle.visible = true;

                });

                if (MouseHandler.Instance().left.down) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && !MouseHandler.Instance().left.down) {
                    this.repositionStarted = false;

                    // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    this.repositionWhiteBallEnabled = false;
                    this.poolTable.ballPositionCircle.visible = false;
                    // this.poolTable.whiteBall.canBeRemoved = false;
                    // this.poolTable.whiteBall.x = ballPositionCirclePosition.x;
                    // P2WorldManager.Instance().world.addBody(this.poolTable.whiteBall.p2Body);
                    // this.poolTable.whiteBall.p2Body.velocity[0] = 0;
                    // this.poolTable.whiteBall.p2Body.velocity[1] = 0;
                    // this.poolTable.whiteBall.addShadowBody();

                    // this.poolTable.whiteBall.alpha = 1;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    // if(this.poolTable.balls.cont)
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                    // this.poolTable.whiteBall.alpha = 1;//(this.poolTable.whiteBall);
                    // this.repositionStick();
                    // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);


                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);

                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                            ball.addShadowBody();
                        });
                        this.poolTable.raycastFollower.visible = true;
                        this.poolTable.ballPositionCircleOnRaycast.visible = true;

                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                        // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
                    }
                    // this.poolTable.whiteBall.y = ballPositionCirclePosition.y;
                    // this.ticker.add(this.poolTable.whiteBall.update);

                }
                this.sendElementsDataToManager();
            }

            protected handleCollisions(): void {
                _.remove(this.poolTable.balls, (ball: AbstractBall) => {

                    if (ball.canBeRemoved && !ball.animationInProgress) {
                        this.ticker.remove(ball.update);
                        ball.removedFromArray = true;
                        // if (ball.ballType == BallType.White && !ball.animationInProgress) {
                        //     // this.whiteBallInThePocket = true;
                        //         SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
                        //
                        // }
                        // else if(ball.ballType != BallType.White && ball.ballType != BallType.Puck && !ball.animationInProgress)
                        // {
                        // }

                        // if(this.checkIfOwnBall(ball.p2Body))
                        // {
                        //     SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
                        //
                        //     // SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [ball.ballType]);
                        //     // this.opponentBallInThePocket = true;
                        // }
                        // if (ball.ballType != BallType.White && !ball.animationInProgress) {
                        //     this.whiteBallInThePocket = true;
                        // }
                        // ball.reanimoved = true;

                    }

                    return ball.canBeRemoved && !ball.animationInProgress;

                });
            }

            private ballInPocketHandler(params: any[]): void {
                console.log("ball in Pocket: " + params);
                // _.remove(obj.subTopics, {
                //     subTopicId: stToDelete
                // });

                // _.remove(this.poolTable.balls, {
                //     subTopicId: stToDelete
                // });
                console.log("la pocket 1: " + this.poolTable.balls.length);
                // let ballName: string = params.toString();
                // _.remove(this.poolTable.balls, (ball: AbstractBall) => {
                //     return ball.name == ballName;
                // });
                console.log("la pocket 2: " + this.poolTable.balls.length);

            }

            private hideBallRayGraphics(): void {
                // console.log("%c Pool T Manager: intra la hideBallRayGraphics", "background: red; color: white; font-weight:bold; ");

                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                }
                this.lineBetweenCirclesVisible = false;
                this.poolTable.whiteBallReflectionArrow.visible = false;
                this.poolTable.otherBallReflectionArrow.visible = false;
                this.poolTable.raycastFollower.visible = false;
                this.poolTable.ballPositionCircleOnRaycast.visible = false;
            }

            protected update(): void {

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    this.onRepositionWhiteBall();

                    return;
                }

                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                        this.sendElementsDataToManager();
                    }
                }

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {

                    if (this.poolTable.poolStick.rotationEnabled) {
                        if (this.isFirstShoot) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                        }


                        if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;

                        }
                        this.graph = new Graphics();

                        let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));

                        let opposite: number = localPoint.y - this.poolTable.whiteBall.y;
                        let adjacent: number = localPoint.x - this.poolTable.whiteBall.x;
                        let rot: number = Math.atan2(opposite, adjacent);

                        let dir: Vector2 = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);

                        this.newPos = new Vector2(this.poolTable.whiteBall.x + dir.x, this.poolTable.whiteBall.y + dir.y);
                        this.shortestContactDistance = this.newPos.distanceTo(this.poolTable.whiteBall.position);
                        //===================
                        this.startRayCastPoint[0] = this.poolTable.whiteBall.x;
                        this.startRayCastPoint[1] = this.poolTable.whiteBall.y;
                        this.endRayCastPoint[0] = this.newPos.x;
                        this.endRayCastPoint[1] = this.newPos.y;
                        // P2WorldManager.Instance().world.removeBody(this.poolTable.whiteBall.p2Body);

                        p2.vec2.copy(this.rayClosest.from, this.startRayCastPoint);
                        p2.vec2.copy(this.rayClosest.to, this.endRayCastPoint);
                        // this.rayClosest.
                        this.rayClosest.update();
                        this.raycastResult.reset();
                        P2WorldManager.Instance().world.raycast(this.raycastResult, this.rayClosest);
                        this.drawRayResult(this.raycastResult, this.rayClosest);
                    }
                    this.sendElementsDataToManager();
                }
                /*// this.graph.lineStyle(2, 0xffffff);
                // this.graph.moveTo(localPoint.x, localPoint.y);
                if (this.repositionWhiteBallEnabled) {
                    if (this.graph) {
                        if (this.graph.parent)
                            this.graph.parent.removeChild(this.graph);
                        this.graph.clear();
                        this.graph = null;
                    }

                    // if (localPoint.x < this.poolTable.rightLimit &&
                    //     localPoint.x > this.poolTable.leftLimit &&
                    //     localPoint.y < this.poolTable.downLimit &&
                    //     localPoint.y > this.poolTable.upLimit) {

                    let ballPositionCirclePosition: Vector2 = new Vector2(localPoint.x, localPoint.y);
                    if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                        ballPositionCirclePosition.x = this.poolTable.rightLimit - PockeySettings.BALL_RADIUS;
                    if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                        ballPositionCirclePosition.x = this.poolTable.leftLimit + PockeySettings.BALL_RADIUS;

                    if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                        ballPositionCirclePosition.y = this.poolTable.downLimit - PockeySettings.BALL_RADIUS;
                    if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                        ballPositionCirclePosition.y = this.poolTable.upLimit + PockeySettings.BALL_RADIUS;

                    let ballPosition: Vector2;// = new Vector2(this.poolTable.ballPositionCircle.x,this.poolTable.ballPositionCircle.y)

                    _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                        ballPosition = new Vector2(ball.x, ball.y);
                        if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                            let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                            let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                            let rotAngle: number = Math.atan2(opposite, adjacent);

                            ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                            ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                            let isInteresectingWithOthers: boolean = false;
                            _.forEach(this.poolTable.balls, (ball2: AbstractBall) => {
                                if (ball2 != ball) {
                                    let ball2Position: Vector2 = new Vector2(ball2.x, ball2.y);
                                    if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
                                        isInteresectingWithOthers = true;
                                        return;
                                    }
                                }
                            });

                            if (isInteresectingWithOthers) {
                                ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                                ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                            }
                            else {
                                this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                                this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                            }
                        }

                        TweenMax.to(this.poolTable.ballPositionCircle, 0.1, {
                            x: ballPositionCirclePosition.x,
                            y: ballPositionCirclePosition.y
                        });
                        this.poolTable.ballPositionCircle.visible = true;


                    });

                    if (MouseHandler.Instance().left.pressed) {
                        // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                        this.repositionWhiteBallEnabled = false;
                        this.poolTable.ballPositionCircle.visible = false;
                        // this.poolTable.whiteBall.canBeRemoved = false;
                        // this.poolTable.whiteBall.x = ballPositionCirclePosition.x;
                        // P2WorldManager.Instance().world.addBody(this.poolTable.whiteBall.p2Body);
                        // this.poolTable.whiteBall.p2Body.velocity[0] = 0;
                        // this.poolTable.whiteBall.p2Body.velocity[1] = 0;
                        // this.poolTable.whiteBall.addShadowBody();

                        // this.poolTable.whiteBall.alpha = 1;
                        this.poolTable.whiteBall.reset();
                        this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                        this.poolTable.balls.push(this.poolTable.whiteBall);
                        this.poolTable.addChild(this.poolTable.whiteBall);
                        this.repositionStick();
                        // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);

                        // this.poolTable.whiteBall.y = ballPositionCirclePosition.y;
                        // this.ticker.add(this.poolTable.whiteBall.update);

                    }

                    return;
                }
                // else {
                if (this.ballsAreMoving()) {
                    // console.log("aici la 1");
                    this.handleCollisions();
                }
                else {
                    if (this.whiteBallInThePocket) {
                        // console.log("aici la 2");

                        SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
                        this.whiteBallInThePocket = false;

                        return;
                    }


                    if (this.poolTable.poolStick.rotationEnabled) {
                        // console.log("aici la 4");

                        if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;

                        }
                        this.graph = new Graphics();

                        let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));

                        let opposite: number = localPoint.y - this.poolTable.whiteBall.y;
                        let adjacent: number = localPoint.x - this.poolTable.whiteBall.x;
                        let rot: number = Math.atan2(opposite, adjacent);

                        let dir: Vector2 = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);

                        this.newPos = new Vector2(this.poolTable.whiteBall.x + dir.x, this.poolTable.whiteBall.y + dir.y);
                        this.shortestContactDistance = this.newPos.distanceTo(this.poolTable.whiteBall.position);
                        //===================
                        this.startRayCastPoint[0] = this.poolTable.whiteBall.x;
                        this.startRayCastPoint[1] = this.poolTable.whiteBall.y;
                        this.endRayCastPoint[0] = this.newPos.x;
                        this.endRayCastPoint[1] = this.newPos.y;
                        // P2WorldManager.Instance().world.removeBody(this.poolTable.whiteBall.p2Body);

                        p2.vec2.copy(this.rayClosest.from, this.startRayCastPoint);
                        p2.vec2.copy(this.rayClosest.to, this.endRayCastPoint);
                        // this.rayClosest.
                        this.rayClosest.update();
                        this.raycastResult.reset();
                        P2WorldManager.Instance().world.raycast(this.raycastResult, this.rayClosest);
                        this.drawRayResult(this.raycastResult, this.rayClosest);

                    }

                    if (this.ballWasShot && this.playerTurnStarted) {
                        this.ballWasShot = false;
                        this.playerTurnStarted = false;
                        // if (this.playerTurnStarted)
                        // {
                        //     this.playerTurnStarted = false;
                        SignalsManager.DispatchSignal(PockeySignalTypes.NEXT_TURN);
                        //
                        // }
                    }
                }*/

                // console.log("==============");
            }

            protected sendElementsDataToManager(): void {
                let ballsData: BallData[] = [];

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    ballsData.push(ball.getBallData());
                });

                if (!Settings.singlePlayer) {
                    /*let leftBallsData: BallData[] = [];

                    _.forEach(this.poolTable.leftBallsArray, (ball: AbstractBall) => {
                        leftBallsData.push(ball.getBallData());
                    });

                    let rightBallsData: BallData[] = [];

                    _.forEach(this.poolTable.rightBallsArray, (ball: AbstractBall) => {

                        rightBallsData.push(ball.getBallData());
                    });*/

                    let poolTableData: PoolTableData = {
                        poolstickPivotX: this.poolTable.poolStick.pivot.x,
                        poolstickRotation: this.poolTable.poolStick.rotation,
                        poolstickPositionX: this.poolTable.poolStick.position.x,
                        poolstickPositionY: this.poolTable.poolStick.position.y,
                        // leftBalls: leftBallsData,
                        // rightBalls: rightBallsData,
                        whiteBallData: this.poolTable.whiteBall.getBallData(),
                        // puckData: this.poolTable.puck.getBallData(),
                        balls: ballsData,

                        ballPositionCircleVisible: this.poolTable.ballPositionCircle.visible,
                        ballPositionCircleX: this.poolTable.ballPositionCircle.x,
                        ballPositionCircleY: this.poolTable.ballPositionCircle.y,

                        ballPositionCircleOnRaycastVisible: this.poolTable.ballPositionCircleOnRaycast.visible,
                        ballPositionCircleOnRaycastX: this.poolTable.ballPositionCircleOnRaycast.x,
                        ballPositionCircleOnRaycastY: this.poolTable.ballPositionCircleOnRaycast.y,

                        followerVisible: this.poolTable.raycastFollower.visible,
                        followerX: this.poolTable.raycastFollower.x,
                        followerY: this.poolTable.raycastFollower.y,

                        lineBetweenCirclesVisible: this.lineBetweenCirclesVisible,
                        lineBetweenCirclesPoints: this.lineBetweenCirclesPoints,
                        graphColor: this.graphColor
                    };
                    SignalsManager.DispatchSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, [poolTableData]);
                    // console.log("lungimea array-ului la sendData: " + this.poolTable.balls.length);

                }
            }

            private onWatch(params: any[]): void {

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    this.onStopAnimatePuckGoal();

                    let poolTableData: PoolTableData = params[0] as PoolTableData;
                    if (poolTableData.opponentState == PockeyStates.onShoot) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentsTurn]);
                    }
                    else {
                        console.log("poolTableData.opponentTimeFinished: " + poolTableData.opponentTimeFinished);
                        if (poolTableData.opponentTimeFinished == true) {
                            this.opponentTimeUp = true;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [this.uiTextOnWatch]);
                            this.opponentTimeUp = false;
                        }

                    }

                    // console.log("pool table data: " + poolTableData);
                    this.poolTable.poolStick.x = poolTableData.poolstickPositionX;
                    this.poolTable.poolStick.y = poolTableData.poolstickPositionY;
                    this.poolTable.poolStick.rotation = poolTableData.poolstickRotation;
                    this.poolTable.poolStick.reset();
                    this.poolTable.poolStick.pivot.x = poolTableData.poolstickPivotX;
                    this.poolTable.poolStick.visible = true;

                    let ballsData: BallData[] = poolTableData.balls;

                    let includesWhiteBall: boolean = false;
                    let whiteBallData: BallData;

                    _.remove(this.poolTable.balls, (ball: AbstractBall) => {
                        let canBeKept: boolean = false;

                        _.forEach(ballsData, (ballData: BallData) => {
                            if (ballData.name == ball.name) {
                                canBeKept = true;
                                ball.setBallData(ballData);
                            }
                            if (ballData.name == this.poolTable.whiteBall.name) {
                                whiteBallData = ballData;
                                includesWhiteBall = true;
                            }
                        });

                        if (!canBeKept) {
                            P2WorldManager.Instance().world.removeBody(ball.p2Body);
                            P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                            ball.removed = true;
                        }

                        return ball.removed;
                    });

                    if (includesWhiteBall && !_.includes(this.poolTable.balls, this.poolTable.whiteBall)) {
                        this.poolTable.whiteBall.setBallData(whiteBallData);
                        this.poolTable.whiteBall.reset();
                        this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                        this.poolTable.balls.push(this.poolTable.whiteBall);
                    }

                    this.graphColor = poolTableData.graphColor;
                    // console.log("lungimea array-ului la watch: " + this.poolTable.balls.length);
                    this.poolTable.raycastFollower.visible = poolTableData.followerVisible;

                    if (this.poolTable.raycastFollower.visible) {
                        if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                            (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = this.graphColor;
                        }

                        this.poolTable.raycastFollower.x = poolTableData.followerX;
                        this.poolTable.raycastFollower.y = poolTableData.followerY;
                    }

                    this.poolTable.ballPositionCircle.visible = poolTableData.ballPositionCircleVisible;

                    if (this.poolTable.ballPositionCircle.visible) {

                        this.poolTable.ballPositionCircle.x = poolTableData.ballPositionCircleX;
                        this.poolTable.ballPositionCircle.y = poolTableData.ballPositionCircleY;
                    }

                    this.poolTable.ballPositionCircleOnRaycast.visible = poolTableData.ballPositionCircleOnRaycastVisible;

                    if (this.poolTable.ballPositionCircleOnRaycast.visible) {
                        if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                            (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = this.graphColor;
                        }

                        this.poolTable.ballPositionCircleOnRaycast.x = poolTableData.ballPositionCircleOnRaycastX;
                        this.poolTable.ballPositionCircleOnRaycast.y = poolTableData.ballPositionCircleOnRaycastY;
                    }


                    if (this.graph) {
                        if (this.graph.parent)
                            this.graph.parent.removeChild(this.graph);
                        this.graph.clear();
                        this.graph = null;
                    }

                    this.lineBetweenCirclesVisible = poolTableData.lineBetweenCirclesVisible;
                    if (this.lineBetweenCirclesVisible) {
                        this.graph = new Graphics();

                        this.graph.lineStyle(4, this.graphColor);

                        this.graph.moveTo(poolTableData.lineBetweenCirclesPoints[0], poolTableData.lineBetweenCirclesPoints[1]);
                        this.graph.lineTo(poolTableData.lineBetweenCirclesPoints[2], poolTableData.lineBetweenCirclesPoints[3]);
                        this.poolTable.addChild(this.graph);
                    }
                }

            }

            private ballsArrayContainsBall(ballName: string): boolean {
                let contains: boolean = false;

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ballName == ball.name) {
                        contains = true;
                        return;
                    }
                });

                return contains;
            }

            private removeBallFromArray(ballName: string): void {

                _.remove(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ballName == ball.name) {
                        P2WorldManager.Instance().world.removeBody(ball.p2Body);
                        P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    }
                    return ballName == ball.name;
                });


            }

            protected drawRayResult(result, ray) {
                // console.log("aici la 5");

                result.getHitPoint(this.hitPoint, ray);
                // Draw hit point
                if (result.hasHit()) {
                    let defaultColor: number = 0xffffff;
                    this.graphColor = defaultColor;

                    // this.graph.tint = defaultColor;
                    this.poolTable.raycastFollower.visible = true;
                    if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                        (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
                    }
                    if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                        (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
                    }

                    let hitPoint: Vector2 = new Vector2(this.hitPoint[0], this.hitPoint[1]);
                    let rayFrom: Vector2 = new Vector2(ray.from[0], ray.from[1]);

                    //creating the line from white ball to the next target

                    let opposite: number = ray.from[1] - this.hitPoint[1];
                    let adjacent: number = ray.from[0] - this.hitPoint[0];
                    let raycastAngle: number = Math.atan2(opposite, adjacent);

                    let rayCastLineStart: Vector2 = new Vector2();
                    let rayCastLineEnd: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(PockeySettings.BALL_RADIUS);

                    rayCastLineEnd.x += hitPoint.x;//this.hitPoint[0];
                    rayCastLineEnd.y += hitPoint.y;//this.hitPoint[1];

                    rayCastLineStart.x = ray.from[0] - (PockeySettings.BALL_RADIUS + 4) * Math.cos(raycastAngle);
                    rayCastLineStart.y = ray.from[1] - (PockeySettings.BALL_RADIUS + 4) * Math.sin(raycastAngle);
                    this.graph.lineStyle(4, defaultColor);

                    this.graph.moveTo(rayCastLineEnd.x, rayCastLineEnd.y);
                    this.graph.lineTo(rayCastLineStart.x, rayCastLineStart.y);
                    this.graph.tint = defaultColor;

                    this.lineBetweenCirclesVisible = true;
                    this.lineBetweenCirclesPoints = [rayCastLineStart.x, rayCastLineStart.y, rayCastLineEnd.x, rayCastLineEnd.y];

                    this.poolTable.raycastFollower.x = hitPoint.x;
                    this.poolTable.raycastFollower.y = hitPoint.y;
                    this.poolTable.ballPositionCircleOnRaycast.x = rayFrom.x;
                    this.poolTable.ballPositionCircleOnRaycast.y = rayFrom.y;

                    this.poolTable.whiteBallReflectionArrow.visible = false;
                    this.poolTable.otherBallReflectionArrow.visible = false;
                    this.poolTable.ballPositionCircleOnRaycast.visible = true;

                    //if the follower hits a ball, then show collision directions graphics
                    if (!_.isNull(result.shape.radius) && !_.isUndefined(result.shape.radius)) {

                        let isOwnBall: boolean = this.checkIfOwnShadow(result.body);

                        if (isOwnBall) {
                            defaultColor = 0xca384d;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                        }

                        this.graphColor = defaultColor;

                        let isPuck: boolean = this.checkIfPuck(result.body);
                        if (isPuck) {
                            this.onAnimatePuckGoal();
                            console.log("e puck!!!!");
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                        }
                        else {
                            this.onStopAnimatePuckGoal();
                            console.log("nu e puck!!!!");

                        }
                        /*else {
                            if (this.isFirstShoot) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                            }
                        }*/

                        this.graph.tint = defaultColor;
                        if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                            (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
                        }
                        if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                            (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
                        }

                        let startPoint: Vector2;
                        let endPoint: Vector2;
                        let dottedLineArrowPoint: Vector2;
                        let tangentVector: Vector2 = new Vector2();

                        tangentVector.y = -(result.body.position[0] - this.hitPoint[0]);
                        tangentVector.x = result.body.position[1] - this.hitPoint[1];
                        tangentVector = tangentVector.normalise();

                        let relativeVelocity: Vector2 = new Vector2(this.hitPoint[0] - result.body.position[0], this.hitPoint[1] - result.body.position[1]);

                        let length: number = tangentVector.dot(relativeVelocity);

                        let cotangentVector: Vector2 = relativeVelocity.substract(tangentVector.multiply(length)).normalise();

                        let directionLength: number = 85;
                        let distanceToTheOtherBall: number =
                            new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS)
                                .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));

                        if (distanceToTheOtherBall > PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                            distanceToTheOtherBall = PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                        }
                        let arrowScaleFactor: number = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                        arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;

                        if (arrowScaleFactor > 0.03 && !isOwnBall) {
                            //white ball direction graphics

                            // let whiteBallArrowAngleCorrection: number = (tangentVector.x * tangentVector.y < 0) ? -1 : 1;

                            let whiteBallArrowAngleCorrection: number = 1;//(tangentVector.x * tangentVector.y < 0) ? -1 : 1;

                            startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
                            let opposedStartPoint: Vector2 = new Vector2(this.hitPoint[0] + (PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] + (PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
                            // console.log("startPoint.distanceTo(rayFrom): " + startPoint.distanceTo(rayFrom));
                            // console.log("oppStartPoint.distanceTo(rayFrom): " + opposedStartPoint.distanceTo(rayFrom));
                            // console.log("=====================");

                            if (startPoint.distanceTo(rayCastLineEnd) <= opposedStartPoint.distanceTo(rayCastLineEnd)) {
                                startPoint = opposedStartPoint;
                                whiteBallArrowAngleCorrection = -1;
                            }

                            directionLength = 68;

                            endPoint = new Vector2(startPoint.x - whiteBallArrowAngleCorrection * tangentVector.x * directionLength / 3 * arrowScaleFactor, startPoint.y - whiteBallArrowAngleCorrection * tangentVector.y * directionLength / 3 * arrowScaleFactor);

                            this.graph.lineStyle(4, 0xffffff);
                            this.graph.moveTo(startPoint.x, startPoint.y);
                            this.graph.lineTo(endPoint.x, endPoint.y);

                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;


                            endPoint.x -= whiteBallArrowAngleCorrection * tangentVector.x * directionLength * 2 / 3 * arrowScaleFactor;
                            endPoint.y -= whiteBallArrowAngleCorrection * tangentVector.y * directionLength * 2 / 3 * arrowScaleFactor;

                            let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                            directionLength = 85;

                            // let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);

                            this.poolTable.whiteBallReflectionArrow.x = dottedLineArrowPoint.x;
                            this.poolTable.whiteBallReflectionArrow.y = dottedLineArrowPoint.y;
                            this.poolTable.whiteBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
                            this.poolTable.whiteBallReflectionArrow.visible = true;
                        }
                        //other ball direction graphics

                        if ((1 - arrowScaleFactor) > 0.02 && !isOwnBall) {
                            startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * cotangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * cotangentVector.y));

                            endPoint = new Vector2(startPoint.x - cotangentVector.x * directionLength / 3 * (1 - arrowScaleFactor), startPoint.y - cotangentVector.y * directionLength / 3 * (1 - arrowScaleFactor));

                            this.graph.lineStyle(4, 0xffffff);
                            this.graph.moveTo(startPoint.x, startPoint.y);
                            this.graph.lineTo(endPoint.x, endPoint.y);

                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;

                            endPoint.x -= cotangentVector.x * directionLength * 2 / 3 * (1 - arrowScaleFactor);
                            endPoint.y -= cotangentVector.y * directionLength * 2 / 3 * (1 - arrowScaleFactor);

                            dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);

                            this.poolTable.otherBallReflectionArrow.x = dottedLineArrowPoint.x;
                            this.poolTable.otherBallReflectionArrow.y = dottedLineArrowPoint.y;
                            this.poolTable.otherBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
                            this.poolTable.otherBallReflectionArrow.visible = true;

                        }
                    }

                    this.poolTable.addChild(this.graph);
                }

            };


            protected ballsAreMoving(): boolean {
                let areMoving: boolean = false;
                _.forEach(this.poolTable.balls, (ball: AbstractBall, id: number) => {
                    if (ball.moving || ball.animationInProgress) {

                        areMoving = true;
                        return;
                    }
                });
                return areMoving;
            }

            protected onStartVersusGame() {
                // console.log("%c Pool T Manager: intra la onStartVersusGame", "background: red; color: white; font-weight:bold; ");
                // this.reactivateStick();
                // if (this.poolTable.poolStick && !this.poolTable.poolStick.isActive) {
                //     this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.startPosition.x, this.poolTable.poolStick.startPosition.y));
                //     // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
                //     SignalsManager.DispatchSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                // }
                // // this.playerTurnStarted = true;
                //
                // this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.startPosition.x, this.poolTable.poolStick.startPosition.y));
                // this.ticker.start();
            }

            private reactivateStick() {
                // console.log("%c Pool T Manager: intra la reactivate Stick", "background: red; color: white; font-weight:bold; ");
                // this.playerTurnStarted = true;

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    ball.addShadowBody();
                });
                this.poolTable.raycastFollower.visible = true;
                this.poolTable.ballPositionCircleOnRaycast.visible = true;

                this.poolTable.poolStick.activate(this.poolTable.whiteBall.position);
            }

            private checkIfOwnShadow(body: p2.Body): boolean {
                let isOwnBall: boolean = false;
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {

                    if (ball.ballType == GameManager.Instance().currentPlayer.type && ball.p2BodyShadow.id == body.id) {
                        isOwnBall = true;
                    }

                });
                return isOwnBall;
            }

            private checkIfPuck(body: p2.Body): boolean {
                let isPuck: boolean = false;
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {

                    if (ball.ballType == BallType.Puck && ball.p2BodyShadow.id == body.id) {
                        // console.log("ball.p2Body.id, body.id " + ball.p2Body.id, body.id);
                        // && ball.p2Body.id == body.id
                        isPuck = true;
                    }

                });
                return isPuck;
            }

            private checkIfOwnBall(body: p2.Body): boolean {
                let isOwnBall: boolean = false;
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ball.ballType == GameManager.Instance().currentPlayer.type && ball.p2Body.id == body.id) {
                        isOwnBall = true;
                    }
                });
                return isOwnBall;
            }
        }


    }
}