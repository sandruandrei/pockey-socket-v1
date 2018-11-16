///<reference path="../../Signals/signals-manager.ts"/>
///<reference path="../../Signals/signal-types.ts"/>
/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/14/2018
 */
namespace Framework {
    export module Connection {
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;

        export class LoginHandler {

            constructor() {
                SignalsManager.AddSignalCallback(SignalsType.CHECK_USER_DATA, this.onCheckUserData.bind(this));
            }

            protected onCheckUserData(): void {
                console.log("on LOGIN HANDLER: onCheckUserData");
                SignalsManager.DispatchSignal(SignalsType.USER_DATA_CHECKED);
            }
        }
    }
}
