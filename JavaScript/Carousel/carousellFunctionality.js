
var backward = document.getElementById("backward");
var forward = document.getElementById("forward");
var imageHolder = document.getElementById("imageHolder");
var currentImage = 0;
var images = [];

for (var i = 0; i < imageHolder.childNodes.length; i++) {
    if (imageHolder.childNodes[i] instanceof HTMLImageElement) {
        images.push(imageHolder.childNodes[i]);
    }
}

var changeBackward = function changeBackward() {
    if (currentImage > 0) {
        currentImage--;
        images[currentImage].style.display = "inline-block";
        images[currentImage + 1].style.display = "none";
        if (currentImage == 0) {
            backward.style.display = "none";
        }
        forward.style.display = "inline-block";
    }

}

var changeForward = function changeForward() {
    if (currentImage < 6) {
        currentImage++;
        images[currentImage].style.display = "inline-block";
        images[currentImage - 1].style.display = "none";
        backward.style.display = "inline-block";

        if (currentImage == 6) {
            forward.style.display = "none";
        }
    }
}

backward.addEventListener("click", changeBackward, false);
forward.addEventListener("click", changeForward, false);
