import { Component, OnInit, Input } from '@angular/core';
import { GoogleBook } from '../GoogleBook';

@Component({
  selector: 'app-google-book',
  templateUrl: './google-book.component.html',
  styleUrls: ['./google-book.component.css']
})
export class GoogleBookComponent implements OnInit {

  @Input() Book: GoogleBook;

  constructor() { }

  ngOnInit() {
  }

}
