const buttonRadioOne = document.querySelector('.item__1');
const btnRadioTwo = document.querySelector('.item__2');
const btnRadioThree = document.querySelector('.item__3');
const btnRadioFour = document.querySelector('.item__4');
const btnRadioFive = document.querySelector('.item__5');
const btnRadioSix = document.querySelector('.item__6');
const btnRadioSeven = document.querySelector('.item__7');
const btnRadioEight = document.querySelector('.item__8');
const btnRadioNine = document.querySelector('.item__9');

// Hide Time
let hidden = false;
buttonRadioOne.addEventListener('click', () => {
  buttonRadioOne.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.time').style.visibility = 'hidden';
  } else {
    document.querySelector('.time').style.visibility = 'visible';
    buttonRadioOne.classList.add('active');
  }
  
})

//Hide Date

btnRadioTwo.addEventListener('click', () => {
  btnRadioTwo.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.date').style.visibility = 'hidden';
  } else {
    document.querySelector('.date').style.visibility = 'visible';
    btnRadioTwo.classList.add('active');
  }
  
})

//Hide Greeting

 btnRadioThree.addEventListener('click', () => {
  btnRadioThree.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.greeting-container').style.visibility = 'hidden';
  } else {
    document.querySelector('.greeting-container').style.visibility = 'visible';
    btnRadioThree.classList.add('active');
  }
  
})

//Hide Audioplayer

btnRadioFour.addEventListener('click', () => {
  btnRadioFour.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.player').style.visibility = 'hidden';
  } else {
    document.querySelector('.player').style.visibility = 'visible';
    btnRadioFour.classList.add('active');
  }
  
})

//Hide Weather

btnRadioFive.addEventListener('click', () => {
  btnRadioFive.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.weather').style.visibility = 'hidden';
  } else {
    document.querySelector('.weather').style.visibility = 'visible';
    btnRadioFive.classList.add('active');
  }
  
})

//Hide quote

btnRadioSix.addEventListener('click', () => {
  btnRadioSix.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.quotation_column').style.visibility = 'hidden';
  } else {
    document.querySelector('.quotation_column').style.visibility = 'visible';
    btnRadioSix.classList.add('active');
  }
  
})

//Hide To-Do
btnRadioNine.addEventListener('click', () => {
  btnRadioNine.classList.remove('active');
  hidden = !hidden;
  if(hidden) {
    document.querySelector('.list__todo').style.visibility = 'hidden';
  } else {
    document.querySelector('.list__todo').style.visibility = 'visible';
    btnRadioNine.classList.add('active');
  }
  
})


//Hide backgroung Github

btnRadioSeven.addEventListener('click', () => {
  
  hidden = !hidden;
  
  if(hidden) {
    getLinkToImage();
    btnRadioSeven.classList.remove('active');
    // btnRadioEight.classList.add('active');
  } else {
    setBg();
    btnRadioSeven.classList.add('active');
    // btnRadioEight.classList.remove('active');
  }
 
});


btnRadioEight.addEventListener('click', () => {
  
  hidden = !hidden;
  if(hidden) {
    getLinkToImage();
   
    // btnRadioSeven.classList.remove('active');
    btnRadioEight.classList.add('active');
  } else {
    setBg();
    btnRadioEight.classList.remove('active');
  }
} )

//Мой TO-Do лист

const list = document.getElementById('list');
let todos;
function toLocal() {
  todos = list.innerHTML;
  localStorage.setItem('todos', todos);
}

list.addEventListener('click', function (e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    toLocal();
  }else if(e.target.tagName === 'SPAN'){
    let div = e.target.parentNode;
     div.remove();
     toLocal();
  }
}, false);

//Добавление новых пунктов

function newElement() {
  const li = document.createElement('li');
  li.className = 'itemsList';
  const inputValue = document.getElementById('todoEl').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue == '') {
    alert("Введите пункт дела");
  }else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('todoEl').value = "";
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('X');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  toLocal();
}
 if(localStorage.getItem('todos')) {
  list.innerHTML = localStorage.getItem('todos');
 }