



 class Bank{
  constructor (balance){
   this.balance=balance
  }
  getBalance (){
    return balance
  }
  deposit (balance){
   this.balance += balance
   
   console.log('your deposit is ', balance)
  }

  withDraw(draw){
   if(this.balance - draw <= 0){
     console.log("you don't have enough money")
   console.log('your balance is ', this.balance)
return

   }
   this.balance -= draw 
   console.log('your withdraw is ', `$${draw}`)
   console.log('your balance is ', this.balance)
  }
}

const hamill = new Bank(0)


const AmountInput = document.getElementById('Amount')
const withdrawBtn = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit')
const balanceDiv = document.getElementById('total')


withdrawBtn.onclick =()=>{
  const Amount = Number(AmountInput.value)
  hamill.withDraw(Amount)
  balanceDiv.innerText= hamill.balance
}
depositBtn.onclick =()=>{
  const Amount = Number(AmountInput.value)
  hamill.deposit(Amount)
  balanceDiv.innerText= hamill.balance
}
// console.log(hamiid)
// hamiid.balance
// hamiid.deposit(20)
// hamiid.withDraw(100)
// hamiid.getBalance()

let HeyDiv = document.getElementById('hey')

HeyDiv.addEventListener('click', function(){
  console.log('HEYOPOO')
})

document.addEventListener('keydown', function(e){
   if(e.key == 'q'){
     console.log('you pressed Q')
   }
   else{
     console.log('you not pressed Q')
   }

  // console.log('sioooo')
})