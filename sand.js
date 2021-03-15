class Sand {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
        
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 5, 5, options);
      this.width = 5;
      this.height = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(15);
      stroke("voilet");
      fill("blue");
      rect(500,500, this.width, this.height);
      pop();
    }
  };
  