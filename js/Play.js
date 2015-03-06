Atividade1.Play = function(){ 
}; 

//Variável que controla os ID's das linhas geradas dinamicamente 
var linha;
var linhas;



	
	
Atividade1.Play.prototype = { 

//**********************************PRELOAD*********************************************//
preload : function(){ 
	
	game.load.image('drag1', 'imgs/drag1.png');
	game.load.image('drag2', 'imgs/drag2.png');
	game.load.image('drag3', 'imgs/drag3.png');
	game.load.image('drag4', 'imgs/drag4.png');
	game.load.image('drag5', 'imgs/drag5.png');
	game.load.image('drag6', 'imgs/drag6.png');
	game.load.image('drag7', 'imgs/drag7.png');
	game.load.image('drag8', 'imgs/drag8.png');
	game.load.image('drag9', 'imgs/drag9.png');
	game.load.image('drag10', 'imgs/drag10.png');
	game.load.image('drag11', 'imgs/drag11.png');
	game.load.image('drag12', 'imgs/drag12.png');
	game.load.image('drag13', 'imgs/drag13.png');
	game.load.image('enviar', 'imgs/enviar.png');
	
	
	game.load.image('linha1', 'imgs/linha1.png');
	game.load.image('linha2', 'imgs/linha2.png');
	game.load.image('bg', 'imgs/bg.png');
	game.load.image('menu', 'imgs/menu.png');
	game.load.image('remove','imgs/remove.png');
	
	game.load.image('s1','imgs/s1.png');
	game.load.image('s2','imgs/s2.png');
	game.load.image('s3','imgs/s3.png');
	game.load.image('s4','imgs/s4.png');
	
}, 


//**********************************CREATE*********************************************//


create : function(){ 
	game.physics.startSystem(Phaser.Physics.ARCADE);
// Add all sprites
	bg = game.add.sprite(0, 0, 'bg');
	menu = game.add.sprite(680,40,'menu');
	remove = game.add.sprite(680, 250, 'remove');
	enviar = game.add.sprite(680, 390, 'enviar');
    drag1 = game.add.sprite(36, 68, 'drag1');
    drag2 = game.add.sprite(114, 153, 'drag2');
	drag3 = game.add.sprite(26, 210, 'drag3');
	drag4 = game.add.sprite(75, 273, 'drag4');
	drag5 = game.add.sprite(147, 363, 'drag5');
	drag6 = game.add.sprite(213, 230, 'drag6');
	drag7 = game.add.sprite(269, 300, 'drag7');
	drag8 = game.add.sprite(306, 385, 'drag8');
	drag9 = game.add.sprite(301, 70,  'drag9');
	drag10 = game.add.sprite(424, 204, 'drag10');
	drag11 = game.add.sprite(530, 105, 'drag11');
	drag12 = game.add.sprite(472, 105, 'drag12');
	drag13 = game.add.sprite(372, 350, 'drag13');
	
	
	
	
	
	s1 = game.add.sprite(680, 90, 's1');
	s2 = game.add.sprite(710, 90, 's2');
	s3 = game.add.sprite(735, 92, 's3');
	s4 = game.add.sprite(755, 95, 's4');
	
	g1 = game.add.sprite(680, 142, 's1');
	g2 = game.add.sprite(710, 142, 's2');
	g3 = game.add.sprite(735, 144, 's3');
	g4 = game.add.sprite(755, 147, 's4');
	
	

	
	//Enable inputs 
    drag1.inputEnabled = true;
	drag2.inputEnabled = true;
	drag3.inputEnabled = true;
	drag4.inputEnabled = true;
	drag5.inputEnabled = true;
	drag6.inputEnabled = true;
	drag7.inputEnabled = true;
	drag8.inputEnabled = true;
	drag9.inputEnabled = true;
	drag10.inputEnabled = true;
	drag11.inputEnabled = true;
	drag12.inputEnabled = true;
	drag13.inputEnabled = true;
	
	enviar.inputEnabled = true;
	
	s1.inputEnabled = true;
	s2.inputEnabled = true;
	s3.inputEnabled = true;
	s4.inputEnabled = true;
	
	g1.inputEnabled = true;
	g2.inputEnabled = true;
	g3.inputEnabled = true;
	g4.inputEnabled = true;


	//Enable drags
    drag1.input.enableDrag(true);
	drag2.input.enableDrag(true);
	drag3.input.enableDrag(true);
	drag4.input.enableDrag(true);
	drag5.input.enableDrag(true);
	drag6.input.enableDrag(true);
	drag7.input.enableDrag(true);
	drag8.input.enableDrag(true);
	drag9.input.enableDrag(true);
	drag10.input.enableDrag(true);
	drag11.input.enableDrag(true);
	drag12.input.enableDrag(true);
	drag13.input.enableDrag(true);
	
	
	
	
	
	function goToFeedback(){
	game.state.start('Feedback');
		
	}
	
	linhas = game.add.group();	
	
	
	 function dropHandler(linha, pointer) {

    if (linha.x >650 && linha.y >250 && linha.x <780 && linha.y <350 )
    {
        linhas.remove(linha);
    }
  
	}
	// Função que cria linhas dinamicamente
	
	//Linha Tipo
	createLine1 = function (){
    linha = game.add.sprite(680, 80, 'linha1');
	linha.rotation = linha.rotation+90;
	linha.inputEnabled = true;
	linha.input.enableDrag(true);
	linha.events.onDragStop.add(dropHandler, this);
	linha.anchor.setTo(0.5, 0.5);
	linhas.add(linha);
	
	}
	
	//Linha Tipo 2
	createLine2 = function (){
    linha = game.add.sprite(680, 80, 'linha2');
	linha.rotation = linha.rotation;
	linha.inputEnabled = true;
	linha.input.enableDrag(true);
	linha.events.onDragStop.add(dropHandler, this);
	linha.anchor.setTo(0.5, 0.5);
	linhas.add(linha);
	
	}
	
	//Linha Tipo 3
	createLine3 = function (){
    linha = game.add.sprite(680, 80, 'linha1');
	linha.rotation = linha.rotation+180;
	linha.inputEnabled = true;
	linha.input.enableDrag(true);
	linha.anchor.setTo(0.5, 0.5);
	linha.events.onDragStop.add(dropHandler, this);
	linhas.add(linha);
	
	}
	
	//Linha Tipo
	createLine4 = function (){
    linha = game.add.sprite(680, 80, 'linha1');
	linha.rotation = linha.rotation+0;
	linha.inputEnabled = true;
	linha.input.enableDrag(true);
	linha.events.onDragStop.add(dropHandler, this);
	linha.anchor.setTo(0.5, 0.5);
	linhas.add(linha);
	
	}
	
	
	
	enviar.events.onInputDown.add(goToFeedback, this);
	s1.events.onInputDown.add(createLine1, this);
	s2.events.onInputDown.add(createLine2, this);
	s3.events.onInputDown.add(createLine3, this);
	s4.events.onInputDown.add(createLine4, this);

	
  
   
   
	
	
	},	 

//**********************************UPDATE****************************************************//		
    update : function(){ 
	
	   
		
		
		
        }

	},
	
//**********************************FIM DE UPDATE*********************************************//
	
		


/*Esta função coloca os conteúdos daqui no state*/
game.state.add('Play',Atividade1.Play);
