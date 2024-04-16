import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getRecommend(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 5
        }
      })
    }).pipe(
      filter(array => array[0].price < 100)
    )
  }

  getHomeCatalog(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 8,
          sort: 'desc'
        }
      })
    })
  }

}
