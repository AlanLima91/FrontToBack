import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  currentDate: Date = new Date();
  currentDay: number = this.currentDate.getDay();
  currentDayInLetter: string = this.days[this.currentDay - 1];
  // activeDay: string = "Jeudi";
  activeDay: string = this.currentDayInLetter;
  activeDayInNumber: number =  this.days.indexOf(this.activeDay);

  constructor() { }

  ngOnInit() {
    console.log(this.activeDayInNumber);
  }

}
