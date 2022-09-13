const button = document.querySelector('.play');
// const activeItem = document.querySelectorAll('.play-item');

const arrowRight = document.querySelector('.play-next');
const arrowLeft = document.querySelector('.play-prev');


function toggleBtn() {
  button.classList.toggle('pause');
  
}
button.addEventListener('click', toggleBtn);

arrowRight.addEventListener('click', () => {
 
	  console.log(playNext());
})


arrowLeft.addEventListener('click', () => {

  console.log(playPrev());
})  

  

const playList = [
    {      
      title: 'Aqua Caelestis',
      src: './assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  
    {      
      title: 'River Flows In You',
      src: './assets/sounds/River Flows In You.mp3',
      duration: '03:50'
    },
    {
      title: 'Summer Wind',
      src: './assets/sounds/Summer Wind.mp3',
      duration: '03:50'
    },
    {
      title: 'Ennio Morricone',
      src: './assets/sounds/Ennio Morricone.mp3',
      duration: '03:50'
    }
    

  ];
  let playNum = 0;
  let element;
  const audio = new Audio();
  
  function playAudio() {
   
     if(!isPlay) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        isPlay = true;
        audio.play();
        button.classList.add('pause');
        activeItem[playNum].classList.add('item-active');

       
    } else {
        isPlay = false;
        audio.pause();
        button.classList.remove('pause');
        activeItem[playNum].classList.remove('item-active');

    }     
//  colorTreck();
  } 

console.log(playNum);

  function pauseAudio() {
        isPlay = false;
        audio.pause();
        
  playAudio();      
  }


   function playNext() {
    let max = 3;  
    if(!button.classList.contains('pause'))button.classList.add('pause')
      activeItem[playNum].classList.remove('item-active');
    if (playNum < max) {
      playNum++;
      

     } else {
      playNum = 0;
     
     }
     activeItem[playNum].classList.add('item-active');
     
     
     playAudio();
     pauseAudio();
     
     
    return playNum; 
    
   }

function playPrev() {
  if(!button.classList.contains('pause'))button.classList.add('pause')
      activeItem[playNum].classList.remove('item-active');
   if(playNum === 0) {
    playNum = playList.length - 1;

   }else {
    playNum = playNum - 1;
   }
   
   activeItem[playNum].classList.add('item-active');

   playAudio();
   pauseAudio();
  return playNum; 
}

 

  button.addEventListener('click',playAudio);


    
    for(let playNum = 0; playNum < playList.length; playNum++) {
      
      const ul = document.querySelector('ul.play-list');
      const li = document.createElement('li');
      li.classList.add('play-item');
      li.textContent = playList[playNum].title;
      ul.appendChild(li);
      console.log(playList[playNum]);
      
    }
const activeItem = document.querySelectorAll('.play-item');
// const colorTreck = (activeItem, newActiveItem = null) => {
//   if(newActiveItem){
//     activeItem.playList[playNum].classList.remove('item-active');
    
//   } else if(activeItem) {
//     activeItem.playList[playNum].classList.add('item-active');
//   }
  
  
 
// };
// colorTreck();
