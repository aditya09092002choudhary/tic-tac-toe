var x = document.querySelectorAll('.element');
var i;
var count = 1;
var img;
var sound;
var restart;
let isgameover = false;
var res;
var p1 = '<img src="image/x.png" width="50" height="50">';
var p2 = '<img src="image/0.png" width="50" height="50">';
var com;


// if(res !=="Restart"){

for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function () {
        if (this.innerHTML === "" && res !== "Restart" && res !== "X Won" && res !== "O Won") {

            count++;
        }
        // checkWin(count);
        if (count <= 10 && res !== "Restart" && res !== "X Won" && res !== "O Won") {

            img = document.createElement('img');
            if (count % 2 == 0) {
                img.src = 'image/x.png';

                document.querySelector('.player').innerHTML = '0 Turn';

            }
            else {
                img.src = 'image/0.png';
                document.querySelector('.player').innerHTML = 'X Turn';


            }
            img.width = 50;
            img.height = 50;
            if (this.innerHTML === "" && res !== "Restart" && res !== "X Won" && res !== "O Won") {
                // console.log(res);
                this.appendChild(img);
                sound = new Audio('sound/sound.wav');
                sound.play();
                console.log(this.innerHTML);
            }
            if (x[0].innerHTML === x[1].innerHTML && x[1].innerHTML === x[2].innerHTML && x[1].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory1");
                victory(0, 1, 2);
                restart = document.querySelector('.player').innerHTML;

            }
            else if (x[3].innerHTML === x[4].innerHTML && x[4].innerHTML === x[5].innerHTML && x[4].innerHTML !== "") {
                com = this.innerHTML;
                victory(3, 4, 5);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[6].innerHTML === x[7].innerHTML && x[7].innerHTML === x[8].innerHTML && x[7].innerHTML !== "") {
                com = this.innerHTML;
                victory(6, 7, 8);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[0].innerHTML === x[4].innerHTML && x[4].innerHTML === x[8].innerHTML && x[4].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory4");
                victory(0, 4, 8);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[2].innerHTML === x[4].innerHTML && x[4].innerHTML === x[6].innerHTML && x[4].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory5");
                victory(2, 4, 6);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[0].innerHTML === x[3].innerHTML && x[3].innerHTML === x[6].innerHTML && x[3].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory6");
                victory(0, 3, 6);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[1].innerHTML === x[4].innerHTML && x[4].innerHTML === x[7].innerHTML && x[4].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory7");
                victory(1, 4, 7);
                restart = document.querySelector('.player').innerHTML;
            }
            else if (x[2].innerHTML === x[5].innerHTML && x[5].innerHTML === x[8].innerHTML && x[5].innerHTML !== "") {
                com = this.innerHTML;
                console.log("Victory8");
                victory(2, 5, 8);
                restart = document.querySelector('.player').innerHTML;
            }
        }


        if (count >= 10) {
            document.querySelector('.player').innerHTML = 'Restart';
            document.querySelector('.player').style.border = '1px solid';
            document.querySelector('.player').style.background = 'black';
            document.querySelector('.player').style.color = 'white';



        }

        // var y = document.querySelectorAll('.element');




    })
}
// }


// restart game




// victory
var f = 1;
function victory(a, b, c, count) {

    if (f === 1) {

        // Play Win Sound


        var sound = new Audio('win.mp3');
        sound.play();
        f++;

        if (com == p1) {
            document.querySelector('.player').innerHTML = 'X Won';
            res = document.querySelector('.player').innerHTML;

        }
        else {
            document.querySelector('.player').innerHTML = 'O Won';
            res = document.querySelector('.player').innerHTML;

        }
        document.querySelectorAll(".element")[a].style.background = "lightgreen";
        setTimeout(() => {

            document.querySelectorAll(".element")[b].style.background = "lightgreen";
        }, 150);
        setTimeout(() => {
            document.querySelectorAll(".element")[c].style.background = "lightgreen";

        }, 300);

        setTimeout(() => {

            document.querySelector('.player').innerHTML = 'Restart';
            res = document.querySelector('.player').innerHTML;


            // Restart Game

            if (res === 'Restart') {

                document.querySelector('.player').addEventListener('click', function () {
                    location.reload();
                })
            }
        }, 3000);
    }
    document.querySelector('.player').style.border = '1px solid';
    document.querySelector('.player').style.background = 'black';
    document.querySelector('.player').style.color = 'white';
}
