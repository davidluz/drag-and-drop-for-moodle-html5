
Atividade1.MainMenu = function(){ }; 

Atividade1.MainMenu.prototype = { 
    preload : function(){ 
	
	
 
    }, 

    create : function(){ 
    console.log('Tela de menu entrou');
     }, 

    update : function(){ 

    } 
}


game.state.add('MainMenu',Atividade1.MainMenu);
