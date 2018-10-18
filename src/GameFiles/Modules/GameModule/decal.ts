/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/16/2018
 */


namespace Pockey {
    export module GameModule {
        import Sprite = PIXI.Sprite;

        export enum DecalType {
            Welcome = "dccal_welcome.png",
            AstroJunkie = "decal_astrojunkie.png",
            Blastoff = "decal_blastoff.png",
            Cthulu = "decal_cthulu.png",
            Dice = "decal_dice.png",
            InserCoin = "decal_insertcoin.png",
            KnuckeSandwich = "decal_knucklesandwhich.png",
            Looselips = "decal_looselips.png",
            OneUp = "decal_oneup.png",
            PlayerOne = "decal_playerone.png",
            Pockey = "decal_pockey.png",
            RageQuit = "decal_ragequit.png",
            StatTrickShot = "decal_statTrickshot.png",
            ToweKing = "decal_towerking.png",
            WingedSword = "decal_wingedsword.png"
        }

        export class Decal extends Sprite {

            // private decalIcon: Sprite;

            constructor() {
                super();
                this.anchor.set(0.5, 0.5);
                this.SetDecalIcon(DecalType.Pockey);
            }

            public SetDecalIcon(decalType: DecalType) {
                let texture = PIXI.Texture.fromFrame(decalType.toString());
                this.texture = texture;
                this.alpha = 0.4;
            }
        }
    }
}
