console.log('welcome');
let SongIndex = 0
let audio = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let playbutton = document.getElementById('playbutton');
let seekbar = document.getElementById('seekbar');
let imageplayer = document.getElementById('imageplayer');
let Titles = Array.from(document.getElementsByClassName('titles'));

let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "IMAGES/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "IMAGES/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "IMAGES/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "IMAGES/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "IMAGES/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "IMAGES/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "IMAGES/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "IMAGES/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "IMAGES/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "IMAGES/10.jpg" },
]

Titles.forEach((element, i) => {
     element.getElementsByTagName('img')[0].src= songs[i].coverPath;

});

masterplay.addEventListener('click', () => {
    audio.play();
});

playbutton.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playbutton.classList.remove(`fa-solid`, `fa-play`);
        playbutton.classList.add(`fa-solid`, `fa-pause`);
        imageplayer.style.opacity = 1;
    }

    else {
        audio.pause();
        playbutton.classList.remove(`fa-solid`, `fa-pause`);
        playbutton.classList.add(`fa-solid`, `fa-play`);
        imageplayer.style.opacity = 0;
    }
});

audio.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audio.currentTime / audio.duration) * 100);
    seekbar.value = progress;
    seekbar.addEventListener('change', () => { audio.currentTime = seekbar.value * audio.duration / 100 });
}
);





