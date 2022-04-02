function setup() {
    canvas=createCanvas(704 , 653 );

    canvas.position(405  , 150);

    video = createCapture(VIDEO);

    img= loadImage('');

    video.hide();

    colour="";
}


function draw() {
    image(img , 0 , 0 , 704 , 653)

    image(video , 110 , 100 , 500, 480);

   
    tint(colour);
}

function take_snapshot() {
    save('birthdayCard.png');
}