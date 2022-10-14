// const superHerodiv = document.getElementById('imageHero')

// const superHero = () =>{
//   fetch('https://superheroapi.com/api.php/3447445368908953/240')
//   .then(response => response.json())
//   .then(json =>console.log(json))
// }
// superHero()


const waitingSoup =()=> console.log('soup')

setTimeout(waitingSoup,2000
  )

  const promise1 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
      isReady= true
      isReady ? resolve('soup is ready'): reject('no soup tody')
    }, 200)
  })