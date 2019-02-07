///<reference path="../../../../lib/types/lodash/index.d.ts"/>
///<reference path="../StateMachine/pockey-state-machine.ts"/>
///<reference path="../../../Framework/Utils/Vector2.ts"/>
///<reference path="../../../Framework/Utils/pixi-dashed-line.ts"/>
///<reference path="../../../Framework/Utils/mouse-handler.ts"/>
///<reference path="pool-table.ts"/>
///<reference path="../../../../lib/types/greensock/greensock.d.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
///<reference path="../../../../node_modules/babylonjs/babylon.d.ts"/>
///<reference path="goalkeepers-holder.ts"/>


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
        import PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        import PockeyStates = Pockey.StateMachineModule.PockeyStates;
        import MouseHandler = Framework.Utils.MouseHandler;
        import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        import Settings = Framework.Settings;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        import AbstractEntryPoint = Framework.AbstractEntryPoint;
        import Vector3 = BABYLON.Vector3;
        import Color4 = BABYLON.Color4;
        import Circle = PIXI.Circle;

        export interface StickState {
            x?: number,
            y?: number,
            rotation?: number,
            pivotX?: number,
            visible?: boolean
        }


        export interface GraphicsState {

            visible?: boolean,
            onReposition?: boolean,
            graphicsColor?: Color4,

            whiteBallPositionOnReposition?: number[],//done
            whiteBallPositionOnRayCast?: number[],//done
            circleFollowerPosition?: number[],//done
            lineBetweenCirclesCoordinates?: number[][],//done

            otherBallDirectionPoints?: number[][],
            otherBallArrowPositionAndRotation?: number[][],

            whiteBallDirectionPoints?: number[][],
            whiteBallDashedPoints?: number[][],
            whiteBallArrowPositionAndRotation?: number[],
            /*

                        // whiteBallReflectionDirectionArrowVisibile?:boolean,
                        whiteBallReflectionDirectionArrowPosition?: Vector2,
                        whiteBallReflectionDirectionArrowRotation?: number,

                        // whiteBallReflectionDirectionArrowVisibile?:boolean,
                        otherBallReflectionDirectionArrowPosition?: Vector2,
                        otherBallReflectionDirectionArrowRotation?: number,*/


        }

        export interface TimeState {
            id?: number,
            stickState?: StickState,
            ballsStates?: BallState[],
            whiteBallState?: BallState,
            puckState?: BallState,
            graphicsState?: GraphicsState,
            // gameState?: GameState,
            goalieState?: GoalieState,
            time?: number
        }

        export interface PoolTableData {
            timeStates?: TimeState[],
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
            opponentTimerText?: string,
            opponentTimerAnimate?: boolean,
            opponentState?: PockeyStates,
            opponentTimeFinished?: boolean,
            // leftBalls?: BallData[],
            // rightBalls?: BallData[],
            // whiteBallData?: BallData,
            // puckData?: BallData,
            whiteBallPenalty?: boolean,
            ballsHit?: number,
            // balls?: BallData[],

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
            graphColor?: number,
            leftGoalieY?: number,
            rightGoalieY?: number,
        }

        export interface Limits {
            left: number,
            right: number,
            up: number,
            down: number
        }

        export class PoolTableManager {

            // protected graph: Graphics;
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

            private hitPoint: p2.vec2 = p2.vec2.create();
            private ticker: PIXI.ticker.Ticker;
            private arrowsDeviationLength: number = 0;
            private whiteBallDirectionMesh: any;
            private whiteBallPostCollisionDirectionMesh: any;
            private whiteBallDashedMesh: any;
            private otherBallPostCollisionDirectionMesh: any;
            private framesCounter: number = 0;
            private sendPoolDataFrameStep: number = 6;

            protected ballPositionCircleMesh: any;
            protected ballPositionCircleOnRaycastMesh: any;
            protected raycastFollowerMesh: any;
            protected totalSizeOfJson: number = 0;
            protected totalSizeOfJsonStringified: number = 0;
            protected opponentTimeUp: boolean = false;
            protected repositionStarted: boolean = false;
            protected isFirstShoot: boolean = true;
            protected uiTextOnWatch: string = "";
            protected lineBetweenCirclesPoints: number[][];
            protected otherBallDirectionPoints: number[][];
            protected whiteBallDirectionPoints: number[][];
            protected whiteBallDashedPoints: number[][];
            protected graphColor: Color4;
            protected goaliesHolder: GoalkeepersHolder;
            protected firstMessageReceivedOnWatch: boolean = false;
            protected lastTime: number = 0;
            protected sendTimes: number = 0;

            public whiteBallReflectionArrowMesh: any;
            public otherBallReflectionArrowMesh: any;
            public poolTable: PoolTable;

            ////////////////////
            protected opponentTimeStates: TimeState[];
            // protected updatesReceivedOnWatch: number = 0;
            protected enableUpdateOnWatch: boolean = false;

            protected _fpsThresholdInMs: number = 1000 / 60; // 60 fps in ms ~16.66666ms
            protected _accumulator: number = 0;
            ////////////////////

            private t: number = 0.0;
            private dt = 0.01;

            // private _currentTime:number = hires_time_in_seconds();
            private accumulator: number = 0.0;
            private statesCreated: number = 0;
            private statesReceived: number = 0;
            private graphicsHidden: boolean = false;
            // State previous;
            // State current;

            //@ts-ignore
            // protected smoothie:Smoothie;

            constructor() {
                // console.log("%c Pool T Manager: intra la constructor ", "background: red; color: white; font-weight:bold; ");
                this.opponentTimeStates = [];

                this.registerSignalsHandlers();
                this.createMeshes();

                this.poolTable = new PoolTable();
                this.poolTable.visible = false;

                /* //@ts-ignore
                 this.smoothie = new Smoothie({
                     engine: PIXI,
                     renderer: AbstractEntryPoint.renderer,
                     root: AbstractEntryPoint.stage,
                     fps: 60,
                     interpolate:true,
                     update: this.update.bind(this)
                 });*/
                // this.poolTable.x = 650;
                // this.poolTable.y = 380;

                this.ticker = PIXI.ticker.shared;

                if (this.poolTable.poolStick)
                    this.ticker.add(this.poolTable.poolStick.update, this.poolTable.poolStick);

                this.goaliesHolder = new GoalkeepersHolder(this.poolTable.leftGoalie, this.poolTable.rightGoalie);
                // if (this.poolTable.leftGoalie)
                this.ticker.add(this.goaliesHolder.update, this.goaliesHolder);

                // if (this.poolTable.rightGoalie)
                //     this.ticker.add(this.poolTable.rightGoalie.update, this.poolTable.rightGoalie);

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    this.ticker.add(ball.update, ball);
                    ball.addShadowBody();
                });

                // this.smoothie.start();
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

                                /* if (this.poolTable.whiteBall.x != this.expectedCollisionPoint.x || this.poolTable.whiteBall.y != this.expectedCollisionPoint.y) {
                                     this.poolTable.whiteBall.x = this.expectedCollisionPoint.x;
                                     this.poolTable.whiteBall.y = this.expectedCollisionPoint.y;
                                     console.log("lock");
                                 }
                                 // if(this.poolTable.whiteBall.x !)
                                 console.log("mumu1 ALBA LA CONTACT!!!!: " + this.poolTable.whiteBall.x, this.poolTable.whiteBall.y);
                                 console.log("mumu1 S-A TRAS!!!!: " + this.expectedCollisionPoint.x, this.expectedCollisionPoint.y);*/
                            }
                            else if (evt.bodyB == this.poolTable.whiteBall.p2Body) {
                                isOwnBall = this.checkIfOwnBall(evt.bodyA);

                                /*if (this.poolTable.whiteBall.x != this.expectedCollisionPoint.x || this.poolTable.whiteBall.y != this.expectedCollisionPoint.y) {
                                    this.poolTable.whiteBall.x = this.expectedCollisionPoint.x;
                                    this.poolTable.whiteBall.y = this.expectedCollisionPoint.y;
                                }

                                console.log("mumu2 ALBA LA CONTACT!!!!: " + this.poolTable.whiteBall.x, this.poolTable.whiteBall.y);
                                console.log("mumu2 S-A TRAS!!!!: " + this.expectedCollisionPoint.x, this.expectedCollisionPoint.y);*/
                            }

                            if (isOwnBall) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                            }
                        }
                    }
                }, this);

                this.lineBetweenCirclesPoints = [];
                this.otherBallDirectionPoints = [];
                this.whiteBallDirectionPoints = [];
                this.whiteBallDashedPoints = [];
                this.graphColor = new Color4(1, 1, 1, 1);
                this.hideBallRayGraphics();
            }

            private createMeshes(): void {
                this.ballPositionCircleMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS - 2}, AbstractEntryPoint.scene);
                this.ballPositionCircleMesh.enableEdgesRendering();
                this.ballPositionCircleMesh.edgesWidth = 10;
                this.ballPositionCircleMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.ballPositionCircleMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                this.ballPositionCircleOnRaycastMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS + 6}, AbstractEntryPoint.scene);
                this.ballPositionCircleOnRaycastMesh.enableEdgesRendering();
                this.ballPositionCircleOnRaycastMesh.edgesWidth = 10;
                this.ballPositionCircleOnRaycastMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                this.raycastFollowerMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS}, AbstractEntryPoint.scene);
                this.raycastFollowerMesh.enableEdgesRendering();
                this.raycastFollowerMesh.edgesWidth = 10;
                this.raycastFollowerMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                let arrowsPoints: Vector3[] = [
                    new BABYLON.Vector3(0, -10, 0),
                    new BABYLON.Vector3(0, 0, 0),
                    new BABYLON.Vector3(-1.7, 0, 0),
                    new BABYLON.Vector3(10.5, 0, 0)];

                this.whiteBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("whiteBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
                this.whiteBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
                this.whiteBallReflectionArrowMesh.enableEdgesRendering();
                this.whiteBallReflectionArrowMesh.edgesWidth = 9;
                this.whiteBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.whiteBallReflectionArrowMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                this.otherBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("otherBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
                this.otherBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
                this.otherBallReflectionArrowMesh.enableEdgesRendering();
                this.otherBallReflectionArrowMesh.edgesWidth = 9;
                this.otherBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.otherBallReflectionArrowMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.whiteBallDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;


                this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.otherBallPostCollisionDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;

                this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.whiteBallPostCollisionDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;

                // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("whiteBallDashedMesh", this.whiteBallDashedPoints, 3, 3, 4, AbstractEntryPoint.scene, true);
                // this.whiteBallDashedMesh.enableEdgesRendering();
                // this.whiteBallDashedMesh.edgesWidth = 10;
                // this.whiteBallDashedMesh.edgesColor = hexDefaultColor;


                let myPoints = [
                    new BABYLON.Vector3(0, 100, 10),
                    new BABYLON.Vector3(100, 0, 10)
                ];
                // this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {points: myPoints}, AbstractEntryPoint.scene);
                // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("whiteBallDashedMesh", myPoints, 3, 3, 4, AbstractEntryPoint.scene, true);dash/gap/dashnb
                this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
                    points: myPoints,
                    dashSize: 3,
                    gapSize: 3,
                    dashNb: 4,
                    updatable: true
                }, AbstractEntryPoint.scene);

                this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                //Create dashedlines with updatable parameter set to true for later changes
                // var lines = BABYLON.MeshBuilder.CreateDashedLines("lines", {points: myPoints, updatable: true}, scene);

            }

            private registerSignalsHandlers(): void {

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_POOLTABLE, this.onShowPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS, this.hideBallRayGraphics.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.REACTIVATE_STICK, this.reactivateStick.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.APPLY_POOLTABLE_STATE, this.applyTimeState.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetPuckGoalsSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, this.onUpdateUITextOnWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CREATE_POOLTABLE_STATE, this.onCreatePoolTableTimeState.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS, this.changeWhiteBallStatus.bind(this));

                /* SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL, this.onAnimatePuckGoal.bind(this));
                 SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP, this.onStopAnimatePuckGoal.bind(this));*/

                // SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.ballInPocketHandler.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_WHITE_BALL, this.onRepositionWhiteBall.bind(this));
                // SignalsManager.AddSignalCallback(SignalsType.FIRST_ROUND, this.onStarted.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_STICK, this.repositionStick.bind(this));
            }

            protected onCreatePoolTableTimeState(params: any): void {
                let timeState: TimeState = {};

                timeState.stickState = this.poolTable.poolStick.getStickState();
                timeState.whiteBallState = this.poolTable.whiteBall.getState();

                timeState.ballsStates = [];

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    timeState.ballsStates.push(ball.getState());
                });
                timeState.goalieState = this.goaliesHolder.getState();
                timeState.graphicsState = this.createGraphicsState();


                (params[0] as Function)(timeState);
            }

            protected createGraphicsState(): GraphicsState {
                let state: GraphicsState = {};
                state.onReposition = false;

                state.visible = !this.graphicsHidden;

                if (!state.visible) {
                    return state;
                }

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    state.onReposition = true;
                    state.whiteBallPositionOnReposition = [this.ballPositionCircleMesh.position.x, this.ballPositionCircleMesh.position.y];
                    return state;
                }

                state.graphicsColor = this.graphColor;

                state.whiteBallPositionOnRayCast = [this.ballPositionCircleOnRaycastMesh.position.x, this.ballPositionCircleOnRaycastMesh.position.y];
                state.circleFollowerPosition = [this.raycastFollowerMesh.position.x, this.raycastFollowerMesh.position.y];
                state.lineBetweenCirclesCoordinates = this.lineBetweenCirclesPoints;
                // this.lineBetweenCirclesPoints = [];
                if (this.otherBallDirectionPoints.length == 0) {
                    state.otherBallDirectionPoints = [];
                }
                else {
                    state.otherBallDirectionPoints = this.otherBallDirectionPoints;
                    state.otherBallArrowPositionAndRotation = [this.otherBallReflectionArrowMesh.position.x, this.otherBallReflectionArrowMesh.position.y, this.otherBallReflectionArrowMesh.rotation.z];
                    state.whiteBallArrowPositionAndRotation = [this.whiteBallReflectionArrowMesh.position.x, this.whiteBallReflectionArrowMesh.position.y, this.whiteBallReflectionArrowMesh.rotation.z];
                }

                if (this.whiteBallDirectionPoints.length == 0) {
                    state.whiteBallDirectionPoints = [];
                    // console.log("points length: " + this.whiteBallDirectionPoints.length);
                }
                else {
                    state.whiteBallDirectionPoints = this.whiteBallDirectionPoints;
                    // console.log("points length: " + this.whiteBallDirectionPoints.length);

                    state.whiteBallDashedPoints = this.whiteBallDashedPoints;
                    state.whiteBallArrowPositionAndRotation = [this.whiteBallReflectionArrowMesh.position.x, this.whiteBallReflectionArrowMesh.position.y, this.whiteBallReflectionArrowMesh.rotation.z];
                }

                return state;
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
                this.poolTable.leftGoalie.type = params[0];
                // console.log("leftGoal.type: " + this.poolTable.leftGoal.type);
                this.poolTable.rightGoal.type = params[1];
                this.poolTable.rightGoalie.type = params[1];
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

                if (this.poolTable.leftGoalie.type == BallType.Opponent) {
                    this.poolTable.leftGoalie.goalieMiddleLayer.tint = color;
                }
                else {
                    this.poolTable.rightGoalie.goalieMiddleLayer.tint = color;
                }

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ball.ballType == BallType.Opponent) {
                        ball.tintBall(color);
                    }
                });
                // this.poolTable.rightGoalTop.tint = color;
            }

            protected onChangePlayerColor(color: string): void {
                if (this.poolTable.leftGoal.type == BallType.Player) {
                    this.poolTable.leftGoal.tint = +color;
                }
                else {
                    this.poolTable.rightGoal.tint = +color;
                }

                if (this.poolTable.leftGoalie.type == BallType.Player) {
                    this.poolTable.leftGoalie.goalieMiddleLayer.tint = +color;
                }
                else {
                    this.poolTable.rightGoalie.goalieMiddleLayer.tint = +color;
                }
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    if (ball.ballType == BallType.Player) {
                        ball.tintBall(+color);
                    }
                });
                // this.poolTable.rightGoalTop.tint = color;
            }

            protected onShowPoolTable(): void {
                this.poolTable.visible = true;
            }

            protected onResetPoolTable(): void {
                console.log("intra la p");
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
                    if (!ball.canBeRemoved || ball.ballType == BallType.White) {
                        P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                        ball.p2Body.wakeUp();
                    }

                });
                this.poolTable.whiteBall.onShoot(rotation, this.poolTable.poolStick.power);
                this.poolTable.whiteBall.isOnRearrange = false;
                this.poolTable.poolStick.power = 0;

                this.isFirstShoot = false;

                /*this.poolTable.poolStick.hide();
                this.hideBallRayGraphics();*/
                // this.shootingEnded = true;
                // if (this.shootingEnded) {
                // console.log("aici la 3");

                // this.shootingEnded = false;
                // this.ballWasShot = true;
                // return;
                // this.repositionStick();
                // }


                // console.log("mumu !!!!: " + this.expectedCollisionPoint.x, this.expectedCollisionPoint.y);
            }

            protected onRepositionWhiteBall(): void {

                if (!this.poolTable.whiteBall.isOnReposition) {
                    // this.poolTable.whiteBall.hid
                    console.log("intra aicisha");
                    this.poolTable.whiteBall.isOnReposition = true;
                }
                else {
                    console.log("intra aicisha pe dracu");
                }

                this.graphicsHidden = false;
                if (!this.goaliesHolder.moving)
                    this.goaliesHolder.moving = true;
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
                if (this.ballPositionCircleMesh) {
                    this.ballPositionCircleMesh.setEnabled(true);
                }

                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);

                let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));

                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }

                // if (this.graph) {
                //     if (this.graph.parent)
                //         this.graph.parent.removeChild(this.graph);
                //     this.graph.clear();
                //     this.graph = null;
                // }

                // if (localPoint.x < this.poolTable.rightLimit &&
                //     localPoint.x > this.poolTable.leftLimit &&
                //     localPoint.y < this.poolTable.downLimit &&
                //     localPoint.y > this.poolTable.upLimit) {
                //todo vezi ca mouse-ul sa fie in limita tablei de joc
                //vezi ca daca-i white ball penalty si e la margine, poti sa pui acolo follower-ul. nu-i ok boss

                /////////////////////////aicisha!!!!!!!!!!!!

                /*let ballPositionCirclePosition: Vector2 = new Vector2(localPoint.x, localPoint.y);
                if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + PockeySettings.BALL_RADIUS;

                if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + PockeySettings.BALL_RADIUS;

                this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;

                let ballPosition: Vector2;// = new Vector2(this.poolTable.ballPositionCircle.x,this.poolTable.ballPositionCircle.y)

                _.forEach(this.poolTable.goalkeepersCircles, (circle: Circle) => {
                    ballPosition = new Vector2(circle.x, circle.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < circle.radius + PockeySettings.BALL_RADIUS) {
                        let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle: number = Math.atan2(opposite, adjacent);

                        ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + circle.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + circle.radius) * Math.sin(rotAngle);
                        this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                        this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                    }

                    // this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                    // this.ballPositionCircleMesh.position.y = -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET;

                });

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

                        _.forEach(this.poolTable.goalkeepersCircles, (ball2: Circle) => {
                            let ball2Position: Vector2 = new Vector2(ball2.x, ball2.y);
                            if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
                                isInteresectingWithOthers = true;
                                return;
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

                    // this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    // this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;

                    /!* TweenMax.to(this.poolTable.ballPositionCircle, 0.1, {
                         x: ballPositionCirclePosition.x,
                         y: ballPositionCirclePosition.y
                     });*!/
                    // this.poolTable.ballPositionCircle.visible = true;

                });
                this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                this.ballPositionCircleMesh.position.y = -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET;*/

                /////////////////////////aicisha!!!!!!!!!!!!

                let ballPositionCirclePosition: Vector2 = new Vector2(localPoint.x, localPoint.y);
                let isInteresectingWithOthers: boolean = false;

                if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + PockeySettings.BALL_RADIUS;

                if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + PockeySettings.BALL_RADIUS;


                let ballPosition: Vector2;// = new Vector2(this.poolTable.ballPositionCircle.x,this.poolTable.ballPositionCircle.y)

                _.forEach(this.poolTable.goalkeepersCircles, (ball: Circle) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                        let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle: number = Math.atan2(opposite, adjacent);

                        ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        // _.forEach(this.poolTable.balls, (ball2: AbstractBall) => {
                        //     // if (ball2 != ball) {
                        //         let ball2Position: Vector2 = new Vector2(ball2.x, ball2.y);
                        //         if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
                        //             isInteresectingWithOthers = true;
                        //             return;
                        //         }
                        //     // }
                        // });
                    }

                    // aici verifici daca noul mouse e aproape de vreo minge sau cercul la portari sau perete daca e, nu-l muti si gata, cred
                    // this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    // this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;
                    /* TweenMax.to(this.poolTable.ballPositionCircle, 0.1, {
                         x: ballPositionCirclePosition.x,
                         y: ballPositionCirclePosition.y
                     });*/
                    // this.poolTable.ballPositionCircle.visible = true;
                });

                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS && !ball.canBeRemoved && ball != this.poolTable.whiteBall) {
                        let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle: number = Math.atan2(opposite, adjacent);

                        ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        _.forEach(this.poolTable.balls, (ball2: AbstractBall) => {
                            if (ball2 != ball) {
                                let ball2Position: Vector2 = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers = true;
                                    return;
                                }
                            }
                        });
                    }

                    // aici verifici daca noul mouse e aproape de vreo minge sau cercul la portari sau perete daca e, nu-l muti si gata, cred
                    // this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    // this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;
                    /* TweenMax.to(this.poolTable.ballPositionCircle, 0.1, {
                         x: ballPositionCirclePosition.x,
                         y: ballPositionCirclePosition.y
                     });*/
                    // this.poolTable.ballPositionCircle.visible = true;
                });


                /* _.forEach(this.poolTable.goalkeepersCircles, (circle: Circle) => {
                     let circlePosition:Vector2 = new Vector2(circle.x, circle.y);
                     if (circlePosition.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + circle.radius) {
                         isInteresectingWithOthers = true;
                         return;
                     }
                 });*/
                _.forEach(this.poolTable.goalkeepersCircles, (ball: Circle) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                        isInteresectingWithOthers = true;
                        return;
                    }
                });

                if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    isInteresectingWithOthers = true;
                if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    isInteresectingWithOthers = true;

                if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    isInteresectingWithOthers = true;

                if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    isInteresectingWithOthers = true;

                if (isInteresectingWithOthers) {
                    ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                    ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                }
                else {
                    this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                    this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;

                }

                this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                this.ballPositionCircleMesh.position.y = -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET;

                TweenMax.to(this.ballPositionCircleMesh.position, 0.1, {
                    x: ballPositionCirclePosition.x,
                    y: -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET
                });

                if (MouseHandler.Instance().left.down) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && !MouseHandler.Instance().left.down) {
                    this.repositionStarted = false;

                    // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    this.repositionWhiteBallEnabled = false;
                    // this.poolTable.ballPositionCircle.visible = false;
                    // this.poolTable.whiteBall.canBeRemoved = false;
                    // this.poolTable.whiteBall.x = ballPositionCirclePosition.x;
                    // P2WorldManager.Instance().world.addBody(this.poolTable.whiteBall.p2Body);
                    // this.poolTable.whiteBall.p2Body.velocity[0] = 0;
                    // this.poolTable.whiteBall.p2Body.velocity[1] = 0;
                    // this.poolTable.whiteBall.addShadowBody();

                    // this.poolTable.whiteBall.alpha = 1;
                    this.poolTable.whiteBall.isOnReposition = false;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    // if(this.poolTable.balls.cont)
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    // this.poolTable.shadowsHolder.addChild(this.poolTable.whiteBall);
                    // this.poolTable.whiteBall.alpha = 1;//(this.poolTable.whiteBall);
                    // this.repositionStick();
                    // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);


                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);

                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                            ball.addShadowBody();
                        });
                        // this.poolTable.raycastFollower.visible = true;
                        // this.poolTable.ballPositionCircleOnRaycast.visible = true;

                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                        // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
                    }
                    // this.poolTable.whiteBall.y = ballPositionCirclePosition.y;
                    // this.ticker.add(this.poolTable.whiteBall.update);

                }


            }

            protected handleCollisions(): void {
                /*_.remove(this.poolTable.balls, (ball: AbstractBall) => {

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

                });*/
            }

            // private enableBallRayGraphics(): void {
            //     this.ballPositionCircleMesh.setEnabled(true);
            //     this.ballPositionCircleMesh.material.unfreeze();
            //
            //     this.ballPositionCircleOnRaycastMesh.setEnabled(true);
            //     this.ballPositionCircleOnRaycastMesh.material.unfreeze();
            //
            //     this.raycastFollowerMesh.setEnabled(true);
            //     this.raycastFollowerMesh.material.unfreeze();
            //
            //     this.whiteBallReflectionArrowMesh.setEnabled(true);
            //     this.whiteBallReflectionArrowMesh.material.unfreeze();
            //
            //     this.otherBallReflectionArrowMesh.setEnabled(true);
            //     this.otherBallReflectionArrowMesh.material.unfreeze();
            //
            //     // this.whiteBallDirectionMesh.dispose();
            //
            //     this.graphicsHidden = false;
            // }

            private hideBallRayGraphics(): void {
                this.ballPositionCircleMesh.setEnabled(false);
                // this.ballPositionCircleMesh.material.freeze();

                this.ballPositionCircleOnRaycastMesh.setEnabled(false);
                // this.ballPositionCircleOnRaycastMesh.material.freeze();

                this.raycastFollowerMesh.setEnabled(false);
                console.log("raycastFollowerMesh la hideball gr");
                // this.raycastFollowerMesh.material.freeze();

                this.whiteBallReflectionArrowMesh.setEnabled(false);
                // this.whiteBallReflectionArrowMesh.material.freeze();

                this.otherBallReflectionArrowMesh.setEnabled(false);
                // this.otherBallReflectionArrowMesh.material.freeze();

                if (this.whiteBallDirectionMesh)
                    this.whiteBallDirectionMesh.setEnabled(false);//();
                if (this.otherBallPostCollisionDirectionMesh)
                    this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                if (this.whiteBallPostCollisionDirectionMesh)
                    this.whiteBallPostCollisionDirectionMesh.setEnabled(false);
                if (this.whiteBallDashedMesh)
                    this.whiteBallDashedMesh.setEnabled(false);//();

                this.graphicsHidden = true;
            }

            /* protected onWatchInProgress(): boolean {
                 let onWatch: boolean = false;

                 _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                     if (ball.onWatchTimeline.isActive()) {
                         onWatch = true;
                         return;
                     }
                 });

                 return onWatch;
             }*/

            protected update(): void {

                // if (this.poolTable.leftGoalie.moving) {
                //     this.poolTable.rightGoalie.y = this.poolTable.leftGoalie.y;
                //     this.poolTable.rightGoalie.setBodyPosition();//. = this.poolTable.leftGoalie.y;
                // }

//                 if (this.enableUpdateOnWatch && this.opponentTimeStates.length > 1) {
// //                     console.log("opp states before applying: " + this.opponentTimeStates.length);
// //                     TweenMax.delayedCall(this.opponentTimeStates[0].time, this.applyTimeState.bind(this));
//                     this.applyTimeState();
//                     /* let _currentTime:number = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
//
//                      this.interpolateStates(_currentTime);*/
// //                     console.log("opp states after applying: " + this.opponentTimeStates.length);
//
//                 }
//                 else if (this.enableUpdateOnWatch && this.opponentTimeStates.length == 0) {
//                     this.enableUpdateOnWatch = false;
//                     SignalsManager.DispatchSignal("")
//                     // this.updatesReceivedOnWatch = 0;
//                 }

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    // if (this.onWatchInProgress()) {
                    //     return;
                    // }
                    // console.log("intra la repo ball");

                    // this.framesCounter = 0;
                    // if (!this.goaliesHolder.moving)
                    //     this.goaliesHolder.moving = true;

                    // if (!this.poolTable.rightGoalie.moving)
                    //     this.poolTable.rightGoalie.startMoving();

                    this.onRepositionWhiteBall();

                    return;
                }

                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    // console.log("intra la onshoot");
                    // if (this.onWatchInProgress()) {
                    //     return;
                    // }

                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();

                        // this.sendElementsDataToManager();
                    }
                }

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
                    this.graphicsHidden = false;
                    /*if (this.onWatchInProgress()) {
                        return;
                    }*/
                    // this.framesCounter = 0;
//                     console.log("intra la rearrange");
                    if (!this.goaliesHolder.moving)
                        this.goaliesHolder.moving = true;


                    // P2WorldManager.Instance().world.addBody(this.poolTable.whiteBall.p2Body);
                    // this.poolTable.whiteBall.p2Body.velocity[0] = 0;
                    // this.poolTable.whiteBall.p2Body.velocity[1] = 0;
                    // this.poolTable.whiteBall.addShadowBody();

                    // this.poolTable.whiteBall.alpha = 1;
                    if (!this.poolTable.whiteBall.isOnRearrange) {
                        this.poolTable.whiteBall.isOnRearrange = true;
                    }
                    this.poolTable.whiteBall.ballPosition = new Vector2(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y);

                    if (this.poolTable.poolStick.rotationEnabled) {


                        // if (!this.poolTable.rightGoalie.moving)
                        //     this.poolTable.rightGoalie.startMoving();


                        /*if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;

                        }
                        this.graph = new Graphics();*/
                        if (this.whiteBallDirectionMesh) {
                            this.whiteBallDirectionMesh.setEnabled(false);//();
                        }
                        if (this.whiteBallPostCollisionDirectionMesh) {
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(false);//();
                        }
                        if (this.otherBallPostCollisionDirectionMesh) {
                            this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                        }
                        if (this.whiteBallDashedMesh) {
                            this.whiteBallDashedMesh.setEnabled(false);//();
                        }
                        if (this.ballPositionCircleMesh) {
                            this.ballPositionCircleMesh.setEnabled(false);
                            // this.ballPositionCircleMesh.material.freeze();
                        }
                        if (this.raycastFollowerMesh) {

                            // console.log("raycastFollowerMesh la on rearrange");

                            this.raycastFollowerMesh.setEnabled(true);

                            // this.raycastFollowerMesh.material.unfreeze();
                        }
                        if (this.ballPositionCircleOnRaycastMesh) {
                            this.ballPositionCircleOnRaycastMesh.setEnabled(true);
                            // console.log("se enable-uie ce plm");

                            // this.ballPositionCircleOnRaycastMesh.material.unfreeze();
                        }

                        // if (this.whiteBallReflectionArrowMesh.material.isFrozen) {
                        //     // this.ballPositionCircleOnRaycastMesh.material.unfreeze();
                        // }
                        this.whiteBallReflectionArrowMesh.setEnabled(false);

                        // if (this.otherBallReflectionArrowMesh.material.isFrozen) {
                        //     this.otherBallReflectionArrowMesh.material.unfreeze();
                        // }
                        this.otherBallReflectionArrowMesh.setEnabled(false);

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

                    // this.sendElementsDataToManager();
                    // }
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
                        // console.log("aici la 4");;

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

            // Entity Interpolation In General
            // The principle is pretty simple. Server sends updates containing positions of all entities (other players). Client waits a few updates before moving the entity while interpolating between the individual updates.
            //
            // As an example, if server sends updates every 100 ms, client can wait until it receives 3rd update (i.e. 200 ms since the first) and then starts moving the entity, while interpolating between the states. Code for interpolation is very simple:


            protected applyTimeState(params: any): void {

                let timeState: TimeState = params[0];
                let duration: number = params[1];

                this.poolTable.poolStick.setState(timeState.stickState, duration);
                // this.poolTable.whiteBall.setState(this.opponentTimeStates[0].whiteBallState);
                _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
                    _.forEach(timeState.ballsStates, (ballState: BallState) => {
                        if (ball.name == ballState.name) {
                            ball.setState(ballState, duration);
                        }
                    });
                });
                this.goaliesHolder.setState(timeState.goalieState, duration);
                // console.log("t/me state id: " + this.opponentTimeStates[0].id)

                this.applyGraphicsState(timeState.graphicsState);

            }

            private changeWhiteBallStatus(): void {
                if (this.poolTable.whiteBall.isOnRearrange)
                    this.poolTable.whiteBall.isOnRearrange = false;
                if (this.poolTable.whiteBall.isOnReposition)
                    this.poolTable.whiteBall.isOnReposition = false;
            }

            private applyGraphicsState(state: GraphicsState): void {
                // if (!state.visible && !state.onReposition) {
                //     console.log("stop");
                // }
                if (!state.visible) {
                    this.hideBallRayGraphics();
                    return;
                }
                else {
                    if (state.onReposition) {
                        // if (this.ballPositionCircleMesh.material.isFrozen)
                        //     this.ballPositionCircleMesh.material.unfreeze();

                        this.ballPositionCircleMesh.position.x = state.whiteBallPositionOnReposition[0];
                        this.ballPositionCircleMesh.position.y = state.whiteBallPositionOnReposition[1];
                        this.ballPositionCircleMesh.setEnabled(true);
                    }
                    else {
                        if (this.ballPositionCircleMesh) {
                            this.ballPositionCircleMesh.setEnabled(false);
                            // this.ballPositionCircleMesh.material.freeze();
                        }
                        // if (this.ballPositionCircleOnRaycastMesh.material.isFrozen)
                        //     this.ballPositionCircleOnRaycastMesh.material.unfreeze();
                        this.ballPositionCircleOnRaycastMesh.position.x = state.whiteBallPositionOnRayCast[0];//?: Vector2,
                        this.ballPositionCircleOnRaycastMesh.position.y = state.whiteBallPositionOnRayCast[1];//?: Vector2,
                        this.ballPositionCircleOnRaycastMesh.edgesColor = state.graphicsColor;
                        this.ballPositionCircleOnRaycastMesh.setEnabled(true);

                        // if (this.raycastFollowerMesh.material.isFrozen)
                        //     this.raycastFollowerMesh.material.unfreeze();
                        this.raycastFollowerMesh.position.x = state.circleFollowerPosition[0];
                        this.raycastFollowerMesh.position.y = state.circleFollowerPosition[1];
                        this.raycastFollowerMesh.edgesColor = state.graphicsColor;
                        if (this.raycastFollowerMesh)
                            this.raycastFollowerMesh.setEnabled(true);

                        // let path: Vector3[] = sta[new Vector3(state.lineBetweenCirclesCoordinates[0].x, state.lineBetweenCirclesCoordinates[0].y, 0), new Vector3(state.lineBetweenCirclesCoordinates[1].x, state.lineBetweenCirclesCoordinates[1].y, 0)];

                        // if (this.whiteBallDirectionMesh)
                        //     this.whiteBallDirectionMesh.setEnabled(false);//();
                        if (state.lineBetweenCirclesCoordinates.length > 1) {
                            // this.whiteBallDirectionMesh = BABYLON.Mesh.CreateLines("whiteBallDirectionMesh", [new Vector3(state.lineBetweenCirclesCoordinates[0][0], state.lineBetweenCirclesCoordinates[0][1], 0), new Vector3(state.lineBetweenCirclesCoordinates[1][0], state.lineBetweenCirclesCoordinates[1][1], 0)], this.whiteBallDirectionMesh);
                            this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallDirectionMesh", {
                                points: [new Vector3(state.lineBetweenCirclesCoordinates[0][0], state.lineBetweenCirclesCoordinates[0][1], 0), new Vector3(state.lineBetweenCirclesCoordinates[1][0], state.lineBetweenCirclesCoordinates[1][1], 0)],

                                instance: this.whiteBallDirectionMesh
                            });
                            this.whiteBallDirectionMesh.enableEdgesRendering();
                            this.whiteBallDirectionMesh.edgesWidth = 10;
                            this.whiteBallDirectionMesh.edgesColor = state.graphicsColor;
                            this.whiteBallDirectionMesh.setEnabled(true);
                        }

                        if (this.otherBallPostCollisionDirectionMesh)
                            this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                        if (state.otherBallDirectionPoints.length > 1) {
                            // this.otherBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("otherBallPostCollisionDirectionMesh", [new Vector3(state.otherBallDirectionPoints[0][0], state.otherBallDirectionPoints[0][1], 0), new Vector3(state.otherBallDirectionPoints[1][0], state.otherBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);

                            this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                                points: [new Vector3(state.otherBallDirectionPoints[0][0], state.otherBallDirectionPoints[0][1], 0), new Vector3(state.otherBallDirectionPoints[1][0], state.otherBallDirectionPoints[1][1], 0)],
                                instance: this.otherBallPostCollisionDirectionMesh
                            });
                            // if (this.otherBallPostCollisionDirectionMesh.material.isFrozen)
                            //     this.otherBallPostCollisionDirectionMesh.material.unfreeze();
                            this.otherBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.otherBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.otherBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.otherBallPostCollisionDirectionMesh.edgesColor = state.graphicsColor;
                            this.otherBallPostCollisionDirectionMesh.setEnabled(true);

                            this.otherBallReflectionArrowMesh.position.x = state.otherBallArrowPositionAndRotation[0];
                            this.otherBallReflectionArrowMesh.position.y = state.otherBallArrowPositionAndRotation[1];
                            this.otherBallReflectionArrowMesh.rotation.z = state.otherBallArrowPositionAndRotation[2];
                            this.otherBallReflectionArrowMesh.setEnabled(true);
                            // if (this.otherBallReflectionArrowMesh.material.isFrozen)
                            //     this.otherBallReflectionArrowMesh.material.unfreeze();
                            // state.otherBallReflectionArrowMesh = [this.otherBallReflectionArrowMesh.position.x, this.otherBallReflectionArrowMesh.position.y, this.otherBallReflectionArrowMesh.rotation.z];

                        }
                        else {
                            this.otherBallReflectionArrowMesh.setEnabled(false);
                        }

                        if (this.whiteBallPostCollisionDirectionMesh)
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(false);

                        if (this.whiteBallDashedMesh)
                            this.whiteBallDashedMesh.setEnabled(false);//();

                        if (state.whiteBallDirectionPoints.length > 1) {
                            // this.whiteBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("whiteBallPostCollisionDirectionMesh", [new Vector3(state.whiteBallDirectionPoints[0][0], state.whiteBallDirectionPoints[0][1], 0), new Vector3(state.whiteBallDirectionPoints[1][0], state.whiteBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);
                            this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                                points: [new Vector3(state.whiteBallDirectionPoints[0][0], state.whiteBallDirectionPoints[0][1], 0), new Vector3(state.whiteBallDirectionPoints[1][0], state.whiteBallDirectionPoints[1][1], 0)],
                                instance: this.whiteBallPostCollisionDirectionMesh
                            });
                            // if (this.whiteBallPostCollisionDirectionMesh.material.isFrozen)
                            //     this.whiteBallPostCollisionDirectionMesh.material.unfreeze();
                            this.whiteBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.whiteBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.whiteBallPostCollisionDirectionMesh.edgesColor = state.graphicsColor;
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(true);

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateLines("whiteBallDashedMesh", state.whiteBallDashedPoints, AbstractEntryPoint.scene, true);
                            // console.log("dashed: ");
                            // console.log(state.whiteBallDashedPoints);
                            // console.log("------------");

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("caca", this.whiteBallDashedPoints, 3, 3, 4, AbstractEntryPoint.scene, true);


                            this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
                                points: [new Vector3(state.whiteBallDashedPoints[0][0], state.whiteBallDashedPoints[0][1], 0), new Vector3(state.whiteBallDashedPoints[1][0], state.whiteBallDashedPoints[1][1], 0)],

                                instance: this.whiteBallDashedMesh
                            });

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines(null, [new Vector3(200, 100, 0), new Vector3(100, 50, 20)], null, null, null, null, null, this.whiteBallDashedMesh);

                            this.whiteBallDashedMesh.enableEdgesRendering();
                            this.whiteBallDashedMesh.edgesWidth = 10;
                            this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallDashedMesh.edgesColor = state.graphicsColor;
                            this.whiteBallDashedMesh.setEnabled(true);

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("mu", state.whiteBallDashedPoints, 3, 3, 4, AbstractEntryPoint.scene, true);
                            // this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

                            this.whiteBallDashedMesh.setEnabled(true);

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("whiteBallDashedMesh", [new Vector3(state.whiteBallDashedPoints[0].x, state.whiteBallDashedPoints[0].y, 0), new Vector3(state.whiteBallDashedPoints[1].x, state.whiteBallDashedPoints[1].y, 0)], 3, 3, 4, AbstractEntryPoint.scene, true);
                            //
                            // this.whiteBallDashedMesh.enableEdgesRendering();
                            // this.whiteBallDashedMesh.edgesWidth = 10;
                            // this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            // this.whiteBallDashedMesh.edgesColor = state.graphicsColor;
                            // this.whiteBallDashedMesh.setEnabled(true);

                            // console.log("arrow data: " + state);
                            // console.log("arrow data - state: " + state.whiteBallArrowPositionAndRotation);
                            this.whiteBallReflectionArrowMesh.position.x = state.whiteBallArrowPositionAndRotation[0];
                            this.whiteBallReflectionArrowMesh.position.y = state.whiteBallArrowPositionAndRotation[1];
                            this.whiteBallReflectionArrowMesh.rotation.z = state.whiteBallArrowPositionAndRotation[2];

                            this.whiteBallReflectionArrowMesh.setEnabled(true);
                            // if (this.whiteBallReflectionArrowMesh.material.isFrozen)
                            //     this.whiteBallReflectionArrowMesh.material.unfreeze();
                            // state.otherBallReflectionArrowMesh = [this.otherBallReflectionArrowMesh.position.x, this.otherBallReflectionArrowMesh.position.y, this.otherBallReflectionArrowMesh.rotation.z];
                        }
                        else {
                            this.whiteBallReflectionArrowMesh.setEnabled(false);
                        }


                    }


                }
            }

            /* protected sendElementsDataToManager(): void {
                 if (!Settings.singlePlayer) {
                     this.createTimeState();

                     if (this.myTimeStates.length < this.sendPoolDataFrameStep) {
                         return;
                     }
                     // else if (this.framesCounter == this.sendPoolDataFrameStep) {
                     //     this.framesCounter = 0;
                     // }

                     // this.framesCounter++;

                     let poolTableData: PoolTableData = {
                         timeStates: this.myTimeStates
                         // poolstickPivotX: this.poolTable.poolStick.pivot.x,
                         // poolstickRotation: this.poolTable.poolStick.rotation,
                         // poolstickPositionX: this.poolTable.poolStick.position.x,
                         // poolstickPositionY: this.poolTable.poolStick.position.y,
                         // leftBalls: leftBallsData,
                         // rightBalls: rightBallsData,
                         // whiteBallData: this.poolTable.whiteBall.getBallData(),
                         // puckData: this.poolTable.puck.getBallData(),
                         // balls: ballsData,

                         // ballPositionCircleVisible: this.poolTable.ballPositionCircle.visible,
                         // ballPositionCircleX: this.poolTable.ballPositionCircle.x,
                         // ballPositionCircleY: this.poolTable.ballPositionCircle.y,

                         // ballPositionCircleOnRaycastVisible: this.poolTable.ballPositionCircleOnRaycast.visible,
                         // ballPositionCircleOnRaycastX: this.poolTable.ballPositionCircleOnRaycast.x,
                         // ballPositionCircleOnRaycastY: this.poolTable.ballPositionCircleOnRaycast.y,

                         // followerVisible: this.poolTable.raycastFollower.visible,
                         // followerX: this.poolTable.raycastFollower.x,
                         // followerY: this.poolTable.raycastFollower.y,

                         /!*lineBetweenCirclesVisible: this.lineBetweenCirclesVisible,
                         lineBetweenCirclesPoints: this.lineBetweenCirclesPoints,
                         graphColor: this.graphColor,
                         leftGoalieY: this.poolTable.leftGoalie.y,
                         rightGoalieY: this.poolTable.rightGoalie.y,*!/
                     };


                     SignalsManager.DispatchSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, [poolTableData]);
                     this.myTimeStates = [];


                 }

             }*/

            /*private onWatch(params: any[]): void {

                // if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {

                    let msg: string = params[0];
                    let poolTableData: PoolTableData = JSON.parse(msg);


                    _.forEach(poolTableData.timeStates, (timeState: TimeState) => {
                        this.statesReceived++;
                        // console.log("states received: " + this.statesReceived)
                        this.opponentTimeStates.push(timeState);
                    });
//                     console.log("opp states on receive: " + this.opponentTimeStates.length);
//                     console.log("===================");
                    // console.log("opponentStates length: " + this.opponentTimeStates.length);
                    /!*aicisha
                    vine
                    logica*!/
                    ////////////////////////
                    // this.updatesReceivedOnWatch++;
                    if (this.opponentTimeStates.length >= 2) {
                        this.enableUpdateOnWatch = true;
                        // this.smoothie.start();
                    }
                    /////////////////

                    if (this.framesCounter != 0)
                        this.framesCounter = 0;

                    this.onStopAnimatePuckGoal();


                    /!* if (!this.firstMessageReceivedOnWatch) {
                         this.firstMessageReceivedOnWatch = true;
                         if (!this.goaliesHolder.moving)
                             this.goaliesHolder.moving = true;
                     }*!/
                    // if (this.poolTable.leftGoalie.moving)
                    //     this.poolTable.leftGoalie.resetTweens();

                    // if (this.poolTable.rightGoalie.moving)
                    //     this.poolTable.rightGoalie.resetTweens();

                    // TweenMax.to(this.poolTable.leftGoalie, 0.1, {y:poolTableData.leftGoalieY});
                    // TweenMax.to(this.poolTable.rightGoalie, 0.1, {y:poolTableData.rightGoalieY});
                    // this.poolTable.leftGoalie.y = poolTableData.leftGoalieY;
                    // this.poolTable.rightGoalie.y = poolTableData.rightGoalieY;

                    /!* if (poolTableData.opponentState == PockeyStates.onShoot) {
                         SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentsTurn]);
                     }
                     else {
                         // console.log("poolTableData.opponentTimeFinished: " + poolTableData.opponentTimeFinished);
                         if (poolTableData.opponentTimeFinished == true) {
                             this.opponentTimeUp = true;
                             SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                         }
                         else {
                             SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [this.uiTextOnWatch]);
                             this.opponentTimeUp = false;
                         }

                     }*!/

                    // console.log("pool table column: " + poolTableData);
                    // this.poolTable.poolStick.x = poolTableData.poolstickPositionX;
                    // this.poolTable.poolStick.y = poolTableData.poolstickPositionY;
                    // this.poolTable.poolStick.rotation = poolTableData.poolstickRotation;
                    // this.poolTable.poolStick.reset();
                    // this.poolTable.poolStick.pivot.x = poolTableData.poolstickPivotX;

                    let ballsData: BallData[] = poolTableData.balls;

                    /!*let includesWhiteBall: boolean = false;
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
                        // this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                        this.poolTable.balls.push(this.poolTable.whiteBall);
                    }

                    this.graphColor = poolTableData.graphColor;*!/
                    // console.log("lungimea array-ului la watch: " + this.poolTable.balls.length);
                    // this.poolTable.raycastFollower.visible = poolTableData.followerVisible;
                    //
                    // if (this.poolTable.raycastFollower.visible) {
                    //     if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                    //         (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = this.graphColor;
                    //     }
                    //
                    //     this.poolTable.raycastFollower.x = poolTableData.followerX;
                    //     this.poolTable.raycastFollower.y = poolTableData.followerY;
                    // }

                    // this.poolTable.ballPositionCircle.visible = poolTableData.ballPositionCircleVisible;
                    //
                    // if (this.poolTable.ballPositionCircle.visible) {
                    //
                    //     this.poolTable.ballPositionCircle.x = poolTableData.ballPositionCircleX;
                    //     this.poolTable.ballPositionCircle.y = poolTableData.ballPositionCircleY;
                    // }

                    // this.poolTable.ballPositionCircleOnRaycast.visible = poolTableData.ballPositionCircleOnRaycastVisible;

                    // if (this.poolTable.ballPositionCircleOnRaycast.visible) {
                    //     if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                    //         (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = this.graphColor;
                    //     }
                    //
                    //     this.poolTable.ballPositionCircleOnRaycast.x = poolTableData.ballPositionCircleOnRaycastX;
                    //     this.poolTable.ballPositionCircleOnRaycast.y = poolTableData.ballPositionCircleOnRaycastY;
                    //
                    //
                    // }


                    /!* if (this.graph) {
                         if (this.graph.parent)
                             this.graph.parent.removeChild(this.graph);
                         this.graph.clear();
                         this.graph = null;
                     }*!/

                    // this.lineBetweenCirclesVisible = poolTableData.lineBetweenCirclesVisible;
                    /!*if (this.lineBetweenCirclesVisible) {
                        this.graph = new Graphics();

                        this.graph.lineStyle(4, this.graphColor);

                        this.graph.moveTo(poolTableData.lineBetweenCirclesPoints[0], poolTableData.lineBetweenCirclesPoints[1]);
                        this.graph.lineTo(poolTableData.lineBetweenCirclesPoints[2], poolTableData.lineBetweenCirclesPoints[3]);
                        // this.poolTable.addChild(this.graph);
                    }*!/
                // }

            }*/

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
                    let hexDefaultColor: Color4 = new Color4(1, 1, 1, 1);
                    this.graphColor = hexDefaultColor;

                    this.otherBallDirectionPoints = [];
                    this.whiteBallDirectionPoints = [];
                    this.whiteBallDashedPoints = [];
                    // this.graph.tint = defaultColor;
                    // this.poolTable.raycastFollower.visible = true;
                    // if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                    //     (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
                    // }
                    // if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                    //     (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
                    // }

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
                    // this.graph.lineStyle(4, defaultColor);

                    this.lineBetweenCirclesPoints = [[rayCastLineEnd.x, -rayCastLineEnd.y - PockeySettings.BABYLON_Y_OFFSET], [rayCastLineStart.x, -rayCastLineStart.y - PockeySettings.BABYLON_Y_OFFSET]];

                    let lineLength: number = this.poolTable.whiteBall.ballPosition.distanceTo(hitPoint);
                    // console.log("line length: " + lineLength);
                    if (lineLength > PockeySettings.BALL_RADIUS * 2) {
                        this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("lines", {
                            points: [new Vector3(this.lineBetweenCirclesPoints[0][0], this.lineBetweenCirclesPoints[0][1], 0),
                                new Vector3(this.lineBetweenCirclesPoints[1][0], this.lineBetweenCirclesPoints[1][1], 0)],
                            instance: this.whiteBallDirectionMesh
                        });
                        this.whiteBallDirectionMesh.enableEdgesRendering();
                        this.whiteBallDirectionMesh.edgesWidth = 10;
                        this.whiteBallDirectionMesh.setEnabled(true);
                    }


                    // this.whiteBallDirectionMesh.color = 3.0;

                    /*  this.graph.moveTo(rayCastLineEnd.x, rayCastLineEnd.y);
                      this.graph.lineTo(rayCastLineStart.x, rayCastLineStart.y);*/
                    // this.graph.tint = defaultColor;
                    // this.whiteBallDirectionMesh.color = Color3.White();
                    if (this.whiteBallDirectionMesh)
                        this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;

                    this.raycastFollowerMesh.edgesColor = hexDefaultColor;
                    this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;

                    // this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;
                    // this.whiteBallDirectionMesh.color = hexDefaultColor;
                    //
                    // this.whiteBallDirectionMesh.diffuseColor = hexDefaultColor;

                    // this.lineBetweenCirclesVisible = true;
                    // this.lineBetweenCirclesPoints = [rayCastLineStart.x, rayCastLineStart.y, rayCastLineEnd.x, rayCastLineEnd.y];

                    // this.poolTable.raycastFollower.x = hitPoint.x;
                    // this.poolTable.raycastFollower.y = hitPoint.y;
                    // this.raycastFollowerPosition = new Vector2(hitPoint.x, hitPoint.y)


                    this.raycastFollowerMesh.position.x = hitPoint.x;
                    this.raycastFollowerMesh.position.y = -hitPoint.y - PockeySettings.BABYLON_Y_OFFSET;

                    // this.expectedCollisionPoint = new Vector2(hitPoint.x, hitPoint.y);

                    // this.poolTable.ballPositionCircleOnRaycast.x = rayFrom.x;
                    // this.poolTable.ballPositionCircleOnRaycast.y = rayFrom.y;

                    this.ballPositionCircleOnRaycastMesh.position.x = rayFrom.x;
                    this.ballPositionCircleOnRaycastMesh.position.y = -rayFrom.y - PockeySettings.BABYLON_Y_OFFSET;

                    /*this.poolTable.whiteBallReflectionArrow.visible = false;
                    this.poolTable.otherBallReflectionArrow.visible = false;*/
                    // this.poolTable.ballPositionCircleOnRaycast.visible = true;

                    //if the follower hits a ball, then show collision directions graphics
                    if (!_.isNull(result.shape.radius) && !_.isUndefined(result.shape.radius)) {
                        let isOwnBall: boolean = this.checkIfOwnShadow(result.body);

                        if (isOwnBall) {
                            hexDefaultColor = this.HexToRGB("ca384d");
                            this.graphColor = hexDefaultColor;

                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                        }
                        else {
                            if (this.isFirstShoot) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                            }
                            else {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                            }
                        }

                        // this.graphColor = defaultColor;

                        // this.whiteBallDirectionMesh.color = Color3.Red();
                        if (this.whiteBallDirectionMesh)
                            this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;

                        this.raycastFollowerMesh.edgesColor = hexDefaultColor;
                        this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;

                        // this.whiteBallDirectionMesh.diffuseColor = hexDefaultColor;

                        let isPuck: boolean = this.checkIfPuck(result.body);
                        if (isPuck) {
                            this.onAnimatePuckGoal();
                            // console.log("e puck!!!!");
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                        }
                        else {
                            this.onStopAnimatePuckGoal();
                            // console.log("nu e puck!!!!");

                        }
                        /*else {
                            if (this.isFirstShoot) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                            }
                        }*/

                        // this.graph.tint = defaultColor;
                        // if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                        //     (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
                        // }
                        // if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                        //     (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
                        // }

                        let startPoint: Vector2;
                        let endPoint: Vector2;
                        let dottedLineArrowPoint: Vector2;
                        let tangentVector: Vector2 = new Vector2();

                        tangentVector.y = -(result.body.position[0] - this.hitPoint[0]);
                        tangentVector.x = result.body.position[1] - this.hitPoint[1];

                        tangentVector = tangentVector.normalise();


                        // let deviationVector:Vector2 = (Math.cos(5 * Math.PI / 180), Math.sin(5 * Math.s)

                        let relativeVelocity: Vector2 = new Vector2(this.hitPoint[0] - result.body.position[0], this.hitPoint[1] - result.body.position[1]);

                        let length: number = tangentVector.dot(relativeVelocity);

                        let cotangentVector: Vector2 = relativeVelocity.substract(tangentVector.multiply(length)).normalise();
                        let directionLength: number = 18;


                        let distanceToTheOtherBall: number =
                            new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS)
                                .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));

                        if (distanceToTheOtherBall > PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                            distanceToTheOtherBall = PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                        }
                        let arrowScaleFactor: number = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                        arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;

                        /*this.graph.beginFill(0xffff00);
                        this.graph.drawCircle(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y, 4);
                        this.graph.drawCircle(result.body.position[0], result.body.position[1], 4);
                        this.graph.drawCircle(this.poolTable.raycastFollower.x, this.poolTable.raycastFollower.y, 4);
                        this.graph.endFill();*/
                        this.arrowsDeviationLength = PockeySettings.BALL_RADIUS * 2 - this.calculateDeviation(new Vector2(hitPoint.x, hitPoint.y), new Vector2(this.poolTable.whiteBall.position.x, this.poolTable.whiteBall.y), new Vector2(result.body.position[0], result.body.position[1]));
                        // console.log("deviationsalam: " + this.arrowsDeviationLength);

                        /*   opposite = hitPoint.x - tangentVector.x;
                           adjacent = hitPoint.y - tangentVector.y;
                           raycastAngle = Math.atan2(opposite, adjacent);// + 5 * Math.PI / 180;

                           let tangentToHitPointDistance:number = tangentVector.distanceTo(hitPoint);

                           let newTangent:Vector2 =  */
                        let whiteBallArrowAngleCorrection: number = 1;//(tangentVector.x * tangentVector.y < 0) ? -1 : 1;
                        if (arrowScaleFactor > 0.03 && !isOwnBall) {
                            //white ball direction graphics

                            // let whiteBallArrowAngleCorrection: number = (tangentVector.x * tangentVector.y < 0) ? -1 : 1;


                            startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * tangentVector.y));
                            let opposedStartPoint: Vector2 = new Vector2(this.hitPoint[0] + (PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] + (PockeySettings.BALL_RADIUS * tangentVector.y));
                            // console.log("startPoint.distanceTo(rayFrom): " + startPoint.distanceTo(rayFrom));
                            // console.log("oppStartPoint.distanceTo(rayFrom): " + opposedStartPoint.distanceTo(rayFrom));
                            // console.log("=====================");

                            if (startPoint.distanceTo(rayCastLineEnd) <= opposedStartPoint.distanceTo(rayCastLineEnd)) {
                                startPoint = opposedStartPoint;
                                whiteBallArrowAngleCorrection = -1;
                            }


                            opposite = startPoint.x - hitPoint.x;
                            adjacent = startPoint.y - hitPoint.y;
                            raycastAngle = Math.atan2(opposite, adjacent) + whiteBallArrowAngleCorrection * (this.arrowsDeviationLength / 3.38) * Math.PI / 180;

// console.log("unghi ajustare: " + (this.arrowsDeviationLength / 3));
                            // point[1] - (Math.cos(angle) * distance)
                            startPoint = new Vector2(
                                hitPoint.x + Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS,
                                hitPoint.y + Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS);
                            //
                            /* this.graph.moveTo(this.poolTable.raycastFollower.x, this.poolTable.raycastFollower.y);
                             this.graph.lineTo(newStart.x, newStart.y);

                             this.graph.beginFill(0xff0000);
                             this.graph.drawCircle(newStart.x, newStart.y, 4);
                             this.graph.endFill();

                             this.graph.beginFill(0x00ff00);
                             this.graph.drawCircle(startPoint.x, startPoint.y, 4);
                             this.graph.endFill();*/
                            //
                            //

                            /* endPoint = new Vector2(
                                 startPoint.x - whiteBallArrowAngleCorrection * tangentVector.x * directionLength / 3 * arrowScaleFactor,
                                 startPoint.y - whiteBallArrowAngleCorrection * tangentVector.y * directionLength / 3 * arrowScaleFactor
                             );*/

                            endPoint = new Vector2(
                                startPoint.x + Math.sin(raycastAngle) * (PockeySettings.BALL_RADIUS * arrowScaleFactor),
                                startPoint.y + Math.cos(raycastAngle) * (PockeySettings.BALL_RADIUS * arrowScaleFactor),
                            );

                            this.whiteBallDirectionPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET]];

                            // this.whiteBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("whiteBallPostCollisionDirectionMesh", [new Vector3(this.whiteBallDirectionPoints[0][0], this.whiteBallDirectionPoints[0][1], 0), new Vector3(this.whiteBallDirectionPoints[1][0], this.whiteBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);
                            // if(this.whiteBallPostCollisionDirectionMesh)
                            //     this.whiteBallPostCollisionDirectionMesh.clear();
                            this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                                points: [new Vector3(this.whiteBallDirectionPoints[0][0], this.whiteBallDirectionPoints[0][1], 0), new Vector3(this.whiteBallDirectionPoints[1][0], this.whiteBallDirectionPoints[1][1], 0)],
                                instance: this.whiteBallPostCollisionDirectionMesh
                            });
                            this.whiteBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.whiteBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.whiteBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(true);

                            // this.graph.lineStyle(4, 0xffffff);
                            // this.graph.moveTo(startPoint.x, startPoint.y);

                            // this.graph.lineTo(endPoint.x, endPoint.y);

                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;

                            endPoint.x += Math.sin(raycastAngle) * (directionLength + 10);
                            endPoint.y += Math.cos(raycastAngle) * (directionLength + 10);


                            // let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                            // directionLength = 28;

                            // let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 8, 0xffffff, 1);


                            // this.poolTable.whiteBallReflectionArrow.x = dottedLineArrowPoint.x;
                            // this.poolTable.whiteBallReflectionArrow.y = dottedLineArrowPoint.y;

                            this.whiteBallDashedPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET]];

                            // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("whiteBallDashedMesh", this.whiteBallDashedPoints, 3, 3, 4, AbstractEntryPoint.scene, true);
                            this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {

                                points: [new Vector3(this.whiteBallDashedPoints[0][0], this.whiteBallDashedPoints[0][1], 0), new Vector3(this.whiteBallDashedPoints[1][0], this.whiteBallDashedPoints[1][1], 0)],//this.whiteBallDashedPoints,

                                instance: this.whiteBallDashedMesh
                            });

                            this.whiteBallDashedMesh.enableEdgesRendering();
                            this.whiteBallDashedMesh.edgesWidth = 10;
                            this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallDashedMesh.edgesColor = hexDefaultColor;
                            this.whiteBallDashedMesh.setEnabled(true);
                            // this.poolTable.whiteBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) + 135 * Math.PI / 180;
                            // this.poolTable.whiteBallReflectionArrow.visible = true;

                            endPoint.x += Math.sin(raycastAngle) * 5;
                            endPoint.y += Math.cos(raycastAngle) * 5;
                            this.whiteBallReflectionArrowMesh.position.x = endPoint.x;
                            this.whiteBallReflectionArrowMesh.position.y = -endPoint.y - PockeySettings.BABYLON_Y_OFFSET;

                            // this.poolTable.whiteBallReflectionArrowMesh.rotation.z = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);// + 180 * Math.PI / 180;
                            this.whiteBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;// + Math.PI;
                            this.whiteBallReflectionArrowMesh.setEnabled(true);

                        }
                        //other ball direction graphics

                        if ((1 - arrowScaleFactor) > 0.01 && !isOwnBall) {
                            startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * cotangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * cotangentVector.y));


                            /* opposite = startPoint.x - this.poolTable.raycastFollower.x;
                             adjacent = startPoint.y - this.poolTable.raycastFollower.y;
                             this.arrowsDeviationLength = PockeySettings.BALL_RADIUS * 2 - this.arrowsDeviationLength;

                             raycastAngle = Math.atan2(opposite, adjacent) + whiteBallArrowAngleCorrection * (this.arrowsDeviationLength / 8) * Math.PI / 180;*/

                            // console.log("unghi ajustare: " + (this.arrowsDeviationLength / 3));
                            // point[1] - (Math.cos(angle) * distance)
                            // let newStart: Vector2 = new Vector2(
                            //     this.poolTable.raycastFollower.x + Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS,
                            //     this.poolTable.raycastFollower.y + Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS);
                            // /**/
                            //
                            // opposite = newStart.x - this.poolTable.raycastFollower.x;
                            // adjacent = newStart.y - this.poolTable.raycastFollower.y;
                            //
                            // raycastAngle = Math.atan2(opposite, adjacent);

                            /* this.graph.lineStyle(0, 0xffffff);
                             this.graph.beginFill(0xff0000);
                             this.graph.drawCircle(startPoint.x, startPoint.y, 3);
                             this.graph.endFill();*/

                            /*  this.graph.lineStyle(0, 0x0000ff);
                              this.graph.beginFill(0x0000ff);
                              this.graph.drawCircle(newStart.x, newStart.y, 3);
                              this.graph.endFill();

                              opposite = (newStart.x - result.body.position[0]);
                              adjacent = newStart.y - result.body.position[1];

                              raycastAngle = Math.atan2(opposite, adjacent);*/

                            /* let newEnd: Vector2 = new Vector2(
                                 startPoint.x - Math.sin(raycastAngle) * directionLength  * (1 - arrowScaleFactor),
                                 startPoint.y - Math.cos(raycastAngle) * directionLength  * (1 - arrowScaleFactor)
                             );

                             // this.graph.lineStyle(2, 0x0000ff);
                             // this.graph.moveTo(newStart.x, newStart.y);
                             // this.graph.lineTo(newEnd.x, newEnd.y);*/

                            endPoint = new Vector2(
                                startPoint.x - cotangentVector.x * (PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor)),
                                startPoint.y - cotangentVector.y * (PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor))
                            );

                            this.otherBallDirectionPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET, 0]];


                            // this.otherBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("otherBallPostCollisionDirectionMesh", [new Vector3(this.otherBallDirectionPoints[0][0], this.otherBallDirectionPoints[0][1], 0), new Vector3(this.otherBallDirectionPoints[1][0], this.otherBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);


                            this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                                points: [new Vector3(this.otherBallDirectionPoints[0][0], this.otherBallDirectionPoints[0][1], 0), new Vector3(this.otherBallDirectionPoints[1][0], this.otherBallDirectionPoints[1][1], 0)],
                                instance: this.otherBallPostCollisionDirectionMesh
                            });

                            this.otherBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.otherBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.otherBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                            this.otherBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                            this.otherBallPostCollisionDirectionMesh.setEnabled(true);

                            // this.graph.lineStyle(4, 0xffffff);
                            // this.graph.moveTo(startPoint.x, startPoint.y);
                            // this.graph.lineTo(endPoint.x, endPoint.y);

                            // startPoint.x = endPoint.x;
                            // startPoint.y = endPoint.y;

                            // endPoint.x -= cotangentVector.x * directionLength * 2 / 3 * (1 - arrowScaleFactor);
                            // endPoint.y -= cotangentVector.y * directionLength * 2 / 3 * (1 - arrowScaleFactor);

                            // endPoint.x -= cotangentVector.x * directionLength * (1 - arrowScaleFactor);
                            // endPoint.y -= cotangentVector.y * directionLength * (1 - arrowScaleFactor);

                            // this.graph.lineStyle(2, 0xffffff);
                            // dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);


                            // dottedLineArrowPoint = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                            // dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);

                            this.otherBallReflectionArrowMesh.position.x = endPoint.x;
                            this.otherBallReflectionArrowMesh.position.y = -endPoint.y - PockeySettings.BABYLON_Y_OFFSET;
                            this.otherBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;

                            this.otherBallReflectionArrowMesh.setEnabled(true);

                            // this.poolTable.otherBallReflectionArrow.x = endPoint.x;
                            // this.poolTable.otherBallReflectionArrow.y = endPoint.y;
                            // this.poolTable.otherBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) + 135 * Math.PI / 180;
                            // this.poolTable.otherBallReflectionArrow.visible = true;

                        }
                    }
                    else {
                        this.onStopAnimatePuckGoal();
                    }
                    // this.poolTable.addChild(this.graph);
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
                    if (!ball.canBeRemoved) {
                        ball.addShadowBody();
                    }
                });
                // this.poolTable.raycastFollower.visible = true;
                // this.poolTable.ballPositionCircleOnRaycast.visible = true;

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

            // p - point
// v - start point of segment
// w - end point of segment

            private calculateDeviation(point: Vector2, firstSegmentPoint: Vector2, secondSegmentPoint: Vector2): number {
                // return Math.sqrt(this.distToSegmentSquared(point, firstSegmentPoint, secondSegmentPoint));
                let x = point.x;
                let y = point.y;
                let x1 = firstSegmentPoint.x;
                let y1 = firstSegmentPoint.y;
                let x2 = secondSegmentPoint.x;
                let y2 = secondSegmentPoint.y;

                let A = x - x1;
                let B = y - y1;
                let C = x2 - x1;
                let D = y2 - y1;

                let dot = A * C + B * D;
                let len_sq = C * C + D * D;
                let param = -1;
                if (len_sq != 0) //in case of 0 length line
                    param = dot / len_sq;

                let xx, yy;

                if (param < 0) {
                    xx = x1;
                    yy = y1;
                }
                else if (param > 1) {
                    xx = x2;
                    yy = y2;
                }
                else {
                    xx = x1 + param * C;
                    yy = y1 + param * D;
                }

                let dx = x - xx;
                let dy = y - yy;

                return Math.sqrt(dx * dx + dy * dy);
            }


            private distToSegmentSquared(point: Vector2, firstSegmentPoint: Vector2, secondSegmentPoint): number {
                let l2 = firstSegmentPoint.distanceTo(secondSegmentPoint);
                if (l2 == 0)
                    return point.distanceTo(firstSegmentPoint);

                let t = ((point.x - firstSegmentPoint.x) * (secondSegmentPoint.x - firstSegmentPoint.x) + (point.y - firstSegmentPoint.y) * (secondSegmentPoint.y - firstSegmentPoint.y)) / l2;
                t = Math.max(0, Math.min(1, t));

                return point.distanceTo(new Vector2(
                    firstSegmentPoint.x + t * (secondSegmentPoint.x - firstSegmentPoint.x),
                    firstSegmentPoint.y + t * (secondSegmentPoint.y - firstSegmentPoint.y)));
            }


            private HexToRGB(hex: string): Color4 {

                var r = parseInt(hex.substring(0, 2), 16) / 255;
                var g = parseInt(hex.substring(2, 4), 16) / 255;
                var b = parseInt(hex.substring(4, 6), 16) / 255;

                return new BABYLON.Color4(r, g, b, 1);
            }

            private create2Dpoly(options: any, scene: BABYLON.Scene) {
                let pos;
                let points = [];
                let disc = BABYLON.VertexData.CreateDisc(options);
                pos = disc.positions;
                //skip the center point
                for (let i = 1; i < disc.positions.length / 3; i++) {
                    points.push(new BABYLON.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]));
                }

                return BABYLON.MeshBuilder.CreateLines("circle", {points: points}, scene);
            }

            // function distToSegment (p, v, w) {
            //
            // }
        }


    }
}