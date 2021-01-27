class Ball{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            friction: 0.3,
            density: 0.5
        }
        this.body = Bodies.circle(x,y,40, options)
        World.add(world, this.body)
    }
    display(){
        push()
        strokeWeight(3)
        fill("brown")
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,40)
        pop()
    }
}