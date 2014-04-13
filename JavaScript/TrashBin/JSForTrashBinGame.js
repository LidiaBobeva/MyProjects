window.onload = function OnLoadWindow() {

    //create random crumpled paper pieces
    startTime = (new Date()).getTime();
    var wrapper = document.getElementById("wrapper");

    for (var i = 0; i < 15; i++) {
        var paper = document.createElement("img");
        paper.src = "imgs/crumpled-paper.png";
        paper.className = "paper";
        paper.ondragstart = function startDrag(event) { event.dataTransfer.setData("dragged-id", event.target.id); };
        paper.draggable = true;
        paper.id = "paper" + i;
        wrapper.appendChild(paper);
        var condition = true;
        while (condition) {
            var topPosition = Math.random() * 400;
            var leftPosition = Math.random() * 700;
            if (topPosition < 300 && leftPosition < 300) {
                condition = true;
            }
            else {
                condition = false;
            }
        }

        paper.style.top = topPosition + "px";
        paper.style.left = leftPosition + "px"
    }
    writeOnHighScoreBoard();
}

//implement functionality
function openBucket() {
    var binClosed = document.getElementById("bin-closed");
    var binOpened = document.getElementById("bin-opened");
    binClosed.style.display = "none";
    binOpened.style.display = "block";
}

function closeBucket() {
    var binClosed = document.getElementById("bin-closed");
    var binOpened = document.getElementById("bin-opened");
    binClosed.style.display = "block";
    binOpened.style.display = "none";
}

function alowDrop(ev) {
    ev.preventDefault();
}

function dropPaper(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    var elementToDelete = document.getElementById(data);
    elementToDelete.parentNode.removeChild(elementToDelete);
    closeBucket();

    if (document.getElementsByClassName("paper").length == 0) {
        endTime = (new Date()).getTime();
        time = ((endTime - startTime) / 1000).toFixed(2);
        console.log(time + " sec");

        document.getElementById("userNameInput").style.display = "block";
        document.getElementsByTagName("label")[0].style.display = "block";
        document.getElementById("submit-name").style.display = "block";
    }
}

function submitName() {
    var name = document.getElementById("userNameInput").value;
    localStorage.setItem(time, name);
    document.getElementById("userNameInput").style.display = "none";
    document.getElementsByTagName("label")[0].style.display = "none";
    document.getElementById("submit-name").style.display = "none";
    document.getElementById("play-again").style.display = "block";
    writeOnHighScoreBoard();
}

function ClearLockalStorage() {
    localStorage.clear();
    var highScoreBoard = document.getElementById("scoreBoard");
    highScoreBoard.innerHTML = "<span>Best results:</span>";
}

function ReloadPage() {
    window.location.reload();
}

function writeOnHighScoreBoard() {
    var highScoreBoard = document.getElementById("scoreBoard");
    highScoreBoard.innerHTML = "<span>Best results:</span>";
    var scores = [];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        scores.push(key);
    }

    scores.sort(function (a, b) { return a - b });
    var topScoreLength;

    if (localStorage.length > 5) {
        topScoreLength = 5;
    }
    else {
        topScoreLength = localStorage.length;
    }

    for (var i = 0; i < topScoreLength; i++) {
        highScoreBoard.innerHTML += "<br/>" + scores[i] + " " + localStorage.getItem(scores[i]);
    }
}