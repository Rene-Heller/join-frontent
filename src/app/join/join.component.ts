import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
