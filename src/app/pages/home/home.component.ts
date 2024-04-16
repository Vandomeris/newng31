import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { RecommendComponent } from '../../components/recommend/recommend.component';
import { ProductCatalogComponent } from '../../components/product-catalog/product-catalog.component';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, RecommendComponent, ProductCatalogComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productsService: ProductsService) { }

  homeCatalog$ = this.productsService.getHomeCatalog()

}
