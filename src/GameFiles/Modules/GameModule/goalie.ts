///<reference path="../../../Framework/Settings.ts"/>
///<reference path="../../../Framework/Signals/signals-manager.ts"/>
///<reference path="../StateMachine/pockey-state-texts.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/21/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Settings = Framework.Settings;
        import SignalsManager = Framework.Signals.SignalsManager;
        import PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        import PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;

        export class Goalie extends PIXI.Container {

            private goalieBottomLayer: Sprite;
            public goalieMiddleLayer: Sprite;
            private goalieTopLayer: Sprite;
            private animationTimeline: TimelineMax;

            public type: string;
            public moving: boolean = false;

            constructor() {
                super();

                this.goalieBottomLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_bottom.png"));
                this.goalieMiddleLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_color.png"));
                this.goalieTopLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_top.png"));
                this.addChild(this.goalieBottomLayer);
                this.addChild(this.goalieMiddleLayer);
                this.addChild(this.goalieTopLayer);

                this.pivot.set(this.width / 2, this.height / 2);

                // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUiText.bind(this));
                // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame])
            }

            private onUpdateUiText(params: any[]): void {
                if (params[0] == PockeyStateTexts.beginGame) {
                    this.startMoving();
                }
            }

            public startMoving(): void {
                this.reset();
                this.moving = true;
                this.animationTimeline = new TimelineMax();
                this.animationTimeline.add(TweenMax.to(this, PockeySettings.GOALIE_SPEED / 2, {
                    y: -50,
                    ease: Linear.easeNone
                }));
                this.animationTimeline.add(TweenMax.to(this, PockeySettings.GOALIE_SPEED, {
                    y: 50,
                    yoyo: true,
                    repeat: -1, ease: Linear.easeNone
                }), PockeySettings.GOALIE_SPEED / 2);
            }

            public reset(): void {
                this.moving = false;
                if (this.animationTimeline && this.animationTimeline.isActive()) {
                    this.animationTimeline.kill();
                    this.animationTimeline = null;
                }

                // this.goalieMiddleLayer.tint = null;
                this.y = 0;
            }
        }
    }
}
