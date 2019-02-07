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

namespace Framework {
    export module UserInterface {
        export class AbstractScreen {
            protected div: HTMLDivElement;

            constructor(){};

            public show(): void {
                this.div.style.display = "flex";
            };

            public hide(): void {
                this.div.style.display = "none";
            };

            public updateText(text:string):void{

            }
        }
    }
}
