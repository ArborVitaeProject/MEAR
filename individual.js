document.addEventListener('DOMContentLoaded', () => {
  const backLink = document.getElementById('back-link');
  const backgroundAudio = new Audio('background-music.mp3'); // Ensure this file exists in the same directory
  backgroundAudio.loop = true;
  backgroundAudio.play();

  backLink.addEventListener('mouseover', () => {
    const hoverAudio = new Audio('hover-sound.mp3'); // Ensure this file exists in the same directory
    hoverAudio.play();
  });

  backLink.addEventListener('click', (event) => {
    event.preventDefault();
    const backAudio = new Audio('back-sound.mp3'); // Ensure this file exists in the same directory
    backAudio.play();
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1300); // Adjust this duration as needed
  });
});
