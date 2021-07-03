class stone{
    constructor(x, y, w, h){
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.image=loadImage('Plucking mangoes/stone.png');
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        World.add(this.image, World)
    }
    display(){
        push();
        strokeWeight(4)
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}