///<reference path="../../../../Framework/AbstractModules/UserInterface/abstract-screen.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/4/2019
 */


namespace Pockey {
    export module UserInterface {
        import AbstractScreen = Framework.UserInterface.AbstractScreen;

        export class RoundCompleteScreen extends AbstractScreen {
            protected div: HTMLDivElement;
            private textDiv: HTMLDivElement = document.getElementById("RoundCompleteText") as HTMLDivElement;

            private leftPlayerData: HTMLDivElement;
            private rightPlayerData: HTMLDivElement;

            constructor() {
                super();
                this.div = document.getElementById("RoundCompleteScreen") as HTMLDivElement;

            }

            public updateText(text: string): void {
                // console.log("la opp screen timeru: " + text);
                this.textDiv.innerText = "get ready for round two in " + text;
            }

            // public show(): void {
            //     console.log("intra la round two");
            //     this.div.style.display = "flex";
            // }
            //
            // public hide(): void {
            //     this.div.style.display = "none";
            // }

            public updateLeftPlayerData(): void {

            }

            public updateRighttPlayerData(): void {

            }

        }
    }
}
