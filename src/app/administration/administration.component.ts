import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../services/order.service';
import { User } from '../user';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit
{
  list:any[] = [];

  constructor(private orderService:OrderService) { }

  ngOnInit()
  {
    this.getOrders();
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(data =>
      {
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++)
        {
          this.list.push({key: cle[i], values:donnees[i]});
        }
      });
  }
  deleteOrder(key) {
    this.orderService.deleteOrder(key).subscribe(data => {
      this.list = this.list.filter(list => list.key !== key)
    })
  }
}
