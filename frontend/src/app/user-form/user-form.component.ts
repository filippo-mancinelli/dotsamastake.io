import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service/user.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User = new User;

  constructor(   
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(): void {
    this.router.navigate(['/users']);
  }

}
