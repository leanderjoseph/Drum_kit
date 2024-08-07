
function addList() {

$(".drum").click(function(){
createSound(this.innerHTML);
animate(this.innerHTML)
})

}

addList();


function addKeyList (){

$(document).keydown(function(event){
createSound(event.key);
animate(event.key)
})
   
}

addKeyList();


function createSound (key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
                break;
        default:
            break;
    }

}

function animate (key){

    $("." + key).addClass("pressed");

    setTimeout(function(){
        $("." + key).removeClass("pressed");
    }, 100); 


}

