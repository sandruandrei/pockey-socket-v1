/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/24/2018
 */


namespace Framework {
    export module Utils {
        import Point = PIXI.Point;
        import PointLike = PIXI.PointLike;

        export class Vector2 {

            public x: number;
            public y: number;

            constructor(x: number = 0, y: number = 0) {
                this.x = x;
                this.y = y;
            }

            public add(vector: Vector2 | Point | PointLike): Vector2 {
                return new Vector2(this.x + vector.x, this.y + vector.y);
            }

            public addTo(vector: Vector2): void {
                this.x += vector.x;
                this.y += vector.y;
            }

            public substract(vector: Vector2 | Point | PointLike): Vector2 {
                return new Vector2(this.x - vector.x, this.y - vector.y);
            }

            public distanceTo(vector: Vector2 | Point | PointLike): number {
                var dx = this.x - vector.x;
                var dy = this.y - vector.y;
                return Math.sqrt(dx * dx + dy * dy);
            }

            public multiply(multiplicationFactor: number): Vector2 {
                let cx:number = this.x;
                let cy:number = this.y;
                cx *= multiplicationFactor;
                cy *= multiplicationFactor;
                return new Vector2(cx, cy);
            }

            public dot(vector: Vector2): number {
                return this.x * vector.x + this.y * vector.y;
            }

            public length(): number {
                return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
            }


            /**
             * Method to obtain the projection of current vector on a given axis
             * @param axis An axis where vector is projected on
             * @return The projection length of current vector on given axis
             */
            public projectionOn(axis: Vector2): number {
                return this.dotProduct(axis.normalise())
            }

            /**
             * Method to perform dot product with another vector
             * @param vector2 A vector to perform dot product with current vector
             * @return A scalar number of dot product
             */
            public dotProduct(vector2: Vector2): number {
                var componentX: number = this.x * vector2.x;
                var componentY: number = this.y * vector2.y;
                return componentX + componentY;
            }

            /**
             * Method to obtain vector unit of current vector
             * @return A copy of normalised vector
             */
            public normalise(): Vector2 {
                if(this.x ==0 && this.y == 0)
                {
                    return new Vector2(0,0);
                }
                return new Vector2(this.x/(Math.sqrt(this.x * this.x + this.y * this.y)), this.y/(Math.sqrt(this.x * this.x + this.y * this.y)));
                // return new Vector2(this.x / this.getMagnitude(), this.y / this.getMagnitude());
            }

            /**
             * Method to obtain current magnitude of vector
             * @return Magnitude of type number
             */
            public getMagnitude(): number {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }

            public setMagnitude(magnitude: number): void {
                var ang_current: number = this.getAngle();
                this.polar(magnitude, ang_current);
            }

            public getAngle(): number {
                return Math.atan2(this.y, this.x);
            }

            public polar(mag: number, ang_rad: number): void {
                this.x = mag * Math.cos(ang_rad);
                this.y = mag * Math.sin(ang_rad);
            }

            /**
             * Method to rotate current vector
             * @param    angle_rad Angle in radian to rotate current vector
             * @param    offset A vector to offset current circular into an eliptical course
             * @return A copy of the rotated vector
             */
            public rotate(angle_rad: number): Vector2 {
                let newX: number = this.x * Math.cos(angle_rad) - this.y * Math.sin(angle_rad);
                let newY: number = this.x * Math.sin(angle_rad) + this.y * Math.cos(angle_rad);

                return new Vector2(newX, newY);
            }

            public clone(): Vector2 {
                let clone1: Vector2 = new Vector2(this.x, this.y);
                return clone1;
            }
        }
    }

}
