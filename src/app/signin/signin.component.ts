import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form)
  {
    console.log(form)
    let user = new User(
      form.form.value._id,
      form.form.value.name,
      form.form.value.firstname,
      form.form.value.email,
      form.form.value.password,
      false,
      null, // Order
      0     //solde
    );
    this.userService.loginUser(user).subscribe(resp => {
        console.log(resp.headers.get("X-Auth"))
        console.log(resp)
        localStorage.setItem("X-Auth", resp.headers.get("X-Auth"))
        this.router.navigate([`./`])
      },
      err => {
        this.router.navigate([`./connexion`])
      });
  }

}
