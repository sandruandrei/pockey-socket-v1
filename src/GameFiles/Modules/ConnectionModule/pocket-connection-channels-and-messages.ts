namespace Pockey {
    export module Connection {
        /*export class FrameworkSocketNamespaces {
            public static SLEEP: string = "/sleep_mode";
            public static SEARCH: string = "/searching";
            public static PLAY: string = "/play";
        }

        export class FrameworkSocketEvents {

            public static newConnection: string = "newConnection";
            // public static lookingForPartnerChannel: string = "lookingForPartner";
            public static letsConnect: string = "letsConnect";
            public static joinRoom: string = "joinRoom";
            public static joinedRoom: string = "joinedRoom";
            public static privateMessage: string = "privateMessage";
            // public static partnerFoundChannel: string = "partnerFoundChannel";
        }*/

        export class PockeySocketMessages {
            public static WATCH: string = "PockeySocketMessages." + "WATCH";
            public static SCORE_UPDATE: string = "PockeySocketMessages." + "SCORE_UPDATE";
            public static OPPONENT: string = "PockeySocketMessages." + "OPPONENT";
            public static YOUR_TURN: string = "PockeySocketMessages." + "YOUR_TURN";
            public static OPPONENT_SETTINGS: string = "PockeySocketMessages." + "OPPONENT_SETTINGS";
            public static OPPONENT_RESTART_GAME: any = "PockeySocketMessages." + "OPPONENT_RESTART_GAME";
            // public static OPPONENT_RESTART: any;

        }
    }
}