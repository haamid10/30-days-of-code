
// tipInput
// numberofpeaple
// perPersonalTotal
let billInput = document.getElementById('billInput')
let  tipInput = document.getElementById(' tipInput')
let  numberOfPeapleDiv = document.getElementById('numberofpeaple')
let perPersonalTotalDiv = document.getElementById('perPersonalTotal')

let numberofpeaple = Number(numberOfPeapleDiv.innerText)

const calculate = () =>{

  let bill = Number(billInput.value)

  let tipPercentage = Number(tipInput.value) / 100

  let tipAmount = bill * tipPercentage

  let total = tipAmount + bill
  console.log(total)

  let perPersonalTotal = total/numberofpeaple
  console.log(perPersonalTotal)

  perPersonalTotalDiv.innerText = `$${perPersonalTotal}`
}