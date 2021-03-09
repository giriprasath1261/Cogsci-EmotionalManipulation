class Scenevid3 extends Phaser.Scene {
    constructor() {
      super("Scenevid3");
    }

    preload() {
    }

    create() {

        var vid =  this.add.video(400, 300, 'vid3');
        vid.play(true);

        var nextButton = this.add.sprite(100, 700, 'nextButton').setInteractive();
        nextButton.displayWidth = 100;
        nextButton.scaleY = nextButton.scaleX;
        nextButton.on('pointerdown', () => {
        this.scene.start("playGame3", { name: this._name, rollno: 2018111006});
      });
    }
}