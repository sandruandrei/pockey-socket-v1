///<reference path="../../Signals/signals-manager.ts"/>
///<reference path="../../../PockeyEntryPoint/pockey-settings.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/9/2018
 */


namespace Framework {
    export module Connection {


        export interface DatabaseObject {
            userID: string,
            column: string,
            value: any,
            type?:string
        }

        export class DatabaseConnector {

            private static checkUserRequest: XMLHttpRequest;
            private static _socketClient: SocketClient;

            constructor() {

                /* let postString: string =
                     "email=" + this.userEmail +
                     "&image=" + this.currentImage +
                     "&rating=" + (e.currentTarget as HTMLButtonElement).value;

                 this.checkUserRequest = new XMLHttpRequest();
                 this.checkUserRequest.addEventListener("load", this.onPostLoad.bind(this));
                 this.checkUserRequest.open("POST", "includes/postData.php", true);

                 this.checkUserRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                 this.checkUserRequest.send(postString);*/
                // SignalsManager.AddSignalCallback(PockeySignalTypes.GET_PLAYER_INFO, this.getPlayerInfo.bind(this));

            }

            public static set socketClient(value: Framework.Connection.SocketClient) {
                this._socketClient = value;
            }

            public static checkDatabaseUser(userID: string, callback: Function): void {
                this._socketClient.getUserFromDataBase(userID, callback);
            }

            public static updateUserData(dbObject: DatabaseObject, callback: Function): void {
                console.log("intra la database connector updateUserData");

                let cb:Function = (callback != null) ? callback : this.userDataUpdated.bind(this);
                this._socketClient.updateUserData(dbObject, cb);
            }

            private static userDataUpdated(data):void
            {
                console.log("DatabaseConnector userDataUpdated");
            }

            private static checkUserIDRequestListener(e: Event): void {
                /* console.log("this.checkUserRequest.responseText: " + this.checkUserRequest.responseText);
                 // if (this.checkUserRequest.responseText != 'false' && this.checkUserRequest.responseText != '') {
                 //     // this.seen = _.split(this.checkUserRequest.responseText, ',').map(Number);
                 // }

                 this.checkUserRequest.removeEventListener("load", this.checkUserIDRequestListener.bind(this));*/
            }
        }
    }
}
