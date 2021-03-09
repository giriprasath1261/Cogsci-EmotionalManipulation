class SceneS extends Phaser.Scene {
    constructor() {
      super("Screenshot");
    }

    preload() {
    }

    create() {

        var cam = this.cameras.add(0,0,1280,720);
        cam.setBackgroundColor(0xffffff);

        var bar = this.add.graphics();
        // console.log(bar);
        bar.fillStyle(0x1a1e1e, 1);
        bar.fillRect(0, 0, 1280, 100);

        var style1 = { font: "bold 32px Arial", fill: "#fff", boundsAlignH:"center", boundsAlignV: "middle"};
        var text1 = this.add.text(15, 50, "Section 3: Screenshot of Game", style1);

        var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
        var text2 = this.add.text(50, 150, "Screenshot:", style2);
        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var screenshot = this.add.sprite(500, 400, 'Screenshot');

        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var text3 = this.add.text(150, 650, "click on next to play a trial of the game", style3);
        var nextButton = this.add.sprite(200, 700, 'nextButton').setInteractive();
        nextButton.displayWidth = 100;
        nextButton.scaleY = nextButton.scaleX;

        nextButton.on('pointerdown', () => {
            this.scene.start("playGameTrial", { name: this._name, rollno: 2018111006});
        });
    }
}