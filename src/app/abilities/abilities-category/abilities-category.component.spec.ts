import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesCategoryComponent } from './abilities-category.component';
import { AbilityComponent } from '../ability/ability.component';
import { RatingModule } from 'src/app/_shared/rating/rating.module';
import { AbilitiesCategory } from 'src/app/_model/abilities-category';

describe('AbilitiesCategoryComponent', () => {
  let component: AbilitiesCategoryComponent;
  let fixture: ComponentFixture<AbilitiesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RatingModule],
      declarations: [ AbilitiesCategoryComponent, AbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesCategoryComponent);
    component = fixture.componentInstance;
    component.category = new AbilitiesCategory();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
