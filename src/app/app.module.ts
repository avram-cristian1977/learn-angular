import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroOverallRatingComponent } from './hero-overall-rating/hero-overall-rating.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import {OverAllRatingService} from './over-all-rating.service'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroOverallRatingComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [OverAllRatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
