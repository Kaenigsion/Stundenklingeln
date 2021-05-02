window.addEventListener("load", function () {
  var glowModeCheckbox = document.getElementById("glowMode");
  glowFn();
  glowModeCheckbox.addEventListener("change", glowFn);
});

function glowFn() {
  var glowModeChecked = document.getElementById("glowMode").checked;
  if (glowModeChecked) {
    document.getElementById("bg").style.textShadow =
      "#D0F3FF 0px 0px 10px, white 0px 0px 11px";
    document.getElementById("button1").style.boxShadow =
      "#D0F3FF 0px 0px 10px, white 0px 0px 11px";
    document.getElementById("button2").style.boxShadow =
      "#D0F3FF 0px 0px 10px, white 0px 0px 11px";
  } else {
    document.getElementById("bg").style.textShadow = "white 0px 0px 0px";
    document.getElementById("button1").style.boxShadow = "white 0px 0px 0px";
    document.getElementById("button2").style.boxShadow = "white 0px 0px 0px";
  }
}
