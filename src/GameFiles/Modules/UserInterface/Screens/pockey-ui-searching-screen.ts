namespace Pockey {
    export module UserInterface {

        export class PockeyUiSearchingScreen {

            private staggerTimeline: TimelineMax;
            private searchScreen: HTMLDivElement;
            private searchScreenCircles: HTMLDivElement[];
            private searchScreenAnimationHolder: HTMLDivElement;

            constructor() {
                // super();
                // this.addElements();
                this.searchScreen = document.getElementById("SearchingScreen") as HTMLDivElement;
                this.searchScreenAnimationHolder = this.searchScreen.getElementsByClassName("searchingAnimation")[0] as HTMLDivElement;

                this.searchScreenCircles = [];

            }

            public setVisibleTrue(): void {
                this.killTweens();
                // _.forEach(searchScreenAnimationHolder.getElementsByClassName("search"), (circle:HTMLDivElement)=>{
                //     this.searchScreenCircles.push(circle);
                // });
                this.searchScreenCircles = [];
                _.forEach(_.range(5), () => {
                    let div: HTMLDivElement = document.createElement('div') as HTMLDivElement;

                    // circle.style.transform = "scale(1, 1)";
                    div.classList.add("search");
                    div.classList.add("searchDiv");

                    this.searchScreenAnimationHolder.appendChild(div);
                    this.searchScreenCircles.push(div);
                });

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

                if(this.searchScreenCircles.length > 0)
                {
                    _.forEach(this.searchScreenCircles, (circle: HTMLDivElement) => {
                        circle.parentElement.removeChild(circle);
                        circle = null;
                    });
                }

                this.searchScreenCircles = [];
                // _.forEach(this.searchScreenCircles, (circle:HTMLDivElement)=>{
                //     circle.classList.remove("search");
                //     circle.classList.remove("searchDiv");
                //     circle.style.left = "-15px";
                //     circle.style.scale = "1";
                //     circle.style.transform = "";
                //     // circle.style.backgroundColor = '#36edc9';
                //     // circle.style.opacity = "1";
                //     // circle.style.scale = "1";
                //     // circle.style.left = "-15px";
                // });
                this.searchScreen.style.display = "none";

            }

            private killTweens(): void {
                TweenMax.killTweensOf(".search");
            }


        }
    }
}