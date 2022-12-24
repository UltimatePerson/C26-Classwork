class Boat{
    constructor(x,y,w,h,boatPos){
    this.body = Bodies.rectangle(x,y,w,h);
    this.image = loadImage("./assets/boat.png");
    this.w = w
    this.h = h
    this.boatPos = boatPos
    World.add(world, this.body)
    }

    remove(index){
        setTimeout(()=>{
            Matter.World.remove(world, boats[index].body);
            delete boats[index];
        }, 2000);
    }
    
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,this.boatPos,this.w,this.h)
        pop()
    }

}
