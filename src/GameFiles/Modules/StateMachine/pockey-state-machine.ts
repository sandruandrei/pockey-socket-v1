///<reference path="typestate.ts"/>
namespace Pockey {
    export module StateMachineModule {
        import FiniteStateMachine = typestate.FiniteStateMachine;

        export enum PockeyStates {
            /*0*/onLoad,
            /*1*/onMainMenu,
            /*2*/onStart,
            /*3*/onRoundEnd,
            /*4*/onDefineClient,
            /*5*/onSearchForPartner,
            /*6*/onWatch,
            /*7*/onRearrangeStick,
            /*8*/onRepositionWhiteBall,
            /*9*/onShoot,
            /*10*/onEndTurn,
            /*11*/onEndMatch,
            /*12*/onPrepareRoundOne,
            /*13*/onPrepareRoundTwo,
            /*14*/onPrepareRoundThree,
        }

        // export enum PockeyStates {
        //     StartGame,
        //     PlayerTurn,
        //     PlayerTurnFirstBall,
        //     OpponentTurn,
        //     OpponentTurnFirstBall,
        //
        // }


        export class PockeyStateMachine {

            // Construct the FSM with the inital state, in this case the elevator starts with its doors opened
            public fsm: FiniteStateMachine<PockeyStates>;

            private static instance: PockeyStateMachine;
            private initialized: boolean = false;

            private nextState;
            private currentState;

            static Instance(): PockeyStateMachine {
                if (!PockeyStateMachine.instance) {
                    PockeyStateMachine.instance = new PockeyStateMachine();

                    if (!PockeyStateMachine.Instance().initialized) {
                        PockeyStateMachine.Instance().fsm = new FiniteStateMachine<PockeyStates>(PockeyStates.onLoad);
                        PockeyStateMachine.Instance().InitializeStates();
                        PockeyStateMachine.Instance().initialized = true;

                        let s: string = PockeyStates[PockeyStates.onLoad];
                        console.log("%c StateMachine -> FSM currentState: " + s, "background: yellow; color: #f6546a; font-weight:bold; ");
                        // setTimeout(() => {
                        //     PockeyStateMachine.Instance().printFsmCurrentState();

                        // }, 100);

                    }
                }
                return PockeyStateMachine.instance;
            }

            private InitializeStates() {
                this.fsm.from(PockeyStates.onLoad).to(PockeyStates.onMainMenu);

                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onSearchForPartner);

                // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onPrepareRoundOne);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onRearrangeStick);

                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundTwo);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onWatch);

                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundThree);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onWatch);
                // this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRearrangeStick);

                // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onWatch);
                // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onWatch);

                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndTurn);

                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRearrangeStick);

                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRearrangeStick);

                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onEndMatch);

                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onMainMenu);
                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onPrepareRoundOne);
                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onSearchForPartner);

                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onShoot);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndTurn);

                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onRoundEnd);

                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRoundEnd);

                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRoundEnd);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRepositionWhiteBall);

                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onWatch);

            }

            public delayStateChanging(delayedState): void {
                // this.currentState = PockeyStateMachine.Instance().fsm.currentState;
                this.nextState = delayedState;
            }

            public updateDelayedState(): void {
                PockeyStateMachine.Instance().changeState(this.nextState);
                this.nextState = null;
            }

            public hasStateInQueue(): boolean {
                if (!_.isUndefined(this.nextState) && _.isNull(this.nextState))
                    return true;

                return false;
            }

            public changeState(state): void {
                if (!PockeyStates[state]) {
                    console.log("%c StateMachine -> state does not exist: " + state, "color: #000000; background:#ff9900");

                }
                if (state == PockeyStates.onShoot) {
                    console.log("current state=======");
                    this.printFsmCurrentState();
                    console.log("current state=======");
                    console.log("stop");
                }
                PockeyStateMachine.Instance().fsm.go(state);
                this.printFsmCurrentState();
            }

            public getCurrentStateName(): string {
                let s: string = "";

                if (this.fsm) {
                    _.forEach(this.fsm, (state:any) => {
                        if (state == this.fsm.currentState) {
                            // s = state.toString();
                            s = PockeyStates[state];
                            return;
                        }
                    });
                }

                return s;
            }

            private printFsmCurrentState(): void {
                // if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                //     console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: black; color: yellow; font-weight:bold; ");
                //
                // }
                // else {
                console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; ");

                // }
                // console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; ");
            }
        }
    }
}


