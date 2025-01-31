import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
