///<reference path="../SignalsModule/pockey-signal-types.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../../../Framework/AbstractModules/Connection/database-connector.ts"/>
///<reference path="../../../Framework/Settings.ts"/>
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
        import Settings = Framework.Settings;
        import DatabaseObject = Framework.Connection.DatabaseObject;
        import DatabaseConnector = Framework.Connection.DatabaseConnector;

        export class TableFelt {
            private felt: Sprite;
            private border: Sprite;

            private currentFeltColorIDCounter: number = 0;
            private feltColorsArray: InventoryVO[];
            
            constructor(felt:Sprite, border:Sprite) {
                this.felt = felt;
                this.border = border;

                // let tableMatrix = new PIXI.filters.ColorMatrixFilter();
                // this.felt.filters = [tableMatrix];
                // this.border.filters = [tableMatrix];
                // tableMatrix.brightness(1.6);

                // this.feltColorsArray = PockeySettings.SMALL_MISC_ARRAY;

                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_FELT, this.setTint.bind(this));

                // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
                this.setTint(PockeySettings.POOLTABLE_FELT_ID);
            }

            // private onInventoryItemUpdated():void
            // {
            //     if(this.feltColorsArray[this.currentFeltColorIDCounter].id != PockeySettings.POOLTABLE_FELT_ID)
            //     {
            //         this.setTint(PockeySettings.POOLTABLE_FELT_ID);
            //     }
            // }

            /*private updateCurrentTableFelt(): void {

                _.forEach(this.feltColorsArray, (item: InventoryVO, counter: number) => {
                    if (item.id == PockeySettings.PLAYER_COLOR_ID) {
                        this.currentFeltColorIDCounter = counter;
                        return true;
                    }
                });

                this.colorCircle.style.backgroundColor = this.parseColor(this.feltColorsArray[this.currentFeltColorIDCounter].color);
                // this.updateCookieOrDatabase();
            }*/

            // private updateCookieOrDatabase(): void {
            //     if (Settings.playerSignedIn) {
            //         let colorDbObject: DatabaseObject = {
            //             userID: PockeySettings.PLAYER_ID,
            //             column: "felt",
            //             value: PockeySettings.POOLTABLE_FELT_ID
            //         };
            //
            //         DatabaseConnector.updateUserData(colorDbObject, null);
            //     }
            //     // else {
            //     //     writeCookie("PockeyUserColorId", PockeySettings.PLAYER_COLOR_ID, 30);
            //     // }
            // }

            // private onPlayerSignedIn(): void {
            //     this.feltColorsArray = PockeySettings.LARGE_MISC_ARRAY;
            //
            //     console.log("table felt customizer player signed in");
            //     this.setTint(PockeySettings.POOLTABLE_FELT_ID);
            //
            //     // this.currentAvatarCounter = 0;
            //     // PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
            //     // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
            // }
            //
            // private onPlayerSignedOut(): void {
            //     this.feltColorsArray = PockeySettings.SMALL_MISC_ARRAY;
            //     if (this.currentFeltColorIDCounter > this.feltColorsArray.length - 1) {
            //         this.currentFeltColorIDCounter = 0;
            //         PockeySettings.POOLTABLE_FELT_ID = this.feltColorsArray[this.currentFeltColorIDCounter].id;
            //     }
            //
            //     this.setTint(PockeySettings.POOLTABLE_FELT_ID);
            //
            //     // this.updateCookieOrDatabase();
            // }


            private setTint(tintID:string):void
            {
                // console.log("salam in pizda");
                _.forEach(PockeySettings.LARGE_MISC_ARRAY, (item: InventoryVO, counter: number) => {
                    if (item.id == tintID) {
                        this.currentFeltColorIDCounter = counter;
                        return true;
                    }
                });

                this.felt.tint = PockeySettings.LARGE_MISC_ARRAY[this.currentFeltColorIDCounter].color;
                // this.border.tint = PockeySettings.LARGE_MISC_ARRAY[this.currentFeltColorIDCounter].color;
            }
        }
    }
}
