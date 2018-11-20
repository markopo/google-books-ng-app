import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleBookListComponent } from './google-book-list/google-book-list.component';
import { GoogleBookComponent } from './google-book/google-book.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleBookListComponent,
    GoogleBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
