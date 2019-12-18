import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public formSettings:FormGroup = new FormGroup({
   'repetition': new FormControl('1', [Validators.required]),
   'nivel': new FormControl('15', [Validators.required])
 })

 public progressBar:number = 10
  private repetitionActivated:boolean = false
  public color ="accent"
  constructor(private gameService:GameService) { }

  ngOnInit() {
  }
  public repetitionChange(event){
    
    if(event === '2'){
      this.progressBar += 40
      this.repetitionActivated=true
    }else{
      this.progressBar -= 40
      this.repetitionActivated=false
    }
    this.changeColorProgressBar()
    
  }

  public nivelChange(event){
      switch(event){
        case '15': this.progressBar = this.repetitionActivated? 50:10
          break
        case '10': this.progressBar = this.repetitionActivated? 70:30
          break
        case '6': this.progressBar = this.repetitionActivated? 100:60
      }
      this.changeColorProgressBar()
  }

  public changeColorProgressBar():void{
    this.color = this.progressBar >= 70? 'warn':'accent'   
  }

  public startGame():void{
    // console.log(this.formSettings.value) 
    this.gameService.setUpSettings(this.formSettings.value)
  }

}
