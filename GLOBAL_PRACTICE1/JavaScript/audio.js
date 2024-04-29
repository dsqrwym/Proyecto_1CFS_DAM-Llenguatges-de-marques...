const backgroundMusic = new Audio('../audio/Wendi.mp3');
backgroundMusic.loop = true;
let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        document.getElementById('musicIcon').src = 'play.png';
    } else {
        backgroundMusic.play();
        document.getElementById('musicIcon').src = 'pause.png';
    }
    isMusicPlaying = !isMusicPlaying;
}