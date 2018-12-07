import { Component, OnInit } from '@angular/core';
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

  constructor()
  {

  }

  ngOnInit()
  {
    this.user = new User("Linski","Gwenn", "gwenn_linski@example.fr", "pasword", 25.50, null);
    console.log(Object.values(this.user));
    
  }

}
