import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { AllService } from '../services/all.service';
import { DayService } from '../services/day.service';



@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: string;

  menus: Menu[];

  constructor(private allService: AllService, private dayService: DayService) {
  }

  ngOnInit() {
    this.day = this.dayService.currentDayInLetter
  }


  // getMenuByDay(day: string)
  // {
  //   this.allService.getMenuByDay(day).subscribe(data =>{
  //     this.menus = Object.values(data);
  //     console.log(this.menus);
  //   })
  // }
}
