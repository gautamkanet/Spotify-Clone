// variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");   //range
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = document.querySelectorAll('.songItem');

let songs = [
    { songName: "295 - sidhu moose wala", filePath: "song/1.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Danza Kudaro - Fast & Furious", filePath: "song/2.mp3", coverPath: "covers/2.jpeg" },
    { songName: "Ena Sona - OK Jannu ", filePath: "song/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "kapda Meching - Gujarati Song", filePath: "song/4.mp3", coverPath: "covers/4.jpeg" },
    { songName: "Maa No Palav - Gujarati Song", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Mogal Maa song - rajbha Gadhvi", filePath: "song/6.mp3", coverPath: "covers/6.jpeg" },
    { songName: "Pal Pal Dil K Pass ", filePath: "song/7.mp3", coverPath: "covers/7.jpeg" },
    { songName: "Kabhi Khushi Kabhi Gam", filePath: "song/8.mp3", coverPath: "covers/8.jpeg" },
    { songName: "padar tare Porha- Gujarati song", filePath: "song/9.mp3", coverPath: "covers/9.jpeg" },
    { songName: "Ve Mahi song -keshri", filePath: "song/10.mp3", coverPath: "covers/10.jpeg" },
]
// forEach loop : index , value , array
songItems.forEach((element, i) => {
    // console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log("time update");
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("input", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    console.log(audioElement.currentTime);
})

const makeAllPlayes = () => {
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
document.querySelectorAll('.songItemPlay').forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e.target);
        makeAllPlayes();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
