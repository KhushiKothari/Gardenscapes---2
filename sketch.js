const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boxes1 = [];
var boxes2 = [];
var boxes3 = [];
var boxes4 = [];

function preload() {}

function setup(){
    createCanvas(1200,540);
    
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 20, 1150, 10);
    ground2 = new Ground(600, 520, 1150, 10);
    ground3 = new Ground(25, 270, 10, 500)
    ground4 = new Ground(1175, 270, 10, 500)

    for (let k = 0; k < 9; k++){
        let x = 60
        let y = 200
        let w = 50
        let h = 50
        let a = 0
        boxes1[k] = new Box (x,y,w,h,a)
    }
  
    for (let k = 0; k < 9; k++){
        let x = 90
        let y = 200
        let w = 50
        let h = 50
        let a = 0
        boxes2[k] = new Box (x,y,w,h,a)
    }

    for (let k = 0; k < 9; k++){
        let x = 120
        let y = 200
        let w = 50
        let h = 50
        let a = 0
        boxes3[k] = new Box (x,y,w,h,a)
    }

    for (let k = 0; k < 9; k++){
        let x = 150
        let y = 200
        let w = 50
        let h = 50
        let a = 0
        boxes4[k] = new Box (x,y,w,h,a)
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
  
    for (let k = 0; k < boxes1.length; k++){
        boxes1[k].display();
    }

    for (let k = 0; k < boxes2.length; k++){
        boxes2[k].display();
    }

    for (let k = 0; k < boxes3.length; k++){
        boxes3[k].display();
    }

    for (let k = 0; k < boxes4.length; k++){
        boxes4[k].display();
    }
    drawSprites();
}
