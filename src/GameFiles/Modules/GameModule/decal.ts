/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/16/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import SignalsManager = Framework.Signals.SignalsManager;

        export enum DecalType {
            Welcome = "dccal_welcome.png",
            AstroJunkie = "decal_astrojunkie.png",
            Blastoff = "decal_blastoff.png",
            Cthulu = "decal_cthulu.png",
            Dice = "decal_dice.png",
            InserCoin = "decal_insertcoin.png",
            KnuckeSandwich = "decal_knucklesandwhich.png",
            Looselips = "decal_looselips.png",
            OneUp = "decal_oneup.png",
            PlayerOne = "decal_playerone.png",
            Pockey = "decal_pockey.png",
            RageQuit = "decal_ragequit.png",
            StatTrickShot = "decal_statTrickshot.png",
            ToweKing = "decal_towerking.png",
            WingedSword = "decal_wingedsword.png"
        }

        export class Decal extends Sprite {

            // private decalIcon: Sprite;

            constructor() {
                super();
                this.alpha = 0.2;

                this.anchor.set(0.5, 0.5);
                // this.SetDecalIcon(DecalType.Pockey);
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, this.onChangePooltableDecal.bind(this));
            }

            private onChangePooltableDecal(decalID:string):void
            {
                let idCounter:number = 0;
                _.forEach(PockeySettings.LARGE_DECALS_ARRAY, (item: InventoryVO, counter: number) => {
                    if (item.id == decalID) {
                        idCounter = counter;
                        return true;
                    }
                });

                this.texture = PIXI.Texture.fromImage(PockeySettings.LARGE_DECALS_ARRAY[idCounter].model);
            }

        }
    }
}
