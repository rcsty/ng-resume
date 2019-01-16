import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    ProfileModule,
    ExperiencesModule,
    AbilitiesModule,
    ProjectsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
