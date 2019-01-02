import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
