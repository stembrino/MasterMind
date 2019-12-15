import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from './game/table/table.component';
import { TableGameComponent } from './game/table-game/table-game.component';
import { GameService } from './services/game.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TableComponent,
    TableGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,    
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
