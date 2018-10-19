/**
 *  Edgeflow
 *  Copyright 2017 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/11/2018
 */

namespace Framework {
    export class Settings {

        public static stageWidth: number;
        public static stageHeight: number;
        public static desktopAssetsPath: string = "Assets/Desktop/";
        public static mobileAssetsPath: string = "Assets/Mobile/";
        public static isMobile: boolean = false;
        public static socketID: any;
        public static backgroundsPath: string = "Images/Backgrounds/";
        public static mainBackgroundName: string = "MainBackground";
        public static singlePlayer: boolean = false;
        public static showSignalsDispatchSignalLog: boolean = false;


        // constructor() {
        //
        // }
    }
}
