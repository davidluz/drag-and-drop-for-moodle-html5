Atividade1.Relatorio = function(){ }; 

Atividade1.Relatorio.prototype = { 
    preload : function(){ 
	
	game.load.image('outrologo1', 'imgs/modelos/2.png');
 
    }, 

    create : function(){ 
    game.add.sprite(0, 0, 'outrologo1');
     }, 

    update : function(){ 

    } 
}


/*Muito importante adicionar os states nos arquivos separados*/
game.state.add('Relatorio',Atividade1.Relatorio);