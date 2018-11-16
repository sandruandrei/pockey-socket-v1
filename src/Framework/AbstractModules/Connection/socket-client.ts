///<reference path="../../Signals/signals-manager.ts"/>
///<reference path="../../Signals/signal-types.ts"/>
///<reference path="connection-channels-and-messages.ts"/>
///<reference path="../../../../lib/types/socket.io/socket.io-client.d.ts"/>

namespace Framework {
    export module Connection {
        import SignalsManager = Framework.Signals.SignalsManager;
        import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        import PockeySettings = Pockey.PockeySettings;

        export class SocketClient {
            protected socket: any;
            protected searchingSocket: any;
            protected playingSocket: any;
            protected lookingForPartner: boolean = false;
            protected myID: string = "";
            protected partnerID: string;
            protected connectionID: string;
            public socketConnectionCreated: boolean = false;

            public initializeClientSocket(onSocketInitialiazed: Function): void {
                this.socket = io();
                this.socket.on('connect', () => {
                    onSocketInitialiazed();
                    /* */
                    /* console.log("%c socket client connected", "background: #ff9900; color: black; font-weight:bold; ");*/
                });


                // this.initializeSearchingSocket();
            }

            public getUserFromDataBase(username: string, callback:Function): void {
                this.socket.on(FrameworkSocketEvents.getUserFromDatabase, (usernameData: JSON) => {
                    callback(usernameData);
                });
                this.socket.emit(FrameworkSocketEvents.getUserFromDatabase, username);
            }

            public updateUserData( dbObject:DatabaseObject, callback:Function): void {
                this.socket.on(FrameworkSocketEvents.updateUserData, (data) => {
                    callback(data);
                });
                this.socket.emit(FrameworkSocketEvents.updateUserData, dbObject);
                console.log("intra la socket client updateUserData");
            }

            protected initializeSearchingSocket(): void {
                this.searchingSocket = io(FrameworkSocketNamespaces.SEARCH);
                this.searchingSocket.on('connect', () => {
                    this.myID = this.searchingSocket.id.replace(FrameworkSocketNamespaces.SEARCH, '');
                    SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [this.myID]);

                    console.log("sunt conectat pe search: " + this.myID);

                    this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.WHO_WANTS_TO_PLAY, this.myID, "");
                    this.lookingForPartner = true;
                });

                this.searchingSocket.on(FrameworkSocketEvents.letsConnect, (msg, id, partnerID) => {
                    console.log("cineva vrea sa ma conectez, socket: " + id + ". verific...");
                    if (this.lookingForPartner && msg == FrameworkSocketMessages.WHO_WANTS_TO_PLAY) {
                        if (id != this.myID && (partnerID == "")) {
                            console.log("ma conectez cu: " + id);
                            this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.I_WANT_TO_PLAY, id, this.myID);
                            this.partnerID = id;
                            this.connectionID = id + this.myID;

                            this.initializePlayingSocket();

                            this.lookingForPartner = false;
                        }
                    }
                    else if (this.lookingForPartner && msg == FrameworkSocketMessages.I_WANT_TO_PLAY) {
                        if (id == this.myID && (partnerID != "" && partnerID != null && partnerID != undefined)) {
                            console.log("ma conectez cu: " + partnerID);

                            this.partnerID = partnerID;
                            this.connectionID = this.myID + partnerID;

                            this.initializePlayingSocket();

                            this.lookingForPartner = false;
                        }
                    }
                });
            }

            protected initializePlayingSocket(): void {
                this.playingSocket = io(FrameworkSocketNamespaces.PLAY);
                this.playingSocket.on('connect', () => {
                    this.searchingSocket.disconnect();
                    this.searchingSocket = null;

                    this.playingSocket.emit(FrameworkSocketEvents.joinRoom, this.connectionID, this.myID);

                    this.playingSocket.on(FrameworkSocketEvents.joinedRoom, (room) => {
                        console.log("sunt conectat pe playing room: " + room + " as " + this.myID);

                        this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, FrameworkSocketMessages.HELLO, this.myID, this.partnerID);
                        // SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
                    });

                    this.playingSocket.on(FrameworkSocketEvents.privateMessage, (messageType, messageData) => {
                        this.handlePrivateMessage(messageType, messageData);

                    });
                });
            }

            protected handlePrivateMessage(messageType, messageData): void {
                switch (messageType) {
                    case FrameworkSocketMessages.HELLO: {
                        if (!this.socketConnectionCreated) {
                            this.socketConnectionCreated = true;

                            SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
                            this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, FrameworkSocketMessages.HELLO);
                        }

                        break;
                    }
                }
            }

            public sendPrivateMessage(params: any[]): void {
                if (this.playingSocket && this.connectionID && this.myID) {
                    let messageType = params[0];
                    let messageData = params[1];

                    this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, messageType, messageData);

                    // console.log("private message sent: " + messageType, messageData);

                }
            }
        }
    }
}