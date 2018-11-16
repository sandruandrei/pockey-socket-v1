///<reference path="../../../../../Framework/Utils/cookie.ts"/>
///<reference path="../../../../../Framework/AbstractModules/Connection/database-connector.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/29/2018
 */


namespace Pockey {
    export module UserInterface {
        import Settings = Framework.Settings;
        import writeCookie = Framework.Utils.writeCookie;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import DatabaseConnector = Framework.Connection.DatabaseConnector;
        import DatabaseObject = Framework.Connection.DatabaseObject;

        export class PlayerAvatarCustomizer {

            private previousAvatarButton: HTMLDivElement;
            private nextAvatarButton: HTMLDivElement;
            private avatarHolder: HTMLDivElement;
            private currentAvatarCounter: number = 0;
            private avatarsArray: InventoryVO[];

            constructor() {
                if (Settings.playerSignedIn) {
                    this.avatarsArray = PockeySettings.LARGE_AVATARS_ARRAY;
                }
                else {
                    this.avatarsArray = PockeySettings.SMALL_AVATARS_ARRAY;
                }

                if (PockeySettings.PLAYER_AVATAR_ID) {
                    _.forEach(this.avatarsArray, (avatar: InventoryVO, counter: number) => {
                        if (avatar.id == PockeySettings.PLAYER_AVATAR_ID) {
                            this.currentAvatarCounter = counter;
                        }
                    });
                }

                this.avatarHolder = document.getElementById("AvatarImage") as HTMLDivElement;

                PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;


                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";

                //todo writeid
                this.previousAvatarButton = document.getElementById("PreviousAvatarButton") as HTMLDivElement;

                this.nextAvatarButton = document.getElementById("NextAvatarButton") as HTMLDivElement;
                this.previousAvatarButton.onclick = () => {

                    this.onPreviousButtonClicked();
                };
                this.nextAvatarButton.onclick = () => {
                    this.onNextButtonClicked();

                };
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }

            private onInventoryItemUpdated():void
            {
                if(this.avatarsArray[this.currentAvatarCounter].id != PockeySettings.PLAYER_AVATAR_ID)
                {
                    _.forEach(this.avatarsArray, (item: InventoryVO, counter: number) => {
                        if (item.id == PockeySettings.PLAYER_AVATAR_ID) {
                            this.currentAvatarCounter = counter;
                            return true;
                        }
                    });

                    this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";

                    // this.updateCookieOrDatabase();
                }
            }

            private onPreviousButtonClicked(): void {
                this.currentAvatarCounter--;

                if (this.currentAvatarCounter < 0) {
                    this.currentAvatarCounter = this.avatarsArray.length - 1;
                }

                if (this.avatarsArray[this.currentAvatarCounter].level > PockeySettings.PLAYER_LEVEL) {
                    this.onPreviousButtonClicked();
                    return;
                }

                PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;

                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";

                this.updateCookieOrDatabase();
            }

            private onNextButtonClicked(): void {
                this.currentAvatarCounter++;
                if (this.currentAvatarCounter > this.avatarsArray.length - 1) {
                    this.currentAvatarCounter = 0;
                }

                if (this.avatarsArray[this.currentAvatarCounter].level > PockeySettings.PLAYER_LEVEL) {
                    this.onNextButtonClicked();
                    return;
                }

                PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;

                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";

                this.updateCookieOrDatabase();
                // writeCookie("PockeyUserAvatarId", PockeySettings.PLAYER_AVATAR_ID, 30);

                console.log("this.currentAvatarCounter: " + this.currentAvatarCounter);
            }

            private onPlayerSignedOut(): void {
                this.avatarsArray = PockeySettings.SMALL_AVATARS_ARRAY;
                this.currentAvatarCounter = 0;
                PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.updateCookieOrDatabase();
            }

            private onPlayerSignedIn(): void {
                this.avatarsArray = PockeySettings.LARGE_AVATARS_ARRAY;

                // this.currentAvatarCounter = 0;
                // PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
                _.forEach(this.avatarsArray, (item: InventoryVO, counter: number) => {
                    if (item.id == PockeySettings.PLAYER_AVATAR_ID) {
                        this.currentAvatarCounter = counter;
                        return true;
                    }
                });

                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
            }

           /* private updateCurrentColor(): void {


                // this.updateCookieOrDatabase();
            }*/
            private updateCookieOrDatabase(): void {
                if (Settings.playerSignedIn) {
                    let colorDbObject: DatabaseObject = {
                        userID: PockeySettings.PLAYER_ID,
                        column: "avatar",
                        value: PockeySettings.PLAYER_AVATAR_ID
                    };

                    DatabaseConnector.updateUserData(colorDbObject, null);
                }
                else {
                    writeCookie("PockeyUserAvatarId", PockeySettings.PLAYER_AVATAR_ID, 30);
                }

                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
            }
        }
    }
}
