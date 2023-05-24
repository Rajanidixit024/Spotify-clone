let songIndex=0;
let audioElement = new Audio('Jaadui song file.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    { name:"Tum hi aana",filepath:"2.mp3", coverpath:"2.jpg"},
    { name:"Manike",filepath:"3.mp3", coverpath:"3.jpg"},
    { name:"Lut gye",filepath:"4.mp3", coverpath:"4.jpg"},
    { name:"Shri krishn",filepath:"5.mp3", coverpath:"5.jpg"},
    { name:"kuch bate",filepath:"6.mp3", coverpath:"6.jpg"},
    { name:"mere bhole",filepath:"7.mp3", coverpath:"7.jpg"},
    { name:"gazab ka din",filepath:"8.mp3", coverpath:"8.jpg"},
    { name:"bewafa",filepath:"9.mp3", coverpath:"9.jpg"},
    { name:"barsat ki dhun",filepath:"10.mp3", coverpath:"10.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
})
myProgressBar.addEventListener('time',()=>{
   console.log('time update');

})
