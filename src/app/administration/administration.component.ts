import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MenuService } from '../services/menu.service';
import { Order } from '../order';
import { User } from '../user';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit
{
  list:any[] = [];
  menu: any[]

  constructor(private orderService:OrderService, private menuService: MenuService) { }

  ngOnInit()
  {
    this.getOrders();
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(data =>
      {
        this.list = Object.values(data);
        
        // for(let i = 0; i < cle.length; i++)
        // {
        //   this.list.push({key: cle[i], values:donnees[i]});
        // }
      });
  }
  getMenu(key) {
    this.menuService.getMenuByKey(key).subscribe(data => {
      this.menu = data
    })
  }
  deleteOrder(key) {
    this.orderService.deleteOrder(key).subscribe(data => {
      this.list[0] = this.list[0].filter(list => list._id !== key)
    })
  }
}
