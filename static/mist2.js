console.clear();

window.PhaserGlobal = window.PhaserGlobal || {};
window.PhaserGlobal.stopFocus = true;

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game-wrap',
           { preload: preload, create: create, update: update }, true);

var emitter;

function preload() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('smoke', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/101507/mist1.png');
   // game.load.image('snake', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/101507/snake.png');
}

function create() {
    var LIFECYCLE = 6000;

    emitter = game.add.emitter(game.world.centerX, game.world.centerY, 50);
    emitter.width = game.width;
    emitter.height = game.height;

    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.9;
    emitter.minRotation = -5;
    emitter.maxRotation = 5;
    emitter.setYSpeed(-5, 5);
    emitter.setXSpeed(-5, 5);
    emitter.gravity = -10;

    emitter.setAlpha(0, 0.2, LIFECYCLE, Phaser.Easing.Quadratic.InOut, true);
    emitter.makeParticles('smoke');
    emitter.start(false, LIFECYCLE, 100, 0);


}

function update() {}

window.addEventListener('resize', function () {
    game.width = window.innerWidth;
    game.height = window.innerHeight;
    game.stage.width = window.innerWidth;
    game.stage.height = window.innerHeight;
    emitter.width = game.width;
    emitter.height = game.height;
});
