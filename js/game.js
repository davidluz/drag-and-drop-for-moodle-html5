var game = new Phaser.Game(650, 400, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {

    game.load.image('drag1', 'imgs/drag1.png');
    game.load.image('drag2', 'imgs/drag2.png');

}

var drag1;
var drag2;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#2d2d2d';

    //  This will check Sprite vs. Sprite collision

    drag1 = game.add.sprite(50, 200, 'drag1');
    drag2 = game.add.sprite(0, 0, 'drag2');

    game.physics.enable( [ drag1, drag2 ], Phaser.Physics.ARCADE);

	
    drag1.inputEnabled = true;
    drag1.input.enableDrag(true);
	drag1.bringToTop();
	
	drag2.inputEnabled = true;
    drag2.input.enableDrag(true);
	drag2.bringToTop();
	


}

function update() {

    // Usar overlap do arcade e não o collider
    game.physics.arcade.overlap(drag1, drag2, collisionHandler);

}

function collisionHandler (obj1, obj2) {

    //  The two sprites are colliding
    game.stage.backgroundColor = '#992d2d';

}




