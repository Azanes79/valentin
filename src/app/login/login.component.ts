import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isLogin: boolean;

  constructor() {
    this.isLogin = false;
  }

  ngOnInit() {
  }
  
  login() {
    this.isLogin = true;
    this.emit();
  }
  
  logout() {
    this.isLogin = false;
    this.emit();
  }

  emit() {
    this.loginEmit.emit(this.isLogin);
  }

}
