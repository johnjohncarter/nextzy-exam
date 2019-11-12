import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhotosHelper {
  albumId: number;
  albums: Array<{}>;
  currentAlbum: Array<{}>;
  baseAlbum: Array<{}>;

  constructor() {
  }

  public setAlbum(albums) {
    this.albumId = 0;
    this.albums = [];
    this.currentAlbum = [];
    this.baseAlbum = [];

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < albums.length; index++) {
      if (albums[index].albumId === this.albumId) {
        this.currentAlbum.push(albums[index]);
      } else {
        this.albumId++;
        this.albums.push(this.currentAlbum);
        this.currentAlbum = [];

        this.currentAlbum.push(albums[index]);
        this.baseAlbum.push(albums[index]);
      }
    }
    return this.baseAlbum;
  }

}
