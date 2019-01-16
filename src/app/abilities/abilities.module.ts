import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability/ability.component';
import { AbilitiesCategoryComponent } from './abilities-category/abilities-category.component';
import { AbilitiesComponent } from './abilities.component';
import { RatingModule } from '../_shared/rating/rating.module';
import { IntroModule } from '../_shared/intro/intro.module';

@NgModule({
  declarations: [
    AbilityComponent,
    AbilitiesCategoryComponent,
    AbilitiesComponent
  ],
  imports: [
    CommonModule,
    IntroModule,
    RatingModule
  ],
  exports: [
    AbilitiesComponent
  ]
})
export class AbilitiesModule { }
