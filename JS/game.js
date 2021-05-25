

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
}
function create(){
	console.log("create");
}
//Game Loop
function update(){
	console.log("update");
}

