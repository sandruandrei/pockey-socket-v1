/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/10/2018
 */

namespace Pockey {

    export module StateMachineModule {

        export class PockeyStateTexts {

            // First-game State: shooting (optional, but might be too difficult)
            public static beginGame: string = "AIM WITH CURSOR, PRESS & HOLD LEFT MOUSE BUTTON AND DRAG TO SET POWER";
            public static beginGameMobile: string = "TO AIM, TAP OR MOVE OVER THE POOLTABLE. SHOOT BY SELECTING THE POWER ON THE LEFT SIDE";//AIM WITH CURSOR, PRESS & HOLD LEFT MOUSE BUTTON AND DRAG TO SET POWER";

            // First-game State: when its your turn to break - (we need to tweak the break pattern)
            // public static yourTurnToShootText: string = "YOUR TURN TO SHOOT!";

            // Tip State: when a player’s turn starts
            public static yourTurnToShoot: string = "YOUR TURN! SHOOT <opponent>{opponent}'S</opponent> BALLS INTO POCKETS";

            // Tip State: when you aim at your own ball
            public static ownBallAiming: string = "<warning>WARNING!</warning> HITTING YOUR OWN BALL FIRST IS A FOUL";

            // State: when you hit your own ball first
            public static ownBallHit: string = "<opponent>{opponent}</opponent> FOULED!";

            // Tip State: when you aim at the puck
            // Result: goalbox of opponent has an arrow hovering of it + arrow indicator around puck
            public static puckAiming: string = "SHOOT THE PUCK INTO <opponent>{opponent}'S</opponent> GOAL!";

            // State: when opponent fouls and
            public static opponentFault: string = "<opponent>{opponent}</opponent> FOULED! PLACE THE BALL ANYWHERE ON TABLE";

            // State: when players scratches on cue ball
            public static whiteBallFault: string = "YOU FOULED! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";

            // State: when player scores his own ball in
            public static onOwnBallInPocket: string = "YOU SCORED AN OWN BALL! <opponent>{opponent}’s</opponent> TURN!";

            // State: when you score puck in your goal
            public static puckOwnGoal: string = "PUCK WENT INTO YOUR OWN GOAL! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";

            public static onTimeUp: string = "YOUR TIME IS UP! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";
            public static onOpponentsTimeUp: string = "<opponent>{opponent}</opponent> TIME IS UP! PLACE THE BALL ANYWHERE ON TABLE";

            // State: when you score the puck into opponent goal
            // Result:goal box flashes, some poppy sound is made and
            public static onPuckGoal: string = "YOU SCORED THE PUCK! -2 HEALTH TO <opponent>{opponent}</opponent>";

            // State: when you dont hit any balls
            public static noBallScored: string = "YOU DIDN’T SCORED! <opponent>{opponent}'S</opponent> TURN";

            // State: when you hit two or more balls in
            public static multipleBallsIn: string = "YOU MADE A TRICKSHOT! CONGRATS!";

            // State: when you hit the puck/other ball to make a different ball in
            public static ballInPocketViaOtherBall: string = "YOU MADE A TRICKSHOT! CONGRATS!";

            // Tip State: when an Pocket blocker icon appears
            // POWER-UP AVAILABLE, SCORE A BALL IN THE POCKET ON FIRST SHOT

            // State: when you shoot a ball into a Lock Icon pocket on your first shot of turn
            // POWERUP! THIS POCKET WILL BE BLOCKED FOR YOUR OPPONENTS NEXT TURN
            //
            // State: when you score one of your balls in
            public static opponentBallInPocket: string = "<opponent>{opponent}</opponent> POCKETED A BALL AND CAN SHOOT AGAIN!";
            public static opponentsTurn: string = "<opponent>{opponent}'s</opponent> turn";
        }
    }
}
