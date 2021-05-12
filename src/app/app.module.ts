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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { OpenComponent } from './MyComponents/open/open.component';
import { EditComponent } from './MyComponents/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HomeComponent,
    EditNotesComponent,
    OpenComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
