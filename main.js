function sayThatWasEasy(){
var thatWasEasy=new Audio("That _was_easy.mp3");
thatWasEasy.play();
}
$("#easy").on("click",sayThatWasEasy);