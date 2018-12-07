import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu;
  constructor(private allService: AllService) {
   }

  ngOnInit() {
    this.menu = new Menu('lundi', 'salade', 'kebab', 'glace', 7);
    this.allService.addMenu(this.menu);
  }


