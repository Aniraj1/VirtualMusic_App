var number = document.querySelectorAll("button").length;
for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playdrum(key);
  });

  document.querySelectorAll("button")[i].addEventListener("mouseover", function () {
    var key = this.innerHTML;
    changedrum(key,i);
  });


}
document.addEventListener("keypress", function (event) {
  playdrum(event.key);
});


function playdrum(key) {
  switch (key) {
    case "q":
      var tom1 = new Audio("../sounds/piano/4/C.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("../sounds/piano/4/CS.mp3");
      tom2.play();
      break;

    case "w":
      var tom3 = new Audio("../sounds/piano/4/D.mp3");
      tom3.play();
      break;

    case "3":
      var tom4 = new Audio("../sounds/piano/4/DS.mp3");
      tom4.play();
      break;

    case "e":
      var tom5 = new Audio("../sounds/piano/4/E.mp3");
      tom5.play();
      break;

    case "r":
      var tom6 = new Audio("../sounds/piano/4/F.mp3");
      tom6.play();
      break;

    case "5":
      var tom7 = new Audio("../sounds/piano/4/FS.mp3");
      tom7.play();
      break;

    case "t":
      var tom8 = new Audio("../sounds/piano/4/G.mp3");
      tom8.play();
      break;

    case "6":
      var tom9 = new Audio("../sounds/piano/4/GS.mp3");
      tom9.play();
      break;

    case "y":
      var tom10 = new Audio("../sounds/piano/4/A.mp3");
      tom10.play();
      break;

    case "7":
      var tom11 = new Audio("../sounds/piano/4/AS.mp3");
      tom11.play();
      break;

    case "u":
      var tom12 = new Audio("../sounds/piano/4/B.mp3");
      tom12.play();
      break;

    case "i":
      var tom13 = new Audio("../sounds/piano/5/C.mp3");
      tom13.play();
      break;

    case "9":
      var tom14 = new Audio("../sounds/piano/5/CS.mp3");
      tom14.play();
      break;

    case "o":
      var tom15 = new Audio("../sounds/piano/5/D.mp3");
      tom15.play();
      break;

    case "0":
      var tom16 = new Audio("../sounds/piano/5/DS.mp3");
      tom16.play();
      break;

    case "p":
      var tom17 = new Audio("../sounds/piano/5/E.mp3");
      tom17.play();
      break;

    case "z":
      var tom18 = new Audio("../sounds/piano/5/F.mp3");
      tom18.play();
      break;

    case "s":
      var tom19 = new Audio("../sounds/piano/5/FS.mp3");
      tom19.play();
      break;

    case "x":
      var tom20 = new Audio("../sounds/piano/5/G.mp3");
      tom20.play();
      break;

    case "d":
      var tom21 = new Audio("../sounds/piano/5/GS.mp3");
      tom21.play();
      break;

    case "c":
      var tom22 = new Audio("../sounds/piano/5/A.mp3");
      tom22.play();
      break;

    case "f":
      var tom23 = new Audio("../sounds/piano/5/AS.mp3");
      tom23.play();
      break;

    case "v":
      var tom24 = new Audio("../sounds/piano/5/B.mp3");
      tom24.play();
      break;

    default:
      console.log(key);
  }
}

function changedrum(key,i) {
  switch (key) {
    case "q":
  document.querySelectorAll("button")[i].innerHTML="C";
      break;

    case "2":
      document.querySelectorAll("button")[i].innerHTML="C#";
      break;

    case "w":
      document.querySelectorAll("button")[i].innerHTML="D";
      break;

    case "3":
      document.querySelectorAll("button")[i].innerHTML="D#";
      break;

    case "e":
      document.querySelectorAll("button")[i].innerHTML="E";
      break;

    case "r":
      document.querySelectorAll("button")[i].innerHTML="F";
      break;

    case "5":
      document.querySelectorAll("button")[i].innerHTML="F#";
      break;

    case "t":
      document.querySelectorAll("button")[i].innerHTML="G";
      break;

    case "6":
      document.querySelectorAll("button")[i].innerHTML="G#";
      break;

    case "y":
      document.querySelectorAll("button")[i].innerHTML="A";
      break;

    case "7":
      document.querySelectorAll("button")[i].innerHTML="A#";
      break;

    case "u":
      document.querySelectorAll("button")[i].innerHTML="B";
      break;

    case "i":
      document.querySelectorAll("button")[i].innerHTML="C";
      break;

    case "9":
      document.querySelectorAll("button")[i].innerHTML="C#";
      break;

    case "o":
      document.querySelectorAll("button")[i].innerHTML="D";
      break;

    case "0":
      document.querySelectorAll("button")[i].innerHTML="D#";
      break;

    case "p":
      document.querySelectorAll("button")[i].innerHTML="E";
      break;

    case "z":
      document.querySelectorAll("button")[i].innerHTML="F";
      break;

    case "s":
      document.querySelectorAll("button")[i].innerHTML="F#";
      break;

    case "x":
      document.querySelectorAll("button")[i].innerHTML="G";
      break;

    case "d":
      document.querySelectorAll("button")[i].innerHTML="G#";
      break;

    case "c":
      document.querySelectorAll("button")[i].innerHTML="A";
      break;

    case "f":
      document.querySelectorAll("button")[i].innerHTML="A#";
      break;

    case "v":
      document.querySelectorAll("button")[i].innerHTML="B";
      break;

    default:
      console.log(key);
  }
}
