import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { User } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    User
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    User
  ],
  providers: [],
})
export class AppModule { 
  title: string;

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
