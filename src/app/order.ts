import { User } from './user';
import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class Order
{
    public menuKeys     :[string];
    public userKey      :string|void;
    public price        :number;
    public date         :Date


    constructor(menuKeys:[string], userKey:string|void, price:number, date:Date)
    {
        this.menuKeys   = menuKeys;
        this.userKey    = userKey;
        this.price      = price;
        this.date       = date;
    }
}
