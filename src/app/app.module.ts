import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GreenBackgroundDirective } from './green-background.directive';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './users/userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenBackgroundDirective,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
