let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let parar = document.getElementById("parar");
let inhour = document.getElementById("inhora");
let inminute = document.getElementById("inminuto");
let insecond = document.getElementById("insegundo");
let showalarm = document.getElementById("showalarm");
let info = document.getElementById("info");
var audio;
let alarm;

setInterval(time, 1000);

function time() {
    let date = new Date;
    let ch = date.getHours();
    let cm = date.getMinutes();
    let cs = date.getSeconds();

    hour.innerHTML = TwoDigits(ch);
    minute.innerHTML = TwoDigits(cm);
    second.innerHTML = TwoDigits(cs);

    let ct = String(`${TwoDigits2(ch)}${TwoDigits2(cm)}${TwoDigits2(cs)}`);
    if (alarm == ct) {
        alarmar()
    }
}

function TwoDigits(number) {
    if (number >= 10) {
        return (number);
    }
    else {
        return (`0${number}`);
    }
}
function TwoDigits2(number) {
    let tamanho = number.length;
    if (number !== "") {
        if (number == 00 || number >= 10) {
            return (number);
        }
        else if (tamanho < 2) {
            return (`0${number}`);
        }
        else {
            return (`${number}`);
        }
    } else {
        return("00")
    }

}

function setAlarm() {
    if (inhour == "") {
        alarm = ("00")
    }
    else {
        alarm = TwoDigits2(inhour.value);
    }

    if (inminute == "") {
        alarm = (alarm + "00")
    }
    else {
        alarm = (alarm + TwoDigits2(inminute.value))
    }

    if (insecond == "") {
        alarm = (alarm + "00")
    }
    else {
        alarm = (alarm + TwoDigits2(insecond.value))
    }
    showalarm.innerHTML = (`&#x23F0; ${TwoDigits2(inhour.value)}:${TwoDigits2(inminute.value)}:${TwoDigits2(insecond.value)}`);
    info.style.display = "block";
    inhour.value = '';
    inminute.value ='';
    insecond.value='';
}

function alarmar(){
    audio = new Audio ('/FILES/SnapSave.io - Kelly Key - Sou a Barbie Girl [Barbie Girl] (Videoclipe Oficial) (128 kbps).mp3')
    audio.play();
    parar.style.display = 'block';
    info.style.color = "red";
}

function stop (){
    alarm = 0;
    info.style.display = "none";
    parar.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;
    info.style.color = "white";
}