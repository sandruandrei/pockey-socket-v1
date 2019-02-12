/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/23/2018
 */

namespace Pockey {
    export module SignalsModule {
        export class PockeySignalTypes {

            public static PLAYER_SIGNED_OUT: string = "PockeySignalTypes." + "PLAYER_SIGNED_OUT";
            public static PLAYER_SIGNED_IN: string = "PockeySignalTypes." + "PLAYER_SIGNED_IN";
            public static GET_PLAYER_INFO: string = "PockeySignalTypes." + "GET_PLAYER_INFO";

            public static GOOGLE_SIGN_IN: string = "PockeySignalTypes." + "GOOGLE_SIGN_IN";
            public static GOOGLE_SIGN_OUT: string = "PockeySignalTypes." + "GOOGLE_SIGN_OUT";
            public static FACEBOOK_SIGN_IN: string = "PockeySignalTypes." + "FACEBOOK_SIGN_IN";
            public static FACEBOOK_SIGN_OUT: string = "PockeySignalTypes." + "FACEBOOK_SIGN_OUT";


            public static SHOOT_BALL: string = "PockeySignalTypes." + "SHOOT_BALL";
            public static PREPARE_NEXT_TURN: string = "PockeySignalTypes." + "PREPARE_NEXT_TURN";
            public static BALL_IN_POCKET: string = "PockeySignalTypes." + "BALL_IN_POCKET";
            public static WHITE_BALL_IN_POCKET: string = "PockeySignalTypes." + "WHITE_BALL_IN_POCKET";
            public static REACTIVATE_STICK: string = "PockeySignalTypes." + "REACTIVATE_STICK";
            public static REPOSITION_STICK: string = "PockeySignalTypes." + "REPOSITION_STICK";
            public static STICK_PIVOT_MOBILE_UPDATE: string = "PockeySignalTypes." + "STICK_PIVOT_MOBILE_UPDATE";
            public static STICK_MOBILE_RELEASE: string = "PockeySignalTypes." + "STICK_MOBILE_RELEASE";
            public static HIDE_STICK_POWER_MOBILE: string = "PockeySignalTypes." + "HIDE_STICK_POWER_MOBILE";
            public static SHOW_STICK_POWER_MOBILE: string = "PockeySignalTypes." + "SHOW_STICK_POWER_MOBILE";
            public static REPOSITION_WHITE_BALL: string = "PockeySignalTypes." + "REPOSITION_WHITE_BALL";
            public static WHITE_BALL_REPOSITIONED: string = "PockeySignalTypes." + "WHITE_BALL_REPOSITIONED";
            public static FIRST_BALL_FAULT: string = "PockeySignalTypes." + "FIRST_BALL_FAULT";
            public static HIDE_BALL_RAY_GRAPHICS: string = "PockeySignalTypes." + "HIDE_GRAPHICS";
            public static POOLSTICK_ACTIVATED: string = "PockeySignalTypes." + "POOLSTICK_ACTIVATED";
            public static POCKEY_POOL_TABLE_RESIZED: string = "PockeySignalTypes." + "RESIZE_BACKGROUND";
            public static START_GAME: string = "PockeySignalTypes." + "START_GAME";
            public static SHOW_MAIN_MENU: string = "PockeySignalTypes." + "SHOW_MAIN_MENU";
            public static HIDE_MAIN_MENU: string = "PockeySignalTypes." + "HIDE_MAIN_MENU";

            public static SHOW_POOLTABLE: string = "PockeySignalTypes." + "SHOW_POOLTABLE";
            public static HIDE_POOLTABLE: string = "PockeySignalTypes." + "HIDE_POOLTABLE";

            public static SHOW_GAME_UI: string = "PockeySignalTypes." + "SHOW_GAME_UI";
            public static HIDE_GAME_UI: string = "PockeySignalTypes." + "HIDE_GAME_UI";

            public static SHOW_SEARCHING_SCREEN: string = "PockeySignalTypes." + "SHOW_SEARCHING_SCREEN";
            public static HIDE_SEARCHING_SCREEN: string = "PockeySignalTypes." + "HIDE_SEARCHING_SCREEN";

            public static SHOW_ROUND_COMPLETE_SCREEN: string = "PockeySignalTypes." + "SHOW_ROUND_COMPLETE_SCREEN";
            public static HIDE_ROUND_COMPLETE_SCREEN: string = "PockeySignalTypes." + "HIDE_ROUND_COMPLETE_SCREEN";
            public static SHOW_OPPONENT_FOUND_SCREEN: string = "PockeySignalTypes." + "SHOW_OPPONENT_FOUND_SCREEN";
            public static HIDE_OPPONENT_FOUND_SCREEN: string = "PockeySignalTypes." + "HIDE_OPPONENT_FOUND_SCREEN";

            public static UPDATE_PLAYER_NAME: string = "PockeySignalTypes." + "UPDATE_PLAYER_NAME";
            public static UPDATE_PLAYER_SCORE: string = "PockeySignalTypes." + "UPDATE_PLAYER_SCORE";
            public static CHANGE_PLAYER_COLOR: string = "PockeySignalTypes." + "CHANGE_PLAYER_COLOR";
            public static CHANGE_POOLTABLE_DECAL: string = "PockeySignalTypes." + "CHANGE_POOLTABLE_DECAL";
            public static CHANGE_POOLTABLE_FELT: string = "PockeySignalTypes." + "CHANGE_POOLTABLE_FELT";

            public static UPDATE_OPPONENT_NAME: string = "PockeySignalTypes." + "UPDATE_OPPONENT_NAME";
            public static UPDATE_OPPONENT_SCORE: string = "PockeySignalTypes." + "UPDATE_OPPONENT_SCORE";
            public static CHANGE_OPPONENT_COLOR: string = "PockeySignalTypes." + "CHANGE_OPPONENT_COLOR";

            public static SET_SIDES_TYPE: string = "PockeySignalTypes." + "SET_SIDES_TYPE";

            public static SEND_ELEMENTS_DATA_TO_MANAGER: string = "PockeySignalTypes." + "SEND_ELEMENTS_DATA_TO_MANAGER";
            public static UPDATE_WINNING_MESSAGE: string = "PockeySignalTypes." + "UPDATE_WINNING_MESSAGE";
            public static RESTART_GAME: string = "PockeySignalTypes." + "RESTART_GAME";
            public static RESET_POOLTABLE: string = "PockeySignalTypes." + "RESET_POOLTABLE";
            public static RESET_STICK_POWER: string = "PockeySignalTypes." + "RESET_STICK_POWER";
            public static RESET_GAME_SCREEN: string = "PockeySignalTypes." + "RESET_GAME_SCREEN";
            public static MOBILE_WHITE_BALL_REPOSITION_CONFIRMED: string = "PockeySignalTypes." + "MOBILE_WHITE_BALL_REPOSITION_CONFIRMED";
            public static SHOW_WHITE_BALL_POSITION_CONFIRMER: string = "PockeySignalTypes." + "SHOW_WHITE_BALL_POSITION_CONFIRMER";
            public static HIDE_WHITE_BALL_POSITION_CONFIRMER: string = "PockeySignalTypes." + "HIDE_WHITE_BALL_POSITION_CONFIRMER";
            public static UPDATE_STATE_TEXT: string = "PockeySignalTypes." + "UPDATE_GAME_TEXT";
            public static UPDATE_CURRENT_PLAYER_TIMER: string = "PockeySignalTypes." + "UPDATE_CURRENT_PLAYER_TIMER";
            public static UPDATE_MY_TIMER: string = "PockeySignalTypes." + "UPDATE_MY_TIMER";

            public static UPDATE_PLAYER_STICK_SKIN: string = "PockeySignalTypes." + "UPDATE_PLAYER_STICK_SKIN";
            public static UPDATE_UI_TEXT: string = "PockeySignalTypes." + "UPDATE_UI_TEXT";
            public static UPDATE_UI_TEXT_ON_WATCH: string = "PockeySignalTypes." + "UPDATE_UI_TEXT_ON_WATCH";
            public static ANIMATE_PUCK_GOAL: string = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL";
            public static ANIMATE_PUCK_GOAL_STOP: string = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL_STOP";
            public static UPDATE_MATCH_CIRCLES: string = "PockeySignalTypes." + "UPDATE_MATCH_CIRCLES";
            public static UPDATE_PLAYER_COLOR: string = "PockeySignalTypes." + "UPDATE_PLAYER_COLOR";
            public static CHECK_USER_DATA: string = "PockeySignalTypes." + "CHECK_USER_DATA";
            public static INVENTORY_ITEM_UPDATED: string = "PockeySignalTypes." + "INVENTORY_ITEM_UPDATED";
            public static CHANGE_PLAYER_AVATAR: string = "PockeySignalTypes." + "CHANGE_PLAYER_AVATAR";
            public static CHANGE_OPPONENT_AVATAR: string = "PockeySignalTypes." + "CHANGE_OPPONENT_AVATAR";
            public static SET_TIMESTAMP_ON_WATCH: string = "PockeySignalTypes." + "SET_TIMESTAMP_ON_WATCH";
            public static ON_WATCH_FINISHED: string = "PockeySignalTypes." + "ON_WATCH_FINISHED";
            public static CREATE_POOLTABLE_STATE: string = "PockeySignalTypes." + "CREATE_POOLTABLE_STATE";
            public static APPLY_POOLTABLE_STATE: string = "PockeySignalTypes." + "APPLY_POOLTABLE_STATE";
            public static UPDATE_CURRENT_ROUND_SCREEN_TEXT: string = "PockeySignalTypes." + "UPDATE_CURRENT_ROUND_SCREEN_TEXT";
            public static CHANGE_WHITE_BALL_STATUS: string = "PockeySignalTypes." + "CHANGE_WHITE_BALL_STATUS";

            // public static UPDATE_PLAYERS_NAMES: string = "PockeySignalTypes." + "UPDATE_PLAYERS_NAMES";

            // static UPDATE_PLAYERS_NAMES: string;
            // public static CHANGE_BACKGRO: string = "PockeySignalTypes." + "start_game";
            // public static SHOOTING_ENDED: string = "shooting_ended";
        }

        export class PockeyConnectionSignals {
            public static WATCH: string = "PockeyConnectionSignals." + "WATCH";
            public static SCORE_UPDATE: string = "PockeyConnectionSignals." + "SCORE_UPDATE";
            public static YOUR_TURN: string = "PockeyConnectionSignals." + "YOUR_TURN";
            public static OPPONENT_SETTINGS: string = "PockeyConnectionSignals." + "OPPONENT_SETTINGS";
            public static OPPONENT_NEXT_ROUND: string = "PockeyConnectionSignals." + "OPPONENT_NEXT_ROUND";
        }
    }
}
