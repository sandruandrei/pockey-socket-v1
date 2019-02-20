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

    export interface InventoryVO {
        id?: string,
        icon?: string,
        model?: string,
        category?: string,
        level?: number,
        color?: number,
        complementaryColor?:number,
        borderColor?:number
    }

    export class PockeySettings {

        public static PLAYER_AVATAR_ID: string;
        public static PLAYER_SOCKET_ID: string = "";
        public static PLAYER_NICKNAME: string = "";
        public static PLAYER_ID: string = "guest";
        public static PLAYER_LEVEL: number = 1;

        public static OPPONENT_COLOR: number;
        public static OPPONENT_SOCKET_ID: string = "";
        public static OPPONENT_AVATAR_ID: string;
        public static OPPONENT_CUE_ID: string;
        public static OPPONENT_POOLTABLE_FELT_ID: string;
        public static OPPONENT_DECAL_ID: string;
        public static OPPONENT_NICKNAME: string = "SandruOpponent";
        public static DELTA: number = 0.98;

        public static FRAMES_TO_SEND_ON_WATCH: number = 6;
        public static BALL_RADIUS: number = 17;
        public static P2_WORLD_STEP: number = 1 / 60;
        public static POCKEY_CUSTOM_BACKGROUND_NAME: string = "pockey_custom_background_name";

        public static PUCK_COLOR: number = 0xe4b31c;
        public static MIDDLE_TABLE_POS: Vector2;
        public static MIDDLE_TABLE_LEFT_POS: Vector2;
        public static MIDDLE_TABLE_RIGHT_POS: Vector2;
        public static BALLS_NUMBER_FOR_EACH_PLAYER: number = 7;
        public static STICK_MAX_POWER: number = 108;
        public static LARGE_GOALIES_ARRAY: number[] = [];

        public static BABYLON_Y_OFFSET: number = 27;
        public static GOALIE_SPEED: number = 1;
        public static SMALL_GOALIES_ARRAY: number[] = [];

        public static LARGE_COLORS_ARRAY: InventoryVO[] = [
            {
                category: "COLORS",
                id: "0xf15369",
                color: 0xf15369,
                complementaryColor: 0x8fc7ee
            },
            {
                category: "COLORS",
                id: "0x8fc7ee",
                color: 0x8fc7ee,
                complementaryColor: 0x8fc7ee
            },
            {
                category: "COLORS",
                id: "0xff7fc1",
                color: 0xff7fc1,
                complementaryColor: 0x8ce1b2
            },
            {
                category: "COLORS",
                id: "0xdc94e5",
                color: 0xdc94e5,
                complementaryColor: 0xffba57
            },
            {
                category: "COLORS",
                id: "0xb09de0",
                color: 0xb09de0,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0x85a6ea",
                color: 0x85a6ea,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0x7bd3de",
                color: 0x7bd3de,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0x74d0c4",
                color: 0x74d0c4,
                complementaryColor: 0x74d0c4
            },
            {
                category: "COLORS",
                id: "0x8ce1b2",
                color: 0x8ce1b2,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0xbae3b6",
                color: 0xbae3b6,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0xe4eebf",
                color: 0xe4eebf,
                complementaryColor: 0xf15369
            },
            {
                category: "COLORS",
                id: "0xf3ce87",
                color: 0xf3ce87,
                complementaryColor: 0x74d0c4
            },
            {
                category: "COLORS",
                id: "0xffba57",
                color: 0xffba57,
                complementaryColor: 0x74d0c4
            },
            {
                category: "COLORS",
                id: "0xef927d",
                color: 0xef927d,
                complementaryColor: 0x07b3de
            }
        ];

        public static SMALL_COLORS_ARRAY: InventoryVO[] = [
            {
                category: "COLORS",
                id: "0xf15369",
                color: 0xf15369
            }
        ];

        public static PLAYER_COLOR_ID: string = PockeySettings.SMALL_COLORS_ARRAY[0].id;

        public static SMALL_DECALS_ARRAY: InventoryVO[] = [
            {
                category: "DECALS",
                id: "decal_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
                level: 1
            }
        ];

        public static LARGE_DECALS_ARRAY: InventoryVO[] = [
            {
                category: "DECALS",
                id: "decal_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
                level: 1
            },
            {
                category: "DECALS",
                id: "decal_welcome",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/dccal_welcome.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/dccal_welcome.png",
                level: 1
            },
            {
                category: "DECALS",
                id: "decal_astrojunkie",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_astrojunkie.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_astrojunkie.png",
                level: 2
            }, {
                category: "DECALS",
                id: "decal_blastoff",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_blastoff.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_blastoff.png",
                level: 2
            },
            {
                category: "DECALS",
                id: "decal_cthulu",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_cthulu.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_cthulu.png",
                level: 3
            },
            {
                category: "DECALS",
                id: "decal_dice",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_dice.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_dice.png",
                level: 3
            },
            {
                category: "DECALS",
                id: "decal_insertcoin",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_insertcoin.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_insertcoin.png",
                level: 4
            },
            {
                category: "DECALS",
                id: "decal_knucklesandwhich",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_knucklesandwhich.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_knucklesandwhich.png",
                level: 4
            }, {
                category: "DECALS",
                id: "decal_looselips",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_looselips.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_looselips.png",
                level: 5
            },
            {
                category: "DECALS",
                id: "decal_oneup",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_oneup.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_oneup.png",
                level: 6
            },
            {
                category: "DECALS",
                id: "decal_playerone",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_playerone.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_playerone.png",
                level: 7
            }, {
                category: "DECALS",
                id: "decal_pockey",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_pockey.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_pockey.png",
                level: 7
            },
            {
                category: "DECALS",
                id: "decal_ragequit",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_ragequit.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_ragequit.png",
                level: 8
            },
            {
                category: "DECALS",
                id: "decal_statTrickshot",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_statTrickshot.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_statTrickshot.png",
                level: 9
            },
            {
                category: "DECALS",
                id: "decal_towerking",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_towerking.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_towerking.png",
                level: 10
            },
            {
                category: "DECALS",
                id: "decal_wingedsword",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_wingedsword.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_wingedsword.png",
                level: 11
            },
        ];

        public static PLAYER_DECAL_ID: string = PockeySettings.SMALL_DECALS_ARRAY[0].id;

        public static LARGE_AVATARS_ARRAY: InventoryVO[] = [
            {
                category: "AVATARS",
                id: "avatar_guest",
                icon: Settings.desktopAssetsPath + "Images/avatar_guest.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "avatar_boi",
                icon: Settings.desktopAssetsPath + "Images/avatar_boi.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "avatar_grrl",
                icon: Settings.desktopAssetsPath + "Images/avatar_grrl.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "nerdist",
                icon: Settings.desktopAssetsPath + "Images/avatar_nerdist.png",
                level: 2
            },
            {
                category: "AVATARS",
                id: "avatar_micky",
                icon: Settings.desktopAssetsPath + "Images/avatar_micky.png",
                level: 2
            },
            {
                category: "AVATARS",
                id: "avatar_glenn",
                icon: Settings.desktopAssetsPath + "Images/avatar_glenn.png",
                level: 3
            },
            {
                category: "AVATARS",
                id: "avatar_sc-izzi",
                icon: Settings.desktopAssetsPath + "Images/avatar_sc-izzi.png",
                level: 4
            },
            {
                category: "AVATARS",
                id: "avatar_atlas",
                icon: Settings.desktopAssetsPath + "Images/avatar_atlas.png",
                level: 5
            },
            {
                category: "AVATARS",
                id: "avatar_bear-blue",
                icon: Settings.desktopAssetsPath + "Images/avatar_bear-blue.png",
                level: 6
            },
            {
                category: "AVATARS",
                id: "avatar_cate",
                icon: Settings.desktopAssetsPath + "Images/avatar_cate.png",
                level: 7
            },
            {
                category: "AVATARS",
                id: "avatar_kooky",
                icon: Settings.desktopAssetsPath + "Images/avatar_kooky.png",
                level: 8
            },
            {
                category: "AVATARS",
                id: "avatar_r66-z",
                icon: Settings.desktopAssetsPath + "Images/avatar_r66-z.png",
                level: 8
            },
            {
                category: "AVATARS",
                icon: Settings.desktopAssetsPath + "Images/avatar_sc-comet.png",
                id: "avatar_sc-comet",
                level: 8
            },
            {
                category: "AVATARS",
                id: "avatar_spooky",
                icon: Settings.desktopAssetsPath + "Images/avatar_spooky.png",
                level: 9
            },
            {
                category: "AVATARS",
                id: "avatar_xmas-atlas",
                icon: Settings.desktopAssetsPath + "Images/avatar_xmas-atlas.png",
                level: 9
            },
            {
                category: "AVATARS",
                id: "avater_snuggles",
                icon: Settings.desktopAssetsPath + "Images/avater_snuggles.png",
                level: 10
            }
        ];


        public static SMALL_AVATARS_ARRAY: InventoryVO[] = [
            {
                category: "AVATARS",
                id: "avatar_guest",
                icon: Settings.desktopAssetsPath + "Images/avatar_guest.png",
                level: 1
            }
        ];

        //////////////////
        public static LARGE_MISC_ARRAY: InventoryVO[] = [
            {
                category: "MISC",
                id: "feltcolor-teal",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-teal.png",
                color: 0x4ae1d8,
                borderColor: 0x7e243f,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-blue",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-blue.png",
                color:0x7ab9ff,
                borderColor:0x7e243f,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-orange",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-orange.png",
                color: 0xf26b6c,
                borderColor: 0x1f979b,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-pink",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-pink.png",
                color: 0xff7ecc,
                borderColor: 0x4e3b9c,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-purple",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-purple.png",
                color: 0xfc7af8,
                borderColor: 0x2d9c9d,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-red",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-red.png",
                color: 0xdc4e4e,
                borderColor: 0x704b8c,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-silver",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-silver.png",
                color: 0x99b3be,
                borderColor: 0x284263,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-tope",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-tope.png",
                color:0xc5aa85,
                borderColor:0x305d72,
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-yellow",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-yellow.png",
                color: 0xdad249,
                borderColor: 0x257f6d,
                level: 1
            }
        ];

        public static SMALL_MISC_ARRAY: InventoryVO[] = [
            {
                category: "MISC",
                id: "feltcolor-teal",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-teal.png",
                color: 0x4ae1d8,
                borderColor: 0x7e243f,
                level: 1
            },
        ];

        public static POOLTABLE_FELT_ID: string = PockeySettings.LARGE_MISC_ARRAY[0].id;

        //////////////////

        public static SMALL_CUES_ARRAY: InventoryVO[] = [
            {
                category: "CUES",
                id: "icon_stick_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_default.png",
                level: 1
            }
        ];

        public static LARGE_CUES_ARRAY: InventoryVO[] = [
            {
                category: "CUES",
                id: "icon_stick-default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_default.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_basic",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-basic.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_basic.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_asiimowned",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-asiimowned.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_asiimowned.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_bluesteel",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-bluesteel.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_bluesteel.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_candycane",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-candycane.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_candycane.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_dotty",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-dotty.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_dotty.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_faceybook",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-faceybook.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_faceybook.png",
                level: 3
            },
            {
                category: "CUES",
                id: "stick_faceyou",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-faceyou.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_faceyou.png",
                level: 3
            },
            {
                category: "CUES",
                id: "stick_ivory",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ivory.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ivory.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_ninja",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ninja.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ninja.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_pinky",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-pinky.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_pinky.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_purplestripe",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-purplestripe.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_purplestripe.png",
                level: 5
            },
            {
                category: "CUES",
                id: "stick_ragequit",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ragequit.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ragequit.png",
                level: 6
            },
            {
                category: "CUES",
                id: "stick_rawkstar",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-rawkstar.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_rawkstar.png",
                level: 7
            },
            {
                category: "CUES",
                id: "stick_rocket",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-rocket.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_rocket.png",
                level: 7
            },
            {
                category: "CUES",
                id: "stick_snakeeyes",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-snakeeyes.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_snakeeyes.png",
                level: 8
            },
            {
                category: "CUES",
                id: "stick_tiger",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-tiger.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_tiger.png",
                level: 8
            },
            {
                category: "CUES",
                id: "stick_tweetybird",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-tweetybird.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_tweetybird.png",
                level: 9
            },
            {
                category: "CUES",
                id: "stick_whiteknight",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-whiteknight.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_whiteknight.png",
                level: 10
            },

        ];

        public static PLAYER_CUE_ID: string = PockeySettings.SMALL_CUES_ARRAY[0].id;


        public static ROUND_DURATION_IN_SECONDS: number = 20;

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

        public static PLAYER_TOTAL_POINTS: number = 1;//s


    }
}
