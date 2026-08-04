import Phaser from "phaser";

export class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 1280,
      height: 720,
      parent: "game",
      backgroundColor: "#1a1a2e",
      physics: {
        default: "arcade",
        arcade: {
          debug: false
        }
      },
      scene: []
    });
  }
}