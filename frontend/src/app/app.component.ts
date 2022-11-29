import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { User } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    HomepageComponent,
    UserFormComponent,
    User
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    User,
    AppRoutingModule
  ],
  providers: []
})
export class AppComponent { 
  title: string;

  constructor() {
    this.title = 'Spring Boot - Angular app';
  }
}
