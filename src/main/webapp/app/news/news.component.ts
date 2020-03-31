import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-news',
  templateUrl: './news.component.html',
  styleUrls: [
    'news.component.scss'
  ]
})
export class NewsComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'News Component message';
  }

  ngOnInit(): void {
  }

}
