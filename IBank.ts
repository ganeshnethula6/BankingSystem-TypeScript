//TODO : create Interface, class structures. class should implement the interface and have constructor

import { CreditAccount } from "./CreditAccount";
import { DepositAccount } from "./DepositAccount";
import { Account, IAccount } from "./IAccount";
import { ICustomer } from "./ICustomer";
import { LoanAccount } from "./LoanAccount";


// Variable Name	Type	
// name	            string	
// branchCode       number	
// city        	    string	

//TODO: implement these methods. Each method should print a message to the console log.
//TODO: create and return new Account object based on the acct type(loan/deposit/credit)
//add the account object to the array in customer object
//openAccount(customer:ICustomer, acctType:string):IAccount 

//TODO: call the close method on the Account object. Remove the account from the customer object.
//closeAccount(ICustomer, IAccount):boolean

//TODO: return the account list from the customer object passed as input parameter.
//getAccounts(ICustomer):Array<IAccount>

export interface IBank {
    name: string;
    branchCode: number;
    city: string;
    openAccount(customer: ICustomer, acctType: string): IAccount;
    closeAccount(customer: ICustomer, account: IAccount): boolean;
    getAccounts(customer: ICustomer): Array<IAccount>;
}

export enum AccountType {
    LOAN_ACCOUNT,
    DEPOSIT_ACCOUNT,
    CREDIT_ACCOUNT
}
export class Bank implements IBank {
    name: string;
    branchCode: number;
    city: string;
    accountNumber: number;
    constructor(name: string, branchCode: number, city: string) {
        this.name = name;
        this.branchCode = branchCode;
        this.city = city;
        this.accountNumber = Math.floor(Math.random() * 1000000) + 1;
    }
    openAccount(customer: ICustomer, acctType: string): IAccount {
        let account: IAccount;
        if (acctType == "loan") {
            account = new LoanAccount(this.accountNumber, acctType, 0);
        }
        else if (acctType == "deposit") {
            account = new DepositAccount(this.accountNumber, acctType, 0);
        }
        else {
            account = new CreditAccount(this.accountNumber, acctType, 0);
        }
        customer.accounts.push(account);
        return account;
    }
    closeAccount(customer: ICustomer, account: IAccount): boolean {
        let flag = true;
        customer.accounts.forEach((value, index) => {
            if (account.acctType === value.acctType) {
                customer.accounts.splice(index, 1);
                flag = true;
            }
            else {
                flag = false;
            }
        });
        return flag;

    }
    getAccounts(customer: ICustomer): Array<IAccount> {

        let accounts: Array<IAccount> = [];
        customer.accounts.forEach(value => {
            accounts.push(value);
        });
        return accounts;

    }
}