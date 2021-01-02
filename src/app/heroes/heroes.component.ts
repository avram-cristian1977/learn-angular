import { Component, OnDestroy, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

 
 
  heroes:Hero [];
  selectedHero:Hero;
  constructor(private heroService : HeroService, private messageService:MessageService) { }
 
  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy() {
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes)
    
  }
    onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`You had selected hero id ${hero.id}`)

  }

}
