/**
 *  Edgeflow
 *  Copyright 2017 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/12/2018
 */

namespace Framework {
    export class Layers {

        public static DefaultLayer: string = "DefaultLayer";
        public static BackgroundLayer: string = "BackgroundLayer";
        public static GameLayer: string = "GameLayer";
        public static UILayer: string = "UILayer";

        public static LayerOrder: string[] = [Layers.BackgroundLayer, Layers.GameLayer, Layers.UILayer];
    }
}
