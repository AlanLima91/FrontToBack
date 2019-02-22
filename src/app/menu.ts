import { User } from './user';
import { Type } from '@angular/compiler';


export class Menu
{
    public _id: string;
    public name: string;
    public day: string;
    public entree: string;
    public plat: string;
    public dessert: string;
    public price: number;

    constructor(_id: string, day: string, entree: string, plat: string, dessert: string, price: number)
    {
        this._id         = _id;
        this.name       = name;
        this.day        = day;
        this.entree     = entree;
        this.plat       = plat;
        this.dessert    = dessert;
        this.price      = price;
    }
}
