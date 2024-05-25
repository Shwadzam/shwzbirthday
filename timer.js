

// At the component you want to use confetti
var countDownDate = new Date("May 26, 2024 00:00:00").getTime();

      // Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    var timerPrev = document.getElementById("timer")

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    // Output the result in an element with id="demo"
    timerPrev.innerHTML =
      "<span>"+ days + "</span>:<span>" + hours + "</span>:<span>" + minutes + "</span>:<span>" + seconds + "</span>";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      open_button.setAttribute("id", "open")
      timerPrev.innerHTML = "<span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>";
    }
}, 1000);

/*____________________________________________________________*/ 

var timerContainer = document.querySelector(".timer-container");
var passwordContainer = document.querySelector(".password")
var open_button = document.getElementById("disable")

window.onload = function() {
  var now = new Date().getTime()
  if ((countDownDate - now) <= 0){
    confettiCustom()
  }
}

function confettiCustom() {
  return new Promise((resolve, reject) => {
    var canvas = document.createElement('canvas');
    canvas.id = 'my-canvas';
    document.body.appendChild(canvas);

    const jsConfetti = new JSConfetti({ canvas })

    jsConfetti.addConfetti({
      confettiColors : ['#ff0a54', '#00bcd4', '#ff9800', '#4caf50', '#9c27b0', '#ffeb3b'],
      confettiRadius: 6,
      confettiNumber: 500,  
    }).then(() => {
      canvas.remove();
      resolve(); // Resolve the promise after animation completes
    }).catch((error) => {
      reject(error); // Reject the promise if there is an error
    });
  });
}


function login(){
  var now = new Date().getTime()
  if ((countDownDate - now) <= 0) {
    passwordContainer.style.display = "flex";
  } else {
    navigator.vibrate([200])
    Swal.fire({
      title: 'Unavailable',
      text: 'This action will available after the countdown stopped',
      icon: 'warning', // You can change the icon to 'success', 'error', 'info', etc.
      confirmButtonText: 'OK',
    });
    
  }
}

function password() {
  var passInput = document.getElementById("pass").value;
  var actualPass = "wawa260524";

  if (passInput == actualPass) {
    confettiCustom().then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Successfully logging in',
        icon: 'success', // You can change the icon to 'success', 'error', 'info', etc.
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed){
          timerContainer.style.display = "none";
          window.location.href = '/3d-scene/main-gift.html';
        }
      });
    });
      
  } else {
    navigator.vibrate(100)
    Swal.fire({
      title: 'Failed!',
      text: 'Wrong Password',
      icon: 'error', // You can change the icon to 'success', 'error', 'info', etc.
      confirmButtonText: 'Retry'
    });
  }
}

/*
Pr nya testing login, function password
*/