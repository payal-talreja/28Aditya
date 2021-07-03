class tree{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.image=loadImage('Plucking mangoes/tree.png')
        this.x=x
        this.y=y
        World.add(this.image, World)
    }
    display(){
        push();
        strokeWeight(4)
        image(this.image, this.x, this.y, 300, 300);
        pop();
    }
}