"use strict";
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
        FrameworkSocketEvents.privateMessage = "FrameworkSocketEvents" + "privateMessage";
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
const express = require("express");
var PockeyServer;
(function (PockeyServer) {
    var FrameworkSocketNamespaces = Framework.Connection.FrameworkSocketNamespaces;
    var FrameworkSocketEvents = Framework.Connection.FrameworkSocketEvents;
    class Server {
        constructor() {
            this.socketIsFree = true;
            const app = express();
            this.file = new nodeStatic.Server('../out', {
                cache: 0,
                gzip: true
            });
            this.httpServer = http.createServer((request, response) => {
                request.addListener('end', () => {
                    this.file.serve(request, response);
                });
                request.resume();
            }).listen(5000);
            this.socketIo = socketIO();
            this.socketIo.serveClient(true);
            this.socketIo.attach(this.httpServer);
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
                    console.log("on join room. room name: " + room);
                });
                socket.on(FrameworkSocketEvents.privateMessage, (room, messageType, messageData) => {
                    socket.broadcast.to(room).emit(FrameworkSocketEvents.privateMessage, messageType, messageData);
                });
            });
        }
    }
    PockeyServer.Server = Server;
})(PockeyServer = exports.PockeyServer || (exports.PockeyServer = {}));
new PockeyServer.Server();

//# sourceMappingURL=app.js.map
