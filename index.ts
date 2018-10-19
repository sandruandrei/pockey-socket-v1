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
import express        = require( 'express' );

export module PockeyServer {

    //@ts-ignore
    import FrameworkSocketNamespaces = Framework.Connection.FrameworkSocketNamespaces;
    //@ts-ignore
    import FrameworkSocketMessages = Framework.Connection.FrameworkSocketMessages;
    //@ts-ignore
    import FrameworkSocketEvents = Framework.Connection.FrameworkSocketEvents;

    export class Server {
        protected file;
        protected httpServer;
        protected socketIo;
        protected socketIsFree: boolean = true;

        // protected lookingForPartner: boolean = true;

        constructor() {
            // let express = require('express');
            const app = express();

            /* // var app = new express();
             // var http = http.Server(app);
             // var app = require('express')();
             const express = require('express')
             const app = express()
             const port = 4000

             app.get('/', (req, res) => res.send('Hello World!'));
             app.listen(port, () => console.log(`Example app listening on port ${port}!`))
             // var http = new (require('http')).Server(app);

             // app.get('/', function(req, res){
             //     res.send('<h1>Hello world</h1>');
             // });

             // http.listen(4000, function(){
             //     console.log('listening on *:3000');
             // });*/
//-------------------
            this.file = new nodeStatic.Server('out', { // bin is the folder containing our html, etc
                cache: 0,	// don't cache
                gzip: true	// gzip our assets
            });

            let port = process.env.PORT || 5000;
            // create our server
            this.httpServer = http.createServer((request, response) => {
                request.addListener('end', () => {
                    this.file.serve(request, response);
                });
                request.resume();
            }).listen(port);

            this.socketIo = socketIO();
            // console.log("socket id: " + this.socketIo.id);
            this.socketIo.serveClient(true); // the server will serve the client js file
            this.socketIo.attach(this.httpServer);

            let lookingForPartnerNamespace = this.socketIo.of(FrameworkSocketNamespaces.SEARCH);
            lookingForPartnerNamespace.on('connection', function (socket) {
                let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.SEARCH, '');
                console.log(FrameworkSocketNamespaces.SEARCH + ' -> someone connected: ' + id);

                socket.on(FrameworkSocketEvents.letsConnect, (msg, id, partnerID) => {
                    socket.broadcast.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
                    // socket.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
                    // console.log("partnerNamespaceID, socket: " +partnerNamespaceID, socket);
                });
                // socket.emit(FrameworkSocketEvents.)
            });

            let playingNamespace = this.socketIo.of(FrameworkSocketNamespaces.PLAY);
            playingNamespace.on('connection', function (socket) {
                let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.PLAY, '');
                console.log(FrameworkSocketNamespaces.PLAY + ' -> someone connected: ' + id);

                socket.on(FrameworkSocketEvents.joinRoom, (room) => {
                    socket.join(room);
                    // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);
                    socket.emit(FrameworkSocketEvents.joinedRoom, room);

                    console.log("on join room. room name: " + room);
                });

                // socket.on(FrameworkSocketEvents.joinRoom, (room, id) => {
                //     socket.join(room);
                //     // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);
                //     socket.emit(FrameworkSocketEvents.joinedRoom, room, id);
                //
                //     console.log("on join room. room name: " + room);
                // });

                socket.on(FrameworkSocketEvents.privateMessage, (room, messageType, messageData) => {
                    /*socket.join(room);
                    // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);*/
                    socket.broadcast.to(room).emit(FrameworkSocketEvents.privateMessage, messageType, messageData);
                    // console.log("private message sent: " + messageType, messageData);

                });
                // socket.emit(FrameworkSocketEvents.)
            });
           //-------------------------------------------------

            /*let sleepNamespace = socketIO()
                .of("/" + FrameworkSocketNamespaces.SEARCH)
                .on("connection", function (socket) {
                    console.log("salam");

                  /!*  socket.on(FrameworkSocketEvents.onNewConnection, () => {

                    })*!/
                    // socket.emit('a message', {
                    //     that: 'only'
                    //     , '/chat': 'will get'
                    // });
                    // chat.emit('a message', {
                    //     everyone: 'in'
                    //     , '/chat': 'will get'
                    // });
                });*/

            // this.socketIo = socketIO();
            // this.socketIo.serveClient(true); // the server will serve the client js file
            // this.socketIo.attach(this.httpServer);

// listen for a connection
            /* this.socketIo.on('connection', (socket) => {

                 console.log('User ' + socket.id + ' connected');
                /!* socket.emit(FrameworkSocketChannels.newConnectionChannel, socket.id);
                 // socket.broadcast.emit(FrameworkSocketChannels.lookingForPartnerChannel, ["New ID: ", socket.id]);

                 socket.on(FrameworkSocketChannels.lookingForPartnerChannel, (id) => {
                     console.log(FrameworkSocketChannels.lookingForPartnerChannel + " -> " + id);

                     socket.broadcast.emit(FrameworkSocketChannels.lookingForPartnerChannel, id);
                 });

                 socket.on(FrameworkSocketChannels.letsConnectChannel, (id) => {
                     console.log(FrameworkSocketChannels.letsConnectChannel + " -> " + id);

                     socket.broadcast.emit(FrameworkSocketChannels.letsConnectChannel, id);
                 });

                 socket.on(FrameworkSocketChannels.partnerFoundChannel, (clientId, id, connectionID) => {
                     console.log(FrameworkSocketChannels.partnerFoundChannel + " -> " + id);

                     socket.broadcast.emit(FrameworkSocketChannels.partnerFoundChannel, clientId, id, connectionID);

                     socket.on(connectionID, (message) =>
                     {
                         socket.broadcast.emit(connectionID, message);
                         console.log("intra la custom");

                     });
                 });*!/
             });*/


        }
    }
}

new PockeyServer.Server();
// new Framework.EntryPoint.ConnectionModule;
