import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalVictoryComponent } from './modal-victory/modal-victory.component';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVictoryComponent, {
      disableClose: true
    });

    
  }

}
