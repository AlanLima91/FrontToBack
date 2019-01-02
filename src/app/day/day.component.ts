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

  days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  currentDay: number = new Date().getDay();
  currentDayInLetter: string = this.days[this.currentDay - 1];
  // activeDay: string = "Jeudi";
  activeDay: string = this.currentDayInLetter
  activeDayInNumber: number =  this.days.indexOf(this.activeDay);

  @Input() day: string;

  menus: Menu[];

  constructor(private allService: AllService, private dayService: DayService) {
  }

  ngOnInit() {
  }

  changeDay(day) {
    this.activeDay = day
    this.activeDayInNumber = this.days.indexOf(day);
    this.getMenuByDay(day)
  }


  getMenuByDay(day: string)
  {
    this.allService.getMenuByDay(day).subscribe(data =>{
      this.menus = Object.values(data);
      console.log(this.menus);
    })
  }
}
