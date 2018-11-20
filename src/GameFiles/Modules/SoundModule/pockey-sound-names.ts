///<reference path="../../../Framework/Settings.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/20/2018
 */


namespace Pockey {
    export module Sound {
        import Settings = Framework.Settings;

        export class PockeySoundNames {
            public static MAIN_MENU_AMBIANCE:string = Settings.desktopAssetsPath + "Sounds/" + "pockey_main_menu.ogg";
            public static IN_GAME_AMBIANCE:string = Settings.desktopAssetsPath + "Sounds/" + "ambient.ogg";
            public static SHOOT_BALL:string = Settings.desktopAssetsPath + "Sounds/" + "shoot_ball.ogg";
            static LAST_FIVE_SECONDS:string = Settings.desktopAssetsPath + "Sounds/" + "5sec.ogg";
            static OPPONENT_FOUND:string = Settings.desktopAssetsPath + "Sounds/" + "opponent_found.ogg";
            static BALL_TO_BALL_HIT:string = Settings.desktopAssetsPath + "Sounds/" + "ball2ball_hit.ogg";
        }
    }
}
