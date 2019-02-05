import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MenuService } from '../services/menu.service';
import { Menu } from '../menu';
import { log } from 'util';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  key: string;
  menu: Object;


  constructor(private menuService: MenuService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.params
      .subscribe(params => this.key = params.key);
  }

  ngOnInit() {
    this.getMenuByKey(this.key);
    console.log(this.menu);
  }

  getMenuByKey(key) {
    this.menuService.getMenuByKey(key)
      .subscribe(data => {
        let value: any = data;
        this.menu = value.menu;  // 0 Firebase send an array
        console.log(this.menu);
      });
  }

  onSubmit(form) {
    this.menuService.editMenu(form.form.value, this.key)
      .subscribe(menu => {
        this.router.navigate([`./`]);
      });
  }
}
