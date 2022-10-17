



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
   }
   this.balance -= draw 
   console.log('your withdraw is ', draw)
   console.log('your balance is ', this.balance)
  }
}

const hamiid = new Bank(0)



// console.log(hamiid)
// hamiid.balance
// hamiid.deposit(20)
// hamiid.withDraw(100)
// hamiid.getBalance()