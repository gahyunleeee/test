let myvector ;
let gravityx = 0.5;
let gravityy = 0.1;

function setup() {
  createCanvas(800, 500);
  myvector = new myClass () ;

}

function draw() {
  background(230,195,204,70);
  gravity01 = createVector(gravityx, gravityy);
  myvector.addForce(gravity01);

  stroke (217,230,158);
  strokeWeight(5);
  line(myvector.pos.x, myvector.pos.y, mouseX, mouseY);

  myvector.update();
  myvector.show();

  // let print01 = print ('color code is '+int(myvector.pos.x/2)+', ' +      int(myvector.pos.y/2) + ', ' + int(myvector.pos.x/4));
  textSize (20);
  text ('color code is ' + int(myvector.pos.x/2)+', ' + int(myvector.pos.y/2) + ', ' + int(myvector.pos.x/4),20,30);

}

function keyPressed () {
  if(keyCode === 65) { //'A'left
    gravityx = - 0.5;
    gravityy = 0;
  }
  if(keyCode === 87) { //'W'up
    gravityx = 0;
    gravityy = -0.5;
  }
    if(keyCode === 68) { //'D'left
    gravityx = 0.5 ;
    gravityy = 0 ;
  }
    if(keyCode === 83) { //'S'down
    gravityx = 0;
    gravityy = 0.5;
  }
    if(keyCode === 32) { //'space' reset
    gravityx = 0.5;
    gravityy = 0.1;
  }


}
