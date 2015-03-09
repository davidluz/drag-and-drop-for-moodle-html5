
Atividade1.Feedback = function(){ 


}; 




Atividade1.Feedback.prototype = { 

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
	game.load.image('linha1', 'imgs/linha1.png');
	game.load.image('linha2', 'imgs/linha2.png');

	game.load.image('bg', 'imgs/bg2.png');
	


}, 

    create : function(){ 

    game.physics.startSystem(Phaser.Physics.ARCADE);
	bg = game.add.sprite(0, 0, 'bg');
	
	drag1 = game.add.sprite(drag1.x, drag1.y, 'drag1');
    drag2 = game.add.sprite(drag2.x, drag2.y, 'drag2');
	drag3 = game.add.sprite(drag3.x, drag3.y, 'drag3');
	drag4 = game.add.sprite(drag4.x, drag4.y, 'drag4');
	drag5 = game.add.sprite(drag5.x, drag5.y, 'drag5');
	drag6 = game.add.sprite(drag6.x, drag6.y, 'drag6');
	drag7 = game.add.sprite(drag7.x, drag7.y, 'drag7');
	drag8 = game.add.sprite(drag8.x, drag8.y, 'drag8');
	drag9 = game.add.sprite(drag9.x, drag9.y,  'drag9');
	drag10 = game.add.sprite(drag10.x, drag10.y, 'drag10');
	drag11 = game.add.sprite(drag11.x, drag11.y, 'drag11');
	drag12 = game.add.sprite(drag12.x, drag12.y, 'drag12');
	drag13 = game.add.sprite(drag13.x, drag13.y, 'drag13');

     console.log(linhasTotais);

     while(linhasTotais>=0){

    // Recupera a posição das linhas via o container de objetos 

    //Bloco de if - conserta o bug das diferença de posição entre os states (tipos de linha e1)
    if(containerDeLinhas[linhasTotais].key=='linha1'){
    linha1 = game.add.sprite(Math.round(containerDeLinhas[linhasTotais].x-31),Math.round(containerDeLinhas[linhasTotais].y-15),containerDeLinhas[linhasTotais].key);
    linha1.rotation = containerDeLinhas[linhasTotais].rotation;

    }

    if(containerDeLinhas[linhasTotais].key=='linha2'){
    linha1 = game.add.sprite(Math.round(containerDeLinhas[linhasTotais].x),Math.round(containerDeLinhas[linhasTotais].y-40),containerDeLinhas[linhasTotais].key);
    linha1.rotation = containerDeLinhas[linhasTotais].rotation;
    }

    if(linha1.rotation!=90){
     linha1.x = linha1.x+25;
     linha1.y = linha1.y-5;
    }

   if(linha1.rotation!=180){
     linha1.x = linha1.x+5;
     linha1.y = linha1.y-25;
    }




    
	linhasTotais = linhasTotais -1;
	}

console.log(linhasTotais);
    function printLinha(){
     	console.log("linha encontrada!");

	}
     
	function printarLinhas(){
    console.log(linhas.countLiving());
	linhas.forEachExists(printLinha, this);
	}



	printarLinhas();
	},	 

		
    update : function(){ 
	  
    }
	
		
}


 


/*Esta função coloca os conteúdos deste arquivo no state*/
game.state.add('Feedback',Atividade1.Feedback);
