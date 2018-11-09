///<reference path="../../../../../Framework/Utils/cookie.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/30/2018
 */


namespace Pockey {
    export module UserInterface {
        import writeCookie = Framework.Utils.writeCookie;
        import removeCookie = Framework.Utils.removeCookie;
        import Settings = Framework.Settings;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class LoginHandler {
            private startBtn: HTMLDivElement;
            private googleSignIn: HTMLDivElement;
            private facebookSignIn: HTMLDivElement;
            private signOutBtn: HTMLDivElement;
            private inputText: HTMLTextAreaElement;
            private correctText: HTMLDivElement;

            constructor() {

                this.correctText = document.getElementById("CorrectText") as HTMLDivElement;
                this.handleInputText();
                this.handleSignOutButton();
                this.handleStartButton();
                this.handleFacebookButton();
                this.handleGoogleButton();
                this.checkForPlayerSignIn();
            }

            private handleInputText(): void {
                this.inputText = document.getElementById("InputText") as HTMLTextAreaElement;
                if (PockeySettings.PLAYER_NAME != "") {
                    this.inputText.value = PockeySettings.PLAYER_NAME;
                }
                this.inputText.addEventListener('input', this.typeHandler.bind(this));
                this.inputText.addEventListener('propertychange', this.typeHandler.bind(this)) // for IE8
                this.inputText.addEventListener('change', this.typeHandler.bind(this)) // fallback for FireFox
            }

            private typeHandler(): void {
                // console.log(this.inputText.value);
                if (this.inputText.value != "") {
                    this.correctText.style.visibility = "hidden";
                }
            }

            private handleSignOutButton(): void {
                this.signOutBtn = document.getElementById("LogoutButton") as HTMLDivElement;

                this.signOutBtn.onclick = () => {
                    console.log("intra la click");
                    let pockeyEvent = new Event('PockeyGoogleSignOutEvent');
                    this.signOutBtn.dispatchEvent(pockeyEvent);
                    removeCookie("PockeyEmail");
                    removeCookie("PockeyFacebookID");
                    removeCookie("PockeyUserColorId");
                    removeCookie("PockeyUserAvatarId");

                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
                };

                this.signOutBtn.addEventListener('PockeyGoogleSignedOutEvent', (e: CustomEvent) => {
                    this.showSignInButtons();
                });

                this.signOutBtn.addEventListener('PockeyFacebookSignedOutEvent', (e: CustomEvent) => {
                    this.showSignInButtons();
                });

            }

            private showSignInButtons(): void {
                this.googleSignIn.style.display = "block";
                this.facebookSignIn.style.display = "block";
                this.signOutBtn.style.display = "none";

                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "none";

            }

            private hideSignInButtons(): void {
                this.googleSignIn.style.display = "none";
                this.facebookSignIn.style.display = "none";
                this.signOutBtn.style.display = "block";
                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "flex";
            }

            private handleStartButton(): void {
                this.startBtn = document.getElementById("StartGameButtonHolder") as HTMLDivElement;
                this.startBtn.onclick = () => {
                    if (this.inputText.value == "") {
                        this.correctText.style.visibility = "visible";

                        TweenMax.to(this.inputText, .2, {css: {borderColor: "#e92c5a"}, yoyo: true, repeat: 3});
                    }
                    else {
                        SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                        writeCookie('PockeyID', this.inputText.value, 30);
                    }

                };
            }

            private handleGoogleButton(): void {
                this.googleSignIn = document.getElementById("GoogleSignInButtonHolder") as HTMLDivElement;

                this.googleSignIn.addEventListener('PockeyGoogleSignInEvent', (e: CustomEvent) => {
                    // e.target matches elem
                    writeCookie('PockeyEmail', e.detail.toString(), 30);

                    this.hideSignInButtons();

                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);

                    // this.googleSign
                }, false);
            }

            private handleFacebookButton(): void {
                this.facebookSignIn = document.getElementById("FacebookSignInButtonHolder") as HTMLDivElement;

                this.facebookSignIn.addEventListener("PockeyFacebookSignedIn", (e: CustomEvent) => {
                    if (!_.isNull(e.detail["email"]) && !_.isUndefined(e.detail["email"])) {
                        writeCookie('PockeyEmail', e.detail["email"].toString(), 30);
                    }
                    if (!_.isNull(e.detail["id"]) && !_.isUndefined(e.detail["id"])) {
                        writeCookie('PockeyFacebookID', e.detail["id"].toString(), 30);
                    }
                    // console.log("s-a semnat cu fb-ul: " + e.detail);

                    // writeCookie('PockeyEmail', e.detail.toString(), 30);

                    this.hideSignInButtons();
                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);

                });
            }

            private checkForPlayerSignIn(): void {
                if (Settings.playerSignedIn) {
                    this.hideSignInButtons();
                }
            }
        }
    }
}
