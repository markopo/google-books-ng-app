import { Component, OnInit } from '@angular/core';
import { GoogleBook } from '../GoogleBook';


@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent implements OnInit {

  books = [];

  constructor() {

      for(let i = 0; i <= 9; i++) {
         this.books.push(GoogleBook.Create());
      }

  }

  ngOnInit() {
  }

}
