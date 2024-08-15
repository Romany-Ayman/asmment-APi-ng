import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbaerComponent } from "./navbaer/navbaer.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaerComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APi-app';
}
