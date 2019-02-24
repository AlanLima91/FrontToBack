import { User } from './user';
import { Type } from '@angular/compiler';


export class Menu
{
    public _id: string;
    public key: string;
    public name: string;
    public entree: string;
    public plat: string;
    public dessert: string;
    public day: string;
    public price: number;

    constructor(key: string, _id: string, name: string, entree: string, plat: string, dessert: string, day: string, price: number)
    {
        this._id        = _id;
        this.key        = key;
        this.name       = name;
        this.entree     = entree;
        this.plat       = plat;
        this.dessert    = dessert;
        this.price      = price;
        this.day        = day;
    }
}
