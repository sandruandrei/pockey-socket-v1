
namespace Framework {
    export module Background {
        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export interface iBackground {
            initialWidth?:number,
            initialHeight?:number,
            path:string,
            div:HTMLDivElement,
        }

        export class AbstractBackgroundModule extends AbstractModule {

            protected backgrounds: { [name: string]: iBackground; };
            protected currentBackground: iBackground;

            constructor() {
                super();

                this.addAssetToLoad(Settings.desktopAssetsPath + Settings.backgroundsPath + "main_bg.png");
                this.registerBackground(Settings.mainBackgroundName, Settings.desktopAssetsPath + Settings.backgroundsPath + "main_bg.png", document.getElementById("MainBackground") as HTMLDivElement);
            }


            protected registerSignalsHandlers(): void {

                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(SignalsType.CHANGE_BACKGROUND, this.onChangeBackground.bind(this));
            }

            private onChangeBackground(param: any[]): void {
                this.changeBackground(param[0].toString(), +param[1]);
            }

            public registerBackground(name: string, texturePath: string, htmlDiv:HTMLDivElement): void {
                if (!this.backgrounds)
                    this.backgrounds = {};

                let bg:iBackground = {path: texturePath, div:htmlDiv};
                bg.initialWidth = bg.div.offsetWidth;
                bg.initialHeight = bg.div.offsetHeight;

                this.backgrounds[name] = bg;
            }


            public createElements(): void {
                super.createElements();

                _.forEach(this.backgrounds, (bg:iBackground) => {
                    bg.div.style.background = "center / contain no-repeat #1A4157 url(" + bg.path + ")";
                    bg.div.style.opacity = "0";

                    if(bg.initialHeight == 0 || bg.initialWidth == 0)
                    {
                        bg.initialWidth = bg.div.offsetWidth;
                        bg.initialHeight = bg.div.offsetHeight;
                    }

                    bg.div.style.display = "none";
                });

                // this.changeBackground(Settings.mainBackgroundName, 60);
            }

            private changeBackground(id: string, fadeTime: number) {

                if (this.backgrounds[id]) {
                    let newBackground: iBackground = this.backgrounds[id];
                    if(this.currentBackground == newBackground)
                    {
                        return;
                    }
                    newBackground.div.style.opacity = "0";
                    newBackground.div.style.display = "block";
                    // this.addChild(newBackground);
                    //
                    if(!_.isUndefined(this.currentBackground) && !_.isNull(this.currentBackground))
                    {
                        let oldBackground:iBackground = this.currentBackground;

                        TweenMax.to(newBackground.div, fadeTime, {css:{opacity:1}, onComplete:this.removeBackgroundFromParent.bind(this), onCompleteParams:[oldBackground.div]});
                    }
                    else
                    {
                        TweenMax.to(newBackground.div, fadeTime, {css:{opacity:1}});
                    }


                    this.currentBackground = newBackground;

                }
                else {
                    console.warn("background id not registered: " + id);
                }
            }

            private removeBackgroundFromParent(background: HTMLDivElement): void {
                background.style.display = "none";
                // if (background && background.parent)
                //     background.parent.removeChild(background);
            }


            protected onResize(params: any[]): void {

                super.onResize(params);



            }

        }


    }
}