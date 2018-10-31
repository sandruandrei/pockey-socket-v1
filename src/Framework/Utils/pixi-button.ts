///<reference path="text-field.ts"/>

namespace Framework {
    export module UserInterface {
        import ObservablePoint = PIXI.ObservablePoint;
        import TextField = Framework.utils.TextField;
        import TextStyleOptions = PIXI.TextStyleOptions;
        import TextStyle = PIXI.TextStyle;
        import Texture = PIXI.Texture;
        import Vector2 = Framework.Utils.Vector2;

        export class PixiButton extends PIXI.Sprite {

            public onMouseOverAnimation: Function;
            public onMouseOutAnimation: Function;

            private _text: TextField;

            private _cb: Function;

            private alignment: string = "center";
            private textOffset: Vector2;
            // private leftAlign:boolean = false;
            // private rightAlign:boolean = false;
            // private centerAlign:boolean = false;
            // constructor(width: number, height: number, backgroundColor: number, backgroundAlpha: number) {
            constructor(texture: Texture) {
                super(texture);

                // generate the texture

                this.texture = this.texture;

                this.textOffset = new Vector2();

                this._text = new TextField('Basic text in pixi');
                this.addChild(this._text);

                // set the interactivity to true and assign callback functions
                this.interactive = true;

                this.on("mousedown", () => {
                    this.onDown();
                }, this);

                this.on("mouseup", () => {
                    this.onUp();
                }, this);

                this.on("mouseover", () => {
                    this.onHover();
                }, this);

                this.on("mouseout", () => {
                    this.onOut();
                }, this);

                //////////////////
                // this.on("touchstart", () => {
                //     this.onDown();
                // }, this);
                this.on("tap", () => {
                    this.onUp();
                }, this);

            }

            public setOffset(offset: Vector2): void {
                this.textOffset = offset;
            }

            public setAlign(align: string): void {
                this.alignment = align;

                if (align == "left") {
                    this._text.x = 0 + this.textOffset.x;//this.width / 2 - this._text.width / 2;
                    this._text.y = 0 + this.textOffset.y;//this.height / 2 - this._text.height / 2;
                }
                else if (align == "right") {
                    this._text.x = this.width - this._text.width + this.textOffset.x;
                    this._text.y = this.height - this._text.height + this.textOffset.y;
                }
                else {
                    this._text.x = this.width / 2 - this._text.width / 2 - this.textOffset.x;
                    this._text.y = this.height / 2 - this._text.height / 2 - this.textOffset.x;
                }
            }

            public setText(val: string, style?: PIXI.TextStyle) {
                // Set text to be the value passed as a parameter
                this._text.text = val;
                // Set style of text to the style passed as a parameter
                this._text.setStyle(style);
                this._text.x = this.width / 2 - this._text.width / 2;
                this._text.y = this.height / 2 - this._text.height / 2;

                this.setAlign(this.alignment);
            }

            public getText(): TextField {
                return this._text;
            }

            private onDown() {
                // console.log('Clicked');
                this.y += 5;
                // this.tint = 0xffffff;
            }

            private onUp() {
                // console.log('onup');
                if (typeof(this._cb) === 'function') {
                    this._cb();
                }
                this.y -= 5;
                // this.tint = 0xF8A9F9;
            }

            private onHover() {
                // console.log('On Hover');
                // this.tint = 0xF8A9F9;
                // this.scale.x = 1.2;
                // this.scale.y = 1.2;
                if (this.onMouseOverAnimation) {
                    this.onMouseOverAnimation();
                }
            }

            private onOut() {
                // console.log('On Out');
                // this.tint = 0xffffff;
                // this.scale.x = 1;
                // this.scale.y = 1;

                if (this.onMouseOutAnimation) {
                    this.onMouseOutAnimation();
                }
            }

            public get clicked() {
                return this._cb;
            }

            public set clicked(cb: Function) {
                this._cb = cb;
            }


        }
    }
}
