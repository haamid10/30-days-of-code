// https://dog.ceo/api/breeds/image/random

const dogImageDv =document.getElementById('dogImage')
const getDog = document.getElementById('getDog')
// 
const dogimage = () =>
{fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
  // console.log(json.message)
 dogImageDv.innerHTML=`<img src='${json.message}' height=300px width= 600px  />`
})
}
getDog.onclick = () =>dogimage()
