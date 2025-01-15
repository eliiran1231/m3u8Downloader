import {Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl:"./navbar.component.html",
  styleUrl:"./navbar.component.css",
  standalone: true,
  imports: [RouterLink,RouterOutlet]
})
export class NavComponent {
  fields = routes;
}

