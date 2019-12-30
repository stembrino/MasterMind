import { Component} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Component({
  selector: 'app-modal-victory',
  templateUrl: './modal-victory.component.html',
  styleUrls: ['./modal-victory.component.css'],
  providers: [FirebaseService]
})
export class ModalVictoryComponent  {
  
  public formModal:FormGroup = new FormGroup({
    playerName: new FormControl('', [Validators.required])
  })

  constructor(public firebaseService: FirebaseService, public dialogRef: MatDialogRef<ModalVictoryComponent>) {
      dialogRef.disableClose = true
    }

    onSubmitFirebase(): void {
      console.log(this.formModal.value)
      if(this.formModal.valid){
        //Could do a validation in database to virify if the name already exist 
         this.firebaseService.setPlayerInRanking(this.formModal.value.playerName)
        this.dialogRef.close(); 
      }
      
  }

}
