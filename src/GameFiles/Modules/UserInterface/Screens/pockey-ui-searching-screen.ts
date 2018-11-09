namespace Pockey {
    export module UserInterface {


        export class PockeyUiSearchingScreen extends Container {

            private staggerTimeline: TimelineMax;
            private searchScreen: HTMLDivElement;

            constructor() {
                super();
                // this.addElements();
                this.searchScreen = document.getElementById("SearchingScreen") as HTMLDivElement;
            }

            public setVisibleTrue(): void {
                this.killTweens();

                this.searchScreen.style.display = "flex";

                this.staggerTimeline = new TimelineMax();

                TweenMax.staggerFrom(".search", 2, {
                    backgroundColor: '#36edc9',
                    opacity: 0,
                    scale: 0.2,
                    repeat: -1,
                    ease: SlowMo.ease.config(0.5, 0.4, true)
                }, 0.4);

                TweenMax.staggerTo(".search", 2, {
                    x: 320,
                    backgroundColor: '#43f9f3',
                    repeat: -1,
                    ease: SlowMo.ease.config(0.5, 0.4, false)
                }, 0.4);
            }

            public setVisibleFalse(): void {
                this.killTweens();

                this.searchScreen.style.display = "none";

            }

            private killTweens(): void {
                TweenMax.killTweensOf(".search");
            }


        }
    }
}