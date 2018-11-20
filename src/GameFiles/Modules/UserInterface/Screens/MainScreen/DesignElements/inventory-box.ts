/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/1/2018
 */

namespace Pockey {
    export module UserInterface {
        export class InventoryBox {
            public imageDiv: HTMLDivElement;
            public iconDiv: HTMLDivElement;
            // public id: string;
            public occupied: boolean = false;
            // public category: string = "";
            // private icon: string = "";
            public clicked: boolean = false;
            public inventoryVO:InventoryVO;

            private borderAnimation: TweenMax;

            constructor(imgDiv: HTMLDivElement, clickFunction: Function) {
                this.imageDiv = imgDiv;
                this.iconDiv = this.imageDiv.querySelector(".inventoryItemBoxBackground") as HTMLDivElement;

                this.imageDiv.onmouseover = () => {
                    if (this.occupied) {
                        this.imageDiv.style.cursor = "pointer";
                        this.imageDiv.style.borderColor = "white";
                    }
                    else {
                        this.imageDiv.style.cursor = "";
                        this.imageDiv.style.borderColor = "";
                    }
                };

                this.imageDiv.onmouseout = () => {
                    if (!this.clicked)
                        this.imageDiv.style.borderColor = "";
                };

                this.imageDiv.onclick = () => {

                    this.clicked = !this.clicked;

                    if (this.clicked) {
                        this.imageDiv.style.borderColor = "white";
                        this.imageDiv.style.borderWidth = "4px";
                    }

                    if (this.occupied)
                        clickFunction(this.inventoryVO);
                }
            }

            public click():void
            {
                this.clicked = true;
                this.imageDiv.style.borderColor = "white";
                this.imageDiv.style.borderWidth = "4px";
            }

            public unClick():void
            {
                this.stopAnimation();
                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
                this.clicked = false;
            }

            public addVO(inventoryVO: InventoryVO): void {
                this.clearVO();

                this.occupied = true;
                this.inventoryVO = inventoryVO;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url(" + this.inventoryVO.icon + ")";
                // this.category = inventoryVO.category;
                // this.icon = inventoryVO.icon;
            }

            public clearVO(): void {
                this.stopAnimation();
                this.unClick();

                // this.icon = "";
                this.occupied = false;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url('')";
                this.inventoryVO = null;

                (this.iconDiv.querySelector(".inventoryItemBoxSelected") as HTMLDivElement).style.display = "";
                (this.iconDiv.querySelector(".inventoryItemBoxLocked") as HTMLDivElement).style.display = "";
                // this.category = "";
            }

            private stopAnimation(): void {
                if (this.borderAnimation && this.borderAnimation.isActive()) {
                    this.borderAnimation.kill();
                    this.borderAnimation = null;
                }

                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
            }

            public animate(): void {

                this.stopAnimation();

                this.borderAnimation = TweenMax.to(this.imageDiv, 0.3, {
                    css: {borderColor: "white", borderWidth: "5px"},
                    yoyo: true,
                    repeat: 1
                });
            }
        }
    }
}
