import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import backgroundImg from "./assets/background.png";
import shipSprite from "./assets/ship.png";
import ship2Sprite from "./assets/ship2.png";
import ship3Sprite from "./assets/ship3.png";
import explosionSprite from './assets/explosion.png';

export class Scene1 extends Phaser.Scene {
    constructor(){
        super('bootGame')   // this is Scene Name
    }

    preload() {
        this.load.image('background', backgroundImg);
        // this.load.image('ship1', shipImg);
        // this.load.image('ship2', ship2Img);
        // this.load.image('ship3', ship3Img);
        this.load.spritesheet('ship1', shipImg);
        this.load.imaspritesheetge('ship2', ship2Img);
        this.load.spritesheet('ship3', ship3Img);

        this.load.spritesheet('explosion', explosionSprite, {frameWidth: 16, frameHeight: 16});
    }

    create(){
        this.add.text(20, 20, "Loading...")
        this.scene.start('playGame')
    }
}