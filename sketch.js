let p1;
let p2;

let p1p;
let p2p;

let pr;

let p1a;
let p1s;
let p2a;
let p2s;

let go1;
let go2;

let r;

let undo1;
let undo2;

function setup() {
    createCanvas(400, 400);
    pr = window.prompt('starting number');
    if(!pr){pr = 0}
    p1 = float(pr);
    p2 = float(pr);
    p1p = p1;
    p2p = p2;
    p1a = createButton('ADD P1');
    p1s = createButton('SUB P1');
    p2a = createButton('ADD P2');
    p2s = createButton('SUB P2');
    r = createButton('RESET');
    go1 = createButton('GO 1');
    go2 = createButton('GO 2');
    undo1 = createButton('undo 1');
    undo2 = createButton('undo 2');
}

function draw() {
    background(51);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    let y = 50;
    text(p1 + 'm', 70, y);
    text(p2 + 'm', 300, y);

    p1a.mousePressed(() => {
    p1p = p1;
    p1 = (p1 + parseFloat(ask('ADD P1'))).toFixed(2);
    p1 = parseFloat(p1); // Convert back to number
})
p1s.mousePressed(() => {
    p1p = p1;
    p1 = (p1 - parseFloat(ask('SUB P1'))).toFixed(2);
    p1 = parseFloat(p1); // Convert back to number
})
p2a.mousePressed(() => {
    p2p = p2;
    p2 = (p2 + parseFloat(ask('ADD P2'))).toFixed(2);
    p2 = parseFloat(p2); // Convert back to number
})
p2s.mousePressed(() => {
    p2p = p2;
    p2 = (p2 - parseFloat(ask('SUB P2'))).toFixed(2);
    p2 = parseFloat(p2); // Convert back to number
})

    go1.mousePressed(() => {
        p1p = p1;
        p1 += 2;
    })
    go2.mousePressed(() => {
        p2p = p2;
        p2 += 2;
    })

    r.mousePressed(() => {
        p1 = float(pr);
        p2 = float(pr);
    })

    undo1.mousePressed(() => {
        p1 = p1p;
    })
    undo2.mousePressed(() => {
        p2 = p2p
    })
}

function ask(str) {
    return window.prompt(str)
}
