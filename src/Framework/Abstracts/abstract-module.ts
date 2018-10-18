///<reference path="../Signals/signals-manager.ts"/>
///<reference path="../Signals/signal-types.ts"/>
// Created by: Sandru Andrei for Edgeflow on 7/11/2018
namespace Framework {
    export module Abstracts {
        import Container = PIXI.Container;
        import DisplayObject = PIXI.DisplayObject;
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class AbstractModule {

            //files that the loader module should load
            public AssetsToLoad: string[];
            public Name: string = "AbstractModule";
            public Layer: Container;
            public ElementsCreated: boolean = false;

            constructor() {
                this.registerSignalsHandlers();
                this.AssetsToLoad = [];
            }

            public addAssetToLoad(path: string): void {
                this.AssetsToLoad.push(path);
            }

            public createElements() {
                console.log("%c" + this.Name + " Elements Created!", "color: green");
                this.ElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);

                // if (_.isNull(this.Display) || _.isUndefined(this.Display)) {
                //     this.Display = new Container();
                // }
            }


            protected addChild(child: DisplayObject) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.addChild(child);
            }

            protected removeChild(child: DisplayObject) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.removeChild(child);
            }


            protected registerSignalsHandlers() {
                SignalsManager.AddSignalCallback(SignalsType.WINDOW_RESIZE, this.onResize.bind(this));
            }

            protected onResize(params: any[]): void {

                if (Settings.stageWidth >= Settings.stageHeight) {
                    if (Settings.isMobile) {
                        this.handleMobileLandscape();
                    }
                    else {
                        this.handleDesktopLandscape();
                    }

                }
                else {
                    if (Settings.isMobile) {
                        this.handleMobilePortrait();
                    }
                    else {
                        this.handleDesktopPortrait();

                    }
                }
                // console.log("%c" + this.Name + " onResize", "color: red");

            }

            protected handleMobileLandscape(): void {

            }

            protected handleMobilePortrait(): void {

            }

            protected handleDesktopLandscape(): void {
            }

            protected handleDesktopPortrait(): void {
                this.handleDesktopLandscape();
            }
        }
    }
}


