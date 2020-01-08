import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public showVictoryWindow=false
  constructor(private gameService: GameService) { 
    
  }
  

  ngOnInit() {
    this.gameService.actionVictoryGame
      .subscribe(response=> this.showVictoryWindow = response)
    
  }

}
