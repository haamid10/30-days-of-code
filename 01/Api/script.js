// https://dog.ceo/api/breeds/image/random

const dogImageDv =document.getElementById('dogImage')

// 
fetch('https://cat.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
  // console.log(json.message)
 dogImageDv.innerHTML=`<img src='${json.message}' />`
})

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(json => {
//   dogImageDv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
// })