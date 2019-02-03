import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../services/menu.service';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';

import { Menu } from '../menu';
import { Order } from '../order';
import { User } from '../user';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {
  @Input() menu: Menu;

  orderMenu: [string];
  user: User

  constructor(private menuService:MenuService ,private userService:UserService, private orderService:OrderService, private router:Router) { }

  ngOnInit() {
    console.log(this.menu);
    
  }

  Order(key: string) {
    this.menuService.getMenuByKey(key).subscribe(data => {
      console.log(data);
      let values: any = data
      this.orderMenu = values.menu
      this.userService.getUserByKey("5c56ed3e71c3051d7c357090").subscribe( data => {
        console.log(data)
        let values: any = data
        this.user = values.user
        console.log(this.user)
        console.log(this.orderMenu)
        let hour = new Date()
        let order: Order = {
          menuKeys: this.orderMenu,
          userKey: this.user._id,
          date: hour,
          price: 7
        }
        console.log(order);
        
        this.orderService.addOrder(order).subscribe( data => {
          this.router.navigate([`./`])
        })
      })
    });

  }

}
