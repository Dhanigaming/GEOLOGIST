class Sand {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
        
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, (r-20)/2, options);
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
      ellipseMode(CENTER);
      strokeWeight(15);
      stroke("voilet");
      fill("blue");
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  