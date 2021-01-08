import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class OverAllRatingService {

  constructor() { }

  getOverAllRating() : Observable <Hero[]>{
    return of (HEROES);
  }
}
