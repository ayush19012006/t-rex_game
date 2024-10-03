class Cloud{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.vel=-4;
    }
    update(){
        this.x+=this.vel;
    }
    display(){
        fill(0,30);
        stroke(50);
        ellipse(this.x,this.y,this.w,this.h);
    }
}