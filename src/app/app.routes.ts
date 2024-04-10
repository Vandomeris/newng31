import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { Page404Component } from './pages/404/404.component';
import { FormSendComponent } from './pages/form-send/form-send.component';
import { SignalsComponent } from './pages/signals/signals.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'photos', component: PhotosComponent
    },
    { path: 'photos/myPhotos', component: PhotoDetailComponent },
    {
        path: 'photos/:id', title: 'Подробное фото', component: PhotoDetailComponent
    },
    { path: 'formSend', component: FormSendComponent },
    { path: 'signals', component: SignalsComponent },
    { path: '**', component: Page404Component },
];