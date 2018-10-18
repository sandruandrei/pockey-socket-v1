namespace Pockey
{
    export module UserInterface
    {
        import Sprite = PIXI.Sprite;
        import Graphics = PIXI.Graphics;


        export class PockeyUiInGameAvatar extends Container
        {
            private backgroundGraphics:Graphics;
            private rectangleSize:number = 92;
            private borderSpacing: number = 3;
            public avatarWidth:number;
            constructor()
            {
                super();

                let firstRect:Graphics = new Graphics();
                // let firstRect: Graphics = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, this.rectangleSize, this.rectangleSize, this.borderSpacing * 2);
                this.addChild(firstRect);

                let secondRect: Graphics = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, this.rectangleSize - this.borderSpacing, this.rectangleSize - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                this.addChild(secondRect);

                let thirdRect: Graphics = new Graphics();
                thirdRect.beginFill(0x000000);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - this.borderSpacing * 2, secondRect.height - this.borderSpacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                this.addChild(thirdRect);
                // this.backgroundGraphics
                // this.addChild(this.backgroundGraphics);

            }

        }
    }
}