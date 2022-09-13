 let quotes =  [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
      {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
  ] 
  let i = Math.floor(Math.random() * quotes.length);
  function getQuotes() {
  

  const text = document.querySelector('.quote');
  const author = document.querySelector('.author');

  text.textContent = quotes[i]['text'];
  author.textContent = quotes[i]['author'];
 
 
  return quotes[i];

}

console.log(getQuotes());


let divElem1 = document.querySelector('.quote');
let divElem2 = document.querySelector('.author');
document.querySelector('.change-quote').addEventListener('click', () => {
  
  if((divElem1.innerHTML == 'Genius is one percent inspiration and ninety-nine percent perspiration.') && (divElem2.innerHTML == 'Thomas Edison')) {
            (divElem1.innerHTML = 'You can observe a lot just by watching.') && (divElem2.innerHTML = 'Yogi Berra');
       
        } 
         else if ((divElem1.innerHTML == 'A house divided against itself cannot stand.') && (divElem2.innerHTML == 'Abraham Lincoln')){
             (divElem1.innerHTML = 'Genius is one percent inspiration and ninety-nine percent perspiration.') && (divElem2.innerHTML = 'Thomas Edison'); 
        } else {
            (divElem1.innerHTML = 'A house divided against itself cannot stand.') && (divElem2.innerHTML = 'Abraham Lincoln');
        }
        
         
       return false;
  
});


