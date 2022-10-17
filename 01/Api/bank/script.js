



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
   
   this.balance -= draw 
   console.log('your withdraw is ', draw)
  }
}

const hamiid = new Bank(100)
console.log(hamiid)
hamiid.balance
hamiid.deposit(20)
hamiid.withDraw(100)
hamiid.getBalance()