import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookComponent } from './google-book.component';

describe('GoogleBookComponent', () => {
  let component: GoogleBookComponent;
  let fixture: ComponentFixture<GoogleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
