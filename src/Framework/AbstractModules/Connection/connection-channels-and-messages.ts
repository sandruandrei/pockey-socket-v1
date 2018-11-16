namespace Framework {
    export module Connection {
        export class FrameworkSocketNamespaces {
            public static SEARCH: string = "/searching";
            public static PLAY: string = "/play";
        }

        export class FrameworkSocketEvents {

            public static newConnection: string = "FrameworkSocketEvents" + "newConnection";
            public static letsConnect: string = "FrameworkSocketEvents" + "letsConnect";
            public static joinRoom: string = "FrameworkSocketEvents" + "joinRoom";
            public static joinedRoom: string = "FrameworkSocketEvents" + "joinedRoom";
            public static privateMessage: string = "FrameworkSocketEvents" + "privateMessage";
            public static getUserFromDatabase: string = "FrameworkSocketEvents" + "getUserFromDatabase";
            public static updateUserData: string = "FrameworkSocketEvents" + "updateUserData";
            // public static partnerFoundChannel: string = "partnerFoundChannel";
        }

        export class FrameworkSocketMessages {
            public static WHO_WANTS_TO_PLAY: string = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
            public static I_WANT_TO_PLAY: string = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
            public static HELLO: string = "FrameworkSocketMessages." + "HELLO";

        }
    }
}