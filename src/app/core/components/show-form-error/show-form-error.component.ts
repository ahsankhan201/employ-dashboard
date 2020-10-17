import { Component, Input, OnInit } from '@angular/core';
import { ERROR_MESSAGES } from '../../global-constants';

@Component({
  selector: 'app-show-form-error',
  templateUrl: './show-form-error.component.html',
  styleUrls: ['./show-form-error.component.css']
})
export class ShowFormErrorComponent implements OnInit {

  @Input() control: any;
  @Input() label: string;
  errorMessages = ERROR_MESSAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
