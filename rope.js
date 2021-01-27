class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 250
        }
        this.body = Constraint.create(options)
        this.pointB = pointB;
        World.add(world, this.body)
    }

    display(){
        push()
        strokeWeight(4)
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y)
        pop()
    }
}