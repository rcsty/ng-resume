import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityComponent } from './ability.component';
import { RatingModule } from 'src/app/_shared/rating/rating.module';

describe('AbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RatingModule ],
      declarations: [ AbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
