// console.log("hamiid abdi")


//operators
// fruit = prompt("what is your  favoite fruite?")
// console.log(fruit)


// food =  Number(prompt("what is your  favorite food?"))

// tip  = Number(prompt ("tip %?")/100)
// tipAmount= tip * food

// total = food +tipAmount

// console.log(tipAmount)
// console.log(total)

// alert(tipAmount)

// user input 

/* math

math.floor=rounds the number
math.ceil
math.random()= gives you random nummber

// var h = 3
// Math.random() * h
// console.log(h)
// Math.ceil(h)
// console.log(h)
// Math.floor(Math.random()*3)
/*<!-- baby weather app -->*/

// 😎☔
// let weather = prompt('how is the weather?')

// if (weather == 'rainy'){
//   console.log("grap your umbrella ☔")}
//   else{
//   console.log("wear your sunglasses 😎")

//   }




// <!-- tip calculator -->

// functions
// this function called 'SayMyName2'
// and it has 0 argument
// it logs out your name in to the console

// function sayMyName(siuu){
//   console.log(siuu)

// }
// sayMyName('safari's')
// this function called 'SayMyName2'
// and it has 1 argument
// it logs out your name in to the console

// function sayMyName2(){
//   console.log('siuu')

// }
// sayMyName2()


// function greeting(name){
 // console.log('hi ' + name +',Nice to meet you')

//  greet =`hi ${name} ,Nice to meet you `
//  console.log(greet)
// }
// greesting('johnny dep')

// function Sum(b,c){
//   return b + c
// }
// num1=Sum(1, 2)
// num2=Sum(6, 2)

// console.log(num1,num2)

// function calculateFoodTotal(food , tip){

//  const tipPercentage = tip/100
//   const tipAmount = food * tipPercentage
//  const  total =  Sum(food ,tipAmount)

//   return total
// }

// console.log(calculateFoodTotal(400, 10))


// ES6
// Arrow functions
// arrow function with explicit

// const sumArrow =(a , b) =>{
//   return a+b
// }
// arrow function with implicit
// IMPORTANT :for implicit return. remove curly braces
// const sumArrob =(a , b) => a+b

// console.log(sumArrob(100,28))


// ========exercise 


// function Add(a,b){
//   return a+b
// }
// console.log(Add(12,2))

// function sub(a,b){
//   return a-b
// }
// console.log(sub(12,2))

// function mult(a,b){
//   return a*b
// }
// console.log(mult(12,2))

// function div(a,b){
//   return a/b
// }
// console.log(div(12,2))

// function total(){
//   return [Add(1,2),sub(1,2),mult(1,2),div(1,2)]
// }
// console.log(total())


// ===Arrow function


// const Add1=(a,b)=> a+b
// console.log(Add1(2,3))

// const mult1=(a,b)=> a*b
// console.log(mult1(2,3))

// const sub1=(a,b)=> a-b
// console.log(sub1(2,3))

// const div1=(a,b)=> a/b
// console.log(div1(2,3))



//Arrays

// const groceries =  ['canbe ', 'tufaax','liin','muus']
// console.log(groceries[1])

// Array.methods(slice , push ,indexof, length)

// groceries.push('xabxab')
// groceries.push('cinab')
// console.log(groceries)

// console.log(groceries.slice(0, 2))
// console.log(groceries.slice(3, 6))
// console.log(groceries.slice(1, 4))

// console.log(groceries.length)

// const person = {
//   name: 'hamiid', 
//   shirt: 'white'

// }

// person ['phone']= 365345534

// console.log(person)

// const person2= {
//   name: 'qaazi',
//   shirt: 'black',
//   phone: '063-3917014'
// }
// console.log(person,person2)
// console.log(person2.phone,person2.name,person2.shirt)


// const introducer=(name , shirt) =>{
//   const person ={
//     name: name,
//     shirt: shirt ,
//     assets : 292290,
//     liabilities: 292000,
//     networth: function(){ 
//       return this.assets - this.liabilities
//     }

//   }

//   const intro = `hi,my name is ${person.name} and the color of my shirt is ${person.shirt} and my net-worth is ${person.networth()} `

//   return intro
// }
// console.log(introducer('xaamid' ,'maroon'))


// const groceries =  ['canbe ', 'tufaax','liin','muus','liin','muus','liin','muus','liin','muus','lin','muus']


// for (let i=0; i < groceries.length; i++){
//   console.log(groceries[i])
// }

// for (const grocs of groceries){
//   console.log(grocs)
// } 

// const numbers = [1,4,6,8,10,12]
// // for (let i=0; i< numbers.length;i++){
// //   console.log(numbers[i])
// // }
// let result= []
// const mult= (numbers)=>{
// let result= []

// for (const numb of numbers){
//   result.push (numb ** 2)
//  } // console.log(result)
//  return result
// }
// console.log(mult([1,2,3,4,5]))
   
 


// const HowManyNumbers =()=>{
//   const nus = '122364734637466'

//   for(number of nus){
//     console.log(number)
//   }
// }
// HowManyNumbers()


// const sumArray = (numberss) => {
//  let resulte = 0;
//   for( const numer of numberss){
//     console.log(numer)

//     resulte += numer
//   }
//   // return {resulte }
// }
// const num = [1,2,3,4,5]
// console.log(sumArray(num))



const Sum = (numbers) =>{
  let resulrt = 0;

  for(const number of numbers){
    
    console.log(number )
    result = result + number
  }
  return {resulrt}
}
//  let num = [1,2,3,4]
//   console.log(Sum(num))


const max =(numbers) =>{
  let result = numbers[0]

  for (const number of numbers){
    if (number > result)
    result =number
  }
  return {result}
}
// console.log(max([1,2,2,23,5,9])) 


const letterFrequency = (phrase) =>{
   console.log(phrase)
   let frequency = {}
   for (const letter of phrase){
     if (letter in frequency){
       frequency[letter] += 1
     } else {

      frequency[letter] = 1
     }
   }
   return frequency
}

// console.log(letterFrequency('were are you today i was searching you'))


const wordFrequency= (phrase)=>{

  const words=phrase.split(' ')

  return letterFrequency(words)
}

//   const userInput = prompt('write your search')
// console.log(wordFrequency( userInput))






 
 





// if (word in frequency){
//   frequency[word] ++
// }else{
//   frequency[word] = 1
// }

 

// let resultt = [1,2,3,4,].map(number => number*2)
//   console.log(result)


// there is two ways in filter b 

  const doubleNumber = (numbers, greater) => {
    return numbers.filter(greater => {
     greater =  greater> 3
      return greater
    })

    
  }
  //  console.log(doubleNumber([1,2,3,4,5,6]))
  //  console.log(doubleNumber(numbers))

  const filterArray= (numbers,greater) =>{
    let result = []

    for(const number of numbers){
      if(number > greater){
        result.push (number)
      }
      
    } 
    return result
  }

  // console.log(filterArray([1,2,3,4,5 ],2))  


  const actors =[
    {name: 'johny' ,networth: 200000},
    {name: 'amber' ,networth: 240000},
    {name: 'brad' ,networth: 300000000},
    {name: 'matt damon' ,networth: 17000000},
    {name: 'leonardo' ,networth: 253300}
  ]
  // let result = actors.filter(actor=> actor.networth >100)
  
  // console.log( actors.reduce((a,b)=> a + b.networth,0))j

  // let map= actors.map(actor=> actor.name).join(',')

    // playground.innerHTML = `<h1> ${map} </h1>`


    const maxx= (array) =>{
      let total =[]
      for (const number of array){
        if(number <= total){
          total = number
        }
      }
   return {total}
    }

    // console.log(max([1,2,3,4,5,6,6,6,8,9]))

    const numss = [1,2,3,4]
    const qiyaas = numss.reduce((prev ,curr)=> {
    return  prev * curr
     } )

      //  console.log(qiyaas)

      // DOM manualtion

      // let title = document.getElementById('title').innerText= 'magacaygu waa xaamid'

      // console.log(title)

      let message = 'goodbye loverr';
      // titleDiv.innerText = message;
      title.innerHTML =`<p> ${message}</p>`

      title.style.color ='blue'

      let red = document.getElementById('red')
      let yellow = document.getElementById('yellow')
      let green = document.getElementById('green')

      red.onclick = () => {console.log('red')}
      // red.innerText = ('djhdh') 
      yellow.onclick = () => {console.log('yellow')}
      green.onclick = () => {console.log('green')}  
      const squere = 
      document.querySelectorAll('.colorsquere')
      // console.log(squere[0].value)
      // console.log(squere[1].value)
      // console.log(squere[2].value)
      
      const timesClicked = {
        'yellow': 0,
        'green': 0,
        'red': 0 
      }
 



     squere.forEach(squeres =>{
       squeres.onclick =() =>{
         timesClicked[squeres.value] += 1
         squeres.innerText = timesClicked[squeres.value]
       }
     })
    const clearScores = () =>{
       timesClicked.red = 0
       timesClicked.yellow =0
       timesClicked.green= 0
       squere.forEach(squere =>{
        //  timesClicked[squere.value]= 0
  squere.innerText = 0
       })
     }    
      const clearN = document.getElementById('clear')
     clearN.onclick = () => clearScores()
            //  clearBtn.onclick=()=> clearScores()










// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')
// // redDiv.innerText = ('xaamid')
// redDiv.onclick = () => {console.log('red')}
// yellowDiv.onclick = () => {console.log('yellow')}
// greenDiv.onclick = () => {console.log('red')}


const spm = document.querySelectorAll('.colors')
// console.log(spm)


const timesAtached = {
  'yellow': 0,
  'red': 0,
  'green': 0
}

spm.forEach(spms =>{
  spms.onclick = () =>{
    timesAtached[spms.value] += 1
    spms.innerHTML =timesAtached[spms.value]
  }
})

const clearButtons= () =>{

  spm.forEach(spms =>{
    timesAtached[spms.value] = 0 
    spms.innerText = 0
  })
}








let VArb = document.getElementById('clearcard')
  VArb.onclick = () => clearButtons()



  

  // let victor = [1,2,3,4,5]
  // const findMin =(...victor) =>{
  //   let min = Infinity, b = 0;
  //   while(b < victor.length){
  //      min = victor[b] < min ? victor[b] : min;
  //   }
  //   return min;}
  // // console.log(findMin(...victor))


  // tip calculator


  /* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')




// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  // console.log(numberOfPeople)
  // console.log(billInput.value)
  const bill = Number(billInput.value)

  

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value)/ 100
  // console.log(tipPercentage)
  

  // get the total tip amount\

  const tipAmount = bill * tipPercentage
  // console.log({tipAmount})
  

  // calculate the total (tip amount + bill)

  const total = tipAmount + bill
  // console.log({total})
  

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total/ numberOfPeople 
  // console.log({perPersonTotal})


  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText=  `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1


  // update the DOM with the new number of people

numberOfPeopleDiv.innerText =numberOfPeople
  // calculate the bill based on the new number of people
   calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1){
    return
  }

  
  // decrement the amount of people

  numberOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText =numberOfPeople


  // calculate the bill based on the new number of people
  calculateBill()
}



const randomFruit = (fruit) => {
  let Random = Math.floor(Math.random() * fruit.length)

  return fruit[Random]
}
fruit =['🍋','🍒','🍏','🍎']

console.log(randomFruit(fruit))


const weatherScore = ( result) =>{
  let score 
  if(result === 'rainy'){
    score = 1
  } else if ( result == 'sunny') {
  score= -1    
  } else if ( result == 'overcast'){
    score = 0
  } else{
    return
  }
 return score
}

// console.log(weatherScore('rainy'))


let reminder = 11 % 3;
console.log(reminder)