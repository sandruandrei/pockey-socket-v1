///<reference path="../../../Framework/AbstractModules/Connection/abstract-connection-module.ts"/>
///<reference path="../../../Framework/AbstractModules/Connection/socket-client.ts"/>
///<reference path="pocket-socket-client.ts"/>
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
        }
    }
}