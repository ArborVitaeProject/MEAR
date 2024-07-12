document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const hoverAudioSrc = 'hover-sound.mp3'; // Ensure this file exists in the same directory
  const clickAudioSrc = 'click-sound.mp3'; // Ensure this file exists in the same directory
  const backgroundAudio = new Audio('hub-background-music.mp3'); // Ensure this file exists in the same directory

  backgroundAudio.loop = true;
  backgroundAudio.play();

  navigation.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });

  const icons = document.querySelectorAll('.navigation a span i');
  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      if (!isMobileDevice()) {
        const hoverAudio = new Audio(hoverAudioSrc);
        hoverAudio.play();
      }
    });

    icon.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default click action
      const clickAudio = new Audio(clickAudioSrc);
      clickAudio.play();

      // Wait for a short duration to allow the sound to start playing, then navigate
      setTimeout(() => {
        const targetUrl = icon.parentElement.parentElement.href; // Correctly access the href
        window.location.href = targetUrl;
      }, 1300); // Adjust this duration as needed
    });
  });

  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
});
