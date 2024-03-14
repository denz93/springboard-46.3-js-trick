function createAccount(_pin, _amount) {
  let balance = _amount || 0;
  let pin = _pin;

  return {
    checkPin(p) {
      if (p !== pin) {
        return "Invalid PIN.";
      }
      return false;
    },

    checkBalance(p) {
      const notOK = this.checkPin(p);
      if (notOK) return notOK;
      return `$${balance}`;
    },

    deposit(p, a) {
      const notOK = this.checkPin(p);
      if (notOK) return notOK;

      balance += a;
      return `Succesfully deposited $${a}. Current balance: $${balance}.`;
    },

    withdraw(p, a) {
      const notOK = this.checkPin(p);
      if (notOK) return notOK;

      if (a > balance) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`
      }

      balance -= a;
      return `Succesfully withdrew $${a}. Current balance: $${balance}.`;
    },

    changePin(oldPin, newPin) {
      const notOK = this.checkPin(oldPin);
      if (notOK) return notOK;
      pin = newPin;
      return "PIN successfully changed!";
    }
  }
}

module.exports = { createAccount };
