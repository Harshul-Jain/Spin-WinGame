

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
    this.wheel=this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.25)
   
    //lets create pin
    let pin=this.add.sprite(W/2,H/2-250,'pin');
    pin.setScale(0.25);
    
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //lets create text object
    font_style={
        font:"bold 30px Roboto",
        align:"center",
        color:"red",
    }
    this.game_text=this.add.text(10,10,"Welcome to Spin & Win",font_style);

}
//Game Loop
function update(){
    console.log("Inside Update");
}
function spinwheel(){
    console.log("You clicked the mouse");
    console.log("Start spinning");
    this.game_text.setText("You clicked the mouse!");
    tween =this.tweens.add({
        targets:this.wheel,
        angle:800,
        ease:"cubic.easeOut",
        duration:3000,
        onComlete:function(){
            console.log("You won something");
        },
    });
}

