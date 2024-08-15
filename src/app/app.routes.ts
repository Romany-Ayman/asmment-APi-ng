import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfontComponent } from './notfont/notfont.component';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfontComponent,title:'errro'},

];
