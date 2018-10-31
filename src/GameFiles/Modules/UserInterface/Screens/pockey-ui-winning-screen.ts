/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/2/2018
 */

namespace Pockey {
    export module UserInterface {
        import Sprite = PIXI.Sprite;
        import Settings = Framework.Settings;
        import PixiButton = Framework.UserInterface.PixiButton;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import TextField = Framework.utils.TextField;

        export class PockeyUiWinningScreen extends Container {
            private background: Sprite;
            private winningTextField: TextField;

            constructor() {
                super();
                this.registerSignalHandlers();
                this.addElements();
            }


            private addElements(): void {
                this.addWinningBackground();
                this.addRestartButton();
            }

            private addWinningBackground() {

                // let backgroundTexture:Texture = new PIXI.Texture.fromImage(beeSvg, undefined, undefined, width / 600)
                // this.poolTableBackgroundBottom = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bottom.png"));

                //@ts-ignore
                // const svgTest = new PIXI.SVG(Settings.desktopAssetsPath + "Images/menu_background.svg");
                // this.addChild(svgTest);
                //@ts-ignore
                // const svg = new PIXI.SVG(Settings.desktopAssetsPath + "Images/menu_background.svg");
                // this.addChild(svg);

                this.background = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                console.log("this.background.width, height: " + this.background.width, this.background.height);
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
                // this.background = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                // this.background.x -= this.background.width / 2;
                // this.background.y -= this.background.height / 2;
                this.addChild(this.background);
            }

            public onResize(): void {
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
            }

            // private o
            private addRestartButton(): void {
                /*let pixiBtn: PixiButton = new PixiButton();
                // create the text object
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 24,
                    fill: 0xffffff
                });
                pixiBtn.setText("RESTART", style);
                pixiBtn.clicked = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESTART_GAME);
                };


                pixiBtn.x = this.background.width / 2;// - pixiBtn.width / 2;
                pixiBtn.y = this.background.height / 2;// - pixiBtn.height / 2;
                // pixiBtn.y = this.background.height / 2;
                this.background.addChild(pixiBtn);

                this.winningTextField = new TextField("You won", style);
                this.winningTextField.x = this.background.width / 2 - this.winningTextField.width / 2;
                this.winningTextField.y = 40;//this.background.height / 2 - this.winningTextField.height / 2;
                this.background.addChild(this.winningTextField);*/
            }

            private registerSignalHandlers(): void {
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_WINNING_MESSAGE, this.onUpdateWinningMessage.bind(this));

            }

            private onUpdateWinningMessage(message: string) {
                this.winningTextField.setText(message);
            }
        }
    }
}