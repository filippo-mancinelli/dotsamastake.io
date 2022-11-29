import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class User implements OnInit {

  id!: string;
  name!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
