Atividade1.Play = function(){ 


}; 



Atividade1.Play.prototype = { 


    preload : function(){ 
	


    }, 

    create : function(){ 
console.log('Play');
	
	},	 

	

	
    update : function(){ 
	  
    }

	
}


/*Muito importante adicionar os states nos arquivos separados*/
game.state.add('Play',Atividade1.Play);
