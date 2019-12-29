import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from 'src/services/game.service';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Color } from 'src/models/color.model';



@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  public ballsChallenge:Array<Color>
  constructor(private gameService:GameService, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    this.updateData()
  }
  private updateData():void{
    
    this.ballsChallenge =  this.gameService.getChallenge()
  }

}
