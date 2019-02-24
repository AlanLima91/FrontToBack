import { User } from './user';
import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class Order
{
    public _id: string;
    public menuKeys     :[string];
    public userKey      :string|void;
    public date         :Date;
    public price        :number;



    constructor(menuKeys:[string], _id: string, userKey:string|void, date:Date, price:number )
    {
        this._id        = _id;
        this.menuKeys   = menuKeys;
        this.userKey    = userKey;
        this.date       = date;
        this.price      = price;

    }
}
