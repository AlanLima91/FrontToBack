import { Order } from './order';

export class User
{
    private name        :string;
    private firstname   :string;
    private email       :string;
    private password    :string;
    private solde       :number;
    private order       :Order|void;

    constructor(name:string, firstname:string, email:string, password:string, solde:number, order :Order|void)
    {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.solde = solde;
        this.order = order;
    }
}
