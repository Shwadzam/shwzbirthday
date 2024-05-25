import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@1.3.8';

const canvas = document.getElementById('canvas3d');
canvas.width = window.innerWidth; // Set canvas width to window width
canvas.height = window.innerHeight;
const app = new Application(canvas);
const audio = document.querySelector('audio')

//Check if the music is playing
audio.addEventListener("play", function() {
  audio.parentElement.style.display = "none";
});

// Load the 3d
app
    .load('https://prod.spline.design/Mo-6eas9WuLosS0G/scene.splinecode')
    .then(() => {
      document.querySelector('.loading').remove()

      const giftBox = app.findObjectByName("GiftBox")
      gsap.set(giftBox.scale, {x: 1, y: 1, z:1});
    })

document.addEventListener('keydown', function(event) {
    // Check if Shift key and S key are pressed simultaneously
    if (event.shiftKey && (event.key === 'S' || event.keyCode === 83)) {
        window.open('https://wa.me/6285607615135/?text=dza%2C%20I%27ve%20been%20opened%20it.%20Gimme%20the%20rest%20of%20it')
    }
});
