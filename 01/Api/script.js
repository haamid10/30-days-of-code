// https://dog.ceo/api/breeds/image/random

const dogImageDv =document.getElementById('dogImage')

// 
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
  // console.log(json.message)
 dogImageDv.innerHTML=`<img src='${json.message}' />`
})

