const navigation = document.querySelector('.navigation');
const hoverAudioSrc = 'hover-sound.mp3'; // Ensure this file exists in the same directory
const clickAudioSrc = 'click-sound.mp3'; // Ensure this file exists in the same directory

navigation.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

const icons = document.querySelectorAll('.navigation a span i');
icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const hoverAudio = new Audio(hoverAudioSrc);
    hoverAudio.play();
  });
  
  icon.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default click action
    const clickAudio = new Audio(clickAudioSrc);
    clickAudio.play();

    // Wait for a short duration to allow the sound to start playing, then navigate
    setTimeout(() => {
      const targetUrl = icon.parentElement.parentElement.href; // Correctly access the href
      window.location.href = targetUrl;
    }, 1000); // Adjust this duration as needed
  });
});
