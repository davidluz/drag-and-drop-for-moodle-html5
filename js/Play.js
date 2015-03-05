Atividade1.Play = function(){ 
}; 

//Variável que controla os ID's das linhas geradas dinamicamente 
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
	game.load.image('plus', 'imgs/plus.png');
	
	game.load.image('linha1', 'imgs/linha1.png');
	game.load.image('linha2', 'imgs/linha2.png');
	game.load.image('bg', 'imgs/bg.png');
	game.load.image('menu', 'imgs/menu.png');
}, 


//**********************************CREATE*********************************************//
create : function(){ 
	
// Add all sprites
	bg = game.add.sprite(0, 0, 'bg');
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
	menu = game.add.sprite(680,40,'menu');
	

    enviar = game.add.sprite(680, 390, 'enviar');
	plus = game.add.sprite(680, 80, 'plus');
	
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
	plus.inputEnabled = true;


	
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
	// Função que cria linhas dinamicamente
	createLine = function (){
    var linha = game.add.sprite(680, 80, 'linha1');
	linha.inputEnabled = true;
	linha.input.enableDrag(true);
	linha.anchor.setTo(0.5, 0.5);
	//function rotateLine(){
	//linha.rotation = linha.rotation+45;
	//}
	//linha.events.onInputDown.add(rotateLine, this);
	linhas.add(linha);
	
	}

	enviar.events.onInputDown.add(goToFeedback, this);
	plus.events.onInputDown.add(createLine, this);
	
	
	},	 

//**********************************UPDATE****************************************************//		
    update : function(){ 
	  
    },
	
//**********************************FIM DE UPDATE*********************************************//
	
		
}




/*Esta função coloca os conteúdos daqui no state*/
game.state.add('Play',Atividade1.Play);
