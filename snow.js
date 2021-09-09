class snow {
    constructor(x,y){
        var snowOptions={
        restitution:0.95,
        frictionAir:0.01
        }

        this.body=Bodies.circle(x,y,10,snowOptions);
        World.add(world,this.body);
    }
    display(){
    fill("white");
    ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}