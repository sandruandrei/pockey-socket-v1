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
        import Settings = Framework.Settings;

        export class InventoryButton {

            private button: HTMLDivElement;
            private clicked: boolean;
            public id: string;
            public onShowCategoryCallback: Function;
            public onHideCategoryCallback: Function;

            public category: string;
            private categoryElements: any[];

            constructor(btnDiv: HTMLDivElement, showCategoryCallback: Function, hideCategoryCallback: Function) {
                this.button = btnDiv;
                this.id = this.button.id;
                this.onShowCategoryCallback = showCategoryCallback;
                this.onHideCategoryCallback = hideCategoryCallback;
                this.category = this.id.replace("Inventory", "");
                console.log("categoryElements name: " + this.category);
                let inventoryButtonLogo = this.button.querySelector('.inventoryButtonLogo') as HTMLDivElement;

                if (Settings.playerSignedIn) {
                    this.categoryElements = PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
                else {
                    this.categoryElements = PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }

                this.clicked = false;

                this.button.onclick = () => {
                    this.clicked = !this.clicked;

                    if (this.clicked) {

                        /////////////////
                        inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-white.png)";
                        // this.button.style.borderColor = "";
                        this.button.style.color = "white";

                        this.onShowCategoryCallback(this.categoryElements);
                    }
                    else {

                        ////////////////
                        inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/plus-sign-white.png)";
                        // this.button.style.borderColor = "";
                        this.button.style.color = "";

                        this.onHideCategoryCallback(this.categoryElements);
                    }
                };

                this.button.onmouseover = () => {
                    if (this.clicked) {
                        inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-white.png)";
                        this.button.style.borderColor = "";
                        this.button.style.backgroundColor = "";

                        this.button.style.color = "white";
                    }

                };

                this.button.onmouseout = () => {
                    if (this.clicked) {
                        inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                        this.button.style.borderColor = "white";
                        this.button.style.backgroundColor = "white";
                        this.button.style.color = "#2d889c";
                    }
                    else {
                        inventoryButtonLogo.style.background = "";
                    }
                };
            }

            public onSignedIn(): void {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
            }

            public onSignedOut(): void {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }

            }

        }
    }
}
