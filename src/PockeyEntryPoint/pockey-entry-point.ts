///<reference path="../GameFiles/Modules/GameModule/pockey-game-module.ts"/>
///<reference path="../GameFiles/Modules/GameModule/game-manager.ts"/>
///<reference path="../GameFiles/Modules/BackgroundModule/pockey-background-module.ts"/>
///<reference path="../GameFiles/Modules/GameModule/p2-world-manager.ts"/>
///<reference path="../Framework/Utils/mouse-handler.ts"/>
///<reference path="../Framework/Abstracts/layers.ts"/>
///<reference path="../Framework/Settings.ts"/>
///<reference path="../Framework/abstract-entry-point.ts"/>
///<reference path="../GameFiles/Modules/ConnectionModule/pockey-connection-module.ts"/>
///<reference path="../GameFiles/Modules/UserInterface/pockey-user-interface-module.ts"/>
///<reference path="../Framework/Utils/cookie.ts"/>
///<reference path="../Framework/AbstractModules/Connection/database-connector.ts"/>

namespace Pockey {

    import AbstractEntryPoint = Framework.AbstractEntryPoint;
    import AbstractModule = Framework.Abstracts.AbstractModule;
    import Settings = Framework.Settings;
    import Layers = Framework.Layers;
    import PockeyGameModule = Pockey.GameModule.PockeyGameModule;
    import GameManager = Pockey.GameModule.GameManager;
    import P2WorldManager = Pockey.GameModule.P2WorldManager;
    import PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
    import SignalsManager = Framework.Signals.SignalsManager;
    import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
    import MouseHandler = Framework.Utils.MouseHandler;
    import PockeyBackgroundModule = Pockey.Background.PockeyBackgroundModule;
    import PockeyConnectionModule = Pockey.Connection.PockeyConnectionModule;
    import PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
    import PockeyUserInterfaceModule = Pockey.UserInterface.PockeyUserInterfaceModule;
    import PockeySoundURLS = Pockey.Sound.PockeySoundURLS;

    export class PockeyEntryPoint extends AbstractEntryPoint {
        private gameModule: AbstractModule;


        private fixedTimeStep = 1 / 60;
        private maxSubSteps = 6;
        private lastTimeMilliseconds;

        // private fixedTimeStep = 1 / 60; // seconds
        // private maxSubSteps = 7; // Max sub steps to catch up with the wall clock
        // private lastTime;
        // public static p2World: p2.World;

        // private groundBody: p2.Body;
        // private groundBody: p2.Body;

        // private circleBody: p2.Body;
        constructor() {
            super();
            this.name = "PockeyEntryPoint";
        }


        protected checkDevice(): void {
            super.checkDevice();

            if (Settings.isMobile) {
                this.loadjscssfile("css/mainMenuScreenMobile.css", "css");
                this.loadjscssfile("css/inventoryScreenMobile.css", "css");
                this.loadjscssfile("css/leaderboardMobile.css", "css");
                // this.loadjscssfile("mainMenuScreenMobile.css", "css");
            }
        }

        private loadjscssfile(filename, filetype): void {
            /*let fileref:any;
            if (filetype == "css") { //if filename is an external CSS file
                fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", filename)
            }
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref)*/

            // make a stylesheet link
            let myCSS = document.createElement("link");
            myCSS.rel = "stylesheet";
            myCSS.href = filename;
// insert it at the end of the head in a legacy-friendly manner
            document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
        }

        protected addFontsToLoad(): void {
            super.addFontsToLoad();

            this.assetsLoader.addFontToLoad("troika");
            this.assetsLoader.addFontToLoad("opensansextrabold");
        }

        protected addModules(): void {
            //start game module instantiation
            this.gameModule = this.getGameModule();
            this.registerModule(this.gameModule);
            //end of game module instantiation

            super.addModules();


        }


        // protected addUIModule(): void {
        //     // super.addUIModule();
        //     this.uiModule = this.getUIModule();
        //     this.registerModule(this.uiModule);
        // }

        protected getGameModule(): AbstractModule {
            let gameModule = new PockeyGameModule();
            gameModule.Name = "GameModule";
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.png");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballTexture.jpg");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.json");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.png");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bottom.png");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_over.png");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_shadow.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_color.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_top.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballTexture.jpg");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls/balls.json");
            // gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls/balls.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_felt.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bumper.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_border_01.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballGraphics/puck2.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ui_versus-main.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_pockeyball-comet.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_sprite-cue.png");

            gameModule.addAssetToLoad(PockeySoundURLS.MAIN_MENU_AMBIANCE);
            gameModule.addAssetToLoad(PockeySoundURLS.IN_GAME_AMBIANCE);
            gameModule.addAssetToLoad(PockeySoundURLS.SHOOT_BALL);
            gameModule.addAssetToLoad(PockeySoundURLS.LAST_FIVE_SECONDS);
            gameModule.addAssetToLoad(PockeySoundURLS.OPPONENT_FOUND);
            gameModule.addAssetToLoad(PockeySoundURLS.BALL_TO_BALL_HIT);
            gameModule.addAssetToLoad(PockeySoundURLS.GOALKEEPER_HIT);
            gameModule.addAssetToLoad(PockeySoundURLS.BALL_IN_POCKET);

            gameModule.Layer = this.getLayer(Layers.GameLayer);

            return gameModule;
        }

        protected getUIModule(): AbstractModule {
            let uiModule = new PockeyUserInterfaceModule();
            uiModule.Name = "PockeyUIModule";
            // uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            // uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_background.svg");

            /* uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Midtown.eot");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Midtown.svg");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Midtown.ttf");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Midtown.woff");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Midtown.woff2");

             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSansExtraBold.eot");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSans-Extrabold.svg");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSansExtraBold.ttf");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSans-Extrabold.ttf");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSans-Extrabold.woff");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/OpenSansExtrabold.woff2");

             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/troika.otf");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Troika.eot");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Troika.svg");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Troika.ttf");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Troika.woff");
             uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Fonts/Troika.woff2");*/

            // _.forEach(PockeySettings.LARGE_AVATARS_ARRAY, (path: string) => {
            //     uiModule.addAssetToLoad(path);
            // });

            // uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-menu_BG.png");
            uiModule.Layer = this.getLayer(Layers.UILayer);

            return uiModule;
        }

        protected getBackgroundModule(): AbstractModule {
            let backgroundModule = new PockeyBackgroundModule();
            backgroundModule.registerBackground(PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png", document.getElementById("SecondBackground") as HTMLDivElement);

            backgroundModule.Name = "PockeyBackgroundModule";
            backgroundModule.addAssetToLoad(Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png");
            backgroundModule.Layer = this.getLayer(Layers.BackgroundLayer);

            return backgroundModule;
        }


        protected getConnectionModule(): AbstractModule {
            let connectionModule: AbstractModule = new PockeyConnectionModule();
            connectionModule.Name = 'PockeyConnectionModule';
            return connectionModule;
        }

        /* protected getSoundModule(): Framework.Abstracts.AbstractModule {
             let soundModule: AbstractSoundModule = new AbstractSoundModule();

             soundModule.Layer = this.getLayer(Layers.DefaultLayer);

             soundModule.addAssetToLoad(PockeySoundURLS.MAIN_MENU_AMBIANCE);
             soundModule.addAssetToLoad(PockeySoundURLS.IN_GAME_AMBIANCE);
             soundModule.addAssetToLoad(PockeySoundURLS.SHOOT_BALL);
             soundModule.addAssetToLoad(PockeySoundURLS.LAST_FIVE_SECONDS);
             soundModule.addAssetToLoad(PockeySoundURLS.OPPONENT_FOUND);
             soundModule.addAssetToLoad(PockeySoundURLS.BALL_TO_BALL_HIT);

             return soundModule;
         }*/

        protected initializeSingletons(): void {
            super.initializeSingletons();

            PockeyStateMachine.Instance();
            GameManager.Instance();
            MouseHandler.Instance();
            P2WorldManager.Instance();
        }


        protected initializePixi(): void {
            P2WorldManager.Instance().world = new p2.World({
                gravity: [0, 0]
            });

            super.initializePixi();

            //-------------------------------------


            // To animate the bodies, we must step the world forward in time, using a fixed time step size.
// The World will run substeps and interpolate automatically for us, to get smooth animation.


// Animation loop


            // var groundShape = new p2.Plane();
            // this.groundBody = new p2.Body({
            //     mass: 0
            // });
            // this.groundBody.addShape(groundShape);


            // var timeStep = 1/60;
            // setInterval(function(){
            //     P2WorldManager.Instance().world.step(timeStep);
            //     // console.log("Circle x position: " + this.circleBody.position[0]);
            //     // console.log("Circle y position: " + this.circleBody.position[1]);
            //     // console.log("Circle angle: " + this.circleBody.angle);
            // }.bind(this), 1000 * timeStep);
            // requestAnimationFrame(this.animate.bind(this));

        }

        // function animate(time){
        //     requestAnimationFrame(animate);
        //
        //     // Compute elapsed time since last render frame
        //     var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
        //
        //     // Move bodies forward in time
        //     world.step(fixedTimeStep, deltaTime, maxSubSteps);
        //
        //     // Render the circle at the current interpolated position
        //     renderCircleAtPosition(circleBody.interpolatedPosition);
        //
        //     lastTime = time;
        // }

        protected frameAnimate(): void {
            super.frameAnimate();

            this.animate(Date.now());
            // if (P2WorldManager.Instance().world)
            //     P2WorldManager.Instance().world.step(PockeySettings.P2_WORLD_STEP);

            // let d = new Date();
            // var n = d.getTime();
            // this.animate(d.getTime());

            // P2WorldManager.Instance().world.step(1/60);
            // var timeStep:number = 1/60;
            // setInterval(function(){
            //     P2WorldManager.Instance().world.step(timeStep);

            // if(this.groundBody)
            // console.log("ground body: " + this.groundBody.position);

            // if (this.circleBody)
            // console.log("circle body: " + this.circleBody.velocity);
        }

        // Frame rate independent! Success!
        // var fixedTimeStep = 1 / 60, maxSubSteps = 10, lastTimeMilliseconds;
        // private requestAnimationFrame( animloop(timeMilliseconds):Function){
        //     requestAnimationFrame(animloop);
        //     var timeSinceLastCall = 0;
        //     if(timeMilliseconds !== undefined && this.lastTime !== undefined){
        //         timeSinceLastCall = (timeMilliseconds - this.lastTime) / 1000;
        //     }
        //     P2WorldManager.Instance().world.step(PockeySettings.P2_WORLD_STEP, timeSinceLastCall, this.maxSubSteps);
        //     this.lastTime = timeMilliseconds;
        // }

        // Animation loop
        private animate(time) {
            /* var timeSinceLastCall = 0;
             if(time !== undefined && this.lastTimeMilliseconds !== undefined){
                 timeSinceLastCall = (time - this.lastTimeMilliseconds) / 1000;
             }
             P2WorldManager.Instance().world.step(this.fixedTimeStep, timeSinceLastCall, this.maxSubSteps);
             this.lastTimeMilliseconds = time;*/

            let timeSeconds: number = time / 1000;
            this.lastTimeMilliseconds = this.lastTimeMilliseconds || timeSeconds;
            let timeSinceLastCall = timeSeconds - this.lastTimeMilliseconds;
            P2WorldManager.Instance().world.step(this.fixedTimeStep, timeSinceLastCall, this.maxSubSteps);
            // renderBody(body.interpolatedPosition, body.interpolatedAngle);
        }


        protected registerSignals() {
            super.registerSignals();

            SignalsManager.CreateNewSignal(PockeySignalTypes.CHECK_USER_DATA);
            SignalsManager.CreateNewSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOT_BALL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.BALL_IN_POCKET);
            SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FIRST_BALL_FAULT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.REPOSITION_WHITE_BALL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.REACTIVATE_STICK);
            SignalsManager.CreateNewSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.STICK_MOBILE_RELEASE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_STICK_POWER_MOBILE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_STICK_POWER_MOBILE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
            SignalsManager.CreateNewSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.WATCH);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.SCORE_UPDATE);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.YOUR_TURN);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.OPPONENT_SETTINGS);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.OPPONENT_NEXT_ROUND);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_MAIN_MENU);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_MAIN_MENU);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_POOLTABLE);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_GAME_UI);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_GAME_UI);

            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);

            SignalsManager.CreateNewSignal(PockeySignalTypes.START_GAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_STICK_POWER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_GAME_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESTART_GAME);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SET_SIDES_TYPE);

            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_NAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR);

            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_STATE_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER);
            // SignalsManager.CreateNewSignal(PockeySignalTypes.UP);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_COLOR);

            SignalsManager.CreateNewSignal(PockeySignalTypes.SET_TIMESTAMP_ON_WATCH);
            SignalsManager.CreateNewSignal(PockeySignalTypes.ON_WATCH_FINISHED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CREATE_POOLTABLE_STATE);

            SignalsManager.CreateNewSignal(PockeySignalTypes.APPLY_POOLTABLE_STATE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);

            // SignalsManager.CreateNewSignal(PockeySignalTypes.ANIMATE_PUCK_GOAL);
            // SignalsManager.CreateNewSignal(PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP);
            // SignalsManager.CreateNewSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER);
            // SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOTING_ENDED);
        }
    }
}

let mainModule: Pockey.PockeyEntryPoint;

// window.onload = function (): void {
//     //@ts-ignore
//     // this.createPreloader();
//
//     mainModule = new Pockey.PockeyEntryPoint();
//     // @ts-ignore
//     // TouchPoint.init();
//     this.onresize = (event) => {
//         mainModule.windowResize(window.innerWidth, window.innerHeight);
//     };
// };

document.addEventListener("windowLoaded", function(){
    // this.createPreloader();

    mainModule = new Pockey.PockeyEntryPoint();
    // @ts-ignore
    // TouchPoint.init();
    window.onresize = (event) => {
        mainModule.windowResize(window.innerWidth, window.innerHeight);
    };
});

