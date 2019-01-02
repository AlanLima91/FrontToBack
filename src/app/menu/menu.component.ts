import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { AllService } from '../services/all.service';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{

  menu: Menu;
  constructor(private allService: AllService) { }

  ngOnInit()
  {
    this.allService.addMenu(this.menu);
  }
}
