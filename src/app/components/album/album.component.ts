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
    this.page = 1;
    this.perPage = 16;
  }

  ngOnInit() {
    this.getAlbum();
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

  onMoreDetail(id) {
    this.router.navigate(['/album-detail', id]);
  }

}
