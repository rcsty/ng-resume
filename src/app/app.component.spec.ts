import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HomeModule,
        ProfileModule,
        ExperiencesModule,
        AbilitiesModule,
        ProjectsModule,
        ContactModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
