import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-black-white',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn-black-white.component.html',
  styleUrl: './btn-black-white.component.scss'
})
export class BtnBlackWhiteComponent {

  @Input({ required: true }) linkTitle?: string
  @Input({ required: true }) linkUrl?: string

}
