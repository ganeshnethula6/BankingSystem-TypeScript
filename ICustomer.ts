//TODO : create Interface, class structures. class should have constructor

import { IAccount } from "./IAccount";

// Variable Name	Type	
// name	            string	
// id               number	
// address        	string	
// accounts         Array of IAccount

//methods
//login(), logout()

export interface ICustomer {
    name: string;
    id: number;
    address: string;
    accounts: IAccount[];
    login(loginId: number, password: string): boolean;
    logout(loginId: number): boolean;
}

export class Customer implements ICustomer {
    name: string;
    id: number;
    address: string;
    password: string;
    accounts: IAccount[] = [];
    constructor(name: string, id: number, password: string, address: string,) {
        this.name = name;
        this.id = id;
        this.password = password;
        this.address = address;
    }
    login(loginId: number, password: string): boolean {
        if (loginId == this.id && password === this.password) {
            console.log("Login Successfully...");
            return true;
        }
        console.log("Login Failed...");
        return false;
    }
    logout(loginId: number): boolean {
        if (loginId == this.id) {
            console.log("Logout Successfully...");
            return true;
        }
        else {
            console.log("Logout Failed...");
            return false;
        }
    }

}