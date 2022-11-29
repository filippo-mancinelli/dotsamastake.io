import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {

  id!: BigInt;
  name!: String;
  email!: String;

  constructor() { }

  ngOnInit(): void {
  }

  

}
