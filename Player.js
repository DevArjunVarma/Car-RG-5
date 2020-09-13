class Player{
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
      this.rank=null;
    }

getRank(){
database.ref('carsatend').on("value",function(data){
this.rank=data.val();
})
}

static UpdateRank(rank){
database.ref('/').update({
carsatend: rank
})
}

getCount(){
database.ref('playerCount').on("value",function(data){
 playerCount=data.val();
})
} 

updateCount(count){
database.ref('/').update({
playerCount: count
})
}
update(){
var playerIndex="players/player"+this.index;
database.ref(playerIndex).set({
name: this.name, distance: this.distance
})
}
static getPlayerInfo(){
    database.ref('players').on("value",(data)=>{
        allPlayers=data.val();
    } )
}
}