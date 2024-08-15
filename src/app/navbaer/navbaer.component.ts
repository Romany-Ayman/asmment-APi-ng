import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbaer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbaer.component.html',
  styleUrl: './navbaer.component.scss'
})
export class NavbaerComponent {

}
