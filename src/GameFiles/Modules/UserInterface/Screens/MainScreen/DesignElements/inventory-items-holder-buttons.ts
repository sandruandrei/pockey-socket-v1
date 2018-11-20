/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/8/2018
 */

namespace Pockey {
    export module UserInterface {
        export class InventoryItemsHolderButton {
            public button: HTMLDivElement;
            private bg: HTMLDivElement;
            private iconBg: any;

            constructor(btn: HTMLDivElement) {
                this.button = btn;

                let iconBgID: string = (this.button.getElementsByClassName("buttonArrow")[0] as HTMLDivElement).id;
                this.iconBg = document.getElementById(iconBgID);
                let iconStyle = this.iconBg.currentStyle || window.getComputedStyle(this.iconBg);

                // let initialBackground:string = iconBg.style.background;
                let mouseOverBackground: string = iconStyle.background.toString().replace(".svg", "-reg.svg");

                this.bg = this.button.getElementsByClassName("normalButtonBackground")[0] as HTMLDivElement;

                this.button.setAttribute("isActive", "true");
                this.button.onmouseover = () => {
                    if (this.button.getAttribute("isActive") == "true") {
                        this.bg.style.background = "white";
                        // bg.style.color = "#2d899d";
                        this.iconBg.style.background = mouseOverBackground;
                        /* cursor: pointer; */
                    }
                    else {
                        this.bg.style.background = "";
                        // bg.style.color = "";
                        this.iconBg.style.background = "";
                        /* cursor: pointer; */
                    }
                };

                this.button.onmouseout = () => {
                    // if (arrow.getAttribute("isActive") == "true") {
                    this.bg.style.background = "";
                    // bg.style.color = "#";
                    this.iconBg.style.background = "";

                    /* cursor: pointer; */
                    // }
                };

                this.disable();
            }

            public disable(): void {
                this.button.style.opacity = "0.5";
                this.button.style.cursor = "default";
                this.button.setAttribute("isActive", "false");
                this.bg.style.background = "";
                this.iconBg.style.background = "";

            }

            public enable(): void {
                this.button.style.opacity = "";
                this.button.style.cursor = "";
                this.button.setAttribute("isActive", "true");
            }

            /////

            /////

        }
    }
}
