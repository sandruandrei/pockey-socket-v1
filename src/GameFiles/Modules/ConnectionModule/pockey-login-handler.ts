///<reference path="../../../Framework/AbstractModules/Connection/login-handler.ts"/>
///<reference path="../../../Framework/AbstractModules/Connection/database-connector.ts"/>
///<reference path="../../../Framework/Utils/cookie.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/14/2018
 */


namespace Pockey {
    export module Connection {
        import LoginHandler = Framework.Connection.LoginHandler;
        import readCookie = Framework.Utils.readCookie;
        import DatabaseConnector = Framework.Connection.DatabaseConnector;
        import writeCookie = Framework.Utils.writeCookie;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import Settings = Framework.Settings;

        export class PockeyLoginHandler extends LoginHandler {

            constructor() {
                super();

                SignalsManager.AddSignalCallback(PockeySignalTypes.FACEBOOK_SIGN_IN, this.onFbLogin.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.GOOGLE_SIGN_IN, this.onGoogleLogin.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onLogout.bind(this));
            }

            private onLogout(): void {
                console.log("pockey login handler onFbLogin");
                Settings.playerSignedIn = false;
                this.resetUserData();
                this.onCheckUserData();
            }

            private resetUserData(): void {
                let dataChanged: boolean = false;

                if (PockeySettings.PLAYER_ID != "guest") {
                    PockeySettings.PLAYER_ID = "guest";
                }

                if (PockeySettings.PLAYER_COLOR_ID != PockeySettings.SMALL_COLORS_ARRAY[0].id) {
                    PockeySettings.PLAYER_COLOR_ID = PockeySettings.SMALL_COLORS_ARRAY[0].id;
                    dataChanged = true;
                }
                if (PockeySettings.PLAYER_DECAL_ID != PockeySettings.SMALL_DECALS_ARRAY[0].id) {
                    PockeySettings.PLAYER_DECAL_ID = PockeySettings.SMALL_DECALS_ARRAY[0].id;
                    dataChanged = true;
                }
                if (PockeySettings.PLAYER_CUE_ID != PockeySettings.SMALL_CUES_ARRAY[0].id) {
                    PockeySettings.PLAYER_CUE_ID = PockeySettings.SMALL_CUES_ARRAY[0].id;
                    dataChanged = true;
                }
                if (PockeySettings.PLAYER_MISC_ID != PockeySettings.SMALL_MISC_ARRAY[0].id) {
                    PockeySettings.PLAYER_MISC_ID = PockeySettings.SMALL_MISC_ARRAY[0].id;
                    dataChanged = true;
                }
                if (PockeySettings.PLAYER_LEVEL != 1) {
                    PockeySettings.PLAYER_LEVEL = 1;
                }

                if (dataChanged) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                }
            }

            private onFbLogin(): void {
                console.log("pockey login handler onFbLogin");
                this.onCheckUserData();
            }

            private onGoogleLogin(): void {
                console.log("pockey login handler onGoogleLogin");
                this.onCheckUserData();
            }

            protected onCheckUserData(): void {
                console.log("on POCKEY LOGIN HANDLER: onCheckUserData");
                // PockeySettings.PLAYER_CUE_ID = PockeySettings.SMALL_CUES_ARRAY[0].id;

                let pockeyID: string = readCookie('PockeyID');
                console.log("intra la get cookie");

                if (pockeyID != "") {
                    if (pockeyID.includes("@") && pockeyID.includes(".")) {
                        DatabaseConnector.checkDatabaseUser(pockeyID, this.playerInfoReceived.bind(this));
                        console.log("database query for user");
                    }
                    else if (pockeyID == "guest") {
                        let playerData = {};

                        if (readCookie('PockeyUserColorId') != "") {
                            // PockeySettings.PLAYER_COLOR_ID = parseInt(readCookie('PockeyUserColorId'));
                            playerData["color"] = readCookie('PockeyUserColorId');
                        }

                        if (readCookie('PockeyNickname') != "") {
                            // PockeySettings.PLAYER_COLOR_ID = parseInt(readCookie('PockeyUserColorId'));
                            playerData["nickname"] = readCookie('PockeyNickname');
                        }

                        console.log("guest on read cookie");

                        this.playerInfoReceived(playerData as JSON);
                    }
                }
                else {
                    console.log("first time play guest");

                    let playerData = {};
                    writeCookie("PockeyID", PockeySettings.PLAYER_ID, 30);
                    writeCookie("PockeyUserColorId", PockeySettings.PLAYER_COLOR_ID, 30);
                    writeCookie("PockeyNickname", PockeySettings.PLAYER_NICKNAME, 30);

                    // playerData["color"] = readCookie('PockeyUserColorId');
                    // playerData["nickname"] = readCookie('PockeyNickname');

                    this.playerInfoReceived(playerData as JSON);
                }

                // SignalsManager.DispatchSignal(SignalsType.USER_DATA_CHECKED);

                // super.onCheckUserData();
            }


            protected playerInfoReceived(usernameData: JSON): void {
                console.log("%c usernameData: ", "background: #ff9900; color: black; font-weight:bold; ");
                console.log(usernameData);

                let inventoryItemUpdated: boolean = false;

                if (!_.isUndefined(usernameData["avatar"]) && !_.isNull(usernameData["avatar"])) {
                    PockeySettings.PLAYER_AVATAR_ID = usernameData["avatar"];
                    console.log("%c PLAYER_AVATAR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }

                if (!_.isUndefined(usernameData["color"]) && !_.isNull(usernameData["color"])) {
                    PockeySettings.PLAYER_COLOR_ID = usernameData["color"];
                    console.log("%c PLAYER_COLOR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;

                }

                if (!_.isUndefined(usernameData["decal"]) && !_.isNull(usernameData["decal"])) {
                    PockeySettings.PLAYER_DECAL_ID = usernameData["decal"];
                    console.log("%c PLAYER_DECAL_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;

                }

                if (!_.isUndefined(usernameData["player_level"]) && !_.isNull(usernameData["player_level"])) {
                    PockeySettings.PLAYER_LEVEL = usernameData["player_level"];
                    console.log("%c PLAYER_LEVEL updated from db", "background: #ff9900; color: black; font-weight:bold;");
                }

                if (!_.isUndefined(usernameData["stick"]) && !_.isNull(usernameData["stick"])) {
                    PockeySettings.PLAYER_CUE_ID = usernameData["stick"];
                    console.log("%c PLAYER_CUE_ID" +
                        "                    inventoryItemUpdated = true;\n updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                    inventoryItemUpdated = true;
                }

                if (!_.isUndefined(usernameData["total_points"]) && !_.isNull(usernameData["total_points"])) {
                    PockeySettings.PLAYER_TOTAL_POINTS = usernameData["total_points"];
                    console.log("%c PLAYER_TOTAL_POINTS updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                }

                if (!_.isUndefined(usernameData["nickname"]) && !_.isNull(usernameData["nickname"])) {
                    PockeySettings.PLAYER_NICKNAME = usernameData["nickname"];
                    console.log("%c PLAYER_NICKNAME updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                    inventoryItemUpdated = true;
                }

                if (!_.isUndefined(usernameData["user_id"]) && !_.isNull(usernameData["user_id"])) {
                    PockeySettings.PLAYER_ID = usernameData["user_id"];
                    console.log("%c USER_ID updated from db", "background: #ff9900; color: black; font-weight:bold; ");

                    if (!_.isUndefined(usernameData["first_login_date"]) && !_.isNull(usernameData["first_login_date"])) {
                        if (!Settings.playerSignedIn) {
                            Settings.playerSignedIn = true;
                            SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
                            console.log("%c PLAYER SIGNED IN", "background: #ff8811; color: black; font-weight:bold; ");
                        }
                    }
                }

                if (inventoryItemUpdated) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                }

                super.onCheckUserData();
                // console.log("%c usernameData^^", "background: #ff9900; color: black; font-weight:bold; ");

                // SignalsManager.DispatchSignal(SignalsType.USER_DATA_CHECKED);
                // super.onCheckUserData();
            }
        }
    }
}
