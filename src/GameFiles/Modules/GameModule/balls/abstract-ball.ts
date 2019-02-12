///<reference path="../../../../Framework/Utils/Line.ts"/>
///<reference path="../../../../Framework/abstract-entry-point.ts"/>
// /**
//  *  Edgeflow
//  *  Copyright 2018 EdgeFlow
//  *  All Rights Reserved.
//  *
//  *  NOTICE: You may not use, distribute or modify this document without the
//  *  written permission of its copyright owner
//  *
//  *  Created by Sandru Andrei on 7/23/2018
//  */


namespace Pockey {
    export module GameModule {

        import Sprite = PIXI.Sprite;
        import Vector2 = Framework.Utils.Vector2;
        import Circle = PIXI.Circle;
        import Line = Framework.Utils.Line;
        import Graphics = PIXI.Graphics;
        import Vector3 = BABYLON.Vector3;
        import AbstractEntryPoint = Framework.AbstractEntryPoint;
        import Settings = Framework.Settings;
        import Point = PIXI.Point;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import SignalsManager = Framework.Signals.SignalsManager;
        import Color4 = BABYLON.Color4;
        import PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        import SignalsType = Framework.Signals.SignalsType;

        export enum BallType {
            Player = "PlayerBall",
            Opponent = "OpponentBall",
            White = "WhiteBall",
            Puck = "Puck"
        }

        export interface BallState {
            name?: string,
            x?: number,
            y?: number,
            rotation?: number,
            alpha?: number,
            canBeRemoved?: boolean,
            shadowScaleX?: number,
            shadowScaleY?: number
        }

        /*export interface BallData {

            positions?: Vector2[]
            removedFromArray?: boolean;
            name?: string,
            x?: number,
            y?: number,
            veloX?: number;
            veloY?: number;
            alpha?: number,
            parentName?: string,
            visible?: boolean,
            canBeRemoved?: boolean,
            scaleX?: number,
            scaleY?: number,
            zIndexSwitched?: boolean,
            animationInProgress?: boolean
        }*/

        export class AbstractBall extends PIXI.Container {

            private ballInPocketAnimationTimeline: TimelineMax;
            private circleShape: p2.Circle;

            public ballType: BallType;
            public side: string;
            public radius: number;
            public mass: number = 1.4;
            public velocity: Vector2;
            public moving: boolean = false;
            public power: number;
            public lineLimits: Line[];
            public pockets: Circle[];
            public p2Body: p2.Body;
            public p2BodyShadow: p2.Body;
            public canBeRemoved: boolean = false;
            public removed: boolean = false;
            public zIndexSwitched: boolean = false;
            public ballAnimationHolder: Container;
            public animationInProgress: boolean = false;
            public ballValue: number = 1;
            public ballShadow: Graphics;
            public removedFromArray: boolean = false;
            public initialPosition: Vector2;

            protected sphere: any;
            protected lastPosition: Vector3;
            protected minStopLimit: number = 0.1;
            protected leftLimit: number;
            protected rightLimit: number;
            protected upLimit: number;
            protected downLimit: number;
            protected ballTexture: Sprite;
            protected _ballPosition: Vector2;
            protected oldPos: Vector2;
            protected delta: number;


            public onWatchTimeline: TimelineMax;

            // protected updatesReceived: number = 0;


            constructor(ballSide: string = "", id: string = 'ball') {
                super();

                this.moving = false;
                this.velocity = new Vector2();
                this.oldPos = new Vector2();

                this.delta = PockeySettings.DELTA;
                this.radius = PockeySettings.BALL_RADIUS;

                this.side = ballSide;
                this.name = this.side + id;

                this.addTexture();

                this.addP2Body();

                this.onWatchTimeline = new TimelineMax({
                    smoothChildTiming: true,
                    ease: Linear.easeNone,
                    onUpdate: this.onWatchUpdate.bind(this)
                });
            }

            protected addP2Body(): void {
                this.p2Body = new p2.Body({
                    mass: this.mass,
                    position: [this.x, this.y],
                    fixedRotation: false
                });
                this.p2BodyShadow = new p2.Body({
                    mass: 0,
                    position: [this.x, this.y]
                });
                this.p2Body.angularDamping = 0;
                this.p2Body.angularForce = 0;
                this.p2Body.angularVelocity = 0;

                this.p2Body.damping = 0.2;
                this.p2Body.boundingRadius = this.radius;
                this.p2Body.allowSleep = true;
                this.p2Body.sleepSpeedLimit = 2; // Body will feel sleepy if speed<1 (speed is the norm of velocity)
                this.p2Body.sleepTimeLimit = 0.1;
                this.p2Body.sleep();// =  1;
                this.p2Body.velocity[0] = 0;// =  1;
                this.p2Body.velocity[1] = 0;// =  1;

                this.circleShape = new p2.Circle({radius: this.radius});
                this.circleShape.material = this.getCircleMaterial();
                this.p2Body.addShape(this.circleShape);

                let circleShape2 = new p2.Circle({radius: this.radius + PockeySettings.BALL_RADIUS});
                circleShape2.material = new p2.Material(MaterialType.SHADOW_MATERIAL);

                this.p2BodyShadow.addShape(circleShape2);

                P2WorldManager.Instance().world.addBody(this.p2Body);


                P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    this.worldPreSolveHandler();
                }, this);

                /*P2WorldManager.Instance().world.on("postStep", (evt) => {
                    this.update();
                }, this);*/
            }

            protected worldPreSolveHandler(): void {

                // if (this.speed() < 50)
                // this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
            }

            protected getCircleMaterial(): p2.Material {
                return P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL);
            }

            protected addTexture(): void {

                this.sphere = BABYLON.Mesh.CreateSphere(this.name, 16, this.radius * 2, AbstractEntryPoint.scene);
                // this.sphere.isVisible = false;
                let myMaterial = new BABYLON.StandardMaterial("myMaterial", AbstractEntryPoint.scene);

                myMaterial.diffuseTexture = new BABYLON.Texture(Settings.desktopAssetsPath + "Images/ballTexture.jpg", AbstractEntryPoint.scene);

                this.sphere.material = myMaterial;
                this.sphere.setEnabled(false);
                TweenMax.to(this.sphere.rotation, 0.1, {x: -2 * Math.PI, y: -2 * Math.PI, z: -2 * Math.PI});

                this.lastPosition = new Vector3(0, 0, 0);
            }

            public setLineLimits(lineLimits: Line[]): void {
                this.lineLimits = lineLimits;
            }

            public setPockets(pockets: Circle[]): void {
                this.pockets = pockets;
            }

            public setWallLimits(left: number, right: number, up: number, down: number): void {
                this.leftLimit = left;
                this.rightLimit = right;
                this.upLimit = up;
                this.downLimit = down;
            }

            public tintBall(color: number): void {
                let colorToHex: string = ('00000' + (color | 0).toString(16)).substr(-6);
                let rgbColor: Color4 = this.HexToRGB(colorToHex);

                if (this.sphere) {
                    this.sphere.material.diffuseColor = rgbColor;
                }
            }

            private HexToRGB(hex: string): Color4 {

                let r: number = parseInt(hex.substring(0, 2), 16) / 255;
                let g: number = parseInt(hex.substring(2, 4), 16) / 255;
                let b: number = parseInt(hex.substring(4, 6), 16) / 255;

                return new BABYLON.Color4(r, g, b, 1);
            }

            public getState(): BallState {

                let ballState: BallState = {
                    name: this.name,
                    x: Math.round(this.x * 10000),
                    y: Math.round(this.y * 10000),
                    rotation: this.rotation,
                    canBeRemoved: this.canBeRemoved,
                    shadowScaleX: this.ballShadow.scale.x,
                    shadowScaleY: this.ballShadow.scale.y,
                };

                if (this.sphere)
                    ballState.alpha = this.sphere.visibility;

                return ballState;
            }

            // private playAnimation():void
            // {
            //
            // }

            // private lerp(a:number, b:number, n:number):number {
            //     return (1 - n) * a + n * b;
            // }
            private lerp(min:number, max:number, fraction:number):number {
                return (max - min) * fraction + min;
            }

            public setState(ballState: BallState, animTime: number): void {

                let time: number = (animTime + 1 / 60) / 2;

                this.ballShadow.scale.x = ballState.shadowScaleX;
                this.ballShadow.scale.y = ballState.shadowScaleY;

                if (this.sphere)
                {
                    this.sphere.visibility = ballState.alpha;
                    if(this.sphere.visibility == 0)
                    {
                        this.sphere.setEnabled(false);
                    }
                    // else
                    // {
                    //
                    //     this.sphere.setEnabled(false);
                    // }
                    // this.x = this.lerp(this.x, ballState.x, time);
                    // this.y = this.lerp(this.y, ballState.y, time);
                    //
                    // this.ballPosition = new Vector2(this.x, this.y);
                    // TweenMax.to(this, time, {
                    //     x: ballState.x / 10000,
                    //     y: ballState.y / 10000,
                    //     onUpdate: this.onWatchUpdate.bind(this),
                    //     ease:Linear.easeNone,
                    // });
                }
                else
                {
                    // TweenMax.to(this, time, {
                    //     x: ballState.x / 10000,
                    //     y: ballState.y / 10000,
                    //     rotation: ballState.rotation,
                    //     onUpdate: this.onWatchUpdate.bind(this),
                    //     ease:Linear.easeNone,
                    // });
                }
                // console.log("new x: " + this.lerp(this.x, ballState.x, time));
                // console.log("normal x: " + this.x);
                // console.log("ball state x: " + ballState.x);
                this.x = this.lerp(this.x, ballState.x / 10000, 1 - 0.25 * PIXI.ticker.shared.deltaTime);
                this.y = this.lerp(this.y, ballState.y / 10000, 1 - 0.25 * PIXI.ticker.shared.deltaTime);

                this.ballPosition = new Vector2(this.x, this.y);
                // this.onWatchTimeline.to(this, time, {
                //     x: ballState.x / 10000,
                //     y: ballState.y / 10000
                // }, "-=0.002");

                if(ballState.canBeRemoved)
                {
                    this.canBeRemoved = ballState.canBeRemoved;
                    P2WorldManager.Instance().world.removeBody(this.p2Body);
                    P2WorldManager.Instance().world.removeBody(this.p2BodyShadow);
                }
               /* if(this.ballType == BallType.White)
                                {
                                    console.log("anim time: " + ballState.shadowScaleX, ballState.shadowScaleY);
                                }*/

            }

            private onWatchUpdate(): void {
                this.ballPosition = new Vector2(this.x, this.y);

                // this.handleRotation();
            }

            public update(): void {

                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

                if (this.canBeRemoved) {
                    this.moving = false;
                    return;
                }

                if (!this.moving)
                    return;

                if (this.moving && !this.canBeRemoved) {


                    let isCloserToPocket: boolean = false;
                    let pocketPosition: Vector2 = new Vector2();
                    let p2BodyPos: Vector2 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let lastDirection: number = 0;

                    this.oldPos.x = this.p2Body.velocity[0];
                    this.oldPos.y = this.p2Body.velocity[1];
                    this.oldPos = this.oldPos.normalise();

                    _.forEach(this.pockets, (pocket: Pocket) => {
                        pocketPosition = new Vector2(pocket.x, pocket.y);

                        if (pocketPosition.distanceTo(p2BodyPos) <= (this.radius + pocket.radius + 8)) {
                            isCloserToPocket = true;

                            if (pocketPosition.distanceTo(p2BodyPos) <= (pocket.radius + 1)) {

                                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                    soundName: PockeySoundURLS.BALL_IN_POCKET
                                }]);

                                this.canBeRemoved = true;
                                this.p2Body.velocity = [0, 0];
                                P2WorldManager.Instance().world.removeBody(this.p2Body);
                                P2WorldManager.Instance().world.removeBody(this.p2BodyShadow);

                                SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType]);

                                this.x = p2BodyPos.x;
                                this.y = p2BodyPos.y;

                                this.ballShadow.x = p2BodyPos.x;
                                this.ballShadow.y = p2BodyPos.y;

                                let closestDistance: number = 3000;
                                let distanceToNextClosestPoint: number = 3000;
                                let pointId: number = 0;
                                let nextPointId: number = 0;
                                let direction: number = 0;
                                let closestPoint: Vector2 = new Vector2();
                                let nextClosestPoint2: Vector2 = new Vector2();

                                closestPoint.x = pocket.x + this.oldPos.x;
                                closestPoint.y = pocket.y + this.oldPos.y;
                                closestPoint.x = closestPoint.x / 2 + p2BodyPos.x / 2;
                                closestPoint.y = closestPoint.y / 2 + p2BodyPos.y / 2;

                                nextClosestPoint2.x = p2BodyPos.x + this.oldPos.x * PockeySettings.BALL_RADIUS * 2;
                                nextClosestPoint2.y = p2BodyPos.y + this.oldPos.y * PockeySettings.BALL_RADIUS * 2;

                                let finalTouchPoint: Vector2 = new Vector2(closestPoint.x, closestPoint.y);
                                _.forEach(pocket.touchPoints, (touchPoint: Vector2, id: number) => {
                                    let newDist: number = closestPoint.distanceTo(touchPoint);
                                    let dirDist: number = nextClosestPoint2.distanceTo(touchPoint);

                                    if (newDist < closestDistance) {
                                        closestDistance = newDist;
                                        finalTouchPoint = new Vector2(touchPoint.x, touchPoint.y);
                                        pointId = id;
                                    }

                                    if (dirDist < distanceToNextClosestPoint) {
                                        distanceToNextClosestPoint = dirDist;
                                        nextPointId = id;
                                    }

                                });

                                closestPoint.x = finalTouchPoint.x;
                                closestPoint.y = finalTouchPoint.y;

                                let touchPointsArrayLength: number = pocket.touchPoints.length;
                                let clockwiseDistance: number = 0;
                                let counterclockDistance: number = 0;
                                let idCounter: number = pointId;

                                if (nextPointId > pointId) {
                                    clockwiseDistance = nextPointId - pointId;
                                    let tempDist: number = 0;
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;

                                        if (idCounter == nextPointId)
                                            counterclockDistance = tempDist;
                                    }

                                    if (counterclockDistance < clockwiseDistance)
                                        direction = -1;
                                    else if (counterclockDistance > clockwiseDistance)
                                        direction = 1;
                                    else
                                        direction = 0;
                                }
                                else {

                                    clockwiseDistance = pointId - nextPointId;
                                    let tempDist: number = 0;
                                    idCounter = nextPointId;
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;

                                        if (idCounter == pointId)
                                            counterclockDistance = tempDist;
                                    }

                                    if (clockwiseDistance < counterclockDistance)
                                        direction = -1;
                                    else if (clockwiseDistance > counterclockDistance)
                                        direction = 1;
                                    else
                                        direction = 0;
                                }
                                lastDirection = direction;

                                let bezierPositions: Point[] = [];

                                idCounter = pointId;

                                if (direction == -1) {
                                    for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;

                                    }
                                    bezierPositions.shift();

                                }
                                else if (direction == 1) {
                                    for (let i = 0; i < touchPointsArrayLength; i++) {

                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);

                                        idCounter++;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;

                                    }
                                    bezierPositions.shift();

                                }
                                else if (direction == 0) {

                                    direction = Math.round(Math.random()) - 1;
                                    lastDirection = direction;
                                    if (direction == 0)
                                        direction = 1;


                                    idCounter = nextPointId;
                                    bezierPositions.push(new Point(pocket.touchPoints[pointId].x, pocket.touchPoints[pointId].y));
                                    bezierPositions.push(new Point(pocket.touchPoints[nextPointId].x, pocket.touchPoints[nextPointId].y));

                                    for (let i = 0; i < touchPointsArrayLength - counterclockDistance; i++) {

                                        if (i == 1) {

                                            let tempPoint: Point = new Point(
                                                pocket.touchPoints[nextPointId].x / 2 + pocket.touchPoints[idCounter].x / 2,
                                                pocket.touchPoints[nextPointId].y / 2 + pocket.touchPoints[idCounter].y / 2
                                            );

                                            tempPoint = new Point(
                                                tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                                tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                            );
                                            tempPoint = new Point(
                                                tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                                tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                            );
                                            tempPoint = new Point(
                                                tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                                tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                            );
                                            bezierPositions.push(tempPoint);
                                        }

                                        idCounter -= direction;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }

                                }
                                bezierPositions.push(new Point(pocket.finalPoint.x, pocket.finalPoint.y));

                                let duration: number = 1 / (this.speed() / 60);
                                if (lastDirection == 0)
                                    duration *= 2.4;
                                else
                                    duration *= 2;
                                if (duration > 1.8)
                                    duration = 1.8;
                                else if (duration < 1)
                                    duration = 1;

                                this.animationInProgress = true;

                                this.ballInPocketAnimationTimeline = new TimelineMax();
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
                                    bezier: bezierPositions,
                                    ease: Linear.easeNone,
                                    onUpdate: this.handleRotation.bind(this)

                                }), 0);

                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.scale, duration - duration / 3, {
                                    x: 0.8,
                                    y: 0.8,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.ballShadow.scale, (0.1), {
                                    x: 0,
                                    y: 0,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.sphere, (duration / 3), {
                                    visibility: 0,
                                    ease: Linear.easeNone, onComplete: this.declareAnimationFinished.bind(this)
                                }), duration / 8);


                                return;
                            }
                        }

                    });

                    if (this.canBeRemoved)
                        return;

                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;

                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;

                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;

                    // this.lastPosition = new Vector3(this.x, this.y, 0);
                    // console.log("last pos");
                    // this.lastPosition.y = this.y;

                    // this.previousPosition = this.oldPos.clone();
                    // this.latestPositionTime = Date.now();//.NOW;
                    // this.actualPosition = this.oldPos.clone();


                    this.handleRotation();
                }

            }

            protected handleRotation(): void {
                if (this.ballType == BallType.Puck) {
                    return;
                }

                if (this.radius == 0) {
                    return;
                }

                this.moving = true;

                this.sphere.position.x = this.x;
                this.sphere.position.y = -this.y - PockeySettings.BABYLON_Y_OFFSET;

                // this.lastPositions.push(this.ballPosition);

                let position: Vector3 = new BABYLON.Vector3(this.sphere.position.x, this.sphere.position.y, 0);

                let currentToLast = position.subtract(this.lastPosition);
//                 console.log("last pos");


                let segment = currentToLast.length();

                if (segment == 0) {
                    return;
                }

                let ballDown: Vector3 = new BABYLON.Vector3(0, 0, -1);

                let axis = BABYLON.Vector3.Cross(ballDown, currentToLast);

                if (axis == BABYLON.Vector3.Zero()) {

                    return;
                }

                let theta: number = (segment / (this.radius * 3.5)) / this.radius; // in radians
                let thetaDegrees: number = theta * 180 / Math.PI;

                let q = BABYLON.Quaternion.RotationAxis(axis, thetaDegrees);

                let sphereRotToQuaternion = this.sphere.rotation.toQuaternion();

                let sphereRotation = q.multiply(sphereRotToQuaternion).toEulerAngles();
                this.sphere.rotation.x = sphereRotation.x;
                this.sphere.rotation.y = sphereRotation.y;
                this.sphere.rotation.z = sphereRotation.z;

                this.lastPosition = position;
//                 console.log("last pos");

                // console.log("last pos on push: " + this.lastPositions.length);
            }


            protected declareAnimationFinished(): void {
                this.animationInProgress = false;
                if(this.sphere)
                {
                    this.sphere.setEnabled(false);
                }
            }

            public addShadowBody(): void {
                this.p2BodyShadow.position[0] = this.x;
                this.p2BodyShadow.position[1] = this.y;

                P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
            }

            public enableSphere():void
            {
                this.sphere.setEnabled(true);
            }

            set ballPosition(positionVector: Vector2) {
                if (!this.initialPosition) {
                    this.initialPosition = positionVector.clone();
                }
                this._ballPosition = positionVector;

                this.x = positionVector.x;
                this.y = positionVector.y;

                // this.ballShadow.scale.x = 1;
                // this.ballShadow.scale.y = 1;

                this.ballShadow.x = this.x;
                this.ballShadow.y = this.y;

                this.p2Body.position = [positionVector.x, positionVector.y];
                this.p2BodyShadow.position = [positionVector.x, positionVector.y];

                // this.lastPosition = new Vector3(this.x, this.y, 0);

                if (this.sphere) {
                    // this.sphere.position.x = this.p2Body.position[0];
                    // this.sphere.position.y = -this.p2Body.position[1] - PockeySettings.BABYLON_Y_OFFSET;
                    this.handleRotation();
                }
                // if (this.sphere)
                //     this.handleRotation();


//                 console.log("last pos");

            }

            get ballPosition(): Vector2 {
                return new Vector2(this.x, this.y);
            }

            public speed(): number {
                // magnitude of velocity vector
                return Math.sqrt(this.p2Body.velocity[0] * this.p2Body.velocity[0] + this.p2Body.velocity[1] * this.p2Body.velocity[1]);
            }


            public angle(): number {
                //angle of ball with the x axis
                return Math.atan2(this.velocity.y, this.velocity.x);
            }

            public onShoot(rotation: number, power: number): void {
                this.power = power;
                this.velocity = new Vector2(this.power * Math.cos(rotation), this.power * Math.sin(rotation));
                // console.log("velo length" + this.velocity.length());
                this.moving = true;
            }

            public reset(): void {
                // console.log(this.name + "se reseteaza mingea!");
                if (this.ballInPocketAnimationTimeline && this.ballInPocketAnimationTimeline.isActive()) {
                    this.ballInPocketAnimationTimeline.pause();
                    this.ballInPocketAnimationTimeline.kill();
                }

                // this.scale.x = 1;
                // this.scale.y = 1;
                if(this.sphere)
                {
                    this.sphere.visibility = 1;
                    this.sphere.setEnabled(true);
                }

                this.ballShadow.scale.x = 1;
                this.ballShadow.scale.y = 1;

                // this.zIndexSwitched = false;
                this.canBeRemoved = false;
                this.animationInProgress = false;
                this.p2Body.velocity[0] = 0;
                this.p2Body.velocity[1] = 0;
                P2WorldManager.Instance().world.addBody(this.p2Body);
                P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
                this.removedFromArray = false;
                this.visible = true;
                this.removed = false;
            }

            public createBallShadow() {
                this.ballShadow = new Graphics();
                this.ballShadow.beginFill(0x000000, 0.5);
                this.ballShadow.drawCircle(this.radius / 4, this.radius / 4, this.radius);
            }

            /*public getBallData(): BallData {
                let ballData: BallData = {};


                ballData.x = this.x;
                ballData.y = this.y;

                ballData.veloX = this.p2Body.velocity[0];
                ballData.veloY = this.p2Body.velocity[1];

                ballData.scaleX = this.scale.x;
                ballData.scaleY = this.scale.y;

                ballData.shadowScaleX = this.ballShadow.scale.x;
                ballData.shadowScaleY = this.ballShadow.scale.y;

                ballData.zIndexSwitched = this.zIndexSwitched;

                ballData.visible = this.visible;
                ballData.alpha = this.alpha;
                ballData.name = this.name;
                ballData.parentName = (this.parent) ? this.parent.name : "none";

                return ballData;
            }*/


            /*public setBallData(ballData: BallData): void {
                // this.updatesReceived++;

                /!*_.forEach(ballData.positions, (position:Vector2) => {
                    this.newPositions.push(position);
                });

                this.ballPosition = *!/
                // this.newPositionCounter = 0;
                // this.latestPositionTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                // this.opponentPosition = new Vector2(ballData.x, ballData.y);
                // this.opponentVelocity = new Vector2(ballData.veloX, ballData.veloY);


                // if (this.ballType == BallType.White)
                // {
                //     if (this.speed() == 0)
                //     {
                //         this.p2Body.velocity = [ballData.veloX, ballData.veloY];
                //     }
                // }
                // = _currentTime;

                // if(this.newPositions.length == 0)
                // {
                //     return;
                // }

                // console.log("new positions: " + this.newPositions);
                // if (this.latestPositionTime == 0) {
                //     this.latestPositionTime = _currentTime;
                //
                //     this.prevPositions = [];
                //
                //     _.forEach(this.newPositions, (pos: Vector2) => {
                //         this.prevPositions.push(pos);
                //     });
                //
                //     return;
                // }
                //
                // let timeDiff = _currentTime - this.latestPositionTime;

                // if (this.networkTween) {
                //     this.networkTween.kill();
                //     this.networkTween = null;
                // }
                // this.networkTween = TweenMax.to(this, timeDiff / 1000 + 0.05, {bezier:this.newPositions, ease:Linear.easeNone, onUpdate:this.handleRotation.bind(this)});

                // console.log("new positions: ");
                // console.log(this.newPositions);
                // console.log("=============");
                //


                // this.prevPositions = [];
                // _.forEach(this.newPositions, (pos: Vector2) => {
                //     this.prevPositions.push(pos);
                // });
                // console.log("time diff: " + timeDiff);
                // console.log("time diff / 1000: " + (timeDiff / 1000));


                /!* let diff = _currentTime - this.latestPositionTime;




                 // this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
                 //     bezier: bezierPositions,
                 //     ease: Linear.easeNone,
                 //     onUpdate: this.handleRotation.bind(this)
                 //
                 // }), 0);
                 this.latestPositionTime = Date.now();

                 this.networkTween = TweenMax.to(this, 1, {bezier: this.newPositions});*!/
                // this.newPositionCounter = 0;
                // this.opponentLastTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
                // this.opponentPosition = new Vector2(ballData.x, ballData.y);
                // this.opponentVelocity = new Vector2(ballData.veloX, ballData.veloY);
                //
                // this.previousPosition = this.latestPosition = new Vector2(ballData.x, ballData.y);
                // this.latestPositionTime = Date.now();//.NOW;
                // this.actualPosition = this.latestPosition;

                // // if(this.p2Body.velocity.length == 0 && this.opponentVelocity.length() > 0)
                // // {
                //     this.p2Body.velocity[0] = this.opponentVelocity.x;
                //     this.p2Body.velocity[1] = this.opponentVelocity.y;
                // // }
                // else {
                //     this.p2Body.velocity[0] = this.lerp(this.p2Body.velocity[0], this.opponentVelocity.x, 0.5);
                //     this.p2Body.velocity[1] = this.lerp(this.p2Body.velocity[1], this.opponentVelocity.y, 0.5);
                // }
                //
                // if(this.ballPosition != this.opponentPosition)
                // {
                //     this.p2Body.position[0] = this.lerp(this.p2Body.position[0], this.opponentPosition.x, 0.5);
                //     this.p2Body.position[1] = this.lerp(this.p2Body.position[1], this.opponentPosition.y, 0.5);
                // }

//                 console.log("a intrat data? opp last time: " + this.opponentLastTime);

                /!*this.ballPosition = new Vector2(ballData.x, ballData.y);

                this.scale.x = ballData.scaleX;
                this.scale.y = ballData.scaleY;

                this.ballShadow.scale.x = ballData.shadowScaleX;
                this.ballShadow.scale.y = ballData.shadowScaleY;

                this.visible = ballData.visible;
                this.alpha = ballData.alpha;*!/

                // if (ballData.zIndexSwitched) {
                //     this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                //     this.ballAnimationHolder.addChild(this);
                // }
            }*/
        }
    }
}