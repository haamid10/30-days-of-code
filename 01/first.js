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


const sumArray = (numbers) => {
 let result = 0;
  for( const numer of numbers){
    console.log(numer)

    result += numer
  }
  return {result }
}
const num = [1,2,3,4,5]
console.log(sumArray(num))



// const Sum = (numbers) =>{
//   let result = 0;

//   for(const number of numbers){
    
//     console.log(number )
//     result = result + number
//   }
//   return {result}
// }
//  let num = [1,2,3,4]
//   console.log(Sum(num))


// const max =(numbers) =>{
//   let result = numbers[0]

//   for (const number of numbers){
//     if (number > result)
//     result =number
//   }
//   return {result}
// }j
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

// }

[1,2,3,4,].map(number =>console.log(number))