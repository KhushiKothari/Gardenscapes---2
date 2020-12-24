class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width+ 5,height + 5,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      fill("white");
      stroke("white");
      strokeWeight(0)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
