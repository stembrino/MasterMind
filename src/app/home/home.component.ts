import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public formHome:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required  )
  })
  constructor() { }

  ngOnInit() {
  }

  public onSubmitName():void{
    
  }

}