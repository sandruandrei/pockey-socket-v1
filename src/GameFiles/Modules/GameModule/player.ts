/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/30/2018
 */

namespace Pockey {

    export module GameModule {

        export class Player {
            public id: string;
            public nickname: string;
            public type: BallType;
            public score: number;
            public roundsWon: number = 0;
            public color: number;
            public side: string;
            public startedFirst:boolean = false;
            public avatarID:string = '';
            public feltID:string = '';
            public shootouts:number = 3;

            constructor(id: string, type: BallType) {
                this.id = id;
                this.type = type;
                this.score = PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
            }

            public reset(): void {

            }
        }
    }

}
