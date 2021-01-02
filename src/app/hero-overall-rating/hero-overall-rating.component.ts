import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.css']
})
export class HeroOverallRatingComponent implements OnInit {
  @Input() hero:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
