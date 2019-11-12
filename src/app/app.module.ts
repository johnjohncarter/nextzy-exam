import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRouting } from './app.routing';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { Configuration } from '../config/app.constant';
import { PhotosService } from './services/photos.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NotFoundComponent,
    AlbumComponent,
    AlbumDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    NgxPaginationModule,
  ],
  providers: [
    Configuration,
    PhotosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
