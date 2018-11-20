///<reference path="../../../../lib/types/pixi/pixi-sound.d.ts"/>

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/20/2018
 */


namespace Framework {
    export module Sound {

        import AbstractModule = Framework.Abstracts.AbstractModule;
        import SignalsManager = Framework.Signals.SignalsManager;
        import SignalsType = Framework.Signals.SignalsType;
        //@ts-ignore
        import PixiSound = PIXI.sound;
        import PockeySoundNames = Pockey.Sound.PockeySoundNames;
        import PlayOptions = PIXI.sound.PlayOptions;

        export interface SoundVO {
            soundName?: string,
            loop?: boolean,
            volume?: number
        }

        export class AbstractSoundModule extends AbstractModule {

            constructor() {

                super();

                this.Name = "AbstractSoundModule";

            }


            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();

                SignalsManager.AddSignalCallback(SignalsType.PLAY_SOUND, this.onPlaySound.bind(this));
                SignalsManager.AddSignalCallback(SignalsType.STOP_SOUND, this.onStopSound.bind(this));
            }

            protected onStopSound(params: any[]): void {
                let soundVO: SoundVO = params[0] as SoundVO;
                PixiSound.stop(soundVO.soundName);

                // PIXI.sound.stop(soundVO.soundName);
            }


            protected onPlaySound(params: any[]): void {
                let soundVO: SoundVO = params[0] as SoundVO;
                if(_.isNull(soundVO.volume) || _.isUndefined(soundVO.volume))
                {
                    soundVO.volume = 1;
                }
                // if (soundVO.soundName == PockeySoundNames.BALL_TO_BALL_HIT) {
                //     console.log("s-a cerut ball to ball hit");
                // }
                /*interface PlayOptions {
                    start?: number;
                    end?: number;
                    speed?: number;
                    loop?: boolean;
                    volume?: number;
                    sprite?: string;
                    muted?: boolean;
                    complete?: CompleteCallback;
                    loaded?: LoadedCallback;
                }*/

                // let playOptions:PlayOptions = {
                //   loop:soundVO.loop,
                //   // volume: soundVO.volume
                // };
                // // PixiSound.play(soundVO.soundName, {loop: soundVO.loop});
                // PixiSound.play(soundVO.soundName, playOptions);

                let sound = PIXI.sound.Sound.from({
                    url: soundVO.soundName,
                    volume: soundVO.volume
                });
                sound.play();
            }
        }

    }
}