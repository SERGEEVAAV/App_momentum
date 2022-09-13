

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

function showTime() {
    const date = new Date();
    const hours = zero_first_format(date.getHours());
    const minutes = zero_first_format(date.getMinutes());
    const seconds = zero_first_format(date.getSeconds());


    setTimeout(showTime, 1000);
    return hours+":"+minutes+":"+seconds;

    
}
document.querySelector('time').innerHTML = showTime();

//Обновляем часы в реальном времени

setInterval( function (){
    document.querySelector('.time').innerHTML = showTime();
}, 1000);

function showDate() {

    const monthsArr = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    const daysArr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    const now = new Date();
    

    

  return daysArr[now.getDay()] + ", " + monthsArr[now.getMonth()] + " " + now.getDate();
  
    
}
document.querySelector('date').innerHTML = showDate();

// Приветствие


  function getTimeOfDay() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if ((hours >= 6) && (hours < 12)) {
        timeOfDay = 'morning';
    }
     else if ((hours >= 12) && (hours < 18)){
        timeOfDay = 'afternoon';
    }
     else if ((hours >= 18) && (hours < 24)){
     
        timeOfDay = 'evening';
    }
     else if((hours >= 24) && (hours < 06)){
      
        timeOfDay = 'night';
    
      
    }
   
        
  return (`${timeOfDay}`);
  
  }
  
document.querySelector('.greeting').innerHTML =showGreeting();
document.querySelector('.name').placeholder = '[Enter name]';

  function showGreeting(english) {
    english = 'en';
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
  

    return greetingText;
  }
  showGreeting();

  const greetingTranslation = {
    morning: {
        en: 'Good morning',
        ru: 'Доброе утро',
    },
    afternoon: {
        en: 'Good afternoon',
        ru: 'Добрый день',
    },
    evening: {
        en: 'Good evening',
        ru: 'Добрый вечер',
    },
    night: {
        en: 'Good night',
        ru: 'Доброй ночи',
    },
}
 //При перезагрузке страницы приложения имя пользователя сохраняется
 
 const userName = document.querySelector('.name');
 function setLocalStorage() {
  localStorage.setItem(userName, userName.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem(userName)) {
    userName.value = localStorage.getItem(userName);
  }
}
window.addEventListener('load', getLocalStorage)

//Слайдер изображений

//Рандомное число
let isPlay;
let randomNum;
function getRandomNum(min, max) {
  
     randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

   return randomNum;

}
console.log(getRandomNum(1, 20));


//Плавная смена фоновых изображений


function setBg() { 
    // const bgNum = getRandomNum(1, 20);
    const bgNum = String(randomNum).padStart(2, '0');
    // console.log(bgNum);
    const timeOfDay = getTimeOfDay();
    const img = new Image();
    
    img.src = `https://raw.githubusercontent.com/SERGEEVAAV/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    // img.src = `https://github.com/SERGEEVAAV/stage1-tasks/tree/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {      
    
     document.body.style.backgroundImage =`url(${img.src})`;
    
     
     
    }; 
    
    
  }

  setBg();


 //увеличивает рандомное число на 1
 
 const max = 20;
 let random = 1;
 
 function getSlideNext ()  {
  const bgNum = String(random).padStart(2, '0');
  const timeOfDay = getTimeOfDay();
  const img = new Image();

  img.src = `https://raw.githubusercontent.com/SERGEEVAAV/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    img.onload = () => {      
    
     document.body.style.backgroundImage =`url(${img.src})`;
     
    }; 
  

    if(random == 1) {
    random = Math.trunc(Math.random() * max)
  } else {
    random = random < max ? random + 1 : 1
  }
  return random;
  
    
    
  }

setBg();
getSlideNext();


 const slideNext = document.querySelector('.slide-next');
 slideNext.addEventListener('click', function(){
    
  console.log(getSlideNext());
 });
 
     
 
    
  
//  // уменьшаете рандомное число на 1

 function getSlidePrev() {

  const bgNum = String(random).padStart(2, '0');
  const timeOfDay = getTimeOfDay();
  const img = new Image();

  img.src = `https://raw.githubusercontent.com/SERGEEVAAV/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    img.onload = () => {      
    
     document.body.style.backgroundImage =`url(${img.src})`;
     
    }; 
  

    if(random == 1) {
    random = Math.trunc(Math.random() * max)
  } else {
    random = random < max ? random - 1 : 1
  }
  return random;
  
 };
 

 
  getSlidePrev();
 
    

    const slidePrev = document.querySelector('.slide-prev');
    // slidePrev.addEventListener('click', getSlidePrev);
    slidePrev.addEventListener('click', function() {
      console.log(getSlidePrev());
    });

 
    