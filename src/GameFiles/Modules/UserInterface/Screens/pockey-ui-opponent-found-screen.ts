///<reference path="../../../../Framework/AbstractModules/UserInterface/abstract-screen.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/5/2019
 */


namespace Pockey {
    export module UserInterface {
        import AbstractScreen = Framework.UserInterface.AbstractScreen;

        export class PockeyUiOpponentFoundScreen extends AbstractScreen{
            private roundBeginsText: HTMLDivElement;
            private avatarDiv: HTMLDivElement;
            private nameDiv: HTMLDivElement;

            constructor() {
                super();

                this.div = document.getElementById("PlayerFoundScreen") as HTMLDivElement;
                this.avatarDiv = document.getElementById("OpponentAvatarImage") as HTMLDivElement;
                this.nameDiv = document.getElementById("PlayerFoundName") as HTMLDivElement;
                this.roundBeginsText = document.getElementById("RoundOneStartsText") as HTMLDivElement;
            }

            // public show(): void {
            //     this.div.style.display = "flex";
            // }
            //
            // public hide(): void {
            //     this.div.style.display = "none";
            // }


            public hide(): void {
                super.hide();
                // console.log("intra la hide on found screen");
            }

            public updateText(text: string): void {
                // console.log("la opp screen timeru: " + text);
                this.roundBeginsText.innerText = "first round starts in " + text;
            }

            public updateAvatar(avatarID: string): void {

                let avatarPath: string = "";

                _.forEach(PockeySettings.LARGE_AVATARS_ARRAY, (avatarVO: InventoryVO) => {
                    if (avatarVO.id == avatarID) {
                        avatarPath = avatarVO.icon;
                        return true;
                    }
                });

                this.avatarDiv.style.background = "center / contain no-repeat #1a4157 url(" + avatarPath + ")";
            }

            public updateOpponentName(): void {
                this.nameDiv.innerText = PockeySettings.OPPONENT_NICKNAME;
            }
        }
    }
}
