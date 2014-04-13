
//Images creaton

var MyImage = {
    init: function (title, thumbnailUrl, largeImgUrl) {
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.largeImgUrl = largeImgUrl;
    },
    getTitle: function () {
        return this.title;
    },
    getThumbnailUrl: function () {
        return this.thumbnailUrl;
    },
    getLargeImgUrl: function () {
        return this.largeImgUrl;
    }
};

var img1 = Object.create(MyImage);
img1.init("img1", "imgs/flower (1)_thumb.jpg", "imgs/flower (1).jpg");
var img2 = Object.create(MyImage);
img2.init("img2", "imgs/flower (2)_thumb.jpg", "imgs/flower (2).jpg");
var img3 = Object.create(MyImage);
img3.init("img3", "imgs/flower (3)_thumb.jpg", "imgs/flower (3).jpg");
var img4 = Object.create(MyImage);
img4.init("img4", "imgs/flower (4)_thumb.jpg", "imgs/flower (4).jpg");
var img5 = Object.create(MyImage);
img5.init("img5", "imgs/flower (5)_thumb.jpg", "imgs/flower (5).jpg");
var img6 = Object.create(MyImage);
img6.init("img6", "imgs/flower (6)_thumb.jpg", "imgs/flower (6).jpg");

var imgsArray = [img1, img2, img3, img4, img5, img6];
var imgContainer = document.getElementById("thumbnail-conatainer");

//Append images to contaner

for (var i = 0; i < imgsArray.length; i++) {
    var currentImg = document.createElement("img");
    currentImg.alt = imgsArray[i].getTitle();
    currentImg.src = imgsArray[i].getThumbnailUrl();
    currentImg.classList = "img"
    imgContainer.appendChild(currentImg);
}

//Events

var backward = document.getElementById("prev");
var forward = document.getElementById("next");
var currentImageElement = 0;
var imagesAsHTMLElements = [];

for (var i = 0; i < imgContainer.childNodes.length; i++) {
    if (imgContainer.childNodes[i] instanceof HTMLImageElement) {
        imagesAsHTMLElements.push(imgContainer.childNodes[i]);
    }
}

var changeBackward = function changeBackwardFn() {
    currentImageElement--;
    if (currentImageElement >= 0) {
        imagesAsHTMLElements[currentImageElement].style.display = "inline-block";
        imagesAsHTMLElements[currentImageElement + 3].style.display = "none";
        forward.style.display = "inline-block";

        if (currentImageElement == 0) {
            backward.style.display = "none";
        }
    }
}

var changeForward = function changeForwardFn() {
    currentImageElement++;
    if (currentImageElement <= imagesAsHTMLElements.length - 3) {
        imagesAsHTMLElements[currentImageElement + 2].style.display = "inline-block";
        imagesAsHTMLElements[currentImageElement - 1].style.display = "none";
        backward.style.display = "inline-block";

        if (currentImageElement == imagesAsHTMLElements.length - 3) {
            forward.style.display = "none";
        }
    }
}

var showClickedPicture = function showClickedPictureFn(ev) {

    var divForLargeImage = document.getElementById("large-image");
    var clickedPicture = ev.target;

    if (divForLargeImage.firstChild) {
        divForLargeImage.removeChild(divForLargeImage.firstChild);
    }

    if ((clickedPicture instanceof HTMLImageElement)) {
        var clickedPictureToShow = document.createElement("img");
        var clickedPictureObject = window[clickedPicture.alt];

        //if you know that its a global function you can use:
        //Otherwise replace window with the parent object containing the function.
        //console.log(window[clickedPicture.alt]);

        clickedPictureToShow.alt = clickedPictureObject.getTitle();
        clickedPictureToShow.src = clickedPictureObject.getLargeImgUrl();
        divForLargeImage.appendChild(clickedPictureToShow);
        clickedPictureToShow.style.position = "absolute";
        clickedPictureToShow.style.top = "80px";
        clickedPictureToShow.style.left = "140px";
    }
}

backward.addEventListener("click", changeBackward, false);
forward.addEventListener("click", changeForward, false);
imgContainer.addEventListener("click", showClickedPicture, false)