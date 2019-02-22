import { Order } from './order';

import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class User
{
    public _id          :string
    public name        :string;
    public firstname   :string;
    public email       :string;
    public password    :string;
    public admin       :boolean;
    public orderKeys   :string;
    public solde       :number;

    constructor(_id: string, name:string, firstname:string, email:string, password:string, admin:boolean, orderKeys: string, solde:number)
    {
        this._id         = _id
        this.name       = name;
        this.firstname  = firstname;
        this.email      = email;
        this.password   = password;
        this.admin      = admin;
        this.orderKeys  = orderKeys;
        this.solde      = solde;
    }
}
