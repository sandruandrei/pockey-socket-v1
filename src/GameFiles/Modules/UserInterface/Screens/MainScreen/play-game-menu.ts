///<reference path="player-color-customizer.ts"/>
///<reference path="player-avatar-customizer.ts"/>
///<reference path="login-handler.ts"/>
///<reference path="tutorial-menu.ts"/>

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/29/2018
 */

namespace Pockey {
    export module UserInterface {
        export class PlayGameMenu {


            private playerColorCustomizer: PlayerColorCustomizer;
            private playerAvatarCustomizer: PlayerAvatarCustomizer;
            private loginHandler: LoginHandler;
            private tutorialMenu: TutorialMenu;

            constructor() {
                this.loginHandler = new LoginHandler();
                this.playerColorCustomizer = new PlayerColorCustomizer();
                this.playerAvatarCustomizer = new PlayerAvatarCustomizer();
                this.tutorialMenu = new TutorialMenu();
            }
        }
    }
}
