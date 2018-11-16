///<reference path="../../../../../Framework/Utils/pixi-button.ts"/>
///<reference path="play-game-menu.ts"/>
///<reference path="inventory-menu.ts"/>


namespace Pockey {
    export module UserInterface {

        export class PockeyUiMainScreen   {

            private mainMenuElementsHolder: HTMLDivElement;

            private playGameButton: HTMLDivElement;
            private inventoryButton: HTMLDivElement;
            private inviteFriendButton: HTMLDivElement;
            private leaderboardButton: HTMLDivElement;
            private mainMenuButtons: HTMLDivElement[];

            private loginMenu: HTMLDivElement;
            private leftSideLoginMenu: HTMLDivElement;
            private leaderboardMenu: HTMLDivElement;
            private inviteMenu: HTMLDivElement;
            private tutorialAndShareButtonsMenu: HTMLDivElement;
            private inventoryScreen: HTMLDivElement;

            private playGameMenu: PlayGameMenu;
            private inventoryMenu: PockeyInventoryMenu;

            constructor() {
                this.defineElements();
            }

            private defineElements(): void {
                ////////////
                this.loginMenu = document.getElementById("LoginScreen") as HTMLDivElement;
                this.playGameMenu = new PlayGameMenu();
//                 this.hideElement(this.loginMenu);

                this.inventoryMenu = new PockeyInventoryMenu();
                // jQuery(this.loginMenu.id).hide();

                this.leftSideLoginMenu = document.getElementById("LeftSide") as HTMLDivElement;
                this.leaderboardMenu = document.getElementById("LeaderBoardScreen") as HTMLDivElement;
                this.hideElement(this.leaderboardMenu);

                this.inviteMenu = document.getElementById("InviteElementsHolder") as HTMLDivElement;
                this.hideElement(this.inviteMenu);

                this.tutorialAndShareButtonsMenu = document.getElementById("TutorialAndShareButtonsHolder") as HTMLDivElement;
                // this.hideElement(this.tutorialAndShareButtonsMenu);

                this.inventoryScreen = document.getElementById("InventoryScreen") as HTMLDivElement;
                this.hideElement(this.inventoryScreen);

                this.mainMenuElementsHolder = document.getElementById("MainMenuElementsHolder") as HTMLDivElement;

                /////////////////
                this.mainMenuButtons = [];

                this.playGameButton = document.getElementById("PlayGameButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.playGameButton);

                this.inventoryButton = document.getElementById("InventoryButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.inventoryButton);

                this.inviteFriendButton = document.getElementById("InviteFriendsButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.inviteFriendButton);

                this.leaderboardButton = document.getElementById("LeaderboardButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.leaderboardButton);


                _.forEach(this.mainMenuButtons, (element: HTMLDivElement) => {
                        element.setAttribute('clicked', 'false');
                        element.onclick = () => {
                            element.setAttribute("clicked", "true");
                            this.setMainButtonStyleOnClick(element);

                            switch (element.id) {
                                case this.playGameButton.id: {
                                    this.showPlayGameMenu();
                                    break;
                                }

                                case this.inventoryButton.id: {
                                    this.showInventoryMenu();
                                    break;

                                }

                                case this.inviteFriendButton.id: {
                                    this.showInviteMenu();
                                    break;

                                }

                                case this.leaderboardButton.id: {
                                    this.showLeaderboardMenu();
                                    break;

                                }

                            }

                            _.forEach(this.mainMenuButtons, (otherElement: HTMLDivElement) => {
                                if (otherElement != element) {
                                    otherElement.setAttribute("clicked", "false");
                                    this.resetMainButtonStyleOnClick(otherElement);
                                }
                            });
                        }
                    }
                );
            }

            private showElement(element: HTMLDivElement): void {
                element.style.display = "flex";
            }

            private hideElement(element: HTMLDivElement): void {
                element.style.display = "none";

            }

            private showPlayGameMenu(): void {
                console.log("intra la show play");
                this.showElement(this.loginMenu);
                this.showElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.inventoryScreen);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inviteMenu);
                // this.showElement(this.tutorialAndShareButtonsMenu);
            }

            private showInventoryMenu(): void {
                console.log("intra la show inventory");

                this.hideElement(this.loginMenu);
                this.hideElement(this.leaderboardMenu);
                this.showElement(this.inventoryScreen);
            }

            private showLeaderboardMenu(): void {
                console.log("intra la show leaderboard");

                this.hideElement(this.loginMenu);
                this.hideElement(this.inventoryScreen);
                this.showElement(this.leaderboardMenu);
            }

            private showInviteMenu(): void {
                console.log("intra la show invite");

                this.showElement(this.loginMenu);
                this.showElement(this.inviteMenu);
                this.hideElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inventoryScreen);
            }

            private setMainButtonStyleOnClick(element: HTMLDivElement) {
                element.classList.add('simpleBtnOnClick');

                let arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.add('simpleBtnArrowOnClick');

                let btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.add('simpleBtnHighlightOnClick');
            }

            private resetMainButtonStyleOnClick(element: HTMLDivElement) {
                element.classList.remove('simpleBtnOnClick');

                let arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.remove('simpleBtnArrowOnClick');

                let btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.remove('simpleBtnHighlightOnClick');
            }

            public setVisibleTrue(): void {
                this.mainMenuElementsHolder.style.display = "block";
            }

            public setVisibleFalse(): void {
                this.mainMenuElementsHolder.style.display = "none";
            }

        }
    }
}