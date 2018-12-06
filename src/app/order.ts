import { User } from './user';

export class Order
{
    private menu    :string;
    private user    :User|void;
    private price   :number;

    constructor(menu:string, user:User, price:number)
    {
        this.menu = menu;
        this.user = user;
        this.price = price;
    }
}
