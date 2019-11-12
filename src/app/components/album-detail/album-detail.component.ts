import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PhotosService} from "../../services/photos.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albums: any;

  page: number;
  perPage: number;
  currentPage: number;
  albumId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private album: PhotosService,
    private title: Title,
  ) {
    this.title.setTitle('album-detail');

    this.currentPage = 0;
    this.page = 0;
    this.perPage = 15;

    this.route.params.subscribe( params => {
      this.albumId = params.id;
    });
  }

  ngOnInit() {
    this.getAlbumDetail();
  }

  getAlbumDetail() {
    this.album.getAlbumDetail(this.albumId).subscribe(
      response => {
        this.albums = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
