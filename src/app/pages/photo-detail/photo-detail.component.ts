import { Component } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss'
})
export class PhotoDetailComponent {

  constructor(private photosService: PhotosService, private route: ActivatedRoute) { }

  id: number = Number(this.route.snapshot.paramMap.get('id'))
  photo$ = this.photosService.getPhoto(this.id)

}
