class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(count){
        database.ref("/").update({
            gameState : count
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
           
        }
    }

    play(){
      form.hide();

      Player.getPlayerInfo();

      textSize(30);
      text("Game Starts", 50, 50);

      if(allPlayers !== undefined){
          var yPos = 100;
        for(var plr in allPlayers){
            if(plr === "player"+player.index){
                fill("red");
            }
            else{
                fill("black");
            }
            textSize(15);
            text(allPlayers[plr].name +" : "+ allPlayers[plr].distance, 50 ,yPos);
            yPos+=30;
        }
      }

      if(keyDown(UP_ARROW) && player.index !== null){
        player.distance+=50;
        player.update();
      }

    }

}