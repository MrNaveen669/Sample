var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;   //update the value
}

downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}


const droparea = document.getElementById("drop-area");
const inputfile = document.getElementById("input-file");
const imgview = document.getElementById("img-view");

inputfile.addEventListener("change", uploadImage);

function uploadiImage() {
    
    let imgLink = URL.createObjectURL(inputfile.files[0]);
    imgview.style.backgroundImage = `url(${imgLink})`;
    imgview.textContent = "";
    imgview.style.boder = 0;

}



droparea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

droparea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputfile.files = e.dataTransfer.flies
    uploadiImage();
});
