var number = document.querySelectorAll(".string").length;
for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playukelele(key);
  });
}

document.addEventListener("keypress", function (event) {
  var key =  event.key;
  playukelele(key);
  var key1 = checkkey(key);
$("."+key1).addClass("op");
setTimeout(function(){
  $("."+key1).removeClass("op");
},300);
});

function playukelele(key) {
  switch (key) {
    case "g":
      var tom1 = new Audio("../../sounds/guitar/ukelele/ukelele-G.mp3");
      tom1.play();
      break;

    case "c":
      var tom2 = new Audio("../../sounds/guitar/ukelele/ukelele-C.mp3");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio("../../sounds/guitar/ukelele/ukelele-E.mp3");
      tom3.play();
      break;

    case "a":
      var tom4 = new Audio("../../sounds/guitar/ukelele/ukelele-A.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
  }
}

function checkkey(key) {
  switch (key) {
    case "g":
      return "gg";
      break;
    case "c":
      return "cc";
      break;
    case "e":
      return "ee";
      break;
    case "a":
      return "aa";
      break;
    default:
      return key;
      break;
  }
}