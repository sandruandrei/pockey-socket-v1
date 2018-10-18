///<reference path="../../../../Framework/Utils/text-field.ts"/>

namespace Pockey {
    export module UserInterface {
        import Graphics = PIXI.Graphics;
        import TextField = Framework.utils.TextField;
        import Settings = Framework.Settings;

        export class PockeyUiSearchingScreen extends Container {
            private background: Container;
            private searchingTextField: TextField;

            constructor() {
                super();
                this.addElements();
            }

            private addElements(): void {
                this.addBackground();
                this.addText();
            }

            private addBackground() {
                let bgGraphics: Graphics = new Graphics();
                bgGraphics.beginFill(0x000000, 0.8);
                bgGraphics.drawRect(0, 0, 400, 200);
                bgGraphics.endFill();

                this.background = new Container();
                this.background.addChild(bgGraphics);
                this.addChild(this.background);
            }

            public onResize(): void {

                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
            }

            // private o
            private addText(): void {
                // let pixiBtn: PixiButton = new PixiButton(0, 0, 100, 50);
                // create the text object
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 32,
                    fill: 0xffffff,
                    // fontStyle: 'italic',
                    // fontWeight: 'bold',
                    // fill: ['#ffffff', '#00ff99'], // gradient
                    // stroke: '#4a1850',
                    // strokeThickness: 5,
                    /*  dropShadow: true,
                      dropShadowColor: '#000000',
                      dropShadowBlur: 1,
                      dropShadowAngle: Math.PI / 3,
                      dropShadowDistance: 10,*/
                    // wordWrap: true,
                    // wordWrapWidth: 440
                });

                this.searchingTextField = new TextField("SEARCHING", style);
                this.searchingTextField.x = this.background.width / 2 - this.searchingTextField.width / 2;
                this.searchingTextField.y = this.background.height / 2 - this.searchingTextField.height / 2;
                this.background.addChild(this.searchingTextField);
            }
        }
    }
}