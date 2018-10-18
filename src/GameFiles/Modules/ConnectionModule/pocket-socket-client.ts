///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../../../Framework/Signals/signal-types.ts"/>
///<reference path="../SignalsModule/pockey-signal-types.ts"/>
///<reference path="../../../Framework/AbstractModules/Connection/connection-channels-and-messages.ts"/>

namespace Pockey {
    export module Connection {

        import SocketClient = Framework.Connection.SocketClient;
        import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        import SignalsManager = Framework.Signals.SignalsManager;
        import FrameworkSocketMessages = Framework.Connection.FrameworkSocketMessages;
        import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        import FrameworkSocketEvents = Framework.Connection.FrameworkSocketEvents;

        export class PockeySocketClient extends SocketClient {

            protected handlePrivateMessage(messageType, messageData): void {
                super.handlePrivateMessage(messageType, messageData);
                switch (messageType) {

                    case PockeySocketMessages.WATCH: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.WATCH, [messageData]);
                        break;
                    }
                    case PockeySocketMessages.OPPONENT_SETTINGS: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_SETTINGS, [messageData]);
                        break;
                    }
                    case PockeySocketMessages.YOUR_TURN: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.YOUR_TURN, [messageData]);
                        break;
                    }
                    case PockeySocketMessages.OPPONENT_RESTART_GAME: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_RESTART_GAME, [messageData]);
                        break;
                    }
                    // case PockeySocketMessages.OPPONENT: {
                    //     SignalsManager.DispatchSignal(PockeyConnectionSignals.WATCH, [messageData]);
                    //     break;
                    // }
                    /*case PockeySocketMessages.SCORE_UPDATE: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.SCORE_UPDATE);
                        break;
                    }*/

                    // dispatch signal private message,  watch
                    /* case PockeyS.WA: {
                         // SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.partnerID]);
                         break;
                     }*/
                }
            }
        }
    }
}