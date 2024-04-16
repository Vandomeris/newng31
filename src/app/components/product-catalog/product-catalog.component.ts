import { Component, Input } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent {

  @Input({ required: true }) products?: Product[]

}
