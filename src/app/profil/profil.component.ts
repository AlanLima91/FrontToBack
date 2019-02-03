import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
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

  constructor(private userService:UserService)
  {

  }

  ngOnInit()
  {
    this.user = this.userService.getUserByKey("-LT7EJHxqq4Zycn7lX36")[0];
    console.log(this.user);
    console.log(this.userService.getUserByKey("-LT7EJHxqq4Zycn7lX36"));

    // function use to add the user (this.user)
    // this.userService.addUser(this.user).subscribe();
  }

}
