export class Menu
{
    public name: string;
    public entree: string;
    public plat: string;
    public dessert: string;    
    public day: string;    
    public price: number;

    constructor(day: string, entree: string, plat: string, dessert: string, price: number)
    {
        this.name       = name;
        this.entree     = entree;
        this.plat       = plat;
        this.dessert    = dessert;
        this.day        = day
        this.price      = price;
    }
}
