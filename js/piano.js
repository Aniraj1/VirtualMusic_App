var number = document.querySelectorAll("button").length;
for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playdrum(key);
  });
}
document.addEventListener("keypress", function (event) {
  playdrum(event.key);
});

function playdrum(key) {
  switch (key) {
    case "Q":
      var tom1 = new Audio("../sounds/piano/4/C.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("../sounds/piano/4/CS.mp3");
      tom2.play();
      break;

    case "W":
      var tom3 = new Audio("../sounds/piano/4/D.mp3");
      tom3.play();
      break;

    case "3":
      var tom4 = new Audio("../sounds/piano/4/DS.mp3");
      tom4.play();
      break;

    case "E":
      var tom5 = new Audio("../sounds/piano/4/E.mp3");
      tom5.play();
      break;

    case "R":
      var tom6 = new Audio("../sounds/piano/4/F.mp3");
      tom6.play();
      break;

    case "5":
      var tom7 = new Audio("../sounds/piano/4/FS.mp3");
      tom7.play();
      break;

    case "T":
      var tom8 = new Audio("../sounds/piano/4/G.mp3");
      tom8.play();
      break;

    case "6":
      var tom9 = new Audio("../sounds/piano/4/GS.mp3");
      tom9.play();
      break;

    case "Y":
      var tom10 = new Audio("../sounds/piano/4/A.mp3");
      tom10.play();
      break;

    case "7":
      var tom11 = new Audio("../sounds/piano/4/AS.mp3");
      tom11.play();
      break;

    case "U":
      var tom12 = new Audio("../sounds/piano/4/B.mp3");
      tom12.play();
      break;

    case "I":
      var tom13 = new Audio("../sounds/piano/5/C.mp3");
      tom13.play();
      break;

    case "9":
      var tom14 = new Audio("../sounds/piano/5/CS.mp3");
      tom14.play();
      break;

    case "O":
      var tom15 = new Audio("../sounds/piano/5/D.mp3");
      tom15.play();
      break;

    case "0":
      var tom16 = new Audio("../sounds/piano/5/DS.mp3");
      tom16.play();
      break;

    case "P":
      var tom17 = new Audio("../sounds/piano/5/E.mp3");
      tom17.play();
      break;

    case "Z":
      var tom18 = new Audio("../sounds/piano/5/F.mp3");
      tom18.play();
      break;

    case "S":
      var tom19 = new Audio("../sounds/piano/5/FS.mp3");
      tom19.play();
      break;

    case "X":
      var tom20= new Audio("../sounds/piano/5/G.mp3");
      tom20.play();
      break;

    case "D":
      var tom21 = new Audio("../sounds/piano/5/GS.mp3");
      tom21.play();
      break;

    case "C":
      var tom22 = new Audio("../sounds/piano/5/A.mp3");
      tom22.play();
      break;

    case "F":
      var tom23 = new Audio("../sounds/piano/5/AS.mp3");
      tom23.play();
      break;

    case "V":
      var tom24 = new Audio("../sounds/piano/5/B.mp3");
      tom24.play();
      break;

    default:
      console.log(key);
  }
}
