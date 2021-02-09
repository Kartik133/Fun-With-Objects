class Box { 
  constructor(x,y) { 
    var body_options = { 
      restitution:0.5, 
      friction:1.0, 
      density:2 
    };

    this.body = Bodies.rectangle(x,y,50,50,body_options); 
    this.width = 150; 
    this.height = 40; 
    World.add(world,this.body); 
  }

  display() { 
    var pos = this.body.position; 
    pos.x = mouseX; 
    pos.y = mouseY; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x,pos.y); 
    rotate(angle); 
    angleMode(RADIANS); 
    rectMode(CENTER); 
    fill("yellow"); 
    stroke(255); 
    strokeWeight(3); 
    rect(0,0,this.width,this.height); 
    pop(); 
  } 
}