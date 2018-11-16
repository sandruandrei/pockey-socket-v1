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
 *  Created by Sandru Andrei on 10/30/2018
 */


namespace Pockey {
    export module UserInterface {
        import writeCookie = Framework.Utils.writeCookie;
        import removeCookie = Framework.Utils.removeCookie;
        import Settings = Framework.Settings;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import DatabaseObject = Framework.Connection.DatabaseObject;
        import DatabaseConnector = Framework.Connection.DatabaseConnector;

        export class LoginElements {
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

                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }

            private onInventoryItemUpdated(): void {
                if(PockeySettings.PLAYER_NICKNAME != "" && this.inputText.value != PockeySettings.PLAYER_NICKNAME)
                {
                    this.inputText.value = PockeySettings.PLAYER_NICKNAME;
                }
            }

            private onPlayerSignedIn(): void {
                this.hideSignInButtons();
                if(this.inputText.value != PockeySettings.PLAYER_NICKNAME && PockeySettings.PLAYER_NICKNAME != "")
                {
                    this.inputText.value = PockeySettings.PLAYER_NICKNAME;
                }
            }

            /*private onPlayerSignedOut(): void {
                this.hideSignInButtons();
                if(this.inputText.value != PockeySettings.PLAYER_NICKNAME)
                {
                    this.inputText.value = PockeySettings.PLAYER_NICKNAME;
                }
            }*/

            private handleInputText(): void {
                this.inputText = document.getElementById("InputText") as HTMLTextAreaElement;
                if (PockeySettings.PLAYER_NICKNAME != "") {
                    this.inputText.value = PockeySettings.PLAYER_NICKNAME;
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
                    PockeySettings.PLAYER_ID = "guest";
                    removeCookie("PockeyID");
                    // removeCookie("PockeyFacebookID");
                    removeCookie("PockeyUserColorId");
                    removeCookie("PockeyUserAvatarId");

                    this.showSignInButtons();

                    /*if(this.inputText.value != PockeySettings.PLAYER_NICKNAME)
                    {

                    }*/
                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
                };

                /* this.signOutBtn.addEventListener('PockeyGoogleSignedOutEvent', (e: CustomEvent) => {
                     this.showSignInButtons();
                 });

                 this.signOutBtn.addEventListener('PockeyFacebookSignedOutEvent', (e: CustomEvent) => {
                     this.showSignInButtons();
                 });*/

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

                        TweenMax.killTweensOf(this.inputText);
                        this.inputText.style.borderColor = "";
                        TweenMax.to(this.inputText, .2, {css: {borderColor: "#e92c5a"}, yoyo: true, repeat: 3});
                    }
                    else {

                        if (Settings.playerSignedIn) {
                            PockeySettings.PLAYER_NICKNAME = this.inputText.value;
                            let nicknameDb: DatabaseObject = {
                                userID: PockeySettings.PLAYER_ID,
                                column: "nickname",
                                value: PockeySettings.PLAYER_NICKNAME
                            };

                            DatabaseConnector.updateUserData(nicknameDb, null);
                        }
                        else {
                            writeCookie('PockeyNickname', this.inputText.value, 30);
                        }

                        SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);

                    }
                };
            }

            private handleGoogleButton(): void {
                this.googleSignIn = document.getElementById("GoogleSignInButtonHolder") as HTMLDivElement;

                this.googleSignIn.addEventListener('PockeyGoogleSignInEvent', (e: CustomEvent) => {
                    // e.target matches elem
                    console.log("%c login handler: google logged in", "background:pink");
                    writeCookie('PockeyID', e.detail.toString(), 30);

                    // this.hideSignInButtons();

                    SignalsManager.DispatchSignal(PockeySignalTypes.GOOGLE_SIGN_IN);

                    // this.googleSign
                }, false);
            }

            private handleFacebookButton(): void {
                this.facebookSignIn = document.getElementById("FacebookSignInButtonHolder") as HTMLDivElement;

                this.facebookSignIn.addEventListener("PockeyFacebookSignedIn", (e: CustomEvent) => {
                    if (!_.isNull(e.detail["email"]) && !_.isUndefined(e.detail["email"])) {
                        writeCookie('PockeyID', e.detail["email"].toString(), 30);
                    }

                    console.log("%c login handler: google logged in", "background:pink");

                    /*if (!_.isNull(e.detail["id"]) && !_.isUndefined(e.detail["id"])) {
                        writeCookie('PockeyFacebookID', e.detail["id"].toString(), 30);
                    }*/
                    // console.log("s-a semnat cu fb-ul: " + e.detail);

                    // writeCookie('PockeyEmail', e.detail.toString(), 30);


                    SignalsManager.DispatchSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);

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
