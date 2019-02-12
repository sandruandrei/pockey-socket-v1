///<reference path="../SignalsModule/pockey-signal-types.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/11/2019
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class TableFelt {
            private felt: Sprite;

            private border: Sprite;

            constructor(felt:Sprite, border:Sprite) {
                this.felt = felt;
                this.border = border;

                let tableMatrix = new PIXI.filters.ColorMatrixFilter();
                this.felt.filters = [tableMatrix];
                this.border.filters = [tableMatrix];
                tableMatrix.brightness(1.6);
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_FELT, this.setTint.bind(this));

                this.setTint(PockeySettings.POOLTABLE_FELT_ID);
            }

            private setTint(tintID:string):void
            {
                let idCounter:number = 0;
                _.forEach(PockeySettings.LARGE_MISC_ARRAY, (item: InventoryVO, counter: number) => {
                    if (item.id == tintID) {
                        idCounter = counter;
                        return true;
                    }
                });

                this.felt.tint = PockeySettings.LARGE_MISC_ARRAY[idCounter].color;
                this.border.tint = PockeySettings.LARGE_MISC_ARRAY[idCounter].color;
            }
        }
    }
}
