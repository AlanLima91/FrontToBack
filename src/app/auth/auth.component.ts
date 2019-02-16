import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  auth(form: NgForm){
    console.log(form.value)
    // this.userService.addUser(form.form.value)
    //   .subscribe(user => {
    //     this.router.navigate([`./administration`]);
    //   });
  }
}
