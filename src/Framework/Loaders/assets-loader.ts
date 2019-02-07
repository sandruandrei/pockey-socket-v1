///<reference path="../Signals/signals-manager.ts"/>
///<reference path="../Signals/signal-types.ts"/>
// Created by: Sandru Andrei for Edgeflow on 7/11/2018

namespace Framework {
    export module Loaders {
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class AssetsLoader {

            // private static _instance: AssetsLoader = new AssetsLoader();
            private loader = PIXI.loader;
            private assetsNames: string[];
            protected fontsToLoad: string[];

            constructor() {
                this.assetsNames = [];

                this.loader.onComplete.add(() => {
                    _.forEach(this.assetsNames, (assetName:string)=>
                    {
                        if(_.includes(assetName,".mp3") ||
                            _.includes(assetName,".ogg") ||
                            _.includes(assetName,".wav"))
                        {
                            SignalsManager.DispatchSignal(SignalsType.CREATE_SOUND_CACHE, [assetName]);
                        }
                    });

                    SignalsManager.DispatchSignal(SignalsType.ASSETS_LOADED);
                });
                this.loader.onProgress.add(() => {
                    let event:CustomEvent = new CustomEvent('progress', { detail: this.loader.progress});

                    // let event:Event = new Event('progress');
                    document.dispatchEvent(event);
                    // console.log("progresu: " + this.loader.progress);
                })
            }

            public addAssetToLoad(assetName: string): void {
                if (!_.includes(this.assetsNames, assetName))
                {
                    this.assetsNames.push(assetName);
                    this.loader.add(assetName);
                }
            }

            public StartLoading(): void {
                this.loadFonts();
                this.loader.load();
            }

            public addFontToLoad(fontName:string) {
                if (!this.fontsToLoad)
                    this.fontsToLoad = [];

                this.fontsToLoad.push(fontName);
            }

            private loadFonts(): void {

                WebFont.load(
                    {
                        active: () => {
                            // let browser take a breath. Some fonts may require more room for taking deep breath
                            TweenMax.delayedCall(0.4, this.onFontLoadComplete.bind(this))
                        },
                        // when font is loaded do some magic, so font can be correctly rendered immediately after PIXI is initialized
                        // this event is triggered when the fonts have been rendered, see https://github.com/typekit/webfontloader
                        fontloading: this.preRenderFont.bind(this),

                        // multiple fonts can be passed here
                        custom: {
                            families: this.fontsToLoad,
                            urls: ['/css/fonts.css']
                        }
                        // google: {
                        //     families: this.fontsToLoad
                        // }
                    })

            }

            protected onFontLoadComplete():void
            {
                console.log("Font Loading Complete");
            }

            private preRenderFont():void
            {
               /* let el = document.createElement('p');
                el.style.fontFamily = this._titleFont;
                el.style.fontSize = "0px";
                el.style.visibility = "hidden";
                el.innerHTML = '.';

                document.body.appendChild(el);*/
            }
        }
    }
}