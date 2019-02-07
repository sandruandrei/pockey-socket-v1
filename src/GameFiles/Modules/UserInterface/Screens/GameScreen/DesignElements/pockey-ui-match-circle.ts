namespace Pockey {

    export module UserInterface {

        import Graphics = PIXI.Graphics;

        export class PockeyUiMatchCircle {
            private circleBorder: HTMLDivElement;
            private circleDot: HTMLDivElement;

            constructor(circle: HTMLDivElement) {
                // super();
                this.circleBorder = circle;
                this.circleDot = this.circleBorder.getElementsByClassName("dorScoreBoard")[0] as HTMLDivElement;
                // this.createMatchCircle();
            }

            // private createMatchCircle(): void {
            //     this.firstCircleGraphics = new Graphics();
            //     this.firstCircleGraphics.lineStyle(5, 0xffffff);
            //     this.firstCircleGraphics.tint = 0x639db5;
            //     this.firstCircleGraphics.drawCircle(0, 0, 12);
            //     this.addChild(this.firstCircleGraphics);
            //
            //     this.secondCircleGraphics = new Graphics();
            //     this.secondCircleGraphics.beginFill(0xffffff);
            //     this.secondCircleGraphics.tint = 0x426d7e;
            //     this.secondCircleGraphics.drawCircle(0, 0, 6);
            //     this.secondCircleGraphics.endFill();
            //     this.addChild(this.secondCircleGraphics);
            // }

            public activate(color: number): void {
                this.circleBorder.style.borderColor = "#ffffff";

                this.circleDot.style.background = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
            }

            public reset(color: number): void {
                this.circleBorder.style.borderColor = "#639db5";
                this.circleDot.style.background = "#426d7e";
            }
        }
    }
}