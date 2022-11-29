import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service/user.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("pollo user-list component");
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
