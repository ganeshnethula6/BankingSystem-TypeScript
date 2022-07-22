//TODO : create Interface, class structures. class should implement the interface and have constructor

// Variable Name	Type	
// acctNo	      string	
// acctType       number	
// acctBalance    string	

//TODO: Declare these methods. implementation can be provided in inherited classes
//deposit(amount: number):boolean
//withdraw(amount: number):boolean
//close():boolean

//TODO: Implement this by calling the deposit method on the destAcct and withdraw method on This object
//transferTo(amount: number,IAccount destAcct):boolean

export interface IAccount {
    acctNo: number;
    acctType: string;
    acctBalance: number;
    deposit(amount: number): boolean;
    withdraw(amount: number): boolean;
    close(): boolean;
    transferTo(amount: number, destAcct: IAccount): boolean;
}

export class Account implements IAccount {
    acctNo: number;
    acctType: string;
    acctBalance: number;
    constructor(acctNo: number, acctType: string, acctBalance: number) {
        this.acctBalance = acctBalance;
        this.acctNo = acctNo;
        this.acctType = acctType;
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
            console.log(`Amount after wihdrawal is ${this.acctBalance}`);
            return true;
        }
        else {
            console.log(`Wihdrawal Failed ...\n Amount is ${this.acctBalance}`);
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
