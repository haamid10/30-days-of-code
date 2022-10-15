const options=  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c73584b6amshddddf219b49d04bp14ffd2jsnde375776e4c8',
		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
	}
};

fetch('https://openweather43.p.rapidapi.com/weather?q=Chicago&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=standard', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));