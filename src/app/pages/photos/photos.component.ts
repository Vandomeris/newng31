import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photo';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [AsyncPipe, RouterLink, FormsModule, NgClass],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

  test: boolean = false

  photos$ = this.photosService.getPhotos()

  constructor(private photosService: PhotosService) { }







}
