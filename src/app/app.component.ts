import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  constructor(public authService : AuthService){}
}
