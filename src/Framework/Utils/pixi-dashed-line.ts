/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/22/2018
 */


namespace Framework {
    export module Utils {
        import Graphics = PIXI.Graphics;

        export class PixiDashedLine {

            // constructor( ) {
            //     super();
            //     this.drawDashedLine(startX, startY, endX, endY, strokeLength, gap);
            // }

            /**
             * @description – returns a sprite with a dashed line
             * @langversion 3.0
             * @usage drawDashedLine( 30, 30, 100, 100, 5, 3 );
             *
             * @param graphicsObject The object where to draw the line
             * @param startX Start X of dashed line
             * @param startY Start Y of dashed line
             * @param endX End X of dashed line
             * @param endY End Y of dashed line
             * @param strokeLength Stroke length of dash
             * @param gap Length of gap between dashes
             * @param color
             * @param stroke
             *
             * @return adds dashed line to the Graphics element
             */
            // import flash.display.Graphics;
            // import flash.display.Sprite;

            public static drawDashedLine(graphics: Graphics, startX: number = 0, startY: number = 0, endX: number = 0, endY: number = 0, strokeLength: number = 0, gap: number = 0, color: number = 0xffffff, stroke: number = 1, alpha: number = 1): Vector2 {
                let arrowPoint:Vector2 = new Vector2();

                // let graphics:Graphics = new Graphics();
                // let line:Sprite = new Sprite();
                // let lineGraphics:Graphics = line.graphics;
                graphics.lineStyle(stroke, color, alpha);

//lineGraphics.lineTo( startX, startY );

// calculate the length of the segment
                let segmentLength: number = strokeLength + gap;

// calculate the length of the dashed line
                let deltaX: number = endX - startX;
                let deltaY: number = endY - startY;

//By Pythagorous theorem
                let _delta: number = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

// calculate the number of segments needed
                let segmentsCount: number = Math.floor(Math.abs(_delta / segmentLength));

// get the angle of the line in radians
                let radians: number = Math.atan2(deltaY, deltaX);

// start the line here
                let aX: number = startX;
                let aY: number = startY;

// add these to cx, cy to get next seg start
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;

// loop through each segment
                for (let i: number = 0; i < segmentsCount; i++) {
                    graphics.moveTo(aX, aY);
                    graphics.lineTo(aX + Math.cos(radians) * strokeLength, aY + Math.sin(radians) * strokeLength);
                    aX += deltaX;
                    aY += deltaY;
                }

// handling the last segment
                graphics.moveTo(aX, aY);
                _delta = Math.sqrt((endX - aX) * (endX - aX) + (endY - aY) * (endY - aY));
                if (_delta > segmentLength) {
// segment ends in the gap; drawing a full dash
                    graphics.lineTo(aX + Math.cos(radians) * strokeLength, aY + Math.sin(radians) * strokeLength);
                } else if (_delta > 0) {
// segment shorter than dash; draw the remaining only
                    graphics.lineTo(aX + Math.cos(radians) * _delta, aY + Math.sin(radians) * _delta);
                }
// move to the end position
                graphics.lineTo(endX, endY);

                arrowPoint.x = aX + Math.cos(radians) * (gap);// + Math.cos(radians) * (radius + gap);
                arrowPoint.y = aY + Math.sin(radians) * (gap);// + Math.sin(radians) * (radius + gap);

                return arrowPoint;
                // return graphics;
            }

            public static drawDottedLine(graphics: Graphics, startX: number = 0, startY: number = 0, endX: number = 0, endY: number = 0, radius: number = 0, gap: number = 0, color: number = 0xffffff, alpha: number = 1): Vector2 {
                // startX += gap;
                // startY += gap;
                let arrowPoint:Vector2 = new Vector2();

                // let graphics:Graphics = new Graphics();
                // let line:Sprite = new Sprite();
                // let lineGraphics:Graphics = line.graphics;
                // graphics.lineStyle( stroke, color, alpha );

//lineGraphics.lineTo( startX, startY );

// calculate the length of the segment
                let segmentLength: number = radius * 2 + gap;

// calculate the length of the dashed line
                let deltaX: number = endX - startX;
                let deltaY: number = endY - startY;

//By Pythagorous theorem
                let _delta: number = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

// calculate the number of segments needed
                let segmentsCount: number = Math.floor(Math.abs(_delta / segmentLength));

// get the angle of the line in radians
                let radians: number = Math.atan2(deltaY, deltaX);

// start the line here
                let aX: number = startX;
                let aY: number = startY;

// add these to cx, cy to get next seg start
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;

                graphics.beginFill(color, alpha);
// loop through each segment
                for (let i: number = 0; i < segmentsCount; i++) {
                    // graphics.moveTo( aX, aY );
                    graphics.drawCircle(aX + Math.cos(radians) * (radius + gap), aY + Math.sin(radians) * (radius + gap), radius);

                    aX += deltaX;
                    aY += deltaY;
                }


// handling the last segment
//                 graphics.moveTo( aX, aY );
                _delta = Math.sqrt((endX - aX) * (endX - aX) + (endY - aY) * (endY - aY));
                if (_delta > segmentLength) {
// segment ends in the gap; drawing a full dash
                    graphics.drawCircle(aX + Math.cos(radians) * radius, aY + Math.sin(radians) * radius, radius);
                    // arrowPoint.x = aX + Math.cos(radians) * (radius + gap);
                    // arrowPoint.y = aY + Math.sin(radians) * (radius + gap);
//                 } else if( _delta > 0 ) {
// // segment shorter than dash; draw the remaining only
//                     graphics.drawCircle( aX + Math.cos( radians ) * _delta, aY + Math.sin( radians ) * _delta, radius );
//                 }
// move to the end position
                graphics.drawCircle( endX, endY,radius );
                    // arrowPoint.x = endX;// + Math.cos(radians) * (radius + gap);
                    // arrowPoint.y = endY;// + Math.cos(radians) * (radius + gap);
                    // return graphics;
                }
                graphics.endFill();
                arrowPoint.x = aX + Math.cos(radians) * (gap);// + Math.cos(radians) * (radius + gap);
                arrowPoint.y = aY + Math.sin(radians) * (gap);// + Math.sin(radians) * (radius + gap);

                return arrowPoint;

            }
        }
    }
}
