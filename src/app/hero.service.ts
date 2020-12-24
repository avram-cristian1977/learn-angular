import { Injectable, } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero } from './hero.interface'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable< Hero[]>{
    this.messageService.add("HeroeService: heroes  been fetched")
    return of (HEROES)

  }

  constructor(private messageService : MessageService) { }
}
