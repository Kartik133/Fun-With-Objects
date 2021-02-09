class Stone {
    constructor(x,y,width,height,angle) {
      var body_options = {
        restitution:0.3,
        friction:2,
        density:1 
      };

      this.body = Bodies.rectangle(x,y,width,height,body_options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);

      World.add(world,this.body);
    }
  
    display() {
      var pos = this.body.position;
      var Angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(Angle);
      rectMode(CENTER);
      angleMode(RADIANS); 
      fill(0);
      rect(0,0,this.width,this.height);
      pop();
    }
}  