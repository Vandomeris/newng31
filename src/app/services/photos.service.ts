import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=20')
  }


  getPhoto(id: number): Observable<Photo> {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

}
