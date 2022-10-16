
 const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '58ed24e18amsh5880883edd9a737p109db0jsn781613da7c54',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

fetch(`https://open-weather13.p.rapidapi.com/city/london` , options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(erro => console.error(erro));


const getWeatherData = (city) => {
  // const URL = "https://api.openweathermap.org/data/2.5/weather";

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '58ed24e18amsh5880883edd9a737p109db0jsn781613da7c54',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  
  fetch(`https://open-weather13.p.rapidapi.com/city/${city}` , options)
    .then(response => response.json())
    .then(response => console.log(response.main))
    // .catch(erro => console.error(erro));
  
  
  
  // const options ={

  // }
  // fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4534974db18e4197f943a90d9f1dbea`).then(reponse => response.json()).then(data=> console.log(data));
  // const weatherPromise  = fetch(URL);
 
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  console.log(city)

  getWeatherData(city)
  

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  // document.getElementById("city-name").innerText = weatherData.name;

}
}




