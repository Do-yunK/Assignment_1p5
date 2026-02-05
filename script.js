let list = [];

function preload() {
    list = loadJSON("data.json");
}

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent('js-container');
}
function draw() {
    background('#ece0d1');
    //background(255);

    Object.values(list).map((item, index) => {
        fill(item.color);
        stroke(255);
        rect(50, index * 60 + 70, item.amount / 180 * 340, 15);
        textAlign("left");
        fill(255)
        noStroke();
        textSize(20);
        text(item.name, 50, index * 60 + 65);

        textSize(32);
        textAlign("right");
        text(item.icon, 45, index * 60 + 75);


    });
}