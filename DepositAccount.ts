//TODO: override these methods. Each method should print a message to the console log.
//deposit(amount: number):boolean
//withdraw(amount: number):boolean
//close():boolean

import { Account, IAccount } from "./IAccount";

export class DepositAccount extends Account {
    constructor(acctNo: number, acctType: string, acctBalance: number) {
        super(acctNo, acctType, acctBalance);
    }
    deposit(amount: number): boolean {
        if (amount >= 0) {
            this.acctBalance += amount;
            console.log(`Amount after deposit is ${this.acctBalance}`);
            return true;
        }
        else {
            console.log(`Deposit Failed ...\n Amount is ${this.acctBalance}`);
            return false;
        }
    }
    withdraw(amount: number): boolean {
        if (this.acctBalance >= amount) {
            this.acctBalance -= amount;
            console.log(`${this.acctType} account after deposit is ${this.acctBalance}`);
            return true;
        }
        else {
            console.log(`${this.acctType} account wihdrawal Failed ...\n Amount is ${this.acctBalance}`);
            return false;
        }
    }
    close(): boolean {
        console.log("Sucessfully closed...");
        return true;
    }
    transferTo(amount: number, destAcct: IAccount): boolean {
        let withdraw = this.withdraw(amount);
        let dep = destAcct.deposit(amount);
        if (dep && withdraw) {
            console.log(`${amount} is transfered from ${this.acctType} to ${destAcct.acctType}`);
            return true;
        }
        else {
            return false;
        }
    }

}