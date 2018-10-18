///<reference path="../../../../Framework/Utils/Line.ts"/>
///<reference path="../../../../Framework/abstract-entry-point.ts"/>
///<reference path="../Pocket.ts"/>

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
        import Graphics = PIXI.Graphics;
        import Vector2 = Framework.Utils.Vector2;
        import Line = Framework.Utils.Line;
        import Circle = PIXI.Circle;
        import AbstractEntryPoint = Framework.AbstractEntryPoint;
        import Settings = Framework.Settings;
        import Point = PIXI.Point;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export enum BallType {
            Player = "PlayerBall",
            Opponent = "OpponentBall",
            White = "WhiteBall",
            Puck = "Puck"
        }

        export interface BallData {
            removedFromArray?: boolean;
            name?: string,
            x?: number,
            y?: number,
            alpha?: number,
            parentName?: string,
            visible?: boolean,
            canBeRemoved?: boolean,
            scaleX?: number,
            scaleY?: number,
            shadowScaleX?: number,
            shadowScaleY?: number,
            zIndexSwitched?: boolean,
            animationInProgress?: boolean
        }

        export class AbstractBall extends Sprite {
            public ballType: BallType;
            // protected defaultTextureName: string = 'ball-colorme.png';
            protected defaultTextureName: string = Settings.desktopAssetsPath + "Images/color_big.png";
            protected defaultOverTextureName: string = Settings.desktopAssetsPath + "Images/color_big_over.png";
            protected defaultShadowTextureName: string = Settings.desktopAssetsPath + "Images/color_big_shadow.png";
            protected _ballPosition: Vector2; //use this as default
            public side: string;

            public radius: number;//todo update la diameter dupa ce setezi textura
            public mass: number = 1.4;
            public velocity: Vector2;
            public oldPos: Vector2;
            public moving: boolean = false;
            public power: number;
            protected leftLimit: number;
            protected rightLimit: number;
            protected upLimit: number;
            protected downLimit: number;
            private g: Graphics;
            public delta: number;
            protected minStopLimit: number = 0.1;
            public defaultColor: number = 0xffffff;
            public isInPocket: boolean = false;
            public lineLimits: Line[];
            public pockets: Circle[];
            public pocketsFinalPoints: Vector2[];
            public p2Body: p2.Body;
            public p2BodyShadow: p2.Body;
            // private bitmapTexture: AnimatedSprite;
            private zRotationActive: boolean = false;
            private numberTest: number[] = [];
            private lastAngle: number = 0;
            private rot: number[];
            private img: any;
            private tex: any;
            private imgPos: Vector2;

            private prevX = 0;
            private prevY = 0;
            private newX = 0;
            private newY = 0;
            private ballTexture: Sprite;
            private ballOverTexture: Sprite;
            private ballIsInThePocket: boolean = false;
            private occupiedPocket: Pocket;
            private circleShape: p2.Circle;
            public canBeRemoved: boolean = false;
            public finalPocketAnimationRightPoint: Vector2 = new Vector2();
            public finalPocketAnimationLeftPoint: Vector2 = new Vector2();
            public finalPocketAnimationCenterPoint: Vector2 = new Vector2();
            public pocketsZIndex: number = 0;

            private firstPocketAnimationDone: boolean = false;
            public removed: boolean = false;

            public zIndexSwitched: boolean = false;
            public ballAnimationHolder: Container;
            public animationInProgress: boolean = false;

            public ballValue: number = 1;

            public ballShadow: Graphics;

            public initialPosition: Vector2;

            private ballInPocketAnimationTimeline: TimelineMax;

            public removedFromArray: boolean = false;

            constructor(ballSide: string = "", id: string = 'ball') {
                super();
                // this.img = context.createImageData(ballSize, ballSize);
                // this.tex = context.createImageData(textureSize, textureSize);
                this.rot = [1, 0, 0, 1];
                this.moving = false;
                this.velocity = new Vector2();
                this.oldPos = new Vector2();
                // this.imgPos = new Vector2(0, 0);

                this.delta = PockeySettings.DELTA;
                this.radius = PockeySettings.BALL_RADIUS;
                // if()
                this.side = ballSide;
                this.name = this.side + id;
                this.changeDefaultTextureName();
                this.updateTexture();

                // this.addGraphic();

                // this.registerSignals();

                // this.createBallShadow();

                this.addP2Body();
            }

            protected addP2Body(): void {
                this.p2Body = new p2.Body({
                    mass: this.mass,
                    position: [this.x, this.y],
                    // fixedRotation: false,

                });
                this.p2BodyShadow = new p2.Body({
                    mass: 0,
                    position: [this.x, this.y]
                });
                this.p2Body.angularDamping = 0.4;
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

                let circleShape2 = new p2.Circle({radius: PockeySettings.BALL_RADIUS + this.radius - 0});
                circleShape2.material = new p2.Material(MaterialType.SHADOW_MATERIAL);

                this.p2BodyShadow.addShape(circleShape2);

                P2WorldManager.Instance().world.addBody(this.p2Body);


                P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    this.worldPreSolveHandler();
                }, this);

            }

            protected worldPreSolveHandler(): void {

                if (this.speed() < 50)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
            }

            protected getCircleMaterial(): p2.Material {
                return P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL);//new p2.Material(MaterialType.BALL_MATERIAL);
            }

            protected changeDefaultTextureName(): void {
                // this.defaultTextureName =
            }

            protected updateTexture(): void {

                this.anchor.set(0.5, 0.5);

                this.ballTexture = new Sprite();
                let g: Graphics = new Graphics();
                g.beginFill(0xffffff, 1);
                g.drawCircle(0, 0, this.radius);
                g.endFill();
                this.ballTexture.addChild(g);

                this.addChild(this.ballTexture);

                this.addGraphic();
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
                // this.g.tint = color;
                (this.ballTexture.getChildAt(0) as Graphics).tint = color;
            }

            protected addGraphic(): void {
                this.g = new Graphics();
                if (this.ballType == BallType.Opponent) {
                    this.defaultColor = PockeySettings.OPPONENT_COLOR;
                    // this.g.beginFill(this.defaultColor);
                }
                else if (this.ballType == BallType.Player) {
                    this.defaultColor = PockeySettings.PLAYER_COLOR;
                    // this.g.beginFill(this.defaultColor);
                }
                else if (this.ballType == BallType.Puck) {
                    this.defaultColor = PockeySettings.PUCK_COLOR;
                    // this.g.beginFill(this.defaultColor);
                }
                else {
                    this.defaultColor = 0xffffff;

                }
                this.g.beginFill(this.defaultColor);

                this.g.drawCircle(0, 0, this.radius);
                this.g.endFill();

                this.img = AbstractEntryPoint.renderer.extract.pixels(this);

                /*let frames = [];

                for (let i = 0; i < 180; i++) {

                    frames.push(PIXI.Texture.fromFrame('Ball' + i + '.png'));
                }*/
            }


            public update(): void {

                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

                //person.age >=16 ? 'Yes' : 'No';
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

                                this.canBeRemoved = true;
                                console.log("intra la can be removed fmm: " + this.name);
                                P2WorldManager.Instance().world.removeBody(this.p2Body);

                                SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType]);

                                // P2WorldManager.Instance().world.remove(this.p2Body);

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
                                let testids: number[] = [];
                                idCounter = pointId;

                                if (direction == -1) {
                                    for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                        testids.push(idCounter);
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;

                                    }
                                    bezierPositions.shift();

                                }
                                else if (direction == 1) {
                                    for (let i = 0; i < touchPointsArrayLength; i++) {

                                        testids.push(idCounter);
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);

                                        idCounter++;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;

                                    }
                                    bezierPositions.shift();

                                }
                                else if (direction == 0) {

                                    direction = Math.round(Math.random() * 1) - 1;
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
                                            testids.push(idCounter);
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

                                this.animationInProgress = true;

                                this.ballInPocketAnimationTimeline = new TimelineMax();
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
                                    bezier: bezierPositions,
                                    ease: Linear.easeNone,
                                    onUpdate: this.onAnimationUpdate.bind(this),
                                    onUpdateParams: [pocket.x, pocket.y, pocket.radius],
                                    onComplete: this.declareAnimationFinished.bind(this)
                                }), 0);

                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.scale, duration - duration / 3, {
                                    x: 0.8,
                                    y: 0.8,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.ballShadow.scale, (duration - duration / 3) / 2, {
                                    x: 0,
                                    y: 0,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, (duration - duration / 3), {
                                    alpha: 0,
                                    ease: Linear.easeNone
                                }), duration / 3);


                                return;
                            }
                        }

                    });

                    if (this.canBeRemoved)
                        return;

                    if (!isCloserToPocket) {

                        if (p2BodyPos.x + this.radius > this.rightLimit) {
                            p2BodyPos.x = this.rightLimit - this.radius;
                        }
                        else if (p2BodyPos.x - this.radius < this.leftLimit) {
                            p2BodyPos.x = this.leftLimit + this.radius;
                        }
                        if (p2BodyPos.y + this.radius > this.downLimit) {
                            p2BodyPos.y = this.downLimit - this.radius;
                        }
                        else if (p2BodyPos.y - this.radius < this.upLimit) {
                            p2BodyPos.y = this.upLimit + this.radius;
                        }
                    }

                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;

                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;

                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            }

            protected declareAnimationFinished(): void {
                this.animationInProgress = false;
                this.visible = false;
                if (this.parent)
                    this.parent.removeChild(this);
            }

            public addShadowBody(): void {
                this.p2BodyShadow.position[0] = this.x;
                this.p2BodyShadow.position[1] = this.y;

                P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
            }

            private onAnimationUpdate(x: number, y: number, radius: number): void {

                this.moving = true;
                let ballPos: Vector2 = new Vector2(this.x, this.y);
                let pocketPos: Vector2 = new Vector2(x, y);
                let minDistance: number = radius - this.radius;
                let distance: number = pocketPos.distanceTo(ballPos)

                if (distance <= minDistance && !this.zIndexSwitched) {

                    this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                    this.ballAnimationHolder.addChild(this);
                    // this.ballAnimationHolder.addChild(this.ballShadow);
                    this.zIndexSwitched = true;
                }

            }

            set ballPosition(positionVector: Vector2) {
                if (!this.initialPosition) {
                    this.initialPosition = positionVector.clone();
                }
                this._ballPosition = positionVector;

                this.x = positionVector.x;
                this.y = positionVector.y;

                this.ballShadow.scale.x = 1;
                this.ballShadow.scale.y = 1;

                this.ballShadow.x = this.x;
                this.ballShadow.y = this.y;

                this.p2Body.position = [positionVector.x, positionVector.y]
                this.p2BodyShadow.position = [positionVector.x, positionVector.y]

            }

            get ballPosition(): Vector2 {
                return this._ballPosition;
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
                this.moving = true;
            }

            public reset(): void {
                if (this.ballInPocketAnimationTimeline && this.ballInPocketAnimationTimeline.isActive()) {
                    this.ballInPocketAnimationTimeline.pause();
                    this.ballInPocketAnimationTimeline.kill();
                    // this.ballInPocketAnimationTimeline.pause(0, true); //Go back to the start (true is to suppress events)
                    // this.ballInPocketAnimationTimeline.
                    // Timel.remove();
                }
                this.alpha = 1;
                this.scale.x = 1;
                this.scale.y = 1;

                this.ballShadow.scale.x = 1;
                this.ballShadow.scale.y = 1;
                this.zIndexSwitched = false;
                this.canBeRemoved = false;
                this.animationInProgress = false;
                this.p2Body.velocity[0] = 0;
                this.p2Body.velocity[1] = 0;
                P2WorldManager.Instance().world.addBody(this.p2Body);
                P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
                this.removedFromArray = false;
                this.visible = true;
                this.removed = false;
                // this.poolTable.addChild(this.poolTable.whiteBall);
                // this.ticker.add(this.poolTable.whiteBall.update);
            }

            public createBallShadow() {
                this.ballShadow = new Graphics();
                this.ballShadow.beginFill(0x000000, 0.4);
                this.ballShadow.drawCircle(this.radius / 4, this.radius / 4, this.radius);
                // holder.addChild(this.ballShadow);
            }

            public getBallData(): BallData {
                let ballData: BallData = {};

                ballData.x = this.x;
                ballData.y = this.y;

                ballData.scaleX = this.scale.x;
                ballData.scaleY = this.scale.y;

                ballData.shadowScaleX = this.ballShadow.scale.x;
                ballData.shadowScaleY = this.ballShadow.scale.y;

                ballData.zIndexSwitched = this.zIndexSwitched;

                ballData.visible = this.visible;
                ballData.alpha = this.alpha;
                // ballData.canBeRemoved = this.canBeRemoved;
                ballData.name = this.name;
                ballData.parentName = (this.parent) ? this.parent.name : "none";
                // ballData.animationInProgress = this.animationInProgress;
                // ballData.removedFromArray = this.removedFromArray;

                return ballData;
            }

            public setBallData(ballData: BallData): void {
                // let ballData:BallData = {};
                this.ballPosition = new Vector2(ballData.x, ballData.y);
                // this.x = ballData.x;
                // this.y = ballData.y;

                this.scale.x = ballData.scaleX;
                this.scale.y = ballData.scaleY;

                this.ballShadow.scale.x = ballData.shadowScaleX;
                this.ballShadow.scale.y = ballData.shadowScaleY;

                this.visible = ballData.visible;
                this.alpha = ballData.alpha;
                // this.animationInProgress = ballData.animationInProgress;
                // this.canBeRemoved = ballData.canBeRemoved;
                // this.removedFromArray = ballData.removedFromArray;

                if (ballData.zIndexSwitched) {
                    this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                    this.ballAnimationHolder.addChild(this);
                }
            }
        }
    }
}