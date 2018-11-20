namespace Pockey {

    export module UserInterface {

        import Graphics = PIXI.Graphics;

        export class PockeyUiMatchCircle extends Container {
            private firstCircleGraphics: Graphics;
            private secondCircleGraphics: Graphics;

            constructor() {
                super();

                this.createMatchCircle();
            }

            private createMatchCircle(): void {
                this.firstCircleGraphics = new Graphics();
                this.firstCircleGraphics.lineStyle(5, 0xffffff);
                this.firstCircleGraphics.tint = 0x639db5;
                this.firstCircleGraphics.drawCircle(0, 0, 12);
                this.addChild(this.firstCircleGraphics);

                this.secondCircleGraphics = new Graphics();
                this.secondCircleGraphics.beginFill(0xffffff);
                this.secondCircleGraphics.tint = 0x426d7e;
                this.secondCircleGraphics.drawCircle(0, 0, 6);
                this.secondCircleGraphics.endFill();
                this.addChild(this.secondCircleGraphics);
            }

            public activate(color: number): void {
                this.firstCircleGraphics.tint = 0xffffff;
                this.secondCircleGraphics.tint = color;
            }

            public reset(color: number): void {
                this.secondCircleGraphics.tint = 0x426d7e;
                this.firstCircleGraphics.tint = 0x639db5;
            }
        }
    }
}