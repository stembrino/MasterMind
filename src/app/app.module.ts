import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { InfoComponent } from './home/info/info.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './game/table-game/snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TableComponent,
    TableGameComponent,
    InfoComponent,
    SnackBarComponent
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
    FormsModule, 
    MatRadioModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  entryComponents:[SnackBarComponent]
})
export class AppModule { }
