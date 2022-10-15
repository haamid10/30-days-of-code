const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c73584b6amshddddf219b49d04bp14ffd2jsnde375776e4c8',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
	.then(response => response.json())
	.then(response => console.log(response.weather[0].main))
	.catch(err => console.error(err));