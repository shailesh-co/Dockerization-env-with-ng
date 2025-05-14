import { Component, OnInit } from '@angular/core';
import { UserserService } from 'src/services/userser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
dat = ''
  constructor(private userser:UserserService) { }

  ngOnInit(): void {
    this.userser.currntmsg.subscribe(msg => {
      console.log("user----",msg)
    })

     this.dat =history.state.data
  }
  parantmessage = "hello from parent"

  receiveMessage(msg: string) {
  console.log(msg);
}
}
