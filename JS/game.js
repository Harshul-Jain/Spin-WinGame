

let config={
	type:Phaser.CANVAS,
	width:800,
	height:600,
	backgroundColor:0xffcc01,

	scene:{
		preload:preload,
		create:create,
		update:update,
	}
};
let game=new Phaser.Game(config);
function preload(){
	console.log("preload");
    console.log(this);
    this.load.image('background','./Assets/back.jpg');
    this.load.image('wheel','./Assets/wheel.png');
    this.load.image('pin','./Assets/pin.png');
    this.load.image('stand','./Assets/stand.png');
    
}
function create(){
	console.log("create");
    //create background image
    let W=game.config.width;
    let H=game.config.height;
    
    let background=this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
    //lets create stand
    let stand=this.add.sprite(W/2,H/2+250,'stand');
    stand.setScale(0.25);
    
    //lets create wheel
    let wheel=this.add.sprite(W/2,H/2,'wheel');
    wheel.setScale(0.25)
   
    //lets create pin
    let pin=this.add.sprite(W/2,H/2-250,'pin');
    pin.setScale(0.25);
    
    
   
    
    
}
//Game Loop
function update(){
	console.log("update");
}

