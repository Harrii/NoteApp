import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteComponent } from './MyComponents/note/note.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EditNotesComponent } from './MyComponents/edit-notes/edit-notes.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { OpenComponent } from './MyComponents/open/open.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { from } from 'rxjs';
import { AboutComponent } from './MyComponents/about/about.component';
import { NoteEditComponent } from './MyComponents/note-edit/note-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HomeComponent,
    EditNotesComponent,
    OpenComponent,
    EditComponent,
    AboutComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
    
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
