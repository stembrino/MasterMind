import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//Services
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from '../services/guards/auth-guard'
import { GameService } from '../services/game.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseService } from 'src/services/firebase/firebase.service'


//components
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { TableComponent } from './game/table/table.component';
import { TableGameComponent } from './game/table-game/table-game.component';
import { InfoComponent } from './home/info/info.component';
import { SnackBarComponent } from './game/table-game/snack-bar/snack-bar.component';

// Designed Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EndGameComponent } from './game/end-game/end-game.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalVictoryComponent } from './game/end-game/modal-victory/modal-victory.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TableComponent,
    TableGameComponent,
    InfoComponent,
    SnackBarComponent,
    EndGameComponent,
    ModalVictoryComponent
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
    MatSnackBarModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatListModule, 
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [GameService, AuthGuardService, FirebaseService],
  bootstrap: [AppComponent],
  entryComponents:[SnackBarComponent, ModalVictoryComponent]
})
export class AppModule { }
