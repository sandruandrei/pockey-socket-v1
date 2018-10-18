/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/17/2018
 */


namespace Framework {
    export module Utils {

        import Point = PIXI.Point;
        import Vector2 = Framework.Utils.Vector2;

        export class TouchHandler {
            private static instance: TouchHandler;
            private initialized: boolean = false;

            public isTouchMoving: boolean = false;
            // public left: ButtonState;
            // public middle: ButtonState;
            // public right: ButtonState;

            public position: Point;

            static Instance(): TouchHandler {
                if (!TouchHandler.instance) {
                    TouchHandler.instance = new TouchHandler();

                    if (!TouchHandler.Instance().initialized) {
                        TouchHandler.Instance().initialized = true;

                        TouchHandler.Instance().position = new Point();
                        // TouchHandler.Instance().left = new ButtonState();
                        // TouchHandler.Instance().middle = new ButtonState();
                        // TouchHandler.Instance().right = new ButtonState();

                        document.ontouchmove = TouchHandler.Instance().handleTouchMove.bind(this);
                        document.ontouchend = TouchHandler.Instance().handleTouchEnd.bind(this);
                        // document.onmousedown = TouchHandler.Instance().handleMouseDown.bind(this);
                        // document.onmouseup = TouchHandler.Instance().handleMouseUp.bind(this);

                        // TouchHandler.Instance().reset();

                    }
                }
                return TouchHandler.instance;
            }

            private handleTouchMove(e: TouchEvent): void {
                // let x: number = e.pageX;
                // let y: number = e.pageY;

                let x: number = e.touches[0].clientX;
                let y: number = e.touches[0].clientY;
                // clientY = e.touches[0].clientY;

                TouchHandler.Instance().position = new Point(x, y);
                TouchHandler.Instance().isTouchMoving = true;
                // console.log("x -> " + x, "y -> " + y);
                // console.log("isTouchMoving: " + this.isTouchMoving);
            }

            private handleTouchEnd(e: TouchEvent): void {
                // let x: number = e.pageX;
                // let y: number = e.pageY;
                //
                // let x: number = e.touches[0].clientX;
                // let y: number = e.touches[0].clientY;
                // // clientY = e.touches[0].clientY;
                //
                // TouchHandler.Instance().position = new Point(x, y);
                TouchHandler.Instance().isTouchMoving = false;
                // console.log("isTouchMoving: " + this.isTouchMoving);

                // console.log("x -> " + x, "y -> " + y);
            }

            /*private handleMouseDown(e: MouseEvent): void {
                // this.handleMouseMove(e);

                if (e.button == 0) {

                    if (!TouchHandler.Instance().left.down) {
                        TouchHandler.Instance().left.pressed = true;
                    }
                    TouchHandler.Instance().left.down = true;

                } else if (e.button == 1) {

                    if (!TouchHandler.Instance().middle.down) {
                        TouchHandler.Instance().middle.pressed = true;
                    }
                    TouchHandler.Instance().middle.down = true;

                } else if (e.button == 2) {

                    if (!TouchHandler.Instance().right.down) {
                        TouchHandler.Instance().right.pressed = true;
                    }
                    TouchHandler.Instance().right.down = true;
                }
            }

            private handleMouseUp(e): void {
                // this.handleMouseMove(e);
                if (e.button == 0) {
                    TouchHandler.Instance().left.down = false;
                } else if (e.button == 1) {
                    TouchHandler.Instance().middle.down = false;
                } else if (e.button == 2) {
                    TouchHandler.Instance().right.down = false;
                }
            }

            private reset(): void {
                // this.position.x = e.pageX;
                this.left.pressed = false;
                this.middle.pressed = false;
                this.right.pressed = false;

                requestAnimationFrame(this.reset.bind(this));
            }*/

            /*public GetAngle(vector: Vector2): number {
                // let angle:number = 0;
                var angle = Math.atan2(this.position.x - vector.x, -(this.position.y - vector.y)) * (180 / Math.PI);

                return angle;
            }*/
        }

    }
}