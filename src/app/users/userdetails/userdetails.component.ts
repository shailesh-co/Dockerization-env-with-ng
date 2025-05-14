import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() message:string ='';
@Output() notifyParent: EventEmitter<any> = new EventEmitter
  sendMessage() {
  this.notifyParent.emit('Hello from Child!');
}

}
