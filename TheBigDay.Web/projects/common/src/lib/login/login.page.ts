import {
  Component, EventEmitter, Input,
  OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class CommonLoginComponent implements OnInit {
  password: string | undefined;
  email: string | undefined;
  @Output() signInClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges() {
  }
}

export interface Category {
  url: string;
}
