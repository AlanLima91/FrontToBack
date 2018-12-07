import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import { User } from "../user";
import { Order } from "../order";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit
{
  user:User;

  constructor(private allService:AllService)
  {

  }

  ngOnInit()
  {
    this.user = this.allService.getUserByKey("-LT7EJHxqq4Zycn7lX36");
    console.log(this.user);
    console.log(this.allService.getUserByKey("-LT7EJHxqq4Zycn7lX36"));

    // function use to add the user (this.user)
    // this.allService.addUser(this.user).subscribe();
  }

}
