import { DepositAccount } from "./DepositAccount";
import { Account, IAccount } from "./IAccount";
import { Bank, IBank } from "./IBank";
import { Customer, ICustomer } from "./ICustomer";

let bank: IBank;
let customer: Customer;
//TODO: Change this anonymous Login function to an arrow function
// let login = function (loginId: number, password: string): boolean { return true; };
let login = (loginId: number, password: string): boolean => true;

function applyForDepositAcct(customer: ICustomer): IAccount {
    //TODO: call openAccount method on the new Bank object created for "Citi"
    const account = bank.openAccount(customer, "deposit");
    return account;
}

function applyForLoanAcct(customer: ICustomer): IAccount {
    //TODO: call openAccount method on the new Bank object created for "Citi"
    const account = bank.openAccount(customer, "loan");
    return account;
}

function applyForCreditCard(customer: ICustomer): IAccount {
    //TODO: call openAccount method on the new Bank object created for "Citi"
    const account = bank.openAccount(customer, "credit");
    return account;
}

function getAccounts(customer: ICustomer): Array<IAccount> {
    //TODO: call getAccounts method on the new Bank object created for "Citi". Print the account details
    //to console
    console.log("Getting Accounts.......");
    return bank.getAccounts(customer);

}

//TODO: Change this anonymous logout function to an arrow function
let logout = function (loginId: number): boolean { return true; };



function testMyApp() {
    //TODO: Create a new Bank object "Citi"
    bank = new Bank("Citi", 101, "HYD");
    //TODO: Create a new Customer object "David"
    customer = new Customer("David", 1, "Ganesh@12", "HYD");
    //TODO: login David 
    login(1, "Ganesh@12");
    //TODO: Apply for a deposit account
    let depositAccount = applyForDepositAcct(customer);
    console.log(`${depositAccount.acctType} account is opened successfully with account \n ${JSON.stringify(depositAccount)}`);
    //TODO: Deposit 1000000. Call deposit method on Account object
    let isDeposited = depositAccount.deposit(1000000);
    if (isDeposited) {
        console.log(`${depositAccount.acctType} account after deposit is ${depositAccount.acctBalance}`);
    }
    //TODO: Apply for a loan account
    let loanAccount = applyForLoanAcct(customer);
    console.log(`${depositAccount.acctType} account is opened successfully with account \n ${JSON.stringify(depositAccount)}`);
    //TODO: Apply for a credit account
    let creditAccount = applyForCreditCard(customer);
    console.log(`${depositAccount.acctType} account is opened successfully with account \n ${JSON.stringify(depositAccount)}`);
    //TODO: Get list of accounts. It should print 3 accounts.
    var accounts = getAccounts(customer);
    accounts.forEach(account => {
        console.log(JSON.stringify(account));
    });
    //TODO: Transfer 500000 from deposit account to loan account. Call transferTo method on deposit Account object. Pass Loanaccount object as input parameter
    let isTransfered1 = depositAccount.transferTo(500000, loanAccount);
    if (isTransfered1) {
        console.log("Transfered Sucessfully....");
    } else {
        console.log("Transfered Failed....");
    }
    //TODO: Transfer 10000 from deposit account to credit account. Call transferTo method on deposit Account object. Pass Creditaccount object as input parameter
    let isTransfered2 = depositAccount.transferTo(10000, creditAccount);
    if (isTransfered2) {
        console.log("Transfered Sucessfully....");
    } else {
        console.log("Transfered Failed....");
    }
    //TODO: Close loan account
    let isClosed = bank.closeAccount(customer, loanAccount);
    if (isClosed) {
        console.log(`Account is closed successfully...`);
    }
    else {
        console.log(`Account is closed Failed...`);
    }
    //TODO: Get list of accounts. It should print 2 accounts now.
    var accounts = getAccounts(customer);
    accounts.forEach(account => {
        console.log(JSON.stringify(account));
    });
    //TODO: Logout
    logout(1);
}
testMyApp();