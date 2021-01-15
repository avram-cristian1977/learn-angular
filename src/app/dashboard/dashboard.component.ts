import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import {HeroesListComponent} from '../heroes-list/heroes-list.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  myImage3:string='assets/images/11.png'
 
  heroes: Hero[] = [];
  

  // constructor(private heroService: HeroService) { }

  ngOnInit() {
     this.top5();
    //this.getHeroes()
  }

 

  top5(){
    this.heroes = HEROES.sort((a:Hero, 
      b:Hero) => {
      return (b.overAllRating(b.powerStats)-a.overAllRating(a.powerStats))
    } ).slice(0,5)
  }

 
  //cum folosesc serviciul care aduce eroi impreuna cu functia de sortare din heroes-list?

  // getHeroes(){
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  // }
}