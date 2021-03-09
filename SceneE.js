class SceneE extends Phaser.Scene {
    constructor() {
      super("ExpStart");
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
        var text1 = this.add.text(15, 50, "Section 5: Start of Experiment", style1);

        var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
        var text2 = this.add.text(50, 200, "Instructions:", style2);
        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var text3 = this.add.text(150, 265, "By pressing NEXT you can move on to the experiment", style3)
        var text4 = this.add.text(150, 345, "If you are not clear with the instructions you can move back to the instructions page and take the trial again by clicking on BACK", style3)
        var text5 = this.add.text(150, 505, "Total of 4 rounds in the experiment", style3);
        
        var nextButton = this.add.sprite(200, 575, 'nextButton').setInteractive();
        nextButton.displayWidth = 100;
        nextButton.scaleY = nextButton.scaleX;

        nextButton.on('pointerdown', () => {
            this.scene.start("playGame0", { name: this._name, rollno: 2018111006});
        });

        var backButton = this.add.sprite(300, 575, 'backButton').setInteractive();
        backButton.displayWidth = 60;
        backButton.scaleY = backButton.scaleX;

        backButton.on('pointerdown', () => {
            this.scene.start("Instructions", { name: this._name, rollno: 2018111006});
        });
    }
}