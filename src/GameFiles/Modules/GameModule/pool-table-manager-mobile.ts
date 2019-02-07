///<reference path="../../../Framework/Utils/touch-handler.ts"/>

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
        import PockeyStates = Pockey.StateMachineModule.PockeyStates;
        import PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        import Point = PIXI.Point;
        import Graphics = PIXI.Graphics;
        import Vector2 = Framework.Utils.Vector2;
        import TouchHandler = Framework.Utils.TouchHandler;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;

        export class PoolTableManagerMobile extends PoolTableManager {
            private whiteBallPositionConfirmed: boolean = false;
            private rearrangeStickStarted: boolean = false;

            // private whiteBallPositionConfirmed:boolean = false;

            constructor() {
                super();

                SignalsManager.AddSignalCallback(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED, this.onWhiteBallPositionConfirmed.bind(this));
            }

            private onWhiteBallPositionConfirmed(): void {
                this.whiteBallPositionConfirmed = true;
            }

            protected onShoot(): void {
                super.onShoot();

                this.rearrangeStickStarted = false;
            }

            protected update(): void {

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    /*if (!this.poolTable.leftGoalie.moving)
                        this.poolTable.leftGoalie.startMoving();

                    if (!this.poolTable.rightGoalie.moving)
                        this.poolTable.rightGoalie.startMoving();*/

                    this.onRepositionWhiteBall();

                    return;
                }

                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {

                        SignalsManager.DispatchSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                        // this.sendElementsDataToManager();

                    }

                }

                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {

                    if (this.poolTable.poolStick.rotationEnabled) {
                       /* if (!this.poolTable.leftGoalie.moving)
                            this.poolTable.leftGoalie.startMoving();

                        if (!this.poolTable.rightGoalie.moving)
                            this.poolTable.rightGoalie.startMoving();*/

                        if (this.isFirstShoot) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                        }

                        this.poolTable.poolStick.x = this.poolTable.whiteBall.x;
                        this.poolTable.poolStick.y = this.poolTable.whiteBall.y;
                        // = new Point(this.poolTable.whieBall.position.x, this.poolTable.whiteBall.position.y);

                        // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);

                        // if (!this.poolTable.poolStick.isActive)
                        // {
                        //     // this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.startPosition.x, this.poolTable.poolStick.startPosition.y));
                        // }

                        /*if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;
                        }

                        this.graph = new Graphics();*/

                        let localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                        if (!this.rearrangeStickStarted) {
                            // this.rearrangeStickStarted = true;
                            localPoint.x = this.poolTable.poolStick.x + 10 * Math.cos(this.poolTable.poolStick.rotation);
                            localPoint.y = this.poolTable.poolStick.y + 10 * Math.sin(this.poolTable.poolStick.rotation);
                            /* let salam:Graphics = new Graphics();
                             salam.beginFill(0xff9900);
                             salam.drawCircle(localPoint.x, localPoint.y, 20)
                             salam.endFill();
                             this.poolTable.addChild(salam)*/

                            // console.log("aicisha: " + this.poolTable.poolStick.rotation * 180 / Math.PI, localPoint.x, localPoint.y);
                            // this.rearrangeStickStarted = true;
                        }

                        if (TouchHandler.Instance().isTouchMoving) {
                            this.rearrangeStickStarted = true;
                        }
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


            protected onStartVersusGame() {
                // console.log("%c Pool T Manager: intra la onStartVersusGame", "background: red; color: white; font-weight:bold; ");

                if (this.poolTable.poolStick && !this.poolTable.poolStick.isActive) {
                    this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.initialPosition.x, this.poolTable.poolStick.initialPosition.y));
                    // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
                    SignalsManager.DispatchSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                }
                // // this.playerTurnStarted = true;
                //
                // this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.startPosition.x, this.poolTable.poolStick.startPosition.y));
                // this.ticker.start();
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

                let localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));

                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }

                /*if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
                }
*/
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

                        // if (isInteresectingWithOthers) {
                        //     ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                        //     ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                        // }
                        // else {
                        //     this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                        //     this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        // }
                    }

                    // TweenMax.to(this.poolTable.ballPositionCircle, 0, {
                    //     x: ballPositionCirclePosition.x,
                    //     y: ballPositionCirclePosition.y
                    // });
                    this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                    this.ballPositionCircleMesh.position.y = ballPositionCirclePosition.y;
                    // this.poolTable.ballPositionCircle.visible = true;

                });

                if (TouchHandler.Instance().isTouchMoving) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && this.whiteBallPositionConfirmed) {
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
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    // if(this.poolTable.balls.cont)
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    // this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                    // this.poolTable.whiteBall.alpha = 1;//(this.poolTable.whiteBall);
                    // this.repositionStick();
                    // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    this.whiteBallPositionConfirmed = false;
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER);
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

            protected onResetStickPower(): void {
                this.poolTable.poolStick.power = 0;
                this.poolTable.poolStick.reset();
            }
        }


    }
}