import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuService } from '../services/menu.service';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';

import { Menu } from '../menu';
import { Order } from '../order';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {
  @Input()
  menu: Menu;
  order: Order;
  orderMenu: [string];
  user: User;

  constructor(private menuService:MenuService, private userService:UserService, private orderService:OrderService, private router:Router, activatedRoute: ActivatedRoute) {

  }



  ngOnInit() {

    console.log(this.menu);

  }
  // getBeers() {
  //   this.beerService.getBeers()
  //    .subscribe(data => {
  //     let cle = Object.keys(data);
  //     let donnees = Object.values(data);
  //     for(let i = 0; i < cle.length; i++){
  //       this.liste.push({key: cle[i], values:donnees[i]});
  //     }
  //    });
  //  }


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
           _id: this.user._id,
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
