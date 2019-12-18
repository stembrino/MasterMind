import { Component, OnInit } from '@angular/core';
import { TEXTINFO } from 'src/app/share/text-info'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public textInfo = TEXTINFO
  constructor() { }

  ngOnInit() {
   
  }

}
