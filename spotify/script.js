console.log("Welcome to Spotify!!!");

// Initialize the variables::
let songIndex=0;
let audioElement = new Audio('song/perfect.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById("myProgressBar");
let gif= document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');
let songs=[
    {songName: "Perfect🤍 " , filePath: "song/perfect.mp3 ", coverPath: "Cover/perfect.jpg "},
    {songName: "2002🤍" , filePath: "song/2002.mp3 ", coverPath: "Cover/2002-pic.jpg "},
    {songName: "Dandelions🤍 " , filePath: "song/dandelions.mp3 ", coverPath: "Cover/dani.jpg "},
    {songName: "Until I Found U🤍 " , filePath: "song/untili.mp3 ", coverPath: "Cover/foundu.jpg "},
    {songName: "Girls like you🤍 " , filePath: "song/girls.mp3 ", coverPath: "Cover/girl.jpg "},
    {songName: "Infinity🤍 " , filePath: "song/infinity.mp3 ", coverPath: "Cover/infini.jpg "},
    {songName: "Memories🤍 " , filePat: "song/memories.mp3 ",  coverPath: "Cover/memories.jpg " },
    {songName: "Say you won't let go🤍 " , filePath: "song/sayyou.mp3 ", coverPath: "Cover/sayyou.jpg "},
    {songName: "Who Says🤍" , filePath: "song/selena.mp3 ", coverPath: "Cover/selena1.jpg "},
    {songName: "A Thousand Years🤍 " , filePath: "song/thousand.mp3 ", coverPath: "Cover/thousand.jpg "}, 
]
songItems.forEach((element, i)=>{
   
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


//audioElement.play();


// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
    }
  
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity =0;

    }
})
//  Listen to Events ::

audioElement.addEventListener('timeupdate', ()=>{
  //  console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;


    // Update Seekbar
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{

       makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');

        audioElement.src=`songs/${ songIndex +1}.mp3`;
       
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src =`songs/${ songIndex +1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
})




document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src =`songs/${ songIndex +1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
})
