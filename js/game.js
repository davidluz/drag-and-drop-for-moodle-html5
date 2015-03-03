/*!
 * HTML5 Drag and Drop for Moodle v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */

//Global configuration
var game = new Phaser.Game(680, 400, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

//Set the assets
function preload() {

    game.load.image('drag1', 'imgs/drag1.png');
    game.load.image('drag2', 'imgs/drag2.png');

}

//Define all global variables 
var drag1;
var drag2;

function create() {
    // Start physic system
    game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// Add all sprites
    drag1 = game.add.sprite(50, 200, 'drag1');
    drag2 = game.add.sprite(0, 0, 'drag2');

	// Add a physics to sprites
    game.physics.enable( [ drag1, drag2 ], Phaser.Physics.ARCADE);

	//Enable inputs 
    drag1.inputEnabled = true;
	drag2.inputEnabled = true;
	
	//Enable drags
    drag1.input.enableDrag(true);
	drag2.input.enableDrag(true);

}

function update() {
    //Get overlap events *(not collision)  
    game.physics.arcade.overlap(drag1, drag2, overlapHandler);

}

function overlapHandler (obj1, obj2) {
    //Event on collision  
    game.stage.backgroundColor = '#992d2d';

}




