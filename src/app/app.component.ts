import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  title = 'ng-home-manager';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
