import Phaser from "phaser";

export class Scene2 extends Phaser.Scene {
    constructor(){
        super('playGame')
    }
    create(){
        this.background = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, "background")
        this.background.setOrigin(0, 0);
        this.background.setScale(2)

        this.ship1 = this.add.image(50, 50, "ship1");
        this.ship1.setScale(2, 2)
        this.ship2 = this.add.image(150, 150, "ship2");
        this.ship3 = this.add.image(300, 300, "ship3");

        this.add.text(20, 20, "Scene2")
        console.log(Phaser)
    }
    update() {
        this.angle += 1;
        // this.ship3.setRotation(this.angle)
        this.background.tilePositionY -= 0.5;

        this.movingShip(this.ship1, 1);
        this.movingShip(this.ship2, 5);
        this.movingShip(this.ship3, 10);
    }
    movingShip(ship, speed) {
        ship.y += speed;

        if (ship.y > this.sys.game.config.height) {
            this.resetShipPos(ship)
        }
    }
    resetShipPos(ship){
        ship.y = 0;
        ship.x = Phaser.Math.Between(0, this.sys.game.config.width)
    }
}