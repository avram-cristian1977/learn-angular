import {HeroesComponent} from './heroes/heroes.component'
import { Hero } from './hero.interface';


export const HEROES : Hero[]  = [
  {id : 115, name : "Dr Nice", powerStats : {combat :3, speed : 1, intelligence:1, strength:2},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 12, name : "Narco", powerStats : {combat :5, speed : 3, intelligence:6, strength:1},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 3, name : "Bombasto", powerStats : {combat :7, speed : 7, intelligence:8, strength:8},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 914, name : "Celeritas", powerStats : {combat :8, speed : 8, intelligence:9, strength:9},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 1995, name : "Magneta", powerStats : {combat :10, speed : 10, intelligence:10, strength:10},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 16999, name : "Rubber Man", powerStats : {combat :2, speed : 2, intelligence:1, strength:3},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 17, name : "Dynama", powerStats : {combat :2, speed : 4, intelligence:1, strength:10},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 0, name : "Dr IQ", powerStats : {combat :1, speed : 1, intelligence:10, strength:1},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 199, name : "Magma", powerStats : {combat :7, speed : 2, intelligence:7, strength:6},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  {id : 2098, name : "Tornado", powerStats : {combat :10, speed : 10, intelligence:9, strength:10},
  overAllRating: (powerStats: any) => 
  { return parseInt(powerStats.combat + powerStats.speed + powerStats.intelligence + powerStats.strength)}},
  
]