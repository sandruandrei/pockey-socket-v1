///<reference path="Loaders/assets-loader.ts"/>
///<reference path="Abstracts/abstract-module.ts"/>
///<reference path="AbstractModules/Background/abstract-background-module.ts"/>
///<reference path="Signals/signals-manager.ts"/>
///<reference path="AbstractModules/UserInterface/abstract-user-interface-module.ts"/>
///<reference path="Utils/touch-handler.ts"/>
///<reference path="AbstractModules/Connection/abstract-connection-module.ts"/>
///<reference path="Abstracts/layers.ts"/>
///<reference path="../../lib/types/webfontloader/webfontloader.d.ts"/>
///<reference path="AbstractModules/Connection/database-connector.ts"/>

// Created by: Sandru Andrei for Edgeflow on 7/11/2018

namespace Framework {
    import AbstractModule = Framework.Abstracts.AbstractModule;
    import AssetsLoader = Framework.Loaders.AssetsLoader;
    import Container = PIXI.Container;
    import WebGLRenderer = PIXI.WebGLRenderer;
    import CanvasRenderer = PIXI.CanvasRenderer;
    import SignalsManager = Framework.Signals.SignalsManager;
    import SignalsType = Framework.Signals.SignalsType;
    import TouchHandler = Framework.Utils.TouchHandler;
    import AbstractConnectionModule = Framework.Connection.AbstractConnectionModule;
    import AbstractBackgroundModule = Framework.Background.AbstractBackgroundModule;
    import AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
    import ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
    import Settings = Framework.Settings;
    import DatabaseConnector = Framework.Connection.DatabaseConnector;


    export class AbstractEntryPoint {
        //array holding all the modules that the framework will use
        protected gameModules: AbstractModule[];
        //the pixi loader that will load all the assets mapped to each module
        protected assetsLoader: AssetsLoader;
        protected name: string = "";

        protected stage: Container;
        protected backgroundModule: AbstractModule;
        protected uiModule: AbstractModule;
        protected connectionModule: AbstractModule;
        public static renderer: WebGLRenderer | CanvasRenderer;


        constructor() {
            this.name = "AbstractEntryPoint";

            this.getCookieData();
            this.checkDevice();
            this.setWindowSize();
            this.initializePixi();
            this.registerSignals();
            this.subscribeToSignals();
            this.createLayers();
            this.addModules();
            this.initializeSingletons();
            this.startLoadingAssets();
        }

        protected getCookieData(): void {
            // this.connectToDataBase();
        }

        // protected connectToDataBase(): void {
        //     let dbConnector: DatabaseConnector = new DatabaseConnector();
        // }

        private setWindowSize(): void {
            Settings.stageWidth = window.innerWidth;
            Settings.stageHeight = window.innerHeight;
        }

        private checkDevice(): void {
            if (this.isMobile()) {
                Settings.isMobile = true;
                console.log("%c AbstractEntryPoint -> running on MOBILE!", "background: green; color: white; font-weight:bold; ");
                return;
            }

            console.log("%c AbstractEntryPoint -> running on DESKTOP!", "background: green; color: white; font-weight:bold; ");
        }


        //here Pixi is initiated. Make sure you define the stage width and height before calling this method
        protected initializePixi(): void {

            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;

            // SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE, [this.stageWidth, this.stageHeight]);

            // PIXI.Texture.SC.DEFAULT = PIXI.Texture.SCALE_MODE.NEAREST;

            AbstractEntryPoint.renderer = PIXI.autoDetectRenderer(Settings.stageWidth, Settings.stageHeight, {
                backgroundColor: 0x0f404b,
                antialias: true,
                // roundPixels: true,
                // resolution: 2;

                // transparent: true
            });
            AbstractEntryPoint.renderer.view.style.position = "absolute";
            AbstractEntryPoint.renderer.view.style.top = "0px";
            AbstractEntryPoint.renderer.view.style.left = "0px";
            AbstractEntryPoint.renderer.view.style.zIndex = "-800";

            // var c = document.getElementById("canvas");
            // //@ts-ignore
            // var ctx = c.getContext("2d");
            //
            // // ctx.fillStyle="red";
            // // ctx.fillRect(20,20,75,50);
            // // ctx.globalCompositeOperation="source-over";
            // // ctx.fillStyle="blue";
            // // ctx.fillRect(50,50,75,50);
            // //
            // // ctx.fillStyle="red";
            // // ctx.fillRect(150,20,75,50);
            // //@ts-ignore
            // ctx.globalCompositeOperation = "destination-over";
            // AbstractEntryPoint.renderer.view.style.ctx.globalCompositeOperation='destination-over';

            document.body.appendChild(AbstractEntryPoint.renderer.view);

            this.stage = new Container();
            /*if(Settings.isMobile){
                console.log("e mobil in plm");
                // this.stage.buttonMode = true;
                // this.stage.interactive = true;
                // this.stage.defaultCursor = "url(cursor.png) 3 2, auto";
                this.stage.buttonMode = true;
                this.stage.interactive = true;
                this.stage.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
                this.stage.defaultCursor = "url(cursor.png) 3 2, auto";
            }*/

            this.frameAnimate();
        }

        //all the modules used in the game should be mapped from here, before calling startLoadingAssets() as super()
        protected addModules() {
            //map the modules here before calling startLoadingAssets() by using registerModule(module)
            this.addConnectionModule();
            this.addBackgroundModule();
            this.addUIModule();


        }

        protected addBackgroundModule(): void {
            this.backgroundModule = this.getBackgroundModule();
            this.registerModule(this.backgroundModule);
        }

        protected addConnectionModule(): void {
            this.connectionModule = this.getConnectionModule();
            this.registerModule(this.connectionModule);
        }

        protected addUIModule(): void {
            this.uiModule = this.getUIModule();
            this.registerModule(this.uiModule);
        }

        //once every the textures have been mapped to its according module, all of them will be loaded.
        // When everything is loaded the callback method onAssetsLoadComplete is called and will tell each module
        // that it can start do his thing in  module.createElements();
        protected startLoadingAssets() {

            if (_.isNull(this.assetsLoader) || _.isUndefined(this.assetsLoader)) {
                this.assetsLoader = new AssetsLoader(this.onAssetsLoadComplete.bind(this));
            }

            this.addFontsToLoad();

            console.log(this.gameModules);
            _.forEach(this.gameModules, (module: AbstractModule) => {
                _.forEach(module.AssetsToLoad, (asset: string) => {

                    this.assetsLoader.addAssetToLoad(asset);

                });
            });


            this.assetsLoader.StartLoading();
        }

        protected addFontsToLoad(): void {
            // this.assetsLoader.addFontToLoad();
        }

        protected onAssetsLoadComplete(): void {
            //when each asset of each module is loaded that module will start creating the elements
            _.forEach(this.gameModules, (module: AbstractModule) => {
                module.createElements();
                // this.stage.addChild(module.Layer);
            });

        }

        protected registerModule(module: AbstractModule) {
            if (_.isNull(this.gameModules) || _.isUndefined(this.gameModules)) {
                this.gameModules = [];
            }

            this.gameModules.push(module);
        }

        protected frameAnimate() {
            requestAnimationFrame(this.frameAnimate.bind(this));

            // if (Settings.stageWidth != window.innerWidth || Settings.stageHeight != window.innerHeight) {
            //     this.windowResize();
            // }
            // //Render the stage
            AbstractEntryPoint.renderer.render(this.stage);
        }

        protected getBackgroundModule(): AbstractModule {
            let backgroundModule: AbstractBackgroundModule = new AbstractBackgroundModule();

            backgroundModule.Layer = this.getLayer(Layers.BackgroundLayer);

            return backgroundModule;
        }

        protected getUIModule(): AbstractModule {

            let uiModule: AbstractModule = new AbstractUserInterfaceModule();
            uiModule.Layer = this.getLayer(Layers.UILayer);

            return uiModule;
        }

        protected getConnectionModule(): AbstractModule {

            console.log("intra la get connection module in: " + this.name);
            let connectionModule: AbstractModule = new AbstractConnectionModule();
            return connectionModule;
        }

        public windowResize(stageWidth: number, stageHeight: number) {
            if (Settings.stageWidth == stageWidth && Settings.stageHeight == stageHeight) {
                return;
            }

            Settings.stageWidth = stageWidth;
            Settings.stageHeight = stageHeight;
            // if(window.innerWidth >= window.innerHeight)
            // {
            //     Settings.stageWidth = window.innerWidth;
            //     Settings.stageHeight = window.innerHeight;
            // }
            // else
            // {
            //     Settings.stageWidth = window.innerHeight;
            //     Settings.stageHeight = window.innerWidth;
            // }
            /*
            Settings.stageWidth = window.innerWidth;
            Settings.stageHeight = window.innerHeight;*/
            console.log("la window resize: w - h : " + Settings.stageWidth, Settings.stageHeight);
            // this.stageWidth = window.innerWidth;
            // this.stageHeight = window.innerHeight;

            AbstractEntryPoint.renderer.resize(Settings.stageWidth, Settings.stageHeight);

            SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
        }

        private createLayers() {

            // Layers.LayerOrder.reverse();
            for (let i = 0; i < Layers.LayerOrder.length; i++) {
                let layerName: string = Layers.LayerOrder[i];
                let layer: Container = new Container();
                layer.name = layerName;
                this.stage.addChild(layer);
            }
            // _.forEach(Layers.LayerOrder, (layerName: string) => {
            //     let layer: Container = new Container();
            //     layer.name = layerName;
            //     this.stage.addChild(layer);
            // })
        }

        protected getLayer(layerName: string): Container {
            return this.stage.getChildByName(layerName) as Container;
        }

        protected initializeSingletons() {
            SignalsManager.Instance();
            TouchHandler.Instance();
        }

        private subscribeToSignals() {
            SignalsManager.GetSignal(SignalsType.ASSETS_LOADED).add(this.onAssetsLoadComplete.bind(this));
            SignalsManager.GetSignal(SignalsType.MODULE_ELEMENTS_CREATED).add(this.onModuleElementsCreated.bind(this));
        }

        protected registerSignals() {
            SignalsManager.CreateNewSignal(SignalsType.ASSETS_LOADED);
            SignalsManager.CreateNewSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.WINDOW_RESIZE);
            SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
            /*SignalsManager.CreateNewSignal(SignalsType.REGISTER_MAIN_BACKGROUND);
            SignalsManager.CreateNewSignal(SignalsType.REGISTER_CUSTOM_BACKGROUND);*/
            SignalsManager.CreateNewSignal(ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_DISCONNECTED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.PRIVATE_MESSAGE);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.UPDATE_SOCKET_ID);

        }

        private onModuleElementsCreated(): void {
            let modulesCounter: number = 0;

            _.forEach(this.gameModules, (module: AbstractModule) => {
                if (module.ElementsCreated) {

                    modulesCounter++;
                }
            });

            if (modulesCounter == this.gameModules.length) {
                SignalsManager.DispatchSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
                SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);

            }

            // TweenMax.delayedCall(0.05, this.windowResize, [Settings.stageWidth, Settings.stageHeight]);

        }

        private isMobile(): boolean {
            if (navigator.userAgent.match(/Mobi/)) {
                return true;
            }

            if ('screen' in window && window.screen.width < 1366) {
                return true;
            }

            // @ts-ignore
            let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

            if (connection && connection.type === 'cellular') {
                return true;
            }

            return false;
        }


    }
}

