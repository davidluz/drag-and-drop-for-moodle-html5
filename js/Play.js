
Atividade1.Play = function(){ }; 

Atividade1.Play.prototype = { 
    preload : function(){ 
	
	
 
    }, 

    create : function(){ 
    console.log('Tela de gamePlay');
     }, 

    update : function(){ 

    } 
}


game.state.add('Play',Atividade1.Play);
