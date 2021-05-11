import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './MyComponents/note/note.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EditNotesComponent } from './MyComponents/edit-notes/edit-notes.component';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { OpenComponent } from './MyComponents/open/open.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HomeComponent,
    EditNotesComponent,
    OpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule
    
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
