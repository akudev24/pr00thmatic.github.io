var gameSettings = {
  maxHeight: 1000000,
  tileSize: 64,
  boxHeight: 256,
  floorHeight: 264,
  boxWidth: 427,
  uiDepth: 1000
};

var gameStatus = null;
function resetGameStatus () {
  gameStatus = {
    gameOver: false,
    score: 0,
    maxScoreToHardest: 10,
    xSpeed: [ 1080/2, 1080 ],
    getXSpeed : function () {
      return utils.lerp(this.xSpeed[0], this.xSpeed[1], this.score / this.maxScoreToHardest);
    },
    getBoxSpawnY : function () {
      return context.floor.y - gameStatus.score * gameSettings.boxHeight - 800;
    }
  };
};

var images = [ 'gradient', 'floor', 'caja1', 'caja2', 'background over', 'tiling sky', 'game over' ];
var context;

var towerGame = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function towerGame () {
    Phaser.Scene.call(this, { key: 'towerGame' });
  },

  preload : function () {
    this.load.setBaseURL('assets');
    for (var i=0; i<images.length; i++) {
      this.load.image(images[i]);
    }
  },

  create : function () {
    resetGameStatus();
    gameStatus.emitter = new Phaser.Events.EventEmitter();
    context = this;
    UI.create();
    UI.isOver = false;


    this.floor = this.matter.add.image(config.width/2, gameSettings.maxHeight - gameSettings.floorHeight / 2, 'floor')
      .setStatic(true);

    this.add.image(config.width/2, config.height/2, 'background over')
      .setDepth(gameSettings.uiDepth-1)
      .setScrollFactor(0);
    this.gradient = this.add.image(config.width/2, gameSettings.maxHeight, 'gradient')
        .setDepth(-2).setOrigin(0.5,1);
    this.gradient.scaleX = config.width;

    gameStatus.tilingSky =
      this.add.tileSprite(config.width/2, config.height, config.width, config.height, 'tiling sky')
      .setOrigin(0.5,1)
      .setDepth(-1)
      .setScrollFactor(0);


    this.createCamera();
    Box.theBox = null;
    Box.lastY = 0;
    Box.gimmieBox();
    gameStatus.emitter.on('game over', gameOver, this);
  },

  update : function (time, deltaTime) {
    gameStatus.time = time / 1000;
    gameStatus.deltaTime = deltaTime / 1000;
    gameStatus.tilingSky.setTilePosition(0, this.cameras.main.scrollY * 0.5);
    gameStatus.emitter.emit('update');
  },

  createCamera : function () {
    this.cameras.main.setBounds(0, 0, 1080, gameSettings.maxHeight);
    this.cameras.main.setBackgroundColor('#262262');
    context.cameras.main.centerOnY(context.floor.y);
    this.dummyFollow = this.add.image(this.floor.x, this.floor.y);
    context.cameras.main.startFollow(this.dummyFollow, false, 0.1, 0.1);
    context.cameras.main.setLerp(1, 0.01);
  }

});

function gameOver () {
  UI.createGameOver();
  gameStatus.gameOver = true;
}

var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1800,
  physics: {
    default: 'matter',
    matter: {
    }
  },
  scene: [ towerGame ]
};
var game = new Phaser.Game(config);
