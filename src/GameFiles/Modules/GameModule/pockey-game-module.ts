///<reference path="../SignalsModule/pockey-signal-types.ts"/>
///<reference path="../../../Framework/Abstracts/abstract-module.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../../../Framework/Settings.ts"/>
///<reference path="pool-table-manager.ts"/>
///<reference path="pool-table-manager-mobile.ts"/>
///<reference path="mobile-stick-power.ts"/>
/**
 *  Edgeflow
 *  Copyright 2017 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/12/2018
 */


namespace Pockey {
    export module GameModule {

        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import Point = PIXI.Point;
        import Settings = Framework.Settings;
        import Graphics = PIXI.Graphics;
        import Sprite = PIXI.Sprite;

        export class PockeyGameModule extends AbstractModule {
            // private poolTable: PoolTable;
            private levelManager: PoolTableManager;
            public confirmWhiteBallPlacementTexture: Sprite;
            public mobileStickPower: MobileStickPower;

            private zeroPosition: Graphics;

            createElements(): void {

                if (Settings.isMobile) {
                    this.levelManager = new PoolTableManagerMobile();
                }
                else {
                    this.levelManager = new PoolTableManager();

                }
                this.addChild(this.levelManager.poolTable);
                // this.poolTable = new PoolTable();//todo aici ai putea sa importi level manager (denumit acum game mechanics), hmm
                // this.addChild(this.poolTable);//todo si aici addchild level manager.pooltable care e public
                // this.handleDesktopLandscape();

                if (Settings.isMobile) {
                    this.confirmWhiteBallPlacementTexture = new Sprite(PIXI.Texture.fromFrame("penalty-droppuck.png"));
                    this.confirmWhiteBallPlacementTexture.anchor.x = 0.5;
                    this.confirmWhiteBallPlacementTexture.anchor.y = 0.5;
                    this.confirmWhiteBallPlacementTexture.visible = false;
                    this.addChild(this.confirmWhiteBallPlacementTexture);
                    this.confirmWhiteBallPlacementTexture.interactive = true;
                    this.confirmWhiteBallPlacementTexture.on("tap", () => {
                        SignalsManager.DispatchSignal(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED);
                    });

                    this.mobileStickPower = new MobileStickPower();
                    this.addChild(this.mobileStickPower);

                    SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER, this.onShowWhiteBallPositionConfirmer.bind(this))
                    SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER, this.onHideWhiteBallPositionConfirmer.bind(this))
                    // this.mobileStickPower.anchor.y = 0.5;
                    // this.confirmWhiteBallPlacementTexture.visible = false;
                    // this.addChild(this.mobileStickPower);
                }

                super.createElements();
            }

            private onShowWhiteBallPositionConfirmer(): void {
                this.confirmWhiteBallPlacementTexture.visible = true;
            }

            private onHideWhiteBallPositionConfirmer(): void {
                this.confirmWhiteBallPlacementTexture.visible = false;
            }

            /*protected onResize(params: any[]): void {
                super.onResize(params);
                // console.log("orientarea: " + window.orientation);

                /!*if (this.zeroPosition) {
                    if (this.zeroPosition.parent)
                        this.zeroPosition.parent.removeChild(this.zeroPosition);
                    this.zeroPosition.clear();
                    this.zeroPosition = null;
                }

                this.zeroPosition = new Graphics();
                this.zeroPosition.beginFill(0xff9900, 0.6);
                this.zeroPosition.drawCircle(0, 0, 40);
                this.zeroPosition.endFill();

                this.addChild(this.zeroPosition);*!/

            }*/

            protected handleDesktopLandscape(): void {
                super.handleDesktopLandscape();
                // console.log("stage width: " + this.stageWidth);
                // console.log("stage height: " + this.stageHeight);

                if (this.levelManager && this.levelManager.poolTable) {

                    this.levelManager.poolTable.poolStick.visible = false;
                    // console.log("this.levelManager.poolTable width after: " + this.levelManager.poolTable.width);
                    this.levelManager.poolTable.height = 0.7 * Settings.stageHeight;
                    let backgroundScaleFactor: number = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;

                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    this.levelManager.poolTable.y = 0.18 * Settings.stageHeight + this.levelManager.poolTable.height / 2;//

                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, this.levelManager.poolTable.position, this.levelManager.poolTable.rotation, this.levelManager.poolTable.width, this.levelManager.poolTable.height]);

                    this.levelManager.poolTable.poolStick.visible = true;

                }
            }

            protected handleMobileLandscape(): void {
                // console.log("stage width: " + this.stageWidth);
                // console.log("stage height: " + this.stageHeight);

                if (this.levelManager && this.levelManager.poolTable) {

                    this.levelManager.poolTable.poolStick.visible = false;
                    // console.log("this.levelManager.poolTable width after: " + this.levelManager.poolTable.width);
                    this.levelManager.poolTable.height = 0.9 * Settings.stageHeight;
                    let backgroundScaleFactor: number = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;

                    this.levelManager.poolTable.rotation = 0;

                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    this.levelManager.poolTable.y = 0.05 * Settings.stageHeight + this.levelManager.poolTable.height / 2;//

                    this.confirmWhiteBallPlacementTexture.rotation = 0;

                    this.confirmWhiteBallPlacementTexture.scale.x = this.confirmWhiteBallPlacementTexture.scale.y = backgroundScaleFactor;
                    this.confirmWhiteBallPlacementTexture.x = Settings.stageWidth / 4 - this.levelManager.poolTable.width / 4;
                    if (this.confirmWhiteBallPlacementTexture.x < 5 + this.confirmWhiteBallPlacementTexture.width / 2)
                        this.confirmWhiteBallPlacementTexture.x = 5 + this.confirmWhiteBallPlacementTexture.width / 2;

                    this.confirmWhiteBallPlacementTexture.y = Settings.stageHeight / 2;// - this.levelManager.poolTable.width / 4;//- this.levelManager.poolTable.width) / 2;

                    this.mobileStickPower.rotation = 0;
                    this.mobileStickPower.scale.x = this.mobileStickPower.scale.y = backgroundScaleFactor;
                    this.mobileStickPower.x = this.confirmWhiteBallPlacementTexture.x;//Settings.stageWidth / 4 - this.levelManager.poolTable.width / 4;
                    // if (this.mobileStickPower.x < 5 + this.mobileStickPower.width / 2)
                    //     this.mobileStickPower.x = 5 + this.mobileStickPower.width / 2;
                    this.mobileStickPower.y = Settings.stageHeight / 2 - this.mobileStickPower.height / 2;// - this.levelManager.poolTable.width / 4;//- this.levelManager.poolTable.width) / 2;

                    // console.log("this.levelManager.poolTable.rotation: " + this.levelManager.poolTable.rotation);

                    let newPos: Point = new Point();
                    newPos.x = this.levelManager.poolTable.position.x;
                    newPos.y = this.levelManager.poolTable.position.y + this.levelManager.poolTable.height * 0.019;

                    this.levelManager.poolTable.poolStick.visible = true;

                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation])
                }

            }

            protected handleMobilePortrait(): void {
                // console.log("stage width: " + this.stageWidth);
                // console.log("stage height: " + this.stageHeight);

                if (this.levelManager && this.levelManager.poolTable) {

                    this.levelManager.poolTable.poolStick.visible = false;
                    // console.log("this.levelManager.poolTable width after: " + this.levelManager.poolTable.width);
                    this.levelManager.poolTable.height = 0.9 * Settings.stageWidth;
                    let backgroundScaleFactor: number = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;

                    if (this.levelManager.poolTable.width > Settings.stageHeight) {
                        this.levelManager.poolTable.width = Settings.stageHeight;
                    }
                    backgroundScaleFactor = this.levelManager.poolTable.scale.x;
                    this.levelManager.poolTable.scale.y = backgroundScaleFactor;

                    this.levelManager.poolTable.rotation = 90 * Math.PI / 180;
                    this.levelManager.poolTable.x = 0.5 * Settings.stageWidth;// + this.levelManager.poolTable.height / 2;
                    this.levelManager.poolTable.y = Settings.stageHeight / 2;//

                    this.confirmWhiteBallPlacementTexture.scale.x = this.confirmWhiteBallPlacementTexture.scale.y = backgroundScaleFactor;
                    this.confirmWhiteBallPlacementTexture.rotation = 90 * Math.PI / 180;
                    this.confirmWhiteBallPlacementTexture.x = Settings.stageWidth / 2;
                    this.confirmWhiteBallPlacementTexture.y = Settings.stageHeight / 4 - this.levelManager.poolTable.width / 4;
                    if (this.confirmWhiteBallPlacementTexture.y < 5 + this.confirmWhiteBallPlacementTexture.width / 2)
                        this.confirmWhiteBallPlacementTexture.y = 5 + this.confirmWhiteBallPlacementTexture.width / 2;

                    this.mobileStickPower.rotation = 90 * Math.PI / 180;
                    this.mobileStickPower.scale.x = this.mobileStickPower.scale.y = backgroundScaleFactor;
                    this.mobileStickPower.y = this.confirmWhiteBallPlacementTexture.y;//Settings.stageWidth / 4 - this.levelManager.poolTable.width / 4;
                    // if (this.mobileStickPower.x < 5 + this.mobileStickPower.width / 2)
                    //     this.mobileStickPower.x = 5 + this.mobileStickPower.width / 2;
                    this.mobileStickPower.x = Settings.stageWidth / 2 + this.mobileStickPower.height / 2;// - this.levelManager.poolTable.width / 4;//- this.levelManager.poolTable.width) / 2;

                    let newPos: Point = new Point();
                    newPos.x = this.levelManager.poolTable.position.x - this.levelManager.poolTable.height * 0.019;
                    newPos.y = this.levelManager.poolTable.position.y;// +120;//this.levelManager.poolTable.height * 0.2;

                    this.levelManager.poolTable.poolStick.visible = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                }
            }

            // protected onResize(params: any[]): void {
            //     super.onResize(params);
            // }

            /*protected registerSignals() {
                super.registerSignals();

                SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOT_BALL);
                SignalsManager.CreateNewSignal(PockeySignalTypes.NEXT_TURN);
                SignalsManager.CreateNewSignal(PockeySignalTypes.BALL_IN_POCKET);
                SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
                SignalsManager.CreateNewSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                SignalsManager.CreateNewSignal(PockeySignalTypes.REPOSITION_WHITE_BALL);
                // SignalsManager.CreateNewSignal(PockeySignalTypes.REPOSITION_STICK);
                SignalsManager.CreateNewSignal(PockeySignalTypes.REACTIVATE_STICK);
                SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
                SignalsManager.CreateNewSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                // SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOTING_ENDED);
            }*/
        }

    }
}

