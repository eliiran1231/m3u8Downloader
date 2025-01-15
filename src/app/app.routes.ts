import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './download/download.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
        title:"download videos online!"
    },
    {
        path:"contact",
        title:"contact me",
        component:ContactComponent
    }
];