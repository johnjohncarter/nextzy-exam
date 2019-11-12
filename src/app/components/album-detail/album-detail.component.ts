import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: any;
  albums: any;
  isLoading: any;
  page: number;
  perPage: number;
  currentPage: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private album: PhotosService,
    private title: Title,
  ) {
    this.title.setTitle('album-detail');

    this.currentPage = 0;
    this.page = 1;
    this.perPage = 16;
    this.isLoading = true;

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
        this.isLoading = false;
      },
        error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

}
