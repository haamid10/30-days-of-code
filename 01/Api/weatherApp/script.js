

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  getWeatherData(city)
  .then((data)=>{
    showWeatherData(data)
  })
  .catch((error)=>{
    console.log(error)
    console.log('not found')
  })
 
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  console.log(weatherData.main)
  document.getElementById("city-name").innerText = weatherData.name
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
  document.getElementById("min-temp").innerText = weatherData.main.temp_min

}



// siuuus


class car {
  constructor(name,topSpeed,color){
    this.name = name;
    this.speed= topSpeed;
    this.color=color;
    this.currentSpeed =0
  }
  getCurrentSpeed(){
    return currentSpeed
  }
  zeroToSixty (){
    setTimeout(()=>{
      console.log('phew that was fast')
      this.currentSpeed= 60
      console.log(this.currentSpeed)
    }, 3000)
  }
drive() {
  this.currentSpeed +=10
  console.log(`im on the way ${this.currentSpeed}`)
  }

brake(speed){
  this.currentSpeed -= speed
  console.log(`brake screeching  ${this.currentSpeed}`)
}
stop(){
  this.currentSpeed = 0
  console.log(`stopped  ${this.currentSpeed}`)

}
} 

const mark2 = new car('mark2',"red",200)
mark2.drive()
const nums = [1 ,2,3,4,5];
nums.forEach(_=>mark2.drive())
mark2.brake(60)
mark2.stop()
mark2.zeroToSixty()
// console.log(mark2.stop)


const fruits =['','']


const actor = {name: 'hamiid', age: 37, networth: 200000}
 console.log(Object.keys( actor))
 console.log(Object.values( actor))



