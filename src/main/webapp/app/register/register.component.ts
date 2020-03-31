import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-register',
  templateUrl: './register.component.html',
  styleUrls: [
    'register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Register Component message';
  }

  ngOnInit(): void {
  }

}
