///<reference path="../../../../Framework/Utils/pixi-button.ts"/>

namespace Pockey {
    export module UserInterface {
        import Sprite = PIXI.Sprite;
        import Settings = Framework.Settings;
        import PixiButton = Framework.UserInterface.PixiButton;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;

        export class PockeyUiMainScreen extends Container {
            private menuBackground: Sprite;

            constructor() {
                super();
                this.addElements();
            }

            private addElements(): void {
                this.addMenuBackground();
                this.addStartButton();
            }

            private addMenuBackground() {
                // let backgroundTexture:Texture = new PIXI.Texture.fromImage(beeSvg, undefined, undefined, width / 600)
                // this.poolTableBackgroundBottom = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bottom.png"));

                //@ts-ignore
                // const svgTest = new PIXI.SVG(Settings.desktopAssetsPath + "Images/menu_background.svg");
                // this.addChild(svgTest);
                //@ts-ignore
                // const svg = new PIXI.SVG(Settings.desktopAssetsPath + "Images/menu_background.svg");
                // this.addChild(svg);

                this.menuBackground = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                this.menuBackground.x = Settings.stageWidth / 2 - this.menuBackground.width / 2;
                this.menuBackground.y = Settings.stageHeight / 2 - this.menuBackground.height / 2;
                // this.menuBackground = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                // this.menuBackground.x -= this.menuBackground.width / 2;
                // this.menuBackground.y -= this.menuBackground.height / 2;
                this.addChild(this.menuBackground);
            }

            public onResize(): void {

                this.menuBackground.x = Settings.stageWidth / 2 - this.menuBackground.width / 2;
                this.menuBackground.y = Settings.stageHeight / 2 - this.menuBackground.height / 2;
            }

            // private o
            private addStartButton(): void {
                let pixiBtn: PixiButton = new PixiButton(100, 50, 0xffffff, 1);
                // create the text object
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 32,
                    fill: 0x000000,
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
                pixiBtn.setText("START", style);
                pixiBtn.clicked = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                };


                pixiBtn.x = this.menuBackground.width / 2;// - pixiBtn.width / 2;
                pixiBtn.y = this.menuBackground.height / 2;// - pixiBtn.height / 2;
                // pixiBtn.y = this.menuBackground.height / 2;
                this.menuBackground.addChild(pixiBtn);
            }
        }
    }
}