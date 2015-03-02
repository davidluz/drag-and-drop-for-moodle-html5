//Atividade1 é um objeto
Atividade1 = {};

//States da Atividade
Atividade1.MainMenu = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Relatorio = function(){ }; 


var game = new Phaser.Game(1280, 800, Phaser.CANVAS, 'game', { preload:preload, create: create, update: update });

game.state.add('MainMenu',Atividade1.MainMenu);
function preload(){
   game.load.image('logo', 'imgs/logo.png');
   game.load.image('btn_init', 'imgs/btn_init.png');

}

function create() {


    this.game.stage.backgroundColor = '#ffffff';
    game.add.sprite(0, 0, 'logo');
    var btn_init = game.add.sprite(0,0, 'btn_init');
	btn_init.inputEnabled = true;
	btn_init.events.onInputDown.add(goToPlay, this);

}

function update(){

} 

function goToPlay(){
game.state.start('Play');
}



