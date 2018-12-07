import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit
{
  list:User[];

  constructor(private allService:AllService)
  {

  }

  ngOnInit()
  {
    this.getUsers();
  }

  getUsers()
  {
    this.allService.getUsers().subscribe(data =>
      {
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for (let i:number = 0; i < cle.length; i++)
        {
          this.list.push({key: cle[i], values:donnees[i]});
          console.log(this.list);
        }
      });
  }
  increase()
  {

  }

  decrease()
  {

  }
}
