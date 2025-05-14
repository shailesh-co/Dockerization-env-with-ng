import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { UserserService } from 'src/services/userser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userser: UserserService , private router:Router){

  }
  title = 'samp-ang';
  environment:string = environment.environmentName;
  apiUrl: string = environment.apiUrl;
  datashow =false;

  dataarry = ["dndf","dfdgg","dkfhdjkfh","kljfkldf"];
  day: string = 'Monday';
  isActive: boolean = true;

  user:string[] =[];

ngOnInit(): void {
  this.user =this.userser.getUsers()
}
  sendmsg (){
    // this.userser.updatemessg('hello from trasmiteert')
    this.router.navigate(['/user'], {state: { data:"hrllo"}})
  }
}
