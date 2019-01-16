import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedListComponent } from './detailed-list.component';

describe('DetailedListComponent', () => {
  let component: DetailedListComponent;
  let fixture: ComponentFixture<DetailedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
