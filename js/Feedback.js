Atividade1.Feedback = function(){ 


}; 



Atividade1.Feedback.prototype = { 

preload : function(){ 
	

	game.load.image('bg', 'imgs/bg.png');
	game.load.image('feedback', 'imgs/feedback.png');


}, 

    create : function(){ 

	bg = game.add.sprite(0, 0, 'bg');
	feedback = game.add.sprite(200, 200, 'feedback');
	
	},	 

		
    update : function(){ 
	  
    }
	
		
}


 


/*Esta função coloca os conteúdos deste arquivo no state*/
game.state.add('Feedback',Atividade1.Feedback);
