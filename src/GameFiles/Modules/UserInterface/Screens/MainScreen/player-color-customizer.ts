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

        export class PlayerColorCustomizer {

            private previousColorButton: HTMLDivElement;
            private nextColorButton: HTMLDivElement;
            private colorCircle: HTMLDivElement;
            private currentColorCounter: number = 0;
            private colorsArray: number[];

            constructor() {

                if (Settings.playerSignedIn) {
                    this.colorsArray = PockeySettings.LARGE_COLORS_ARRAY;
                }
                else {
                    this.colorsArray = PockeySettings.SMALL_COLORS_ARRAY;
                }

                this.colorCircle = document.getElementById("PlayerColorCircle") as HTMLDivElement;

                if (PockeySettings.PLAYER_COLOR_ID) {
                    this.currentColorCounter = PockeySettings.PLAYER_COLOR_ID;
                    PockeySettings.PLAYER_COLOR = this.colorsArray[PockeySettings.PLAYER_COLOR_ID];
                }

                PockeySettings.PLAYER_COLOR_ID = this.currentColorCounter;
                writeCookie("PockeyUserColorId", PockeySettings.PLAYER_COLOR_ID, 30);


                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter]);

                this.previousColorButton = document.getElementById("PreviousColorButton") as HTMLDivElement;
                this.nextColorButton = document.getElementById("NextColorButton") as HTMLDivElement;

                this.previousColorButton.onclick = () => {

                    this.currentColorCounter--;
                    if (this.currentColorCounter < 0) {
                        this.currentColorCounter = this.colorsArray.length - 1;
                    }
                    PockeySettings.PLAYER_COLOR_ID = this.currentColorCounter;
                    this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter]);
                    writeCookie("PockeyUserColorId", PockeySettings.PLAYER_COLOR_ID, 30);
                };
                this.nextColorButton.onclick = () => {

                    this.currentColorCounter++;
                    if (this.currentColorCounter > this.colorsArray.length - 1) {
                        this.currentColorCounter = 0;
                    }
                    PockeySettings.PLAYER_COLOR_ID = this.currentColorCounter;
                    this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter]);
                    writeCookie("PockeyUserColorId", PockeySettings.PLAYER_COLOR_ID, 30);

                };

                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this))
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this))
            }

            private onPlayerSignedIn(): void {
                this.colorsArray = PockeySettings.LARGE_COLORS_ARRAY;
                // this.currentAvatarCounter = 0;
                // PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
                // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
            }

            private onPlayerSignedOut(): void {
                this.colorsArray = PockeySettings.SMALL_COLORS_ARRAY;
                if (PockeySettings.PLAYER_COLOR_ID > this.colorsArray.length - 1) {
                    this.currentColorCounter = 0;
                    PockeySettings.PLAYER_COLOR_ID = this.currentColorCounter;
                }

                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter]);
            }

            private parseColor(color) {

                if (typeof color === 'number') {
                    //make sure our hexadecimal number is padded out
                    color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
                }

                return color;

            };
        }
    }
}
