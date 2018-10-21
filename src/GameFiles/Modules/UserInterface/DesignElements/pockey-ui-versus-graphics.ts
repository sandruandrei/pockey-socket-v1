///<reference path="pockey-ui-match-circle.ts"/>
namespace Pockey {
    export module UserInterface {
        import Sprite = PIXI.Sprite;
        import Graphics = PIXI.Graphics;
        import Settings = Framework.Settings;

        export class PockeyUiVersusGraphics extends Container {
            public leftSideMatchCircles: PockeyUiMatchCircle[];
            private leftSideMatchCirclesContainer: Container;
            public rightSideMatchCircles: PockeyUiMatchCircle[];
            private rightSideMatchCirclesContainer: Container;
            private versusGraphics: Sprite;

            constructor() {
                super();
                this.versusGraphics = new Sprite(PIXI.Texture.fromFrame("vs.png"));
                this.addChild(this.versusGraphics);
                if(Settings.isMobile)
                {
                    // this.versusGraphics.visible = false;
                }

                this.leftSideMatchCirclesContainer = new Container();
                this.addChild(this.leftSideMatchCirclesContainer);
                this.leftSideMatchCircles = [];
                this.rightSideMatchCirclesContainer = new Container();
                this.addChild(this.rightSideMatchCirclesContainer);
                this.rightSideMatchCircles = [];

                let circle1: PockeyUiMatchCircle = new PockeyUiMatchCircle();
                let circle2: PockeyUiMatchCircle = new PockeyUiMatchCircle();
                circle1.x = circle2.width + 10;
                this.leftSideMatchCirclesContainer.addChild(circle1);
                this.leftSideMatchCirclesContainer.addChild(circle2);
                this.leftSideMatchCirclesContainer.y = this.versusGraphics.height / 2 + 6;
                this.leftSideMatchCirclesContainer.x = circle1.width;
                this.leftSideMatchCircles.push(circle1);
                this.leftSideMatchCircles.push(circle2);

                let circle3: PockeyUiMatchCircle = new PockeyUiMatchCircle();
                let circle4: PockeyUiMatchCircle = new PockeyUiMatchCircle();
                circle4.x = circle3.width + 10;
                this.rightSideMatchCirclesContainer.addChild(circle3);
                this.rightSideMatchCirclesContainer.addChild(circle4);
                this.rightSideMatchCirclesContainer.y = this.leftSideMatchCirclesContainer.y;
                this.rightSideMatchCirclesContainer.x = this.versusGraphics.width - this.rightSideMatchCirclesContainer.width + 2;
                this.rightSideMatchCircles.push(circle3);
                this.rightSideMatchCircles.push(circle4);
            }
        }
    }
}