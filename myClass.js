class myClass{  
 constructor() {
  this.pos = createVector (width/2,height/2);
  this.vel = createVector (0,0);
  this.acc = createVector (0,0);
  this.w = 50;
}
  addForce(aForce) {
  this.acc.add(aForce);
    
  }
 update() {
  this.checkedges () ;
  this.vel.add(this.acc);
  this.pos.add(this.vel);

  this.acc.set(0, 0);
   

}
 show() {
    noStroke(); 
    fill(147,227,230); 
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
//     fill (this.pos.x/2, this.pos.y/2,this.pos.x/4); //(230,142,86);
//     ellipse(mouseX, mouseY, this.w-20, this.w-20);
 
   if (mouseIsPressed) {
    this.w = this.w + 10;
    fill (255,0,0); //(230,142,86);
    rectMode (CENTER);
    rect(mouseX, mouseY, 40);
   
   } else {
    this.w = 50;
    fill (this.pos.x/2, this.pos.y/2,this.pos.x/4); //(230,142,86);
    ellipse(mouseX, mouseY, 30, 30);
     }
}
  checkedges () {
     if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
     }
        if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
  }
    if (this.pos.y < 0) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = 0;
     }
        if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = 0;
  }
 }
  
}
