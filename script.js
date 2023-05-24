let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongname = document.getElementById('masterSongname');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { name:"Jaadui",filepath:"songs/1.mp3", coverpath:"covers/1.jpeg"},
    { name:"Tum hi aana",filepath:"songs/2.mp3", coverpath:"covers/2.jpeg"},
    { name:"Manike",filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    { name:"Lut gye",filepath:"songs/4.mp3", coverpath:"covers/4.jpeg"},
    { name:"Shri krishn",filepath:"songs/5.mp3", coverpath:"covers/5.jpeg"},
    { name:"kuch bate",filepath:"songs/6.mp3", coverpath:"covers/6.jpeg"},
    { name:"mast najro se",filepath:"songs/7.mp3", coverpath:"covers/7.jpeg"},
    { name:"gazab ka din",filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    { name:"bewafa",filepath:"songs/9.mp3", coverpath:"covers/9.jpeg"},
    { name:"barsat ki dhun",filepath:"songs/10.mp3", coverpath:"covers/10.jpeg"}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("name")[0].innerText=songs[i].name;

})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
   console.log('time update');
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value *audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       masterSongname,innerText=songs[songIndex].name;
       songIndex = parseInt(e.target.id)+1;
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src=`songs/${songIndex}.mp3`;
       audioElement.currentTime=0;
       masterSongname.innerText=songs[songIndex-1].name;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       masterSongname.innerText=songs[songIndex].name;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       masterSongname.innerText=songs[songIndex].name;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
})