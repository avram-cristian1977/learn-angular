import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MessageService } from '../message.service';
import { OverAllRatingService } from '../over-all-rating.service';
import { HeroService} from '../hero.service'
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService, 
              public _overAllRating : OverAllRatingService,
              public heroService:HeroService) { }

   public overAllR = [];
   public hero:Hero;
   
  ngOnInit(): void {
    this._overAllRating.getOverAllRating().subscribe(overAllR => this.overAllR = overAllR)
    // this.heroService.selectedHero$.subscribe(selectedHero =>this.hero = selectedHero)
   

  }

  // logSelectedHero(){
    
  //   this.heroService.getSelectedHero();
    
    
    
  // }

}

