import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  currentDay: number = new Date().getDay();
  currentDayInLetter: string = this.days[this.currentDay - 1];
  // activeDay: string = "Jeudi";
  activeDay: string = this.currentDayInLetter
  activeDayInNumber: number =  this.days.indexOf(this.activeDay);

  constructor() { }

  changeDay(day) {
    console.log(day);

    this.activeDay = day;
    this.activeDayInNumber=  this.days.indexOf(this.activeDay);

    console.log(this.activeDay);

  }


}
