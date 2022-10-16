

const getWeatherData = (city) => {
  // const URL = "https://api.openweathermap.org/data/2.5/weather";

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '207c1032e9mshfade951431a2ea6p157e85jsn38eeb257e68f',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  
 return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  

 
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  console.log(city)

  const Data = await getWeatherData(city)
  weatherData(data)


  

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = '106.6';

}
}




