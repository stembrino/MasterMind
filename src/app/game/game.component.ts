import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { 
    if(!this.gameService.token){
      router.navigate(['/home'])
    }
  }
  

  ngOnInit() {

  }

}
