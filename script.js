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

    Object.values(list).map((item, index) => {
        fill(item.color);
        stroke('#38220f');
        rect(100, index * 60 + 70, item.amount / 180 * 740, 30);
        textAlign("left");
        fill('#38220f')
        noStroke();
        textSize(16);
        text(item.name, 100, index * 60 + 65);

        textSize(32);
        textAlign("right");
        text(item.amount + "%", 80, index * 60 + 95);


    });
}