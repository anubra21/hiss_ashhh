let isMusicPlaying = false;
const bgMusic = document.getElementById('bg-music');

function toggleMusic() {
  if (!isMusicPlaying) {
    bgMusic.play();
    document.querySelector('.music-toggle').textContent = '🔇 Pause Music';
  } else {
    bgMusic.pause();
    document.querySelector('.music-toggle').textContent = '🎵 Play Folk Love';
  }
  isMusicPlaying = !isMusicPlaying;
}

function typewriterEffect(text, elementId, speed = 50) {
  const element = document.getElementById(elementId);
  element.classList.remove('typewriter'); // reset in case
  element.innerHTML = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.add('typewriter');
    }
  }

  type();
}

window.onload = function () {
  typewriterEffect("এক প্রেম, দুই সংস্কৃতি। एक मोहब्बत, दो तहज़ीबें। ਇੱਕ ਪਿਆਰ, ਤਿੰਨ ਰੰਗ।", "typewriter-text", 60);
}

function showMessage() {
  const finalBox = document.getElementById('final-message');
  finalBox.classList.remove('hidden');
  typewriterEffect("From Kolkata to Jaipur to Punjab — wherever I go, I carry you in my heartbeat 🥹❤️", "love-note", 50);
}
