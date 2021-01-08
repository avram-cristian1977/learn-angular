import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OverAllRatingService } from '../over-all-rating.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService, public _overAllRating : OverAllRatingService) { }

   public overAllR = [];
  ngOnInit(): void {
    this._overAllRating.getOverAllRating().subscribe(overAllR => this.overAllR = overAllR)

  }

}
