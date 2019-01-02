import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { AllService } from '../services/all.service';
import { User } from '../user';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit
{
  list:Order[];

  constructor(private allService:AllService) { }

  ngOnInit()
  {
    this.getOrders();
    // this.allService.getUserByKey("-LT7EJHxqq4Zycn7lX36").subscribe(data => {
    //   let user = Object.values(data);
    // });
    // this.allService.addOrder(this.order).subscribe();
  }

  getOrders()
  {
    let test = new Order(void, void, 13, void);
    this.allService.getOrders().subscribe(data =>
      {
        this.list = Object.values(data);
        console.log(this.list);
      });
  }
}
