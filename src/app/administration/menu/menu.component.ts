import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit
{

  constructor(private menuService: MenuService) { }
  @Input() key;
  menu: any[];

  ngOnInit() {
    this.getMenu(this.key);
  }

  getMenu(key)
  {
    this.menuService.getMenuByKey(key).subscribe(data => {
      this.menu = data;
      console.log(this.menu);

    });
  }
}
