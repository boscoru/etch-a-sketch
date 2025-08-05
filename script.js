const contEdge = 800;
const container = document.querySelector("#container");
const buttons = document.querySelector("#header");

function fillContainer(newEdgeNum) {
    edgeNum = newEdgeNum;
    let squareCount = edgeNum * edgeNum;
    let squareEdge = Math.floor(contEdge / edgeNum);
    container.replaceChildren();
    for (i=0 ; i<squareCount ; i++) {
        let square = document.createElement("div");
        square.style.width = `${squareEdge}px`;
        square.style.height = `${squareEdge}px`;
        square.id = `${i}`;
        container.appendChild(square);
    }
}

function setResolution(e) {
    let ques = Number(prompt("How many squares per side?"));
    if ( ques < 2 || ques > 100 || !Number.isInteger(ques)) alert("Invalid! Must be integer from 2 through 100!");
    else fillContainer(ques);
}

function change(e) {
    let square = document.getElementById(`${e.target.id}`);
    if ( `${e.target.id}` != "container" ) {
        if ( mode === 1 ) {
            square.style.backgroundColor = "darkgray";
        } else if ( mode === 2 ) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if ( mode === 3 ) {
            let currentOpacity = parseFloat(square.style.opacity) || 0;
            square.style.opacity = Math.min(currentOpacity + .1, 1);
            square.style.backgroundColor = "black";
        }
    }
}

function changeMode(e) {
    switch (e.target.id) {
        case "resolution":
            setResolution();
            break;
        case "normal":
            mode = 1;
            fillContainer(edgeNum);
            break;
        case "rainbow":
            mode = 2;
            fillContainer(edgeNum);
            break;
        case "gradient":
            mode = 3;
            fillContainer(edgeNum);
            break;
    }
}

let edgeNum = 16;
let mode = 1;
fillContainer(edgeNum);

container.addEventListener('mouseover', change);
buttons.addEventListener('click', changeMode);