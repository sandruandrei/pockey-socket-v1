///<reference path="../../Abstracts/abstract-module.ts"/>
///<reference path="socket-client.ts"/>
///<reference path="../../Signals/signal-types.ts"/>
///<reference path="../../Signals/signals-manager.ts"/>

namespace Framework {
    export module Connection {

        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SocketClient = Framework.Connection.SocketClient;
        import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        import SignalsManager = Framework.Signals.SignalsManager;

        export class AbstractConnectionModule extends AbstractModule {

            protected socketClient: SocketClient;

            constructor() {

                super();

                this.Name = "AbstractConnectionModule";
            }

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();
                if (!Settings.singlePlayer) {
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION, this.onCreateSocketIoConnection.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_DISCONNECTED, this.onSocketIoDisconnected.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
                }

            }

            protected onUpdateSocketID(params: any[]): void {
                Settings.socketID = params[0];
            }

            protected onSocketIoDisconnected(): void {

            }

            protected onPrivateMessage(params: any[]): void {
                this.socketClient.sendPrivateMessage(params);
            }

            protected onCreateSocketIoConnection(): void {
                if (_.isNull(this.socketClient) || _.isUndefined(this.socketClient)) {
                    this.socketClient = this.getSocketIoClient();
                }

                this.socketClient.initializeClientSockets();
            }

            protected getSocketIoClient(): SocketClient {
                return new SocketClient();
            }


        }


    }
}