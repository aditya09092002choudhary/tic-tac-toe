var x = document.querySelectorAll('.element');
var i;
var count = 1;
var img;
var sound;
var restart;
let isgameover = false;
var res;


// if(res !=="Restart"){

for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function () {
        if(this.innerHTML===""){

            count++;
        }
        // checkWin(count);
        if (count <= 10) {

            img = document.createElement('img');
            if (count % 2 == 0) {
                img.src = 'image/x.png';
                
                document.querySelector('.player').innerHTML = '0s Turn';

            }
            else {
                img.src = 'image/0.png';
                document.querySelector('.player').innerHTML = 'Xs Turn';


            }
            img.width = 50;
            img.height = 50;
            if(this.innerHTML===""&& res!=="Restart"){
                console.log(res);
                this.appendChild(img);
                sound = new Audio('sound/sound.wav');
                sound.play();
                // console.log(this.innerHTML);
            }
        }

        if (x[0].innerHTML === x[1].innerHTML && x[1].innerHTML === x[2].innerHTML && x[1].innerHTML !== "") {

            console.log("Victory1");
            victory(0, 1, 2);
        }
        else if (x[3].innerHTML === x[4].innerHTML && x[4].innerHTML === x[5].innerHTML && x[4].innerHTML !== "") {

            console.log("Victory2");
            victory(3, 4, 5);

        }
        else if (x[6].innerHTML === x[7].innerHTML && x[7].innerHTML === x[8].innerHTML && x[7].innerHTML !== "") {

            console.log("Victory3");
            victory(6, 7, 8);

        }
        else if (x[0].innerHTML === x[4].innerHTML && x[4].innerHTML === x[8].innerHTML && x[4].innerHTML !== "") {

            console.log("Victory4");
            victory(0, 4, 8);

        }
        else if (x[2].innerHTML === x[4].innerHTML && x[4].innerHTML === x[6].innerHTML && x[4].innerHTML !== "") {

            console.log("Victory5");
            victory(2, 4, 6);

        }
        else if (x[0].innerHTML === x[3].innerHTML && x[3].innerHTML === x[6].innerHTML && x[3].innerHTML !== "") {

            console.log("Victory6");
            victory(0, 3, 6);

        }
        else if (x[1].innerHTML === x[4].innerHTML && x[4].innerHTML === x[7].innerHTML && x[4].innerHTML !== "") {

            console.log("Victory7");
            victory(1, 4, 7);

        }
        else if (x[2].innerHTML === x[5].innerHTML && x[5].innerHTML === x[8].innerHTML && x[5].innerHTML !== "") {

            console.log("Victory8");
            victory(2, 5, 8);

        }


        if (count >= 10) {
            document.querySelector('.player').innerHTML = 'Restart';
            document.querySelector('.player').style.border = '1px solid';
            document.querySelector('.player').style.background = 'black';
            document.querySelector('.player').style.color = 'white';



        }

        // var y = document.querySelectorAll('.element');
        restart = document.querySelector('.player').innerHTML;


        if (restart === 'Restart') {
            
            document.querySelector('.player').addEventListener('click', function () {
                location.reload();
            })
        }


        
    })
}
// }


// restart game




        // victory
    var f=1;
function victory(a, b, c, count) {
    
    if(f===1){
    var sound = new Audio('win.mp3');
    sound.play();
    f++;
    }
    document.querySelectorAll(".element")[a].style.background = "green";
    setTimeout(()=>{

        document.querySelectorAll(".element")[b].style.background = "green";
    },150);
    setTimeout(()=>{
        document.querySelectorAll(".element")[c].style.background = "green";
        
    },300);
    document.querySelector('.player').innerHTML = 'Victory';

    document.querySelector('.player').innerHTML = 'Restart';
    res=document.querySelector('.player').innerHTML;
    document.querySelector('.player').style.border = '1px solid';
    document.querySelector('.player').style.background = 'black';
    document.querySelector('.player').style.color = 'white';


}


