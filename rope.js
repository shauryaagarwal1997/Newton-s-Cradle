class Rope{
    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.6,
            length:200
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.position.x,this.rope.pointB.position.y)
    }
}
