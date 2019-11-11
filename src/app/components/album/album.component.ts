import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private router: Router,
    private album: PhotosService
  ) { }

  ngOnInit() {
    this.getAlbum();
    this.getAlbumDetail();
  }

  getAlbum() {
    this.album.getAlbum().subscribe(
      response => {
          console.log(response);
      },
      error => {
          console.log(error);
      }
    );
  }

  getAlbumDetail() {
    this.album.getAlbumDetail(1).subscribe(
      response => {
          console.log(response);
      },
      error => {
          console.log(error);
      }
    );
  }

}
