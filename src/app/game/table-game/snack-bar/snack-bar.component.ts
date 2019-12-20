import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Color } from 'src/app/models/color.model';



@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  public ballsChallenge:Array<Color>
  public information:boolean
  constructor(private gameService:GameService, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    this.information = this.data
    this.ballsChallenge =  this.gameService.getChallenge()
    console.log(this.ballsChallenge)
  }

}
