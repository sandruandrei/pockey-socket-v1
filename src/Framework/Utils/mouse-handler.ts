///<reference path="Vector2.ts"/>
///<reference path="button-state.ts"/>
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

        export class MouseHandler {
            private static instance: MouseHandler;
            private initialized: boolean = false;

            public left: ButtonState;
            public middle: ButtonState;
            public right: ButtonState;

            public position: Point;

            static Instance(): MouseHandler {
                if (!MouseHandler.instance) {
                    MouseHandler.instance = new MouseHandler();

                    if (!MouseHandler.Instance().initialized) {
                        MouseHandler.Instance().initialized = true;

                        MouseHandler.Instance().position = new Point();
                        MouseHandler.Instance().left = new ButtonState();
                        MouseHandler.Instance().middle = new ButtonState();
                        MouseHandler.Instance().right = new ButtonState();

                        // document.onmousemove = MouseHandler.Instance().handleMouseMove.bind(this);
                        // document.onmousedown = MouseHandler.Instance().handleMouseDown.bind(this);
                        // document.onmouseup = MouseHandler.Instance().handleMouseUp.bind(this);

                        // console.log("mouse-ul: " + AbstractEntryPoint.renderer.interaction.mouse.);
                        // AbstractEntryPoint.stage. = ()=>{

                        // };


                        AbstractEntryPoint.stage.interactive = true;
                        AbstractEntryPoint.stage.interactiveChildren = true;
                        AbstractEntryPoint.stage.on("mousemove",
                            MouseHandler.Instance().handleMouseMove.bind(this)
                        );

                        AbstractEntryPoint.stage.on("mousedown", (e) => {
                            MouseHandler.Instance().handleMouseDown(e);
                        });

                        AbstractEntryPoint.stage.on("mouseup", (e) => {
                            MouseHandler.Instance().handleMouseUp(e);
                        });

                        AbstractEntryPoint.stage.on("mouseupoutside", (e) => {
                            MouseHandler.Instance().handleMouseUp(e);
                        });
                        MouseHandler.Instance().reset();
                        // function mousedownEventHandler(e) {
                        //     //get the data
                        //     var button = e.data.button;
                        //     console.log('Mouse Down: button is:', button);
                        // }


                    }
                }
                return MouseHandler.instance;
            }

            private handleMouseMove(): void {
                let x: number = AbstractEntryPoint.renderer.plugins.interaction.mouse.global.x;
                let y: number = AbstractEntryPoint.renderer.plugins.interaction.mouse.global.y;

                // AbstractEntryPoint.renderer.plugins.mouse.getLocalPosition(AbstractEntryPoint.stage);


                MouseHandler.Instance().position = new Point(x, y);
            }

            private handleMouseDown(e): void {
                // this.handleMouseMove(e);

                // console.log("intra la mouse down");
                if (e.data && e.data.button == 0) {

                    if (!MouseHandler.Instance().left.down) {
                        MouseHandler.Instance().left.pressed = true;
                    }
                    MouseHandler.Instance().left.down = true;

                } else if (e.data && e.data.button == 1) {

                    if (!MouseHandler.Instance().middle.down) {
                        MouseHandler.Instance().middle.pressed = true;
                    }
                    MouseHandler.Instance().middle.down = true;

                } else if (e.data && e.data.button == 2) {

                    if (!MouseHandler.Instance().right.down) {
                        MouseHandler.Instance().right.pressed = true;
                    }
                    MouseHandler.Instance().right.down = true;
                }
            }

            private handleMouseUp(e): void {
                // this.handleMouseMove(e);
                if (e.data && e.data.button == 0) {
                    MouseHandler.Instance().left.down = false;
                } else if (e.data && e.data.button == 1) {
                    MouseHandler.Instance().middle.down = false;
                } else if (e.data && e.date.button == 2) {
                    MouseHandler.Instance().right.down = false;
                }
            }

            private reset(): void {
                // this.position.x = e.pageX;
                this.left.pressed = false;
                this.middle.pressed = false;
                this.right.pressed = false;

                requestAnimationFrame(this.reset.bind(this));
            }

            public GetAngle(vector: Vector2): number {
                return Math.atan2(this.position.x - vector.x, -(this.position.y - vector.y)) * (180 / Math.PI);
            }
        }

    }
}