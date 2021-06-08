class Polygon{
    constructor(x,y,r){
        var options= {
            isStatic: true, 
            friction: 0, 
            density: 0.08
            
        }

    this.x= x; 
    this.y=y; 
    this.r=r; 
    this.image= loadImage("polygon.png");

    this.body= Bodies.circle(this.x, this.y, (this.r)/2, options); 
    World.add(world, this.body); 
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
         rotate(this.body.angle)
        imageMode(CENTER); 
        image(this.image, 0,0,this.r, this.r); 
        pop();   

    }
}
