
// tipInput
// numberofpeaple
// perPersonalTotal
let billInput = document.getElementById('billInput')
let  tipInput = document.getElementById('tipInput')
let  numberOfPeapleDiv = document.getElementById('numberofpeaple')
let perPersonalDiv = document.getElementById('perPersonalTotal')

let numberPeale = Number(numberOfPeapleDiv.innerText)

const calculate = () =>{

  let bill = Number(billInput.value)
  console.log(bill)
  let tipPercentage = Number(tipInput.value) / 100

  let tipAmount = bill * tipPercentage
  console.log(tipAmount)

  let total = tipAmount + bill
  console.log(total)

  let perPersonalTotal =  total / numberPeale
  console.log(perPersonalTotal)

  perPersonalDiv.innerText = `$${perPersonalTotal.toFixed(2)}`
  console.log(perPersonalDiv.value)

}

const increaseNumberOfPeaple = () => {

  numberPeale += 1

numberOfPeapleDiv.innerText = numberPeale 

 calculate ()
  
}

const decreaseNumberOfPeaple = () => {

  if(numberPeale <= 1){
    return
  }

  numberPeale -= 1

numberOfPeapleDiv.innerText = numberPeale 

 calculate ()
  
}