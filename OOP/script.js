"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // Prtected Property
    this._pin = pin;
    this._movements = [];
    
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements(){
    return this._movements
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this.approveLoan(val)){
      this.deposit(val)
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jam", "IR", 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
acc1.approveLoan(1000)
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
