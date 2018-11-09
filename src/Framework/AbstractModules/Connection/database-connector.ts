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
        export class DatabaseConnector {

            private static checkUserRequest:XMLHttpRequest;

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

            }

            public static SaveToDatabase(dataToSend:any):void
            {
                this.checkUserRequest = new XMLHttpRequest();
                this.checkUserRequest.addEventListener("load", this.onPostLoad.bind(this));
                this.checkUserRequest.open("POST", "includes/postData.php", true);

                this.checkUserRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                this.checkUserRequest.send(dataToSend);
            }

            private static onPostLoad():void
            {
                // console.log('onPostLoad: ' + this.checkUserRequest.responseText);
            }


            public static checkDatabaseUser(userID:string, listener:EventListener): void {
                this.checkUserRequest = new XMLHttpRequest(); //New request object
                this.checkUserRequest.addEventListener("load", listener);
                this.checkUserRequest.open("POST", "includes/getData.php", true);
                this.checkUserRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                this.checkUserRequest.send('idToCheck=' + userID);
            }

            private static checkUserIDRequestListener(e: Event): void {
                if (this.checkUserRequest.responseText != 'false' && this.checkUserRequest.responseText != '') {
                    // this.seen = _.split(this.checkUserRequest.responseText, ',').map(Number);
                }

                this.checkUserRequest.removeEventListener("load", this.checkUserIDRequestListener.bind(this));
            }
        }
    }
}
