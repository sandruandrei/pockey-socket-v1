/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 1/31/2019
 */

namespace Framework {
    export module Utils {

        export class CountdownTimer {
            private callback: Function;
            public currentTime: number;
            public initialTime: number;
            public complete: boolean = false;
            public timerTween: TweenMax;
            public name: string;
            private timerStopped:boolean = true;

            constructor(name:string, seconds: number, callback: Function) {
                this.name = name;

                this.currentTime = seconds;
                this.initialTime = seconds;

                this.callback = callback;
                this.complete = false;
            }

            public setCounterInSeconds(seconds: number, callback: Function): void {
                stop();
                this.currentTime = seconds;
                this.initialTime = seconds;

                this.callback = callback;
                this.complete = false;
            }

            public start(): void {
                // this.timerTween.play(0);
                this.timerTween = TweenMax.delayedCall(1, this.onUpdate.bind(this));
                this.timerStopped = false;
            }

            public stop(): void {
                if (this.timerTween)
                    this.timerTween.kill();

                this.timerStopped = true;
            }

            public reset(): void {
                this.currentTime = this.initialTime;
                this.complete = false;
            }

            public restart(): void {
                this.stop();
                this.reset();
                this.start();
            }

            private onUpdate(): void {
                if(this.timerStopped)
                {
                    return;
                }
                this.currentTime--;

                if (this.currentTime == 0) {
                    this.complete = true;
                    // TweenMax.ticker.removeEventListener("tick", this.onUpdate.bind(this));
                }
                else {
                    this.start();
                }

                this.callback();

                // console.log(this.name + " -> current time: " + this.currentTime);
            }

        }
    }
}
