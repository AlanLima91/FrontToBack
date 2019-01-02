import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { AllService } from '../services/all.service';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[];

  constructor(private allService: AllService, private dayService: DayService ) {

   }

  ngOnInit() {
    // this.menu = new Menu('lundi', 'salade', 'kebab', 'glace', 7);
    // console.log(this.menu);
    this.getMenuByDay('Lundi')
    
    console.log(this.menus);
    // this.allService.addMenu(this.menu).subscribe();
  }

  getMenuByDay(day: string)
  {
    this.allService.getMenuByDay(day).subscribe(data =>{
      this.menus = Object.values(data);
      console.log(this.menus);
    })
  }

  changeDay(day) {
    this.dayService.changeDay(day)
  }

}