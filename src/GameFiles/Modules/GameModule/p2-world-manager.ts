///<reference path="../../../../lib/types/p2/p2.d.ts"/>
///<reference path="../../../PockeyEntryPoint/pockey-settings.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../../../Framework/Signals/signal-types.ts"/>
///<reference path="../SoundModule/pockey-sound-names.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/9/2018
 */

namespace Pockey {
    export module GameModule {
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;
        import PockeySoundNames = Pockey.Sound.PockeySoundNames;
        import Vector2 = Framework.Utils.Vector2;

        export enum MaterialType {
            BALL_MATERIAL = 1,
            SHADOW_MATERIAL = 2,
            LINE_MATERIAL = 3,
            BALL_ONLY_MATERIAL = 4,
            PUCK_ONLY_MATERIAL = 5,
            PUCK_MATERIAL = 6,
            GOALIE_MATERIAL = 7
        }

        export class P2WorldManager {
            private static instance: P2WorldManager;
            private initialized: boolean = false;
            private name: string;
            private materials: { [id: string]: p2.Material; };
            // public ballMaterial: p2.Material;
            // aici se calluie salamu!

            public world: p2.World;
            public frameStep: number = 1 / 60;

            private ballToBallCollisionMaterial: p2.ContactMaterial;
            private ballToPuckOnlyLineCollisionMaterial: p2.ContactMaterial;
            private puckToBallOnlyLineCollisionMaterial: p2.ContactMaterial;


            constructor() {
                this.name = "P2WorldManager";
                this.materials = {};
            }

            static Instance() {
                if (!P2WorldManager.instance) {
                    P2WorldManager.instance = new P2WorldManager();

                    if (!P2WorldManager.Instance().initialized) {
                        P2WorldManager.Instance().world = new p2.World({
                            gravity: [0, 0],

                        });

                        // let solver:p2.GSSolver = new p2.GSSolver();
                        // solver.tolerance = 0.00001;
                        // solver.iterations = 20;//
                        // solver.solve(40, P2WorldManager.Instance().world);

                        // P2WorldManager.Instance().world.solver = solver;//
                        // P2WorldManager.Instance().world.solver.sti = solver;//

                        TweenMax.delayedCall(PockeySettings.P2_WORLD_STEP, P2WorldManager.Instance().createElements.bind(this));
                        P2WorldManager.Instance().initialized = true;
                        console.log("%c" + "P2WorldManager initialized", "color: blue");

                    }
                }
                return P2WorldManager.instance;
            }

            public getMaterialByID(materialID: number): p2.Material {
                if (!_.isNull(P2WorldManager.Instance().materials[materialID]) && !_.isUndefined(P2WorldManager.Instance().materials[materialID]))
                    return P2WorldManager.Instance().materials[materialID];

                else {
                    console.log("c%" + " " + P2WorldManager.name + " -> ERROR: material not registered");
                    return null;
                }

            }

            private createElements() {

                P2WorldManager.Instance().world.sleepMode = p2.World.BODY_SLEEPING;


                P2WorldManager.Instance().materials = {};
                P2WorldManager.createMaterials();

                P2WorldManager.defineContactMaterials();
            }

            private static createMaterials(): void {
                P2WorldManager.createNewMaterial(MaterialType.SHADOW_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.LINE_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.GOALIE_MATERIAL);
            }

            private static defineContactMaterials() {

                // // ball to normal line contact material
                let ballToNormalLineContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), {
                    // stiffness: 10000,
                    // frictionStiffness: 500000,
                    friction: 0.68,
                    restitution: 0.6821,
                    relaxation: 10
                });

                //ball to ball contact material
                let ballToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToBallContactMaterial);
                //end ball to ball contact material

                // ball to ball contact material
                let ballToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckContactMaterial);
                //end ball to ball contact material


                P2WorldManager.Instance().world.addContactMaterial(ballToNormalLineContactMaterial);
                // // end ball to normal line contact material

                //ball to puck only line contact material
                let ballToPuckOnlyLineContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_ONLY_MATERIAL), {
                    // stiffness: 500000,
                    friction: 0.4,
                    restitution: 0.6
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckOnlyLineContactMaterial);
                //end ball to puck only line contact material


                //ball to normal line contact material
                let puckToNormalLineContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    surfaceVelocity: 88,
                    // friction: 20,
                    // stiffness: 1e10000,
                    // restitution: 0.4
                    friction: 0.6,
                    restitution: 0.6,
                    relaxation: 10
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToNormalLineContactMaterial);
                //end ball to normal line contact material

                // //puck to ball only line contact material
                let puckToBallOnlyLineContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_ONLY_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    stiffness: 888,
                    friction: 20,
                    // surfaceVelocity: 20,
                    restitution: 0.4
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToBallOnlyLineContactMaterial);
                //end puck to ball only line contact material

                // goalieToBall
                let goalieToBallContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    // stiffness: 0,
                    // friction: 0,
                    // surfaceVelocity: 20,
                    restitution: 1
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToBallContactMaterial);
                //end puck to ball only line contact material

                // goalieToBall
                let goalieToPuckContactMaterial: p2.ContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    // stiffness: 0,
                    // friction: 0,
                    // surfaceVelocity: 20,
                    restitution: 0.8
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToPuckContactMaterial);
                //end puck to ball only line contact material

                let veloCounter:number = 0;

                P2WorldManager.Instance().world.on("preSolve", (evt) => {

                    _.forEach(evt.contactEquations, (ce: p2.ContactEquation) => {
                        // console.log("mat id1: " + ce.shapeA.material.id, "mat id2: " + ce.shapeB.material.id);
                        if (
                            (ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.LINE_MATERIAL)
                        ) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)) {

                            let maxPower: number = 1200;
                            let velocityVectorA: Vector2 = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            let speedA: number = velocityVectorA.getMagnitude();
                            let velocityVectorB: Vector2 = new Vector2(ce.bodyB.velocity[0], ce.bodyB.velocity[1]);
                            let speedB: number = velocityVectorB.getMagnitude();
                            let higherVelocity: number = (speedB > speedA) ? speedB : speedA;
                            let hitVolume: number = Math.round((higherVelocity / maxPower) * 100) / 100;
                            if (hitVolume > 1)
                                hitVolume = 1;
                            else if(hitVolume < 0.5)
                                hitVolume = 0.5;
                            // console.log("velocity: " + hitVolume);
                            // let velocity:number = ce.bodyA.velocity
                            // ce.bodyA.velocity
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                soundName: PockeySoundNames.BALL_TO_BALL_HIT,
                                volume: hitVolume
                            }]);

                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            // veloCounter++;
                            let ballVelocity:Vector2 = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            // console.log("salam " + veloCounter + " velocity: " + ballVelocity.x, ballVelocity.y);

                            let ballSpeed:number = ballVelocity.getMagnitude();

                            if(ballSpeed < 388)
                            {
                                let normalizedVector:Vector2 = ballVelocity.normalise().multiply(388);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;

                                // console.log("salam normalize");
                            }

                            // console.log("salam ball speed: " + ballSpeed);
                            // ce.bodyB.
                        }
                        else if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            veloCounter++;
                            let ballVelocity:Vector2 = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            // console.log("salam " + veloCounter + " velocity: " + ballVelocity.x, ballVelocity.y);

                            let ballSpeed:number = ballVelocity.getMagnitude();

                            if(ballSpeed < 388)
                            {
                                let normalizedVector:Vector2 = ballVelocity.normalise().multiply(388);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;

                                // console.log("salam normalize");
                            }

                            // console.log("salam ball speed: " + ballSpeed);
                            // ce.bodyB.
                        }
                    });
                }, this);
            }

            protected checkCollisions(): void {

            }

            private static createNewMaterial(ballMaterialType: MaterialType) {
                P2WorldManager.Instance().materials[ballMaterialType] = new p2.Material(ballMaterialType);
            }
        }
    }

}
