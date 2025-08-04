const contEdge = 800;
const container = document.querySelector("#container");

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

function change(e) {
    let square = document.getElementById(`${e.target.id}`);
    square.style.backgroundColor = "darkgray";
}

let edgeNum = 16;
fillContainer(edgeNum);

container.addEventListener('mouseover', change);