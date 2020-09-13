class Game{
    constructor(){
    
    }

getState(){
database.ref('gameState').on("value",function(data){
 gameState=data.val();
})
} 

updateState(state){
database.ref('/').update({
gameState: state
})
}

start(){
if(gameState === 0){
form = new Form();
form.display();
player=new Player();
player.getCount();
}    
car1 = createSprite(100,200);
car1.addImage("car1",car1Image);
car2 = createSprite(300,200);
car2.addImage("car2",car2Image);
car3 = createSprite(500,200);
car3.addImage("car3",car3Image);
car4 = createSprite(700,200);
car4.addImage("car4",car4Image);
cars = [car1, car2, car3, car4];
}

play(){
   form.hide();
   textSize(30);
   text("GAME START", 120,100);
   Player.getPlayerInfo();
   console.log(allPlayers);
   player.getRank();
   if(allPlayers !== undefined){
     background(ground);
     image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     var index = 0;
     var x = 200;
     var y;
       
     for(var i in allPlayers){
       index = index + 1
       x = x+200
       y = displayHeight-allPlayers[i].distance;
       cars[index - 1].x = x
       cars[index-1].y = y
         if(index === player.index){
           stroke(10);
           fill("red");
           ellipse(x,y,60,60);
           camera.position.x=displayWidth/2;
           camera.position.y=cars[index-1].y;
         }
     }
   }

   if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50;
      player.update();
   }

   if(player.distance > displayHeight*5){
     gameState = 2;
     player.rank = player.rank + 1
     Player.UpdateRank(player.rank);
   }
   drawSprites();
}

end(){
  console.log("Game Over");
  console.log(player.rank);
}

}