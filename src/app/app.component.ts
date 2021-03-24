import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valentin';


  isLogin: boolean = false;

  login(data: boolean) {
    this.isLogin = data;
  }
}
