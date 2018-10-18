///<reference path="Signal.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/18/2018
 */

namespace Framework {
    export module Signals {

        //CONSOLE COLORS FOR SIGNALS MANAGER: ORANGE
        import sign = PIXI.utils.sign;

        export class SignalsManager {
            private static instance: SignalsManager;
            private initialized: boolean = false;
            // private signals: SignalObject[];
            private signals: { [id: string]: Signal; };

            // public StartGame: Signal;

            static Instance() {
                if (!SignalsManager.instance) {
                    SignalsManager.instance = new SignalsManager();

                    if (!SignalsManager.Instance().initialized) {
                        SignalsManager.InitializeSignals();
                        SignalsManager.Instance().initialized = true;
                    }
                }
                return SignalsManager.instance;
            }

            private static InitializeSignals() {
                SignalsManager.Instance().signals = {};

            }

            // public addSignal()
            public static CreateNewSignal(id: string) {
                SignalsManager.Instance().signals[id] = new Signal();
                console.log("%c" + "Signals Manager -> new signal created: " + id, "color: orange");
                // console.log("%c" + this.Name + " assets loaded!", "color: green");
            }

            public static GetSignal(id: string): Signal {
                let signal: Signal = SignalsManager.Instance().signals[id];
                if (!signal) {
                    console.warn("SignalsManager.GetSignal: signal " + id + " is not registered!");
                }

                return signal;
            }

            public static AddSignalCallback(signalID: string, callbackFunction: Function): void {
                let signal: Signal = SignalsManager.Instance().signals[signalID];
                if (!signal) {
                    console.warn("SignalsManager.RegisterCallbackToSignal: signal " + signalID + " is not registered!");
                }

                signal.add(callbackFunction);
            }

            public static DispatchSignal(id: string, params: any[] = null): void {

                if (SignalsManager.Instance().signals[id]) {
                    if (Settings.showSignalsDispatchSignalLog) {
                        console.log("%c" + "SignalsManager -> Dispatched Signal: " + id, "color: #f68a06");
                    }

                    SignalsManager.Instance().signals[id].dispatch(params);
                }
                else {
                    console.warn("SignalsManager.DispatchSignal: signal " + id + " is net registered!");
                }
            }
        }
    }
}

