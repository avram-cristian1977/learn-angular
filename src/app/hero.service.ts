import { Injectable, } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.interface'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService  {
  
  hero:Hero;
  selectedHero$=new BehaviorSubject<Hero>(null)

  

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable< Hero[]>{
    this.messageService.add("Hero Service: Heroes have been fetched!!!")
    return of (HEROES);

  }

  // getSelectedHero(){
  //   const hero = this.selectedHero$.getValue();
  //   console.log("selected hero is " ,hero)
    
  // }

  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  updateSelectedHero(id:number){
    this.selectedHero$.next(HEROES.find(hero => hero.id === id ));
    this.messageService.add(`Hero Service: fetched hero id=${id}`);
    
    

  }

 

  
}
