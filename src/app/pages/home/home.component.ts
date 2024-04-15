import { Component } from '@angular/core';
import { BtnBlackWhiteComponent } from '../../components/ui/btn-black-white/btn-black-white.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnBlackWhiteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
