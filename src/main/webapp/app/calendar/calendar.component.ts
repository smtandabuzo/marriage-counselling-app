import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    'calendar.component.scss'
  ]
})
export class CalendarComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Calendar Component message';
  }

  ngOnInit(): void {
  }

}
