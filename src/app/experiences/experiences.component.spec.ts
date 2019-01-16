import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { IntroModule } from '../_shared/intro/intro.module';
import { DetailedListModule } from '../_shared/detailed-list/detailed-list.module';
import { Experiences } from '../_model/experiences';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IntroModule, DetailedListModule ],
      declarations: [ ExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    component.experiences = new Experiences();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
