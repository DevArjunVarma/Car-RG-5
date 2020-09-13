class Form{
    constructor(){
      this.input = createInput('name');
      this.button = createButton('PLAY');
      this.greeting = createElement('h3');
      this.reset = createButton('RESET');
    }

display(){
  var title=createElement('h2',"Car Racing");   
  title.position(displayWidth/2,0);
  this.input.position(displayWidth/2,displayHeight/2);
  this.button.position(displayWidth/2,displayHeight/1.75);
  this.reset.position(displayWidth-100,20);
  this.button.mousePressed(()=>{
  this.input.hide();
  this.button.hide();
  player.name=this.input.value();
  playerCount+=1;
  player.index=playerCount;
  player.update();
  player.updateCount(playerCount);
  this.greeting.html("hello "+ player.name);
  this.greeting.position(displayWidth/2,displayHeight/2);
  })
  this.reset.mousePressed(()=>{
    game.updateState(0);
    player.updateCount(0);
    Player.UpdateRank(0);
  })
}

hide(){
  this.greeting.hide();
  this.input.hide();
  this.button.hide();
}
}
