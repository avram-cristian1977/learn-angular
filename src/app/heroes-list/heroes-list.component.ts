import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  // sortById() {
  //   HEROES.sort((a: Hero, b: Hero) => {
  //     if (a.id > b.id) {
  //       return 1
  //     } else {
  //       return -1
  //     }
  //   })
  // }



  sortById() {
    HEROES.sort((a: Hero,b: Hero) => {
      return (a.id - b.id)
})
  }

  sortByName() {
    HEROES.sort((a: Hero, b: Hero) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })
  }



  sortByRating() {
    HEROES.sort((a: Hero,b: Hero) => {
      return (a.overAllRating(a.powerStats) - b.overAllRating(b.powerStats))
})
  }



}
