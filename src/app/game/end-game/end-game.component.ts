import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalVictoryComponent } from './modal-victory/modal-victory.component';
import { GameService } from 'src/services/game.service';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  public rankingList:Array<any> = []

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.openDialog()

    this.firebaseService.callTable
      .subscribe((response)=>{
        if(response){
          this.firebaseService.setTableScore()
            .then(resolve=> this.rankingList = resolve)

        }
      })
      
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVictoryComponent, {
      disableClose: true
    });

    
  }

}
