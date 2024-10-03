let baseX=0;
let baseH=10;
let baseY=150-baseH;
let trex;
let g=0.5;
let h=30;
let clouds=[];
let cloudW=50;
let cactuses=[];
let cactusW;
let cactusH;

function setup(){
    createCanvas(700,150);
    trex=new Dino(20,baseY-h,20,h,g);
    clouds.push(new Cloud(width+cloudW/2,30,cloudW,20));
}

function keyPressed(){
    if(key===' '){
        trex.jump();
    }
}

function draw(){
    background(200);
    fill(0);//path color
    noStroke();
    rect(baseX,baseY,width,baseH);
    if(frameCount%round(random(50,70))==0){
        clouds.push(new Cloud(width+cloudW/2,random(10,35),cloudW,20));// repeaded cloud
        }

    if(frameCount%60==0){
        cactusW=round(random(5,15));
        cactusH=round(random(25,35));
        cactuses.push(new Cactus(width+cloudW/2,baseY-cactusH,cactusW,cactusH));
    }

    trex.update();
    trex.display();
    for(let c of clouds){
        c.update();
        c.display();
    }
    for(let cact of cactuses){
        cact.update();
        cact.display();
        if(trex.collide(cact)){
            background(255,0,0,50);
            fill(255,0,0);
            noStroke();
            textAlign(CENTER,CENTER);
            textSize(32);
            text("G A M E - O V E R !!",width/2,height/2);
            noLoop();
        }
    }
    fill(70);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(16);
    text(round(frameCount/8),650,20);
}