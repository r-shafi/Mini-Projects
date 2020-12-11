const video = document.querySelector('video');
const playPause = document.querySelector('#play-pause');
const speedButons = document.querySelectorAll('.speed');

playPause.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

speedButons.forEach((btn) => btn.addEventListener('click', () => {
  video.playbackRate = Number(btn.value);
}));
