namespace Pockey {

    export module UserInterface {

        import Sprite = PIXI.Sprite;
        import Graphics = PIXI.Graphics;

        export class PockeyLifeBar extends Container {
            private playerLifeGraphicsWidth: number = 256;
            private playerLifeGraphicsHeight: number = 28;
            public lifeUnits: Graphics[];

            constructor() {
                super();

                this.createLifeBar();
            }

            // public updateScoreGraphics(score: number): void {
            //     _.forEach(_.range(0, this.lifeUnits.length), (lifeUnit: Graphics, id:number) => {
            //        if(id > score)
            //        {
            //            lifeUnit.alpha = 0.4;
            //        }
            //     });
            // }

            private createLifeBar(): void {
                // let sprite: Sprite = new Sprite();
                let spacing: number = 3;

                let firstRect: Graphics = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth, this.playerLifeGraphicsHeight, spacing * 2);
                this.addChild(firstRect);

                let secondRect: Graphics = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth - spacing, this.playerLifeGraphicsHeight - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                this.addChild(secondRect);

                let thirdRect: Graphics = new Graphics();
                thirdRect.beginFill(0x000000);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - spacing * 2, secondRect.height - spacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                this.addChild(thirdRect);


                // let gr: Graphics = new Graphics();
                // gr.beginFill(0x000000, 1);
                // gr.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth, this.playerLifeGraphicsHeight, 6);


                // gr.lineStyle(spacing, 0xffffff);
                // gr.drawRoundedRect(spacing, 0, this.playerLifeGraphicsWidth - spacing * 2, this.playerLifeGraphicsHeight - spacing, 2);
                //
                // sprite.addChild(gr);
                //
                //
                let remainingWidth: number = thirdRect.width - 8 * (spacing + 1);
                let unitWidth: number = remainingWidth / 7;
                let unitHeight: number = thirdRect.height - 2 * (spacing + 1);
                // //
                let unitY: number = thirdRect.y + thirdRect.height / 2 - unitHeight / 2;
                let unitStartX: number = thirdRect.x + spacing + 1;
                // //
                // //
                // // let currx:number = unitStartX;

                this.lifeUnits = [];
                _.forEach(_.range(0, 7), (counter: number) => {
                    let lifeUnit: Graphics = new Graphics();
                    lifeUnit.beginFill(0xffffff);
                    lifeUnit.drawRoundedRect(0, 0, unitWidth, unitHeight, 2);
                    // lifeUnit.tint = PockeySettings.PLAYER_COLOR;

                    lifeUnit.x = unitStartX + counter * (unitWidth + spacing + 1);
                    // currx += unitWidth + 3;
                    lifeUnit.y = unitY;

                    this.addChild(lifeUnit);
                    this.lifeUnits.push(lifeUnit);

                });
            }
        }
    }
}