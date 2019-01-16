import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesComponent } from './abilities.component';
import { AbilityComponent } from './ability/ability.component';
import { Abilities } from '../_model/abilities';
import { AbilitiesCategoryComponent } from './abilities-category/abilities-category.component';
import { IntroModule } from '../_shared/intro/intro.module';
import { RatingModule } from '../_shared/rating/rating.module';

describe('AbilitiesComponent', () => {
  let component: AbilitiesComponent;
  let fixture: ComponentFixture<AbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IntroModule, RatingModule ],
      declarations: [ AbilitiesComponent, AbilitiesCategoryComponent, AbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesComponent);
    component = fixture.componentInstance;
    component.abilities = new Abilities();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
