class Rubber {
    constructor(x,y,radius) {
      var body_options = {
        restitution:0.5,
        friction:1,
        density:2
      };
      this.body = Bodies.circle(x,y,(radius-20)/2,body_options);
      this.radius = radius;

      World.add(world,this.body);
    }
  
    display() {
      var pos = this.body.position;
      var Angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(Angle);
      rectMode(CENTER); 
      fill("blue");
      circle(0,0,this.radius);
      pop();
    }
} 
