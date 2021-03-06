import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { Colors } from 'src/share/colors.model'
import { GameService } from 'src/services/game.service';
import { Round } from 'src/models/round.model';
import { Color } from 'src/models/color.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [Colors]
})
export class TableComponent implements OnInit {
  private round: Round;
  
  constructor(private colors:Colors, private gameService:GameService){}
  
  public jogada = []
  private numberOfRound = 0
  public colorsGame = this.colors.getColors()
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
     
    } else {
      //quando a jogada for o "atual" a condicao é ser menor que 3
      if(event.container.id === 'cdk-drop-list-0' && event.container.data.length < 4){
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
      
      //quando o anterior for a jogada pode retirar
      if(event.previousContainer.id === 'cdk-drop-list-0'){
        event.previousContainer.data.splice(event.previousIndex,1)
      }

    }
  }

  ngOnInit() {
  }

  public cleanPlayPanel():void{
    
  }


  public submitRound(event):void{
    if(event.length !== 4) return //msn Erro
    //continue round
    let colors:Color[] = []
    event.forEach(element => {      
      colors.push(new Color(element.name, element.hexColor))
    });
    this.round = new Round(colors)
    
    this.gameService.verifyRound(this.round)
    

    
    
    this.gameService.setRoundInGame(this.round,this.numberOfRound)

    this.numberOfRound++;
    //dar o feedback ao utilizador

    
  }


  

}
