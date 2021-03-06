import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit
{
  list: any[] = [];
  users$: Observable<User[]>;
  solde:number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log(this.list);
    console.log(this.solde);
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(data => {
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for (let i = 0; i < cle.length; i++) {
          this.list.push({key: cle[i], values: donnees[i]});
        }
      });
  }

  increase(index)
  {
    // let solde = this.list;
    this.list[index].values.solde += 1;
    console.log(this.list);

    // this.solde = this.solde+1;
    // this.solde += 1;
    // this.post.like += 1;
  }

  decrease(index)
  {
    this.list[index].values.solde -= 1;
    console.log(this.list);
    // user.values.solde -= 1;
  }
}
