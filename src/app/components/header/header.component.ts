import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderLinkComponent } from '../header-link/header-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, HeaderLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



}
