import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Notes } from './../../Notes';
import { NotesService } from './../../notes.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
  localItem:string;
  allnote:Notes[];
  dte:string;

  constructor(
  private noteService:NotesService
  )
  { 
    this.localItem=localStorage.getItem("notes");
    if(this.localItem == null){
    this.allnote = [];
    }
    else{ 
      this.allnote = JSON.parse(this.localItem); 
    } 
  
    this.dte=Date();
    console.log(this.dte);
  }

  ngOnInit(): void {
  }
addNote(note:Notes){
  console.log(note);
  this.allnote.push(note);
  localStorage.setItem("notes", JSON.stringify(this.allnote));

}
}
