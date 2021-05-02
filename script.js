function Klingeln(jaOderNein) {
  var welchesKlingeln;
  var volume = document.getElementById("volume").value;
  document.getElementById("volumep").innerHTML = volume;
  volume = volume / 100;
  //Stunde
  if (jaOderNein == 0) {
    welchesKlingeln = "https://media1.vocaroo.com/mp3/17heYfVKrb8C";
  } else if (jaOderNein == 1) {
    welchesKlingeln = "https://media1.vocaroo.com/mp3/1o6haG5oFuUn";
    //Pause
  } else if (jaOderNein == 2) {
    welchesKlingeln = "https://media1.vocaroo.com/mp3/1glvHYE4pjkD";
  } //letzte Pause

  var AKlingeln = new Audio(welchesKlingeln);
  AKlingeln.play();
  AKlingeln.volume = volume;
}

//https://www.myinstants.com/media/sounds/m3.mp3
//http://www.light2art.de/MP3/Big-Boom_Fanfare.mp3
//https://media1.vocaroo.com/mp3/12V6hlULsyPE
//https://media1.vocaroo.com/mp3/1djyPBo3FGUt

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function addZeroMs(i) {
  if (i < 100) {
    i = "0" + i;
  }

  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time(w) {
  var nd = new Date();
  var x = document.getElementById("TIME");
  var h = addZero(nd.getHours());
  var m = addZero(nd.getMinutes());
  var s = addZero(nd.getSeconds());
  x.innerHTML = h + ":" + m + ":" + s;
  var TRTime = h + ":" + m + ":" + s;
  var cconfirm;
  var check = document.getElementById("school").checked;
  var nextRing =
    "Der Schulmodus ist aus, sodass sie nicht sehen können, \n wann das nächste Klingeln sein wird.";
  var StundeBox = "";

  var pcTestvarms = document.getElementById("PCTest").value;
  if (pcTestvarms == 1) {
    var ms = addZeroMs(nd.getMilliseconds());
    x.innerHTML = h + ":" + m + ":" + s + ":" + ms;
  } else if (pcTestvarms > 1 && pcTestvarms < 11) {
    var ds = addZeroMs(nd.getMilliseconds());
    ds = Math.round(ds / 10);
    if (ds == 0) {
      ds = "0" + ds;
    }
    x.innerHTML = h + ":" + m + ":" + s + ":" + ds;
  } else if (pcTestvarms > 10 && pcTestvarms < 101) {
    var cs = addZeroMs(nd.getMilliseconds());
    cs = Math.round(cs / 100);
    if (cs == 10) {
      cs = "0";
    }
    x.innerHTML = h + ":" + m + ":" + s + ":" + cs;
  }
  pcTest();

  if (check == true) {
    cconfirm = "chulmodus: AN";

    if (h == 7 && m < 40) {
      nextRing = "7:40";
      StundeBox = "";
    } else if ((h == 7 && m >= 40) || (h == 8 && m < 25)) {
      nextRing = "8:25";
      StundeBox = "1. Stunde";
    } else if (h == 8 && m >= 25 && m < 35) {
      nextRing = "8:35";
      StundeBox = "1. Stunde, Pause (10 min.)";
    } else if ((h == 8 && m >= 35) || (h == 9 && m < 20)) {
      nextRing = "9:20";
      StundeBox = "2. Stunde";
    } else if (h == 9 && m >= 20 && m < 40) {
      nextRing = "9:40";
      StundeBox = "2. Stunde, Pause (20 min.) <br> Frühstückpause";
    } else if ((h == 9 && m >= 40) || (h == 11 && m < 10) || h == 10) {
      nextRing = "11:10";
      StundeBox = "3. +4. Stunde";
    } else if (h == 11 && m >= 10 && m < 20) {
      nextRing = "11:20";
      StundeBox = "4. Stunde, Pause (10 min.)";
    } else if ((h == 11 && m >= 20) || (h == 12 && m < 05)) {
      nextRing = "12:05";
      StundeBox = "5. Stunde";
    } else if (h == 12 && m >= 05 && m < 35) {
      nextRing = "12:35";
      StundeBox = "5. Stunde, Pause (30 min.) <br> Mittagspause";
    } else if ((h == 12 && m >= 35) || (h == 13 && m < 20)) {
      nextRing = "13:20";
      StundeBox = "6. Stunde";
    } else {
      nextRing =
        '7:40 | Gratuliere! Du hast die Schule beendet und weißt jetzt, wie "Schule" geschrieben wird.';
      StundeBox = "Pause (18 h; 20 min)";
    }

    switch (TRTime) {
      //1.Stunde
      case "07:40:00":
        Klingeln(0);
        break;

      case "08:25:00":
        Klingeln(1);
        break;

      //2.Stunde
      case "08:35:00":
        Klingeln(0);
        break;

      case "09:20:00":
        Klingeln(1);
        break;

      //3.+4. Stunde
      case "09:40:00":
        Klingeln(0);
        break;

      case "11:10:00":
        Klingeln(1);
        break;

      //5.Stunde
      case "11:20:00":
        Klingeln(0);
        break;

      case "12:05:00":
        Klingeln(1);
        break;

      //6. Stunde
      case "12:35:00":
        Klingeln(0);
        break;

      case "13:20:00":
        Klingeln(2);
        break;

      case "18:13:20":
        Klingeln(2);
        break;
    }
  } else {
    cconfirm = "Schulmodus: AUS";
  }

  document.getElementById("Modus").innerHTML = cconfirm;
  document.getElementById("next").innerHTML = nextRing;
  document.getElementById("StundeBox").innerHTML = StundeBox;
}

var timer;
var timerDM = setInterval(darkModeF, 1000);
var glowInterval;
var volumeInterval = setInterval(Klingeln, 1000);
function pcTest() {
  clearInterval(timer);
  timer = 0;
  clearInterval(timerDM);
  timerDM = 0;
  clearInterval(glowInterval);
  glowInterval = 0;
  clearInterval(volumeInterval);
  volumeInterval = 0;

  var pcTestvar = document.getElementById("PCTest").value;
  /*var pcTestvar2 = document.getElementById("PCTest2").value;*/

  volumeInterval = setInterval(Klingeln, pcTestvar);
  glowInterval = setInterval(glowy, pcTestvar);
  timerDM = setInterval(darkModeF, pcTestvar);
  timer = setInterval(time, pcTestvar);

  document.getElementById("PCTOutput").innerHTML = pcTestvar;
  /*document.getElementById("PCTOutput2").innerHTML = pcTestvar2;*/
}

function glowy() {
  var glowModeVar = document.getElementById("glowMode").checked;
  if (glowModeVar) {
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

var DMCheck = true;

function darkModeF() {
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

timer = setInterval(time, 1000);
