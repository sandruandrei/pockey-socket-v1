///<reference path="../Framework/Utils/Vector2.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/24/2018
 */


namespace Pockey {

    import Vector2 = Framework.Utils.Vector2;
    import Settings = Framework.Settings;

    export class PockeySettings {

        public static PLAYER_COLOR: number;
        public static PLAYER_COLOR_ID: number;
        public static PLAYER_AVATAR_ID: number;
        public static PLAYER_SOCKET_ID: string = "";
        public static PLAYER_NAME: string = "";

        public static OPPONENT_COLOR: number = 0x15D3E9;
        public static OPPONENT_SOCKET_ID: string = "";
        public static OPPONENT_NAME: string = "SandruOpponent";

        public static DELTA: number = 0.98;
        public static BALL_RADIUS: number = 17;
        public static P2_WORLD_STEP: number = 1 / 60;

        public static POCKEY_CUSTOM_BACKGROUND_NAME: string = "pockey_custom_background_name";
        public static PUCK_COLOR: number = 0xe4b31c;
        public static MIDDLE_TABLE_POS: Vector2;
        public static MIDDLE_TABLE_LEFT_POS: Vector2;
        public static MIDDLE_TABLE_RIGHT_POS: Vector2;
        public static BALLS_NUMBER_FOR_EACH_PLAYER: number = 7;
        public static STICK_MAX_POWER: number = 108;

        public static LARGE_COLORS_ARRAY: number[] = [0xe92c5a, 0x16e0f8, 0xd6d72a, 0xc32ce9, 0x1584f4, 0x15efaf, 0x24a247, 0x86b009, 0xff8023, 0xe82bc3,];
        public static SMALL_COLORS_ARRAY: number[] = [0xe92c5a, 0x16e0f8];
        public static LARGE_AVATARS_ARRAY: string[] = [
            Settings.desktopAssetsPath + "Images/avatar_guest.png",
            Settings.desktopAssetsPath + "Images/avatar_boi.png",
            Settings.desktopAssetsPath + "Images/avatar_grrl.png",
            Settings.desktopAssetsPath + "Images/avatar_nerdist.png",
            Settings.desktopAssetsPath + "Images/avatar_micky.png",
            Settings.desktopAssetsPath + "Images/avatar_glenn.png",
            Settings.desktopAssetsPath + "Images/avatar_sc-izzi.png",
            Settings.desktopAssetsPath + "Images/avatar_atlas.png",
            Settings.desktopAssetsPath + "Images/avatar_bear-blue.png",
            Settings.desktopAssetsPath + "Images/avatar_cate.png",
            Settings.desktopAssetsPath + "Images/avatar_kooky.png",
            Settings.desktopAssetsPath + "Images/avatar_r66-z.png",
            Settings.desktopAssetsPath + "Images/avatar_sc-comet.png",
            Settings.desktopAssetsPath + "Images/avatar_spooky.png",
            Settings.desktopAssetsPath + "Images/avatar_xmas-atlas.png",
            Settings.desktopAssetsPath + "Images/avater_snuggles.png",];

        public static SMALL_AVATARS_ARRAY: string[] = [
            Settings.desktopAssetsPath + "Images/avatar_guest.png"
            // , Settings.desktopAssetsPath + "Images/avatar_boi.png"
        ];

        public static ROUND_DURATION_IN_SECONDS: number = 25;

        public static MAIN_COLLISION_POLYGON: number[][] = [
            [-559, -98],
            [-487, -98],
            [-482, -106],
            [-482, -196],
            [-485, -201],
            [-520, -242],
            [-520, -268],
            [-494, -282],
            [-468, -264],
            [-439, -245],
            [-431, -242],
            [-47, -242],
            [-41, -245],
            [-25, -264],
            [-10, -288],
            [14, -288],
            [30, -264],
            [46, -245],
            [53, -242],
            [439, -242],
            [447, -245],
            [488, -280],
            [515, -278],
            [527, -249],
            [490, -202],
            [484, -195],
            [484, -104],
            [492, -96],
            [555, -96],
            [565, -96],
            [565, -317],
            [-559, -317]
        ];
        public static MAIN_COLLISION_SHADOW: number[][] = [
            [429 - 978, 277 - 12 - 549],
            [429 - 978, 561 - 12 - 549],
            [513 - 978, 561 - 12 - 549],
            [513 - 978, 357 - 12 - 549],

            [478 - 978, 314 - 12 - 549],

            [476 - 978, 300 - 12 - 549],
            [490 - 978, 303 - 12 - 549],


            [535 - 978, 336 - 12 - 549],
            [940 - 978, 336 - 12 - 549],
            [981 - 978, 287 - 12 - 549],
            [1018 - 978, 335 - 12 - 549],
            [1426 - 978, 335 - 12 - 549],

            [1469 - 978, 303 - 12 - 549],

            [1485 - 978, 300 - 12 - 549],

            [1483 - 978, 314 - 12 - 549],

            [1448 - 978, 358 - 12 - 549],
            [1448 - 978, 561 - 12 - 549],
            [1533 - 978, 561 - 12 - 549],
            [1533 - 978, 277 - 12 - 549]];


    }
}
