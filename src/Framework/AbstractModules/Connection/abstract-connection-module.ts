///<reference path="../../Abstracts/abstract-module.ts"/>
///<reference path="socket-client.ts"/>
///<reference path="../../Signals/signal-types.ts"/>
///<reference path="../../Signals/signals-manager.ts"/>
///<reference path="login-handler.ts"/>

namespace Framework {
    export module Connection {

        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SocketClient = Framework.Connection.SocketClient;
        import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class AbstractConnectionModule extends AbstractModule {

            protected socketClient: SocketClient;

            constructor() {

                super();

                this.Name = "AbstractConnectionModule";

                this.createLoginHandler();
            }

            protected createLoginHandler():void
            {
                let loginHandler:LoginHandler = new LoginHandler();
                console.log("%c AbstractConnectionModule -> login handler", "color: white; background:green");

            }

            public createElements(): void {
                /*super.createElements();*/

                this.startSocketConnection();
            }

            private startSocketConnection(): void {
                this.onCreateSocketIoConnection();
                console.log("%c AbstractConnectionModule -> startSocketConnection", "color: white; background:green");
            }

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();
                if (!Settings.singlePlayer) {
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION, this.onCreateSearchForPartnerConnection.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_DISCONNECTED, this.onSocketIoDisconnected.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
                }
            }

            protected onCreateSearchForPartnerConnection():void
            {
                this.socketClient.initializeSearchingSocket();
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
                    DatabaseConnector.socketClient = this.socketClient;
                    this.socketClient.initializeClientSocket(this.onSocketInitiliazed.bind(this));
                }
            }

            protected onSocketInitiliazed(): void {
                console.log("%c AbstractConnectionModule -> Socket Initiliazed", "color: white; background:green");
                console.log("%c" + this.Name + " Elements Created!", "color: green");
               this.ElementsCreated = true;
               SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            }

            protected getSocketIoClient(): SocketClient {
                return new SocketClient();
            }


        }


    }
}