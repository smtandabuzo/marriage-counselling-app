import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    'gallery.component.scss'
  ]
})
export class GalleryComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Gallery Component message';
  }

  ngOnInit(): void {
  }

}
