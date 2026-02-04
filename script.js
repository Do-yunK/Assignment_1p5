let list = [];

function preload() {
    list = loadJSON("data.json");
}

function setup() {
    let canvas = createCanvas(720, 400);
    canvas.parent('js-container');
}
function draw() {
    background(255);

    Object.values(list).map((item, index) => {
        fill(item.color);
        rect(50, index * 50 + 70, item.amount / 180 * 340, 15);
        textAlign("left");
        fill(0)
        textSize(12);
        text(item.name, 50, index * 50 + 65);

        textSize(22);
        textAlign("right");
        text(item.icon, 45, index * 50 + 75);


    });
}