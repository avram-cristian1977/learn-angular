import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
   subscription :Subscription ;
  // @Input() hero:Hero;

  hero$ = this.heroService.selectedHero$;
  hero:Hero
 
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    //Behavior Subject use case #1
     this.subscription =  this.hero$.subscribe(selectedHero => this.hero = selectedHero)
  }

  ngOnInit(): void {
    console.log("ON INIT")
    //this.getHero();
    this.setSelectedHero();
    // this.hero = this.heroService.selectedHero;
    // this.heroService.selectedHero$.subscribe(selectedHero => this.hero = selectedHero)
   
    
    
  }

  getSelectedHero(){
    console.log(this.hero$.getValue())
  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  // }

  setSelectedHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.updateSelectedHero(id);


  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() : void{
    console.log("ON DESTROY")
    this.subscription.unsubscribe();
  }

}
