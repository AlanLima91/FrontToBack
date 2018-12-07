import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
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
    this.user = new User("123","Test", "gwenn_linski@example.fr", "pasword", 25.50, null);

    this.allService.addUser(this.user).subscribe();
  }

}
