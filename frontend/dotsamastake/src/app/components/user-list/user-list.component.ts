import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("Pollo user-list");
    this.userService.findAll().subscribe( data => {
      this.users = data;
      console.log(this.users);
    });
  }
  
}
