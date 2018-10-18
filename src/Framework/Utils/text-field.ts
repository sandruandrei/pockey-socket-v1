namespace Framework {
    export module utils {
        import TextStyleOptions = PIXI.TextStyleOptions;
        import Graphics = PIXI.Graphics;
        import TextStyle = PIXI.TextStyle;

        export class TextField extends PIXI.Text {

            private initialScale: number;

            constructor(text?: string, style?: TextStyle, debug?: boolean) {


                super(text, style);

                this.setStyle(style);
                this.updateText();

                if (debug)
                    this.debug();
            }

            public setText(text: string): void {
                this.text = text;
                // console.log("counter intra textu: " + text);
                // this.setStyle(this.style);
            }

            public setStyle(style: TextStyle) {
                this.scale.x = 1;
                this.scale.y = 1;

                if (style && !_.isUndefined(style.fontSize) && !_.isNull(style.fontSize)) {
                    let fontSize: number = +style.fontSize;
                    fontSize *= 2;
                    style.fontSize = fontSize;
                }

                if (style && !_.isUndefined(style.wordWrapWidth) && !_.isNull(style.wordWrapWidth)) {
                    let wordWrapWidth: number = +style.wordWrapWidth;
                    wordWrapWidth *= 2;
                    style.wordWrapWidth = wordWrapWidth;
                }

                this.style = style;
                // super(text, style);

                this.scale.y /= 2;
                this.scale.x /= 2;

                this.initialScale = +this.style.fontSize;
            }

            public rescale(scaleFactor: number): void {
                let newFontSize: number = scaleFactor * this.initialScale;
                console.log("initial font size: " + this.initialScale);
                console.log("new font size: " + newFontSize);
                // let textStyle: TextStyle = this.style;
                this.style.fontSize = newFontSize;
                //
                // this.setStyle(textStyle);
            }

            // private checkFontSize(style:TextStyleOptions):void
            // {
            //     st
            // }
            private debug(): void {
                let gr: Graphics = new Graphics();
                gr.beginFill(0xff9900, 0.5);
                gr.drawRect(0, 0, this.width * 2, this.height * 2);
                gr.endFill();
                gr.x = this.x;
                gr.y = this.y;
                this.addChild(gr);
            }
        }
    }
}