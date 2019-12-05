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
    bchead = loadImage('bchead.png');
    bcbody = loadImage('bcbody.png');
    bctail = loadImage('bctail.png');

    bullhead = loadImage('bullhead.png');
    bullbody = loadImage('bullbody.png');
    bulltail = loadImage('bulltail.png');

    germanhead = loadImage('germanhead.png');
    germanbody = loadImage('germanbody.png');
    germantail = loadImage('germantail.png');

    goldenhead = loadImage('goldenhead.png');
    goldenbody = loadImage('goldenbody.png');
    goldentail = loadImage('goldentail.png');

    pughead = loadImage('pughead.png');
    pugbody = loadImage('pugbody.png');
    pugtail = loadImage('pugtail.png');

    //names
    bordercollie = loadImage('bordercollie.png');
    bordershepherd = loadImage('bordershepherd.png');
    bullcollie = loadImage('bullcollie.png');
    borderRetriever = loadImage('borderRetriever.png');
    pollug = loadImage('pollug.png');
    bulldog = loadImage('bulldog.png');
    bullshepherd = loadImage('bullshepherd.png');
    bullretriever = loadImage('bullretriever.png');
    bullpug = loadImage('bullpug.png');
    germanshepherd = loadImage('germanshepherd.png');
    germancollie = loadImage('germancollie.png');
    germanretriever = loadImage('germanretriever.png');
    shug = loadImage('shug.png');
    goldenretriever = loadImage('goldenretriever.png');
    goldenbulldog = loadImage('goldenbulldog.png');
    gug = loadImage('gug.png');
    pug = loadImage('pug.png');
    bug = loadImage('bug.png');
    goldenpug = loadImage('goldenpug.png');
    
    clicktomix = loadImage('clicktomix.png');

    mixButton = loadImage('mixbutton.png')

    bgimg = loadImage('bg.png');

    song1 = loadSound("woof.mp3");
    song2 = loadSound("woof2.wav");
    song3 = loadSound("woof3.wav");
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
    button = createImg('mixButton.png');
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
