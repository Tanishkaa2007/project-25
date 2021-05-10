class paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 5
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        //this.image = loadImage("paper.png");
        //imageMode(RADIUS);
        //image(this.image, 0, 0, this.r);
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        //fill("white")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop()
    }
}