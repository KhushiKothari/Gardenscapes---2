class Box {
    constructor(x,y,width,height,angle){
      var options = {
        //'restitution':0.1,
        'friction': 1,
        'density':1.0,
    }
    this.body = Bodies.rectangle(x, y, width + 5, height+ 5, options);
    this.width = width;
    this.height = height;
    var rand =Math.round(random(1,5)) 
    switch(rand) {
      case 1: this.image = loadImage('Rainbow.jpg')
      break;
      case 2: this.image = loadImage('icecream.jpg')
      break;
      case 3: this.image = loadImage('unicorn.png')
      break;
      case 4: this.image = loadImage('Pizza.jpg')
      break;
      case 5: this.image = loadImage('Maggi.jpg')
      break;
      default: break;
    }
    
    console.log(rand)
    World.add(world, this.body);
      
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      imageMode(CENTER);
      fill("white")
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }