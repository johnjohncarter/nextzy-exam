import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PhotosService } from '../../services/photos.service';
import {ActivatedRoute, Router} from '@angular/router';
import { PhotosHelper } from '../../halper/photos';

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
  isLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private album: PhotosService,
    private title: Title,
    private photosHelper: PhotosHelper,
  ) {
    this.title.setTitle('album');

    this.currentPage = 0;
    this.page = 1;
    this.perPage = 16;
    this.isLoading = true;

    this.route.params.subscribe( params => {
      this.page = params.id;
    });
  }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum() {
    this.album.getAlbum().subscribe(
      response => {
        // this.albums = response;
        this.albums = this.photosHelper.setAlbum(response);
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  onMoreDetail(id) {
    this.router.navigate(['/album-detail', id]);
  }

  onPageChanged(page) {
    this.router.navigate(['/album', page]);
  }

}
