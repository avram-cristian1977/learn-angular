import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  @Input() hero:Hero;
  constructor() { }

  ngOnInit(): void {
  }

  sortById() {
    HEROES.sort((a:{id:number, name:string, 
      powerStats:{combat:number, speed:number, intelligence:number, strength:number}, 
      overAllRating(powerStats:any)}, b:{id:number, name:string, 
          powerStats:{combat:number, speed:number, intelligence:number, strength:number},
           overAllRating(powerStats:any)}) =>{
               if(a.id > b.id){
                   return 1
               } else {
                   return -1
               }
           })
  }

  sortByName() {
    HEROES.sort((a:{id:number, name:string, 
      powerStats:{combat:number, speed:number, intelligence:number, strength:number}, 
      overAllRating(powerStats:any)}, b:{id:number, name:string, 
          powerStats:{combat:number, speed:number, intelligence:number, strength:number},
           overAllRating(powerStats:any)}) =>{
               if(a.name > b.name){
                   return 1
               } else {
                   return -1
               }
           })
  }

  sortByRating(){
    HEROES.sort((a:{id:number, 
                 name:string, 
                 powerStats:{combat:number, speed:number, intelligence:number, strength:number}, 
                 overAllRating(powerStats:any)}, 
                 b:{id:number, 
                 name:string, 
                 powerStats:{combat:number, speed:number, intelligence:number, strength:number},
                 overAllRating(powerStats:any)}) =>{
                 if(a.overAllRating(a.powerStats) > b.overAllRating(b.powerStats)){
                   return 1
               } else {
                   return -1
               }
           })
  }



}
