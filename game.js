var config = {
  width: 1280,
  height: 720,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene0, Scenevid1, Scene2, Scenevid2, Scene3, Scenevid3, Scene4, Scenevid4, Scene5, Scene6, Scene7, Scene8, Scene9, SceneE, SceneR, SceneS, SceneT],
  pixelArt: true,
  dom: {
    createContainer: true
  },
  physics: {
    default: "arcade",
    arcade:{
        debug: false,
        debugShowVelocity: false
    }
  }
}


var game = new Phaser.Game(config);
