class Particle {
    constructor(x, y,r) {

        var options ={
            density:0.1,
            restitution:0.4,
            friction:0.1
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color("blue");
        World.add(world, this.body);

    }
    display() {
   // round(this.body.position.y);
   

  //console.log(this.body.speed)
        //console.log(this.body.position.y);
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};