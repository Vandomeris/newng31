import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss'
})
export class HeaderLinkComponent {

  @Input({ required: true }) linkTitle?: string
  @Input({ required: true }) linkUrl?: string

}
