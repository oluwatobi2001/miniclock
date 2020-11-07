/*
var wakeUpTime = 7;
var midDay = 12;
var evening = 18;



    var currentTime = document.getElementById("#time");
    var moodT = document.getElementById("#mood");
    var buttony = document.getElementById("click");
     

buttony.addEventListener("click", function () {
    return new Date().toLocaleTimeString();
});*/
const item = document.getElementById('time');
const moood = document.getElementById("mood");
const value = item.nodeValue;

let tim = new Date().getHours();
let tiime = new Date().toLocaleTimeString();

/*console.log(value);*/
item.innerText = item.childNodes[0].nodeValue + tiime;

if(tim < 12 ) {
moood.innerText = " it's morning";
}
else {
    if( tim < 18) {
        moood.innerText = " it's afternoon";
    }
    else{
        moood.innerText = " it's evening";  
    }
}