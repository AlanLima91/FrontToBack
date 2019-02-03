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
  list:any[] = [];
  solde:number;
  constructor(private allService:AllService)
  {

  }

  ngOnInit()
  {
    this.getUsers();
    console.log(this.list);
    console.log(this.solde);
    
    
  }

  getUsers()
  {
    this.allService.getUsers().subscribe(data =>
      {
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++)
        {
          this.list.push({key: cle[i], values:donnees[i]});
        }
      });
  }
  
  increase()
  {
    let solde = this.list;
    
    // this.solde = this.solde+1;
    // this.solde += 1;
    //this.post.like += 1;
    this.solde = this.solde++;
    console.log(this.solde);

  }

  decrease()
  {
    let solde = this.list;
    this.solde = this.solde--;
    console.log(this.solde);
    // user.values.solde -= 1;
  }
}
