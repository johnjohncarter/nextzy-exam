import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PhotosService} from "../../services/photos.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albums: any;

  constructor(
    private router: Router,
    private album: PhotosService,
    private title: Title,
  ) {
    this.title.setTitle('album-detail');
  }

  ngOnInit() {
    this.getAlbumDetail();
  }

  getAlbumDetail() {
    this.album.getAlbumDetail(1).subscribe(
      response => {
        this.albums = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
