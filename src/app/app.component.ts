import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { NavComponent } from './navbar/navbar.component'; 
import { HomeComponent } from './download/download.component';

@Component({
  selector: 'app-root',
  template: ` 
      <app-navbar />
      <router-outlet />
  `,
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,NavComponent,HomeComponent]
})
export class AppComponent {

}

