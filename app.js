// user authentication
function authentication() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    window.location = "scoreboard_counter.html";
  } else {
    alert("user is invalid");
  }
}
// counter application code
let sec = document.getElementById("second");
let min = document.getElementById("minute");
let display = document.getElementById("display");
let start = document.getElementById("startbtn");
let pause = document.getElementById("pausebtn");
let stop = document.getElementById("resetbtn");
var timer = false;
let teamAScore = 0;
let teamBScore = 0;
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

function displaytime() {
  display.innerHTML =
    (minute.value > 9 ? minute.value : "0" + minute.value) +
    ":" +
    (second.value > 9 ? second.value : "0" + second.value);
}
function startTimer() {
  if (timer == true) {
    start.disabled = true;
    min.disabled = true;
    sec.disabled = true;

    var date = new Date();
    var countdownDate = new Date();
    countdownDate.setTime(
      date.getTime() +
        minute.value * 60 * 1000 +
        (second.value * 1000 + 1 * 1000)
    );
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countdownDate - now;
      var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var second = Math.floor((distance % (1000 * 60)) / 1000);
      display.innerHTML =
        (minute > 9 ? minute : "0" + minute) +
        ":" +
        (second > 9 ? second : "0" + second);

      if (display.innerHTML == "00:00") {
        clearInterval(x);
      }
    }, 1000);
  }
}
function startbtn() {
  timer = true;
  startTimer();
}
function pausebtn() {
  timer = false;
}
function resetbtn() {
  timer = false;
  location.reload();
  display.innerHTML = "00:00";
}
// function of score increment of players
function incrementScore(team) {
  if (team == "teamA") {
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
  } else if (team == "teamB") {
    teamBScore++;
    teamBScoreValue.textContent = teamBScore;
  }
}