function replacePlayer() {
  window.addEventListener('keydown', function (event) {
    st = () => {
      event.preventDefault();
      event.stopPropagation();
    }

    const video = document.querySelector('#playerHolder video');
    const player = document.querySelector('#playerHolder');

    let code;

    if (event.key !== undefined) {
      code = event.key.toUpperCase();
    }

    if (code === 'ARROWLEFT') {
      // Left
      video.currentTime -= 5;
      st();
    } else if (code === 'ARROWRIGHT') {
      // Right
      video.currentTime += 5;
      st();
    }

    if (code === 'ARROWUP') {
      // Up
      try {
        video.volume += 0.1;
      } catch (e) {
        video.volume = 1;
      }
      st();
    } else if (code === 'ARROWDOWN') {
      // Down
      try {
        video.volume -= 0.1;
      } catch (e) {
        video.volume = 0;
      }
      st();
    }

    if (code === ' ') {
      // Space
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      st();
    }

    if (code === 'F') {
      // F
      if (!document.fullscreenElement) {
        player.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      st();
    }

    if (code === 'M') {
      video.muted = !video.muted;
    }
  });
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  // call on next available tick
  setTimeout(replacePlayer, 1);
} else {
  document.addEventListener("DOMContentLoaded", replacePlayer);
}