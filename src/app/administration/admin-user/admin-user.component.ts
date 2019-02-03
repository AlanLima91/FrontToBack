import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  @Input() key;
  user


  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.key);
    
    this.getUser(this.key)
  }

  getUser(key) {
    this.userService.getUserByKey(key).subscribe(data => {
      this.user = data
    })
  }

}
