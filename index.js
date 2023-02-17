let hours = document.getElementById("text1");
let minutes = document.getElementById("text2");
let seconds = document.getElementById("text3");
let am = document.getElementById("text4");
function clock() {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let am_pm = "AM";
  am_pm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs == 0 ? 12 : hrs > 12 ? hrs - 12 : hrs;
  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let myLog = document.getElementById("next");
  if (hrs >= 1 && hrs <= 4 && am_pm === "PM") {
    myLog.innerText = "LET'S HAVE SOME LUNCH!!";
  } 
  else if (hrs >= 4 && hrs <= 7 && am_pm === "PM") {
    myLog.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } 
  else if (hrs >= 8 && hrs <= 11 && am_pm === "PM") {
    myLog.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  } 
  else if (hrs >= 1 && hrs <= 11 && am_pm === "AM") {
    myLog.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  } 
  else {
    myLog.innerText = "ALL IS GOOD!!";
  }

  hours.innerHTML = innerText = `${hrs} hr`;
  minutes.innerHTML = innerText = `${mins}  min`;
  seconds.innerHTML = innerText = `${secs} sec`;
  am.innerHTML = innerText = `${am_pm}`;
}
setInterval(clock, 1000);



let buttonAgain = document.getElementById("cirl");
buttonAgain.addEventListener("mouseover", function () {
  this.innerText = "Party Time";
});
buttonAgain.addEventListener("mouseout", function () {
  this.innerText = "Set Alarm";
});

let changeout = document.getElementById("splitSquare");
changeout.addEventListener("click", function () {

  let hrs = new Date().getHours();

  let wakeup = document.getElementById("mornings");
  let lunch = document.getElementById("afternons");
  let nap = document.getElementById("evenings");
  let night = document.getElementById("nights");

  var backcontainer = document.getElementById("back-container");
  var drive = document.getElementById("drive");

  if (parseInt(wakeup.value) === hrs) {
    drive.innerHTML = "Good Morning! WAKE UP!";
    backcontainer.style.backgroundImage = "url(./morning.svg)";
  }
   if (parseInt(lunch.value) === hrs) {
    drive.innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
    backcontainer.style.backgroundImage = "url(./luncht.svg)";
  } 
  if (parseInt(nap.value) === hrs) {
    drive.innerHTML = "GOOD EVENING !!";
    backcontainer.style.backgroundImage = "url(./sham.png)";
  } 
  if (parseInt(night.value) === hrs) {
    drive.innerHTML = "GOOD NIGHT !!";
    backcontainer.style.backgroundImage = "url(./night.svg)";
  }


  let changeTextInBox=document.getElementsByClassName("set");

  changeTextInBox[0].innerText= wakeup.options[wakeup.selectedIndex].text;
  changeTextInBox[1].innerText= lunch.options[lunch.selectedIndex].text;
  changeTextInBox[2].innerText= nap.options[nap.selectedIndex].text;
  changeTextInBox[3].innerText= night.options[night.selectedIndex].text;
})










// var vv = document.getElementById("mornings");
// var vi = document.getElementById("afternons");
// var vs = document.getElementById("evenings");
// var vh = document.getElementById("nights");

// var backcontainer = document.getElementById("back-container");
// var drive =  document.getElementById("drive");

// const chageText = document.querySelector(".vvvv");
// function addAllList(){
//     chageText.classList.toggle("active");

//     var value = vv.options[vv.selectedIndex].text;
//     document.getElementById("set1").innerText=value;

//     var value = vi.options[vi.selectedIndex].text;
//     document.getElementById("set2").innerText=value;

//     var value = vs.options[vs.selectedIndex].text;
//     document.getElementById("set3").innerText=value;

//     var value = vh.options[vh.selectedIndex].text;
//     document.getElementById("set4").innerText=value;
// }
// function addTime() {
//     var vv = document.getElementById("mornings").value;
//     var vi = document.getElementById("afternons").value;
//     var vs = document.getElementById("evenings").value;
//     var vh = document.getElementById("nights").value;

//     let hours = new Date().getHours();

//     if (hours == vv) {
//       drive.innerHTML = "Good Morning! WAKE UP!"
//       backcontainer.style.backgroundImage = "url(./morning.svg)";
//     }

//     if (hours == vi) {
//        drive.innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP"
//        backcontainer.style.backgroundImage="url(./luncht.svg)";
//     }

//     if (hours == vs) {
//        drive.innerHTML = "GOOD EVENING !!"
//        backcontainer.style.backgroundImage="url(./sham.png)";
//     }

//     if (hours == vh) {
//        drive.innerHTML = "GOOD NIGHT !!"
//         backcontainer.style.backgroundImage="url(./night.svg)";
//     }
//     addAllList();
// };
// let chageBtn = document.getElementById("splitSquare");
// chageBtn.addEventListener("click", addTime);