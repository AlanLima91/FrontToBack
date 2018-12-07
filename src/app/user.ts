import { Order } from './order';

export class User
{
<<<<<<< HEAD
    private name        : string;
    private firstname   : string;
    private email       : string;
    private solde       : number;
    private order       : Order|void;

    constructor(name: string, firstname: string, email: string, solde: number, order: Order|void)
=======
    private name        :string;
    private firstname   :string;
    private email       :string;
    private password    :string;
    private solde       :number;
    private order       :Order|void;

    constructor(name:string, firstname:string, email:string, password:string, solde:number, order :Order|void)
>>>>>>> 85142a32dcf79ca292f722323fa419bbf18d2c1e
    {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.solde = solde;
        this.order = order;
    }
}
