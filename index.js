"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        class FrameworkSocketNamespaces {
        }
        FrameworkSocketNamespaces.SEARCH = "/searching";
        FrameworkSocketNamespaces.PLAY = "/play";
        Connection.FrameworkSocketNamespaces = FrameworkSocketNamespaces;
        class FrameworkSocketEvents {
        }
        FrameworkSocketEvents.newConnection = "FrameworkSocketEvents" + "newConnection";
        FrameworkSocketEvents.letsConnect = "FrameworkSocketEvents" + "letsConnect";
        FrameworkSocketEvents.joinRoom = "FrameworkSocketEvents" + "joinRoom";
        FrameworkSocketEvents.joinedRoom = "FrameworkSocketEvents" + "joinedRoom";
        FrameworkSocketEvents.leftRoom = "FrameworkSocketEvents" + "leftRoom";
        FrameworkSocketEvents.privateMessage = "FrameworkSocketEvents" + "privateMessage";
        FrameworkSocketEvents.getUserFromDatabase = "FrameworkSocketEvents" + "getUserFromDatabase";
        FrameworkSocketEvents.updateUserData = "FrameworkSocketEvents" + "updateUserData";
        FrameworkSocketEvents.disconnectMySocket = "FrameworkSocketEvents" + "disconnectMySocket";
        Connection.FrameworkSocketEvents = FrameworkSocketEvents;
        class FrameworkSocketMessages {
        }
        FrameworkSocketMessages.WHO_WANTS_TO_PLAY = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
        FrameworkSocketMessages.I_WANT_TO_PLAY = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
        FrameworkSocketMessages.HELLO = "FrameworkSocketMessages." + "HELLO";
        Connection.FrameworkSocketMessages = FrameworkSocketMessages;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
const nodeStatic = require("node-static");
const http = require("http");
const socketIO = require("socket.io");
const pg = require("pg");
var PockeyServer;
(function (PockeyServer) {
    var FrameworkSocketNamespaces = Framework.Connection.FrameworkSocketNamespaces;
    var FrameworkSocketMessages = Framework.Connection.FrameworkSocketMessages;
    var FrameworkSocketEvents = Framework.Connection.FrameworkSocketEvents;
    let WinStatus;
    (function (WinStatus) {
        WinStatus[WinStatus["WIN"] = 0] = "WIN";
        WinStatus[WinStatus["LOST"] = 1] = "LOST";
    })(WinStatus = PockeyServer.WinStatus || (PockeyServer.WinStatus = {}));
    class Server {
        constructor() {
            this.socketIsFree = true;
            this.databaseConnected = false;
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
            this.file = new nodeStatic.Server('out', {
                cache: 0,
                gzip: true
            });
            let port = process.env.PORT || 8080;
            this.httpServer = http.createServer((request, response) => {
                request.addListener('end', () => {
                    this.file.serve(request, response);
                });
                request.resume();
            });
            this.httpServer.on('listening', function () {
                console.log('ok, server is running');
            });
            this.httpServer.listen(port, '0.0.0.0');
            this.socketIo = socketIO();
            this.socketIo.serveClient(true);
            this.socketIo.attach(this.httpServer);
            let connectCounter = 0;
            this.socketIo.on('connection', (socket) => {
                connectCounter++;
                console.log('a user connected. users connected: ' + connectCounter);
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
                connectCounter--;
                console.log('a user left. users connected: ' + connectCounter);
            });
            let lookingForPartnerNamespace = this.socketIo.of(FrameworkSocketNamespaces.SEARCH);
            lookingForPartnerNamespace.on('connection', function (socket) {
                let id = socket.id.toString().replace(FrameworkSocketNamespaces.SEARCH, '');
                console.log(FrameworkSocketNamespaces.SEARCH + ' -> someone connected: ' + id);
                socket.on(FrameworkSocketEvents.letsConnect, (msg, id, partnerID) => {
                    socket.broadcast.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
                });
            });
            let playingNamespace = this.socketIo.of(FrameworkSocketNamespaces.PLAY);
            playingNamespace.on('connection', function (socket) {
                let id = socket.id.toString().replace(FrameworkSocketNamespaces.PLAY, '');
                console.log(FrameworkSocketNamespaces.PLAY + ' -> someone connected: ' + id);
                socket.on(FrameworkSocketEvents.joinRoom, (room) => {
                    socket.join(room);
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
        updateUserDb(socket, data) {
            let sqlText = "UPDATE pockey_table SET " + data["column"] + "='" + data["value"] + "' WHERE user_id='" + data["userID"] + "'";
            if (data["type"] == "winStatus") {
                if (data["value"] == WinStatus.WIN) {
                    sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
                }
                else if (data["value"] == WinStatus.LOST) {
                    sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
                }
            }
            console.log("sqlText: " + sqlText, "type: " + data["type"], "value: " + data["value"]);
            (() => __awaiter(this, void 0, void 0, function* () {
                const client = yield this.databasePool.connect();
                try {
                    const res = yield client.query(sqlText);
                    socket.emit(FrameworkSocketEvents.updateUserData);
                }
                finally {
                    client.release();
                    console.log("client");
                }
            }))().catch(e => console.log(e.stack));
        }
        checkForUserID(socket, username) {
            console.log("checking db for user_id: " + username);
            const query = {
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
            })
                .catch(e => {
                console.error(e.stack);
            });
        }
        createNewUser(socket, username) {
            console.log("creating new user: " + username);
            const createNewUserQuery = {
                name: 'create-new-user',
                text: 'INSERT INTO pockey_table(user_id) VALUES($1)',
                values: [username]
            };
            this.databasePool.query(createNewUserQuery)
                .then(res => {
                this.checkForUserID(socket, username);
            })
                .catch(e => {
                console.error(e.stack);
            });
        }
    }
    PockeyServer.Server = Server;
})(PockeyServer = exports.PockeyServer || (exports.PockeyServer = {}));
new PockeyServer.Server();

//# sourceMappingURL=index.js.map
