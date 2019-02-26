/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/21/2019
 */
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel



namespace Framework {
    export module Utils {
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class FrameworkTicker {

            private fps = 60;
            private now;
            private then = Date.now();
            private interval = 1000;// / fps;
            private delta: number;
            private functions: Function[];


            private delay = 1000 / 60;                               // calc. time per frame
            private time = null;                                    // start time
            private frame: number = -1;                                    // frame count
            private tref;                                             // rAF time reference

            constructor(fps:number) {
                // this.interval /= this.fps;
                this.functions = [];

                this.delay = 1000 / fps;
                // requestAnimationFrame = th
                // this.draw();
                // requestAnimationFrame(this.draw.bind(this));

                // SignalsManager.AddSignalCallback(SignalsType.PLAY_SOUND, add)

            };


            private loop(timestamp) {
                if (this.time === null) this.time = timestamp;              // init start time
                let seg:number = Math.floor((timestamp - this.time) / this.delay); // calc frame no.
                if (seg > this.frame) {                                // moved to next frame?
                    this.frame = seg;                                  // update
                    _.forEach(this.functions, (fn) => {
                        fn();
                    });
                }
                this.tref = requestAnimationFrame(this.loop.bind(this))
            }

            // play status
            private isPlaying: boolean = false;

// set frame-rate
            private frameRate(newfps: number): void {
                this.fps = newfps;
                this.delay = 1000 / this.fps;
                this.frame = -1;
                this.time = null;
            };

// enable starting/pausing of the object
            public start(): void {
                if (!this.isPlaying) {
                    this.isPlaying = true;
                    this.tref = requestAnimationFrame(this.loop.bind(this));
                }
            };

            private pause() {
                if (this.isPlaying) {
                    cancelAnimationFrame(this.tref);
                    this.isPlaying = false;
                    this.time = null;
                    this.frame = -1;
                }
            };



            public add(fn: Function): void {
                this.functions.push(fn);
            }

            public remove(fn: Function): void {
                _.remove(this.functions, (fn2: Function) => {
                    return fn == fn2;
                });
                // this.functions.push(fn);
            }

            // var fps = 15;
            /*private draw() {
                setTimeout( () => {
                    requestAnimationFrame(this.draw.bind(this));
                    // Drawing code goes here

                    _.forEach(this.functions, (fn) => {
                        fn();
                    });

                    // console.count("fps");
                }, this.interval / this.fps);
            }*/

            /* private draw() {


                 this.now = Date.now();
                 this.delta = this.now - this.then;

                 if (this.delta > this.interval) {
                     // update time stuffs
                     this.then = this.now - (this.delta % this.interval);

                     // ... Code for Drawing the Frame ...

                     _.forEach(this.functions, (fn) => {
                         fn();
                     });
                 }
             }*/
        }
    }
}
