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
        import Settings = Framework.Settings;
        import iBackground = Framework.Background.iBackground;

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
                let bg:iBackground;

                if (this.backgrounds[Settings.mainBackgroundName]) {
                    bg = this.backgrounds[Settings.mainBackgroundName];
                    let newHeight:number = Settings.stageHeight;
                    let scale: number = newHeight / bg.initialHeight;
                    let newWidth:number = bg.initialWidth * scale;

                    if (newWidth < Settings.stageWidth) {
                        newWidth = Settings.stageWidth;
                        scale = newWidth / bg.initialWidth;
                    }

                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.height = (bg.initialHeight * scale).toString() + "px";
                }

                if (this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                    bg = this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME];

                    //*********************
                    let scale: number = params[0];
                    let position: Point = params[1] as Point;

                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.left = position.x.toString() + "px";
                    bg.div.style.top = position.y.toString() + "px";
                }

            }


        }
    }

}
