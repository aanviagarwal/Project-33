class Snow{
    constructor(x,y){
        var options ={
            restitution = 0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}
