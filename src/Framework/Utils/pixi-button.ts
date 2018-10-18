///<reference path="text-field.ts"/>
namespace Framework {
    export module UserInterface {
        import ObservablePoint = PIXI.ObservablePoint;
        import TextField = Framework.utils.TextField;
        import TextStyleOptions = PIXI.TextStyleOptions;
        import TextStyle = PIXI.TextStyle;

        export class PixiButton extends PIXI.Sprite {

            private _text: TextField;

            private _cb: Function;

            constructor(width: number, height: number, backgroundColor: number, backgroundAlpha: number) {
                super();

                // generate the texture
                let gfx = new PIXI.Graphics();
                gfx.beginFill(backgroundColor, backgroundAlpha);
                gfx.drawRoundedRect(0, 0, width, height, height / 5);
                gfx.endFill();
                this.texture = gfx.generateCanvasTexture();

                // set the x, y and anchor
                // this.x = x;
                // this.y = y;
                this.anchor.x = 0.5;
                this.anchor.y = 0.5;

                this._text = new TextField('Basic text in pixi');
                this._text.anchor.x = 0.5;
                this._text.anchor.y = 0.5;
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

                /*this.on("mouseover", () => {
                    this.onHover();
                }, this);

                this.on("mouseout", () => {
                    this.onOut();
                }, this);*/
            }

            public setText(val: string, style?: PIXI.TextStyle) {
                // Set text to be the value passed as a parameter
                this._text.text = val;
                // Set style of text to the style passed as a parameter
                this._text.setStyle(style);
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
                this.scale.x = 1.2;
                this.scale.y = 1.2;
            }

            private onOut() {
                // console.log('On Out');
                // this.tint = 0xffffff;
                this.scale.x = 1;
                this.scale.y = 1;
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
