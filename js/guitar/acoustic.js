var number = document.querySelectorAll(".string").length;
for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playguitar(key);
  });
}
document.addEventListener("keypress", function (event) {
  playguitar(event.key);
});

function playguitar(key) {
  switch (key) {
    case "1":
      var tom1 = new Audio("../../sounds/guitar/acoustic/acoustic-E.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("../../sounds/guitar/acoustic/acoustic-A.mp3");
      tom2.play();
      break;

    case "3":
      var tom3 = new Audio("../../sounds/guitar/acoustic/acoustic-D.mp3");
      tom3.play();
      break;

    case "4":
      var tom4 = new Audio("../../sounds/guitar/acoustic/acoustic-G.mp3");
      tom4.play();
      break;

    case "5":
      var tom5 = new Audio("../../sounds/guitar/acoustic/acoustic-B.mp3");
      tom5.play();
      break;

    case "6":
      var tom6 = new Audio("../../sounds/guitar/acoustic/acoustic-ee.mp3");
      tom6.play();
      break;

    default:
      console.log(key);
  }
}
