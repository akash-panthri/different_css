var options = document.getElementsByName("inned");
var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");
var but4 = document.getElementById("but4");
var but5 = document.getElementById("but5");
var stng = document.getElementById("strng");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    var selectedValue = this.value;
    but1.innerText = "INFO";
    but2.innerText = "PRIMARY";
    but3.innerText = "SUCCESS";
    but4.innerText = "WARNING";
    but5.innerText = "DANGER";
    switch (selectedValue) {
      case "1":
        vcss.href =
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha3/css/bootstrap.min.css";
        vjs.src =
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha3/js/bootstrap.bundle.min.js";
        vjss.src = "";
        stng.innerText = "BOOTSTRAP";
        break;
      case "2":
        vcss.href =
          "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.15/css/uikit.min.css";
        vjs.src =
          "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.15/js/uikit.min.js";
        vjss.src =
          "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.15/js/uikit-icons.min.js";
        but1.innerText = "DEFAULT";
        but3.innerText = "SECONDARY";
        but4.innerText = "(NOTHING SPECIAL)";
        stng.innerText = "UIKIT";
        break;
      case "3":
        vcss.href =
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css";
        vjs.src = "";
        vjss.src = "";
        stng.innerText = "BULMA";

        break;
      case "4":
        vcss.href =
          "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.8.1/css/foundation.min.css";
        vjs.src = "";
        vjss.src =
          "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.8.1/js/foundation.min.js";
        but1.innerText = "SECONDARY";
        but5.innerText = "ALERT";
        stng.innerText = "FOUNDATION";

        break;

      default:
        break;
    }
  });
}
