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
            private currentDecalIDCounter: number = 0;
            private decalsArray: InventoryVO[];

            constructor() {
                super();
                this.alpha = 0.2;

                this.anchor.set(0.5, 0.5);
                // this.SetDecalIcon(DecalType.Pockey);
                // this.decalsArray = PockeySettings.SMALL_DECALS_ARRAY;

                // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_FELT, this.setTint.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, this.onChangePooltableDecal.bind(this));

                    this.onChangePooltableDecal(PockeySettings.PLAYER_DECAL_ID);

                // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }

            // private onPlayerSignedIn(): void {
            //     this.decalsArray = PockeySettings.LARGE_MISC_ARRAY;
            //
            //     console.log("decal change player signed in");
            //     this.onChangePooltableDecal(PockeySettings.PLAYER_DECAL_ID);
            //
            //     // this.currentAvatarCounter = 0;
            //     // PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
            //     // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
            // }
            //
            // private onPlayerSignedOut(): void {
            //     this.decalsArray = PockeySettings.SMALL_MISC_ARRAY;
            //     if (this.currentDecalIDCounter > this.decalsArray.length - 1) {
            //         this.currentDecalIDCounter = 0;
            //         PockeySettings.POOLTABLE_FELT_ID = this.decalsArray[this.currentDecalIDCounter].id;
            //     }
            //
            //     this.onChangePooltableDecal(PockeySettings.PLAYER_DECAL_ID);
            //
            //     // this.updateCookieOrDatabase();
            // }
            
            // private onInventoryItemUpdated():void
            // {
            //     if(this.decalsArray[this.currentDecalIDCounter].id != PockeySettings.PLAYER_DECAL_ID)
            //     {
            //         this.onChangePooltableDecal(PockeySettings.PLAYER_DECAL_ID);
            //     }
            // }
            
            private onChangePooltableDecal(decalID:string):void
            {
                // console.log("cacat in ploaie salam");
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
