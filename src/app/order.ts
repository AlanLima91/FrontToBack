import { User } from './user';
import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class Order
{
    public menuKeys     :[string];
    public userKey      :string|void;
    public date         :Date;
    public price        :number;



    constructor(menuKeys:[string], userKey:string|void, date:Date, price:number )
    {
        this.menuKeys   = menuKeys;
        this.userKey    = userKey;
        this.date       = date;
        this.price      = price;

    }
}
