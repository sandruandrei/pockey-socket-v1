///<reference path="../../../../lib/types/pixi/pixi.d.ts"/>
namespace Framework {
    export module Background {
        import Sprite = PIXI.Sprite;
        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class AbstractBackgroundModule extends AbstractModule {

            protected backgrounds: { [name: string]: Sprite; };
            protected backgroundsPaths: { [name: string]: string; };
            protected currentBackground: Sprite;

            // protected mainBg: Sprite;
            // public bgTextureName: string = '';
            constructor() {
                super();

                this.addAssetToLoad(Settings.desktopAssetsPath + Settings.backgroundsPath + "main_bg.png");
                this.registerBackground(Settings.mainBackgroundName, Settings.desktopAssetsPath + Settings.backgroundsPath + "main_bg.png");
            }


            protected registerSignalsHandlers(): void {
                /* SignalsManager.AddSignalCallback(SignalsType.REGISTER_CUSTOM_BACKGROUND, this.onRegisterCustomBackground.bind(this));
                 SignalsManager.AddSignalCallback(SignalsType.REGISTER_MAIN_BACKGROUND, this.onRegisterMainBackground.bind(this));*/

                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(SignalsType.CHANGE_BACKGROUND, this.onChangeBackground.bind(this));
            }

            private onChangeBackground(param: any[]): void {
                this.changeBackground(param[0].toString(), +param[1]);
            }

            public registerBackground(name: string, texturePath: string): void {
                if (!this.backgroundsPaths)
                    this.backgroundsPaths = {};

                this.backgroundsPaths[name] = texturePath;
            }

            /*protected onRegisterMainBackground(params: any[]): void {
                let mainBg = new Sprite(PIXI.Texture.fromFrame(this.bgTextureName));
                mainBg.x = mainBg.width / 2;
                mainBg.y = mainBg.height / 2;

                this.addChild(mainBg);
            }

            protected onRegisterCustomBackground(params: any[]): void {

            }*/


            public createElements(): void {
                super.createElements();

                this.backgrounds = {};

                _.forEach(this.backgroundsPaths, (path: string, id: string) => {
                    this.backgrounds[id] = new Sprite(PIXI.Texture.fromFrame(path));
                    this.backgrounds[id].anchor.x = 0.5;
                    this.backgrounds[id].anchor.y = 0.5;
                });

                // this.changeBackground(Settings.mainBackgroundName, 0.5);
            }

            private changeBackground(id: string, fadeTime: number) {
                if (this.backgrounds[id]) {
                    let newBackground: Sprite = this.backgrounds[id];
                    newBackground.alpha = 0;
                    this.addChild(newBackground);

                    if(!_.isUndefined(this.currentBackground) && !_.isNull(this.currentBackground))
                    {
                        let oldBackground:Sprite = this.currentBackground;
                        TweenMax.to(newBackground, fadeTime, {alpha: 1, onComplete:this.removeBackgroundFromParent.bind(this), onCompleteParams:[oldBackground]});
                    }
                    else
                    {
                        TweenMax.to(newBackground, fadeTime, {alpha: 1});
                    }

                    this.currentBackground = newBackground;

                }
                else {
                    console.warn("background id not registered: " + id);
                }
            }

            private removeBackgroundFromParent(background: Sprite): void {
                if (background && background.parent)
                    background.parent.removeChild(background);
            }


            protected onResize(params: any[]): void {

                super.onResize(params);

                if (this.currentBackground && this.currentBackground == this.backgrounds[Settings.mainBackgroundName]) {
                    this.currentBackground.height = Settings.stageHeight;
                    let scale: number = this.currentBackground.scale.y;
                    this.currentBackground.scale.x = scale;
                    if (this.currentBackground.width < Settings.stageWidth) {
                        this.currentBackground.width = Settings.stageWidth;
                        scale = this.currentBackground.scale.x;
                        this.currentBackground.scale.y = scale;
                    }

                    this.currentBackground.x = Settings.stageWidth / 2;
                    this.currentBackground.y = Settings.stageHeight / 2;
                }

            }

        }


    }
}