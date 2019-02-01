import { Order } from './order';

export class User
{
    public name        :string;
    public firstname   :string;
    public email       :string;
    public password    :string;
    public admin       :boolean;
    public orderKeys   :string;
    public solde       :number;
    
    constructor(name:string, firstname:string, email:string, password:string, admin:boolean, orderKeys: string, solde:number)
    {
        this.name       = name;
        this.firstname  = firstname;
        this.email      = email;
        this.password   = password;
        this.admin      = admin;
        this.orderKeys  = orderKeys;
        this.solde      = solde;
    }
}
