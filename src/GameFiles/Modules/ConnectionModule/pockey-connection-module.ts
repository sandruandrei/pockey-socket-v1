///<reference path="../../../Framework/AbstractModules/Connection/abstract-connection-module.ts"/>
///<reference path="../../../Framework/AbstractModules/Connection/socket-client.ts"/>
///<reference path="pocket-socket-client.ts"/>
///<reference path="pockey-login-handler.ts"/>
namespace Pockey {
    export module Connection {

        import AbstractConnectionModule = Framework.Connection.AbstractConnectionModule;
        import SocketClient = Framework.Connection.SocketClient;

        export class PockeyConnectionModule extends AbstractConnectionModule {

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();
            }

            protected getSocketIoClient(): SocketClient {
                return new PockeySocketClient();
            }

            protected createLoginHandler(): void {
                let loginHandler: PockeyLoginHandler = new PockeyLoginHandler();
            }
        }
    }
}