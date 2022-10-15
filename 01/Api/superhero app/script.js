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
      isReady= [false,true] [Math.floor(Math.random()*2)]
      isReady ? resolve('soup is ready'): reject('no soup tody')
    },2000)
  })
  const promise2 = async() =>{
    const data= { 
      rating: 0,
      pay:0,
      tip:0,
      review: 0
    }
    // promise1
    try{
   const soup =await promise1
   console.log(soup)
   data.pay=5
   data.rating=10
   data.tip =10
   data.review = 2
   return data

    }
    catch(error){
      console.log(error)
      data.pay=0
      data.rating=0
      data.tip =0
      data.review = 0

      return data
    }
    return data
   
  }
  promise2().then(value => console.log(value))

  console.log(
    promise1
    .then ( success => console.log({success}))
    .catch( error => console.log({error}))
     )

console.log('fetch:', fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(hamiid => console.log(hamiid))
)

// Async

const DogImg =async() => {
  const url =  ('https://dog.ceo/api/breeds/image/random')
  const response = await fetch (url)
  const data = await response.json()
  console.log(data)
}
DogImg()