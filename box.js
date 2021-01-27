class Box{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            friction: 0.3,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,70,70, options)
        World.add(world, this.body)
    }
    display(){
        push()
        strokeWeight(3)
        fill("lightpink")
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,70,70)
        pop()
    }
}