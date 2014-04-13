draw = function DrawOnCanvas() {

    var canvas = document.getElementById("canvas-id");
    var cxt = canvas.getContext("2d");

    setInterval(function () {
        moveBall();
    }, 1);

    var dX = 1;
    var dY = 1;
    var x = 15;
    var y = 250;

    function moveBall() {
        if (y == 435) {
            if (dX > 0) {
                dX = 1;
                dY = -1;
            }
            else {
                dX = -1;
                dY = -1;
            }
        }

        if (x == 785) {
            if (dY < 0) {
                dX = -1;
                dY = -1;
            }
            else {
                dX = -1;
                dY = 1;
            }
        }

        if (y == 15) {
            if (dX < 0) {
                dX = -1;
                dY = 1;
            }
            else {
                dX = 1;
                dY = 1;
            }
        }

        if (x == 15) {
            if (dY < 0) {
                dX = 1;
                dY = -1;
            }
            else {
                dX = 1;
                dY = 1;
            }
        }

        x += dX;
        y += dY;
        //cxt.clearRect(0, 0, 800, 450);



        cxt.beginPath();
        cxt.arc(x - dX, y - dY, 15, 0, 2 * Math.PI, false);
        cxt.fillStyle = "#cf3d3d";
        cxt.fill();

        cxt.beginPath();
        cxt.arc(x, y, 15, 0, 2 * Math.PI, false);
        cxt.fillStyle = "#711c1c";
        cxt.fill();
    };
}();