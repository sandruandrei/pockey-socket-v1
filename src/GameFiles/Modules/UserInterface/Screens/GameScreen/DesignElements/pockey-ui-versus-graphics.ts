///<reference path="pockey-ui-match-circle.ts"/>
namespace Pockey {
    export module UserInterface {
        import Settings = Framework.Settings;

        export class PockeyUiVersusGraphics{
            public leftSideMatchCircles: PockeyUiMatchCircle[];
            public rightSideMatchCircles: PockeyUiMatchCircle[];

            constructor() {

                if(Settings.isMobile)
                {
                    // this.versusGraphics.visible = false;
                }

                this.leftSideMatchCircles = [];
                _.forEach(document.getElementById("ScoreBoardPlayerRoundsLeft").children, (circle:HTMLDivElement)=>
                {
                    let matchCircle:PockeyUiMatchCircle = new PockeyUiMatchCircle(circle);
                    this.leftSideMatchCircles.push(matchCircle);
                });

                this.rightSideMatchCircles = [];
                _.forEach(document.getElementById("ScoreBoardPlayerRoundsRight").children, (circle:HTMLDivElement)=>
                {
                    let matchCircle:PockeyUiMatchCircle = new PockeyUiMatchCircle(circle);
                    this.rightSideMatchCircles.push(matchCircle);
                });
                // this.leftSideMatchCircles.push(circle1);
                // this.leftSideMatchCircles.push(circle2);
                //
                // this.rightSideMatchCircles.push(circle3);
                // this.rightSideMatchCircles.push(circle4);
            }
        }
    }
}