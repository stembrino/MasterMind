import { Component} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/services/firebase/firebase.service';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-modal-victory',
  templateUrl: './modal-victory.component.html',
  styleUrls: ['./modal-victory.component.css'],  
})
export class ModalVictoryComponent  {
  
  public formModal:FormGroup = new FormGroup({
    playerName: new FormControl('', [Validators.required])
  })

  constructor(public firebaseService: FirebaseService,private gameService: GameService, public dialogRef: MatDialogRef<ModalVictoryComponent>) {
      dialogRef.disableClose = true
    }

  public onSubmitFirebase(): void {
    if(this.formModal.valid){      
      //nivel of game
      //Could do a validation in database to virify if the name already exist 
      this.firebaseService.setPlayerInRanking(this.formModal.value.playerName, this.gameService.getScorePlayer())
      //send a flag true to the component endGame. I'm not using output, because it's a modal and dos not work with html call in the parent father component
      this.firebaseService.callToRankink()
      //call table to show in mother component
      this.dialogRef.close(); 
  }
      
  }

}
