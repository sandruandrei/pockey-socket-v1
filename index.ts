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
            public static leftRoom: string = "FrameworkSocketEvents" + "leftRoom";
            public static privateMessage: string = "FrameworkSocketEvents" + "privateMessage";
            public static getUserFromDatabase: string = "FrameworkSocketEvents" + "getUserFromDatabase";
            public static updateUserData: string = "FrameworkSocketEvents" + "updateUserData";
            public static disconnectMySocket: string = "FrameworkSocketEvents" + "disconnectMySocket";
            // public static partnerFoundChannel: string = "partnerFoundChannel";
        }

        export class FrameworkSocketMessages {
            public static WHO_WANTS_TO_PLAY: string = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
            public static I_WANT_TO_PLAY: string = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
            public static HELLO: string = "FrameworkSocketMessages." + "HELLO";

        }
    }
}
///@ts-ignore
import nodeStatic    = require( 'node-static' );
//@ts-ignore
import http            = require( "http" );
//@ts-ignore
import socketIO        = require( 'socket.io' );
//@ts-ignore
import pg        = require( 'pg' );


export module PockeyServer {

    //@ts-ignore
    import FrameworkSocketNamespaces = Framework.Connection.FrameworkSocketNamespaces;
    //@ts-ignore
    import FrameworkSocketMessages = Framework.Connection.FrameworkSocketMessages;
    //@ts-ignore
    import FrameworkSocketEvents = Framework.Connection.FrameworkSocketEvents;

    export enum WinStatus {
        WIN,
        LOST
    }

    export class Server {
        protected file;
        protected httpServer;
        protected socketIo;
        protected socketIsFree: boolean = true;
        protected databaseConnected: boolean = false;
        protected databasePool: pg.Pool;

        // protected lookingForPartner: boolean = true;

        constructor() {
            this.databasePool = new pg.Pool({
                user: 'npvswhggxgsgxk',
                host: 'ec2-54-225-98-131.compute-1.amazonaws.com',
                database: 'd1uk2vnpdjl28q',
                password: '556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965',
                port: 5432,
                ssl: true
            });


            this.databasePool.on('error', (err, client) => {
                console.error('Unexpected error on idle client', err);
                process.exit(-1);
            });

            console.log("bla");

            this.databasePool.connect((err, client, done) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log("s-a logat, merge.");
                    this.databaseConnected = true;
                }
            });

            ////////////////////////////////
            // const app = express();

            this.file = new nodeStatic.Server('out', { // bin is the folder containing our html, etc
                cache: 0,	// don't cache
                gzip: true	// gzip our assets
            });

            let port = process.env.PORT || 8080;
            // create our server
            this.httpServer = http.createServer((request, response) => {
                request.addListener('end', () => {
                    this.file.serve(request, response);
                });
                request.resume();
            });

            // var http=require('http');

            // var server=http.createServer(function(req,res){
            //     res.end('test');
            // });

            this.httpServer.on('listening', function () {
                console.log('ok, server is running');
            });

            this.httpServer.listen(port, '0.0.0.0');

            this.socketIo = socketIO();
            // console.log("socket id: " + this.socketIo.id);
            this.socketIo.serveClient(true); // the server will serve the client js file
            this.socketIo.attach(this.httpServer);

            let connectCounter: number = 0;

            this.socketIo.on('connection', (socket) => {

                connectCounter++;
                console.log('a user connected. users connected: ' + connectCounter);
                //todo aici trebuie sa te ocupi de disconnect dar si pe celalalte socketuri

                socket.on(FrameworkSocketEvents.getUserFromDatabase, (username) => {
                    console.log('someone wants some db in');
                    if (this.databaseConnected) {
                        this.checkForUserID(socket, username);
                    }
                });
                socket.on(FrameworkSocketEvents.updateUserData, (data) => {
                    if (this.databaseConnected) {
                        this.updateUserDb(socket, data);
                    }
                });
            });
            this.socketIo.on('disconnect', function () {
                // console.log('user disconnected');
                connectCounter--;
                console.log('a user left. users connected: ' + connectCounter);
            });
            // this.socketIo.on('disconnect', (socket) => {
            //
            // });
            let lookingForPartnerNamespace = this.socketIo.of(FrameworkSocketNamespaces.SEARCH);
            lookingForPartnerNamespace.on('connection', function (socket) {
                let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.SEARCH, '');
                console.log(FrameworkSocketNamespaces.SEARCH + ' -> someone connected: ' + id);

                socket.on(FrameworkSocketEvents.letsConnect, (msg, id, partnerID) => {
                    socket.broadcast.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
                });
            });

            let playingNamespace = this.socketIo.of(FrameworkSocketNamespaces.PLAY);
            playingNamespace.on('connection', function (socket) {
                let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.PLAY, '');
                console.log(FrameworkSocketNamespaces.PLAY + ' -> someone connected: ' + id);

                socket.on(FrameworkSocketEvents.joinRoom, (room) => {
                    socket.join(room);
                    // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);
                    socket.emit(FrameworkSocketEvents.joinedRoom, room);

                    console.log("on join room. room nickname: " + room);

                    socket.on('disconnect', function () {

                        console.log("a iesit de pe canalul pacii: " + socket.id);

                        socket.to(room).emit(FrameworkSocketEvents.leftRoom, socket.id);
                        socket.disconnect();
                    });
                });

                socket.on(FrameworkSocketEvents.privateMessage, (room, messageType, messageData) => {
                    if (messageType == FrameworkSocketMessages.HELLO)
                        console.log("se face helloul");

                    socket.broadcast.to(room).emit(FrameworkSocketEvents.privateMessage, messageType, messageData);

                });

                socket.on(FrameworkSocketEvents.disconnectMySocket, (room) => {


                });
            });
        }

        private updateUserDb(socket, data): void {
            let sqlText: string = "UPDATE pockey_table SET " + data["column"] + "='" + data["value"] + "' WHERE user_id='" + data["userID"] + "'";

            if (data["type"] == "winStatus") {
                if (data["value"] == WinStatus.WIN) {
                    // sqlText = "UPDATE USER_TABLE SET " + data["column"] + "='points' + 10 WHERE GID='Yojimbo'";
                    sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
                    // console.log("sqlText la win: " + sqlText);
                }
                else if (data["value"] == WinStatus.LOST) {
                    sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
                }
            }

            console.log("sqlText: " + sqlText, "type: " + data["type"], "value: " + data["value"]);


            //@ts-ignore
            (async () => {
                const client = await this.databasePool.connect();
                try {
                    const res = await client.query(sqlText);
                    // console.log("acum se face");
                    socket.emit(FrameworkSocketEvents.updateUserData);
                    // console.log(res.rows[0]);

                } finally {
                    client.release();
                    console.log("client");
                }
            })().catch(e => console.log(e.stack))


        }

        private checkForUserID(socket, username): void {
            console.log("checking db for user_id: " + username);
            const query = {
                // give the query a unique nickname
                name: 'fetch-user',
                text: 'SELECT * FROM pockey_table WHERE USER_ID = $1',
                values: [username]
            };

            this.databasePool.query(query)
                .then(res => {
                    console.log("user retrieved: " + res.rows[0]);

                    if (res.rows[0] == undefined || res.rows[0] == "undefined" || res.rows[0] == null) {
                        this.createNewUser(socket, username);
                    }
                    else {
                        socket.emit(FrameworkSocketEvents.getUserFromDatabase, res.rows[0]);
                    }
                    // console.log(res.rows[0]); // ['Brian', 'Carlson']

                })
                .catch(e => {

                    console.error(e.stack)
                })
        }

        private createNewUser(socket, username): void {
            console.log("creating new user: " + username);
            const createNewUserQuery =
                {
                    name: 'create-new-user',
                    text: 'INSERT INTO pockey_table(user_id) VALUES($1)',
                    values: [username]
                };

            this.databasePool.query(createNewUserQuery)
                .then(res => {
                    /* console.log("new user created. user saved into db");
                     this.socketIo.emit(FrameworkSocketEvents.getUserFromDatabase, res.rows[0]);*/
                    this.checkForUserID(socket, username);
                })
                .catch(e => {
                    console.error(e.stack)
                });
        }
    }
}

new PockeyServer.Server();
// new Framework.EntryPoint.ConnectionModule;
