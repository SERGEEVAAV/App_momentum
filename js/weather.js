const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let city = document.querySelector('.city');
const API_KEY = '5774c6464bab9c4736b4807365a0faa7';



async function getWeather() { 
  const cityValue = city.value;
 
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=en&appid=${API_KEY}&units=metric`;
   
    const res = await fetch(url);
    const data = await res.json(); 
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Himidity: ${data.main.humidity}%`;
  
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity);
    console.log(data);
  } catch(error) {
    console.log(error)
  }
    
  }
  getWeather();

  async function getWeatherStatic() { 
   
    try {
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=${API_KEY}&units=metric`;
     
      const res = await fetch(url);
      const data = await res.json(); 
      
    
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
      humidity.textContent = `Himidity: ${data.main.humidity}%`;
    
      // console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity);
      console.log(data);
    } catch(error) {
      console.log(error)
    }
      
    }
    getWeatherStatic();
  

  city.addEventListener('change', getWeather);
    
   
  //При перезагрузке страницы приложения погода сохраняется

  function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalStorage)
