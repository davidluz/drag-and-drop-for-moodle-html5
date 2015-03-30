
Atividade1.Play2 = function(){ 
}; 

var linha ;
var linhas;
var linhasTotais;
var containerDeLinhas = [];

Atividade1.Play2.prototype = { 

//**********************************PRELOAD*********************************************//
preload : function(){ 
	
	game.load.image('drag1', 'imgs/drag14.png');
	game.load.image('drag2', 'imgs/drag15.png');
	game.load.image('drag3', 'imgs/drag16.png');
	game.load.image('drag4', 'imgs/drag17.png');
	game.load.image('drag5', 'imgs/drag18.png');
	game.load.image('drag6', 'imgs/drag19.png');
	game.load.image('drag7', 'imgs/drag20.png');
	game.load.image('drag8', 'imgs/drag21.png');
	game.load.image('drag9', 'imgs/drag22.png');
	game.load.image('drag10', 'imgs/drag23.png');

	game.load.image('enviar', 'imgs/enviar.png');
	
	
	game.load.image('linha1', 'imgs/linha1.png');
	game.load.image('linha2', 'imgs/linha2.png');
	game.load.image('bg', 'imgs/bg.png');
	game.load.image('bg2', 'imgs/bg2.png');
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
	
	
		
	
	s1 = game.add.sprite(680, 115, 's1');
	s2 = game.add.sprite(710, 115, 's2');
	s3 = game.add.sprite(735, 117, 's3');
	s4 = game.add.sprite(755, 120, 's4');
	
	
		
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
	
	
	enviar.inputEnabled = true;
	
	s1.inputEnabled = true;
	s2.inputEnabled = true;
	s3.inputEnabled = true;
	s4.inputEnabled = true;
	

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
	
	
	
	
	function openFancybox() {
  $.fancybox({
     'autoScale': true,
     'transitionIn': 'elastic',
     'transitionOut': 'elastic',
     'speedIn': 500,
     'speedOut': 300,
     'autoDimensions': true,
     'centerOnScroll': true,
     'href' : '#feedback2'
  });
}
	
	function goToFeedback(){

		openFancybox();
		//$("#feedback").fadeIn();
     
     /*States são zerados quando inicializam - o Array container de linhas, guarda os status dos objetos
     var numeroDeLinhas = linhas.countLiving(); 
     while (numeroDeLinhas>=0){
     var linhaTemp = linhas.getAt(numeroDeLinhas);
     containerDeLinhas.push(linhaTemp);
     numeroDeLinhas =  numeroDeLinhas-1;
     }
     
    linhasTotais = linhas.countLiving(); 
	 game.state.start('Feedback');*/ 
	
	

	}
	
	linhas = game.add.group();	
	
    // Delete drop itens  	
	function dropHandler(linha, pointer) {
    if (linha.x >650 && linha.y >250 && linha.x <780 && linha.y <350 )
    {
        linhas.remove(linha);
    }
  	}
	
	

	
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
game.state.add('Play2',Atividade1.Play2);
