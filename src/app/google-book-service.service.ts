import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookServiceService {

  private getUrl(title: string) {
     return `https://kylmakalja.eu/findbooks?title=${title}&author=&isbn10=&isbn13=`;
  }

  constructor() { }

  getBooks(title: string) {
    const url = this.getUrl(title);



  }

  getBook(id: number) {

  }
}
