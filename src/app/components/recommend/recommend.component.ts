import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-recommend',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.scss'
})
export class RecommendComponent {

  constructor(private productsService: ProductsService) { }

  recommendedPhotos$ = this.productsService.getRecommend()

}
