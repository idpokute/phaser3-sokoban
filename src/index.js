import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import { Scene1 } from "./scene1.js"
import { Scene2 } from "./scene2.js"

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 256 * 2,
  height: 272 * 2,
  backgroundColor: 0x000000,
  scene: [
    Scene1,
    Scene2,
  ]
};

const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoImg);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");

//   this.tweens.add({
//     targets: logo,
//     y: 450,
//     duration: 2000,
//     ease: "Power2",
//     yoyo: true,
//     loop: -1
//   });
// }
