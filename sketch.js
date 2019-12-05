var bchead, bcbody, bctail;
var bullhead, bullbody, bulltail;
var germanhead, germanbody, germantail;
var goldenhead, goldenbody, goldentail;
var pughead, pugbody, pugtail;

var head;
var body;
var tail;

var song1;
var song2;
var song3;

var barks;



function preload() {
    bchead = loadImage('assets/bchead.png');
    bcbody = loadImage('assets/bcbody.png');
    bctail = loadImage('assets/bctail.png');

    bullhead = loadImage('assets/bullhead.png');
    bullbody = loadImage('assets/bullbody.png');
    bulltail = loadImage('assets/bulltail.png');

    germanhead = loadImage('assets/germanhead.png');
    germanbody = loadImage('assets/germanbody.png');
    germantail = loadImage('assets/germantail.png');

    goldenhead = loadImage('assets/goldenhead.png');
    goldenbody = loadImage('assets/goldenbody.png');
    goldentail = loadImage('assets/goldentail.png');

    pughead = loadImage('assets/pughead.png');
    pugbody = loadImage('assets/pugbody.png');
    pugtail = loadImage('assets/pugtail.png');

    //names
    bordercollie = loadImage('assets/bordercollie.png');
    bordershepherd = loadImage('assets/bordershepherd.png');
    bullcollie = loadImage('assets/bullcollie.png');
    borderRetriever = loadImage('assets/borderRetriever.png');
    pollug = loadImage('assets/pollug.png');
    bulldog = loadImage('assets/bulldog.png');
    bullshepherd = loadImage('assets/bullshepherd.png');
    bullretriever = loadImage('assets/bullretriever.png');
    bullpug = loadImage('assets/bullpug.png');
    germanshepherd = loadImage('assets/germanshepherd.png');
    germancollie = loadImage('assets/germancollie.png');
    germanretriever = loadImage('assets/germanretriever.png');
    shug = loadImage('assets/shug.png');
    goldenretriever = loadImage('assets/goldenretriever.png');
    goldenbulldog = loadImage('assets/goldenbulldog.png');
    gug = loadImage('assets/gug.png');
    pug = loadImage('assets/pug.png');
    bug = loadImage('assets/bug.png');
    goldenpug = loadImage('assets/goldenpug.png');
    
    clicktomix = loadImage('assets/clicktomix.png');

    mixButton = loadImage('assets/mixbutton.png')

    bgimg = loadImage('assets/bg.png');

    song1 = loadSound("assets/woof.mp3");
    song2 = loadSound("assets/woof2.wav");
    song3 = loadSound("assets/woof3.wav");
}

function setup() {
    createCanvas(1200,800);
    background(175, 205, 255);
    imageMode(CENTER);
    image(bgimg, width / 2, height / 2);
    image(clicktomix, width / 2, height / 2);

}


function mouseReleased() {
  
barks = random(0, 3);

  if (barks > 0 && barks < 1){
      song1.play();
  }

  if (barks > 1 && barks < 2){
      song2.play();
  }

  if (barks > 2 && barks < 3){
      song3.play();
  }

  }

  function draw() {
    button = createImg('assets/mixbutton.png');
    button.position(450, 650);
    button.mousePressed(creature);
  }

function creature() {
  image(bgimg, width / 2, height / 2);

  head = random(0, 5);
  body = random(0, 5);
  tail = random(0, 5);

  var bx = width / 2;
  var by = 400;
  var hx = bx - 200
  var hy = by - 120
  var tx = bx + 170;
  var ty = by - 80;

  var nX = 600;
  var nY = 100;


  //body
  if (body > 0 && body < 1) {
    image(bcbody, bx, by - 15);
  }

  if (body > 1 && body < 2) {
    image(bullbody, bx, by);
  }

  if (body > 2 && body < 3) {
    image(germanbody, bx, by);
    tx = tx - 50
  }

  if (body > 3 && body < 4) {
    image(goldenbody, bx, by);
    tx = tx + 30;
  }

  if (body > 4 && body < 5) {
    image(pugbody, bx, by);
    tx = tx + 30;
  }

  //head
  if (head > 0 && head < 1) {
    image(bchead, hx, hy - 40);
    if(body > 0 && body < 1){
    image(bordercollie, nX, nY);
    }
    if(body > 1 && body < 2){
      image(bullcollie, nX, nY);
      }
      if(body > 2 && body < 3){
        image(bordershepherd, nX, nY);
        }
        if(body > 3 && body < 4){
          image(borderRetriever, nX, nY);
          }
          if(body > 4 && body < 5){
            image(pollug, nX, nY);
            }
  }

  if (head > 1 && head < 2) {
    image(bullhead, hx - 20, hy - 20);
    if(body > 0 && body < 1){
      image(bullcollie, nX, nY);
      }
      if(body > 1 && body < 2){
        image(bulldog, nX, nY);
        }
        if(body > 2 && body < 3){
          image(bullshepherd, nX, nY);
          }
          if(body > 3 && body < 4){
            image(bullretriever, nX, nY);
            }
            if(body > 4 && body < 5){
              image(bullpug, nX, nY);
              }
  }

  if (head > 2 && head < 3) {
    image(germanhead, hx + 15, hy - 40);
    by = by + 200;
    if(body > 0 && body < 1){
      image(germancollie, nX, nY);
      }
      if(body > 1 && body < 2){
        image(bullshepherd, nX, nY);
        }
        if(body > 2 && body < 3){
          image(germanshepherd, nX, nY);
          }
          if(body > 3 && body < 4){
            image(germanretriever, nX, nY);
            }
            if(body > 4 && body < 5){
              image(shug, nX, nY);
              }
  }

  if (head > 3 && head < 4) {
    image(goldenhead, hx - 40, hy - 45);
    if(body > 0 && body < 1){
      image(borderRetriever, nX, nY);
      }
      if(body > 1 && body < 2){
        image(goldenbulldog, nX, nY);
        }
        if(body > 2 && body < 3){
          image(germanretriever, nX, nY);
          }
          if(body > 3 && body < 4){
            image(goldenretriever, nX, nY);
            }
            if(body > 4 && body < 5){
              image(gug, nX, nY);
              }
  }

  if (head > 4 && head < 5) {
    image(pughead, hx - 30, hy - 20);
    if(body > 0 && body < 1){
      image(pollug, nX, nY);
      }
      if(body > 1 && body < 2){
        image(bug, nX, nY);
        }
        if(body > 2 && body < 3){
          image(shug, nX, nY);
          }
          if(body > 3 && body < 4){
            image(goldenpug, nX, nY);
            }
            if(body > 4 && body < 5){
              image(pug, nX, nY);
              }
  }

  //tail
  if (tail > 0 && tail < 1) {
    image(bctail, tx + 5, ty + 60);
  }

  if (tail > 1 && tail < 2) {
    //image(bulltail, tx + 20, ty - 20);
  }

  if (tail > 2 && tail < 3) {
    image(germantail, tx + 40, ty + 70);
  }

  if (tail > 3 && tail < 4) {
    image(goldentail, tx + 80, ty - 40);
  }

  if (tail > 4 && tail < 5) {
    image(pugtail, tx - 50, ty - 90);
  }

}
