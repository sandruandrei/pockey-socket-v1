/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/1/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;
        import Container = PIXI.Container;

        export class PuckGoal extends Container {


            public type: BallType;

            private goalRightPath: string = "goalTop_right.png";
            private goalTopRightPath: string = "goalTop_righttTopper.png";

            private goalLeftPath: string = "goalTop_left.png";
            private goalTopLefttPath: string = "goalTop_leftTopper.png";

            private goalGraphics: Sprite;
            private goalGraphicsAnimator: Sprite;
            private goalTopGraphics: Sprite;
            private animationStarted: boolean = false;
            private goalAnimationTween: TweenMax;
            // private _caca:number
            // private _tint:number;
            constructor(side: string) {
                super();

                if (side == "left") {
                    this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
                    this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
                    this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalTopLefttPath));
                }
                else {
                    this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
                    this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
                    this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalTopRightPath));
                }

                this.addChild(this.goalGraphics);
                this.goalGraphicsAnimator.visible = false;
                this.addChild(this.goalGraphicsAnimator);
                this.addChild(this.goalTopGraphics);
            }

            set tint(color: number) {
                this.goalGraphics.tint = color;
                // this._tint = value;
            }

            public animate(): void {
                if (!this.animationStarted) {
                    this.animationStarted = true;
                    this.goalGraphicsAnimator.visible = true;
                    this.goalGraphicsAnimator.alpha = 0;
                    this.goalAnimationTween = TweenMax.to(this.goalGraphicsAnimator, 0.2, {
                        alpha: 0.68,
                        yoyo: true,
                        repeat: -1
                    });
                }
            }

            public stopAnimation(): void {
                if (this.animationStarted) {
                    this.animationStarted = false;
                    this.goalGraphicsAnimator.visible = false;
                    if (this.goalAnimationTween && this.goalAnimationTween.isActive())
                        this.goalAnimationTween.kill();
                }
            }

        }
    }
}
