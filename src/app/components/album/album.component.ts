import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  photosAlbum: any;
  albums: any;

  page: number;
  perPage: number;
  currentPage: number;

  constructor(
    private router: Router,
    private album: PhotosService,
    private title: Title,
  ) {
    this.title.setTitle('album');

    this.currentPage = 0;
    this.page = 0;
    this.perPage = 15;
  }

  ngOnInit() {
    this.getAlbum();
    this.getAlbumDetail();
  }

  getAlbum() {
    this.album.getAlbum().subscribe(
      response => {
          this.albums = response;
      },
      error => {
          console.log(error);
      }
    );
  }

  getAlbumDetail() {
    this.album.getAlbumDetail(1).subscribe(
      response => {
        this.photosAlbum = response;
      },
      error => {
          console.log(error);
      }
    );
  }

}
