///<reference path="../../../../../Framework/Utils/cookie.ts"/>
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

        export class PlayerAvatarCustomizer {

            private previousAvatarButton: HTMLDivElement;
            private nextAvatarButton: HTMLDivElement;
            private avatarHolder: HTMLDivElement;
            private currentAvatarCounter: number = 0;
            private avatarsArray: string[];

            constructor() {

                if (Settings.playerSignedIn) {
                    this.avatarsArray = PockeySettings.LARGE_AVATARS_ARRAY;
                }
                else {
                    this.avatarsArray = PockeySettings.SMALL_AVATARS_ARRAY;
                }

                this.avatarHolder = document.getElementById("AvatarImage") as HTMLDivElement;
                // this.colorCircle = document.getElementById("PlayerColorCircle") as HTMLDivElement;

                if (PockeySettings.PLAYER_AVATAR_ID) {
                    this.currentAvatarCounter = PockeySettings.PLAYER_AVATAR_ID;
                    // PockeySettings.PLA = this.avatarsArray[PockeySettings.PLAYER_COLOR_ID];
                }

                PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
                writeCookie("PockeyUserAvatarId", PockeySettings.PLAYER_AVATAR_ID, 30);

                // this.colorCircle.style.backgroundColor = this.parseColor(this.avatarsArray[this.currentAvatarCounter]);
                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter] + ")";

                //todo writeid
                this.previousAvatarButton = document.getElementById("PreviousAvatarButton") as HTMLDivElement;
                this.nextAvatarButton = document.getElementById("NextAvatarButton") as HTMLDivElement;

                this.previousAvatarButton.onclick = () => {

                    this.currentAvatarCounter--;
                    if (this.currentAvatarCounter < 0) {
                        this.currentAvatarCounter = this.avatarsArray.length - 1;

                    }
                    PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
                    // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
                    // this.avatarHolder.style.backgroundColor = "#1A4157";
                    this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter] + ")";

                    writeCookie("PockeyUserAvatarId", PockeySettings.PLAYER_AVATAR_ID, 30);
                };
                this.nextAvatarButton.onclick = () => {

                    this.currentAvatarCounter++;
                    if (this.currentAvatarCounter > this.avatarsArray.length - 1) {
                        this.currentAvatarCounter = 0;
                    }
                    PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;

                    this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter] + ")";

                    // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
                    // this.avatarHolder.style.backgroundColor = "#1A4157";
                    writeCookie("PockeyUserAvatarId", PockeySettings.PLAYER_AVATAR_ID, 30);

                    console.log("this.currentAvatarCounter: " + this.currentAvatarCounter);

                };

                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this))
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this))
            }

            private onPlayerSignedOut(): void {
                this.avatarsArray = PockeySettings.SMALL_AVATARS_ARRAY;
                this.currentAvatarCounter = 0;
                PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
                this.avatarHolder.style.background = "center / contain no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter] + ")";

            }

            private onPlayerSignedIn(): void {
                this.avatarsArray = PockeySettings.LARGE_AVATARS_ARRAY;
                // this.currentAvatarCounter = 0;
                // PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
                // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
            }
        }
    }
}
