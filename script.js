const contEdge = 800;
const container = document.querySelector("#container");
const resButton = document.querySelector("button");

function fillContainer(edgeNum) {
    let squareCount = edgeNum * edgeNum;
    let squareEdge = Math.floor(contEdge / edgeNum);
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
    else {
        container.replaceChildren();
        fillContainer(ques);
    }
}

function change(e) {
    let square = document.getElementById(`${e.target.id}`);
    if ( `${e.target.id}` != "container" ) square.style.backgroundColor = "darkgray";
}

let edgeNum = 16;
fillContainer(edgeNum);

container.addEventListener('mouseover', change);
resButton.addEventListener('click', setResolution);