import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    console.log("Loading PetVerse V3...");
  }

  create() {
    this.cameras.main.setBackgroundColor("#0f172a");

    this.add.text(640, 360, "PetVerse V3", {
      fontSize: "48px",
      color: "#ffffff"
    }).setOrigin(0.5);

    console.log("PetVerse V3 Started!");
  }
}