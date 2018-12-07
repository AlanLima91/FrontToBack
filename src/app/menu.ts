export class Menu {
    private day: string;
    private entree: string;
    private plat: string;
    private dessert: string;
    private price: number;

    constructor(day: string, entree: string, plat: string, dessert: string, price: number)
    {
        this.day = day;
        this.entree = entree;
        this.plat = plat;
        this.dessert = dessert;
        this.price = price;
    }
}
