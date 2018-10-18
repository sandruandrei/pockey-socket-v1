///<reference path="../../../Framework/AbstractModules/Background/abstract-background-module.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/8/2018
 */


namespace Pockey {
    export module Background {

        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import Point = PIXI.Point;
        import AbstractBackgroundModule = Framework.Background.AbstractBackgroundModule;

        export class PockeyBackgroundModule extends AbstractBackgroundModule {

            constructor() {
                super();
                // this.bgTextureName = "pockey_bg-01.png";
            }

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();

                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
            }

            private onResizeBackground(params: any[]): void {
                if (this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                    let scaleFactor: number = params[0];
                    let position: Point = params[1] as Point;
                    let rotation: number = params[2];

                    this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].x = position.x;
                    this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].y = position.y;
                    this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].rotation = rotation;
                    this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.x = scaleFactor;
                    this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.y = scaleFactor;
                }

            }

            // protected handleDesktopLandscape(): void {
            //     // // console.log("width is higher");
            //     // this.Layer.rotation = 0;
            //     // let scale: number = this.Layer.scale.y;
            //     // this.Layer.scale.x = scale;
            //     // if (this.Layer.width < this.stageWidth) {
            //     //     this.Layer.width = this.stageWidth;
            //     //     scale = this.Layer.scale.x;
            //     //     this.Layer.scale.y = scale;
            //     // }
            //     //
            //     // this.Layer.x = this.stageWidth / 2;
            //     // this.Layer.y = this.stageHeight / 2;
            // }
        }
    }

}
