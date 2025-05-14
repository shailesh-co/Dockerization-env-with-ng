import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserService {

  constructor() { }

    getUsers() {
    return [ 'Alice', 'Bob', 'Charlie' ];
  }

  private dataobs = new BehaviorSubject<string>('defaultmsg');

  currntmsg = this.dataobs.asObservable();

  updatemessg(msg:string) {
    this.dataobs.next(msg)
  }
}
