import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../config/app.constant';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private actionUrl: string;
  private albumId: string;

  constructor(
      private http: HttpClient,
      private configuration: Configuration
  ) {}

  public getAlbum() {
      this.actionUrl = this.configuration.ServerWithUrl + 'photos';
      return this.http.get(this.actionUrl);
  }

  public getAlbumDetail(id) {
      this.actionUrl = this.configuration.ServerWithUrl + 'photos';
      return this.http.get(this.actionUrl, { params: { albumId: id } });
  }

}
