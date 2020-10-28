class Ground{
    constructor(x,y,width){
        var optionsground ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.body = Bodies.rectangle(this.x,this.y,this.width,10, optionsground);
        World.add (world ,  this.body);
        

    }
    display(){
        rectMode(CENTER);
               
    }
}