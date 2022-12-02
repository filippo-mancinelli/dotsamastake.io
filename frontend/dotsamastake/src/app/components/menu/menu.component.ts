import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  gotoHomepage(): void {
    //this.router.navigate([], {fragment: "homepage"});
    this.scroller.scrollToAnchor("homepage");
  }

  gotoAbout(): void {
    this.scroller.scrollToAnchor("about");
  }

}
