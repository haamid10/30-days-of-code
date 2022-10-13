const superHerodiv = document.getElementById('imageHero')

// const superHero = () =>{
  fetch('https://superheroapi.com/api/access-token/character-id')
  .then(response => response.json())
  .then(json =>console.log(json))
// }
// console.log(superHero)