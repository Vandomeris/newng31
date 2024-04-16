import { Component } from '@angular/core';
import { BtnBlackWhiteComponent } from '../ui/btn-black-white/btn-black-white.component';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [BtnBlackWhiteComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {

}
