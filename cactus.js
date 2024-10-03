class Cactus{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.vel=-8;
    }
    update(){
        this.x+=this.vel;
    }
    display(){
        fill(0,150,0);
        noStroke();
        rect(this.x,this.y,this.w,this.h);
    }
}