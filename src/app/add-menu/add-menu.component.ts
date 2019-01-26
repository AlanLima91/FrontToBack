import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {AllService} from '../services/all.service';
import {Menu} from '../menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  @Input() day: string;

  constructor(private router:Router, private allService: AllService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.allService.addMenu(form.form.value)
      .subscribe(menu => {
        this.router.navigate([`./`]);
      });
  }


}
