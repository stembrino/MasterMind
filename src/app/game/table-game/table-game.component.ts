import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Round } from 'src/app/models/round.model';
import { Score } from 'src/app/models/score.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.css']
})
export class TableGameComponent implements OnInit {
  public game:Array<Round>
  public listScore:Score[] = []
  public   durationInSeconds = 4;

  constructor(public gameService:GameService, private _snackBar: MatSnackBar) {  
    
   }

  ngOnInit() {
    let firstCall:boolean = true
    
    this.gameService.gameSubject
      .subscribe((response:Array<Round>)=>{
        this.game = response
      })
    
    this.gameService.scoreSubject
      .subscribe((score)=>{    
        let colorBalls:Array<string> =['','','','']
        score.forEach((number, i)=>{
          switch(number){
            case 0: colorBalls[i] = '#ecc6b8'
              break;
            case 1: colorBalls[i] = 'white'
              break;
            case 2: colorBalls[i] = 'black'
              break;
          }
        })
        // this.colorBallList.push(this.colorBalls)
        
        if(!firstCall){
          this.listScore.push(new Score(colorBalls))
        }
        firstCall=false
          
        

      })
  }

  public  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 4500
    });
  }

}


