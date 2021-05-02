window.addEventListener("load", function () {
  var darkModeCheckbox = document.getElementById("darkM");
  darkModeFn();
  darkModeCheckbox.addEventListener("change", darkModeFn);
});

function darkModeFn() {
  var darkModeCheckbox = document.getElementById("darkM");
  DMCheck = darkModeCheckbox.checked;

  if (DMCheck == true) {
    document.getElementById("stundenplan").style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementById("box").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    document.getElementById("box2").style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementById("box4").style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementById("StundeBox").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";

    document.getElementById("bg").style.color = "white";
    document.getElementById("box5").style.backgroundImage =
      "url('https://www.scinexx.de/wp-content/uploads/0/1/01-33804-entrozeit00.jpg')";
    document.getElementById("bg").style.backgroundImage =
      "url('https://www.oeaw.ac.at/fileadmin/NEWS/2015/user_upload/20170802_Entropie_Slider.png')";
  } else {
    document.getElementById("bg").style.color = "black";

    document.getElementById("stundenplan").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
    document.getElementById("box").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
    document.getElementById("box2").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
    document.getElementById("box4").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
    document.getElementById("StundeBox").style.backgroundColor =
      "rgba(255, 255, 255, 0.0)";

    document.getElementById("box5").style.backgroundImage =
      "url('https://www.wallpapertip.com/wmimgs/73-737311_hintergrundbilder-uhr-zeit-holzplatte-licht-sebilj.jpg')";
    document.getElementById("bg").style.backgroundImage =
      "url('https://www.hrtoday.ch/sites/hrtoday.ch/files/media/article/Zeit_Uhr_Kopf_Stress_123rf.jpg')";
  }
}
