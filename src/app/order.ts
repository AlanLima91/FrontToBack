import { User } from './user';
import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class Order
{
    public menu     :Menu|void;
    public user     :User|void;
    public price    :number;
    public hour     :Type|void


    constructor(menu:Menu|void, user:User|void, price:number, hour:Type|void)
    {
        this.menu   = menu;
        this.user   = user;
        this.price  = price;
        this.hour   = hour;
    }
}
