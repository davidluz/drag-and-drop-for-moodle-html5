/*!
 * HTML5 Drag and Drop for Moodle v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */
 
 
 //Atividade1 é um objeto
Atividade1 = {};

//States da Atividade
Atividade1.Game = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Feedback = function(){ }; 
 

//Global configuration
var game = new Phaser.Game(800, 550, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

function preload(){

game.load.image('bg', 'imgs/bg.png');
game.load.image('home', 'imgs/home.png');
game.load.image('home2', 'imgs/home2.png');
game.load.image('comecar', 'imgs/comecar.png');

}

function create(){
bg = game.add.sprite(0, 0, 'bg');
home = game.add.sprite(380, 180, 'home');
home2 = game.add.sprite(210, 130, 'home2');
comecar = game.add.sprite(300, 330, 'comecar');
comecar.inputEnabled = true;
comecar.events.onInputDown.add(goToPlay, this);
game.stage.backgroundColor = '#fff';

	 tween = game.add.tween(home).to({ x: 250 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

function update(){

}

function goToPlay(){

game.state.start('Play');
}


