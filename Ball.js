class Ball {
  constructor(x, y, width, height) {
    var options ={
      'restitution':0.8,
      'density':1,
      'friction':1
    }
      this.body=Bodies.rectangle(x, y, width, height,options);
      World.add(world,this.body);
  }
  display(){
  push();
   translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle);
   fill("lightblue");
   stroke("brown");
   ellipse(0,0,100,100);
  pop();
  }
}
