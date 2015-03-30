
Atividade1.Fim = function(){ 
}; 



Atividade1.Fim.prototype = { 

//**********************************PRELOAD*********************************************//
preload : function(){ 
	

	game.load.image('bg', 'imgs/bg.png');
	game.load.image('feedback_final', 'imgs/feedback_final.png');

	
}, 


//**********************************CREATE*********************************************//


create : function(){ 
	
// Add all sprites
	bg = game.add.sprite(0, 0, 'bg');
	bg = game.add.sprite(180, 250, 'feedback_final');
	
	
	   
	
	},	 

//**********************************UPDATE****************************************************//		
    update : function(){ 

        }



	},
	
//**********************************FIM DE UPDATE*********************************************//
	
		


/*Esta função coloca os conteúdos daqui no state*/
game.state.add('Fim',Atividade1.Fim);
