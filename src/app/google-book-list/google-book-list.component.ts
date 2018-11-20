import { Component, OnInit } from '@angular/core';
import { GoogleBook } from '../GoogleBook';


@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent implements OnInit {

  books = [ new GoogleBook(1, 'title 1'), new GoogleBook(2, 'title 2'), new GoogleBook(3, 'title 3'),
            new GoogleBook(4, 'title 4'), new GoogleBook(5, 'title 5'), new GoogleBook(6, 'title 6'),
            new GoogleBook(7, 'title 7'), new GoogleBook(8, 'title 8'), new GoogleBook(9, 'title 9') ];

  constructor() { }

  ngOnInit() {
  }

}
