import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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
  @Output()noteDel:EventEmitter<Notes>=new EventEmitter()
  

  constructor(
  private noteService:NotesService )
  
  { 
    this.allnote= noteService.getNote();
    console.log(this.allnote);
    //this.localItem=localStorage.getItem("notes");
  //   if(this.localItem == null){
  //   this.allnote = [];
  //   }
  //   else{ 
  //     this.allnote = JSON.parse(this.localItem); 
  //   } 
  
    
    
   }
  
  ngOnInit(): void {
  }
addNote(note:Notes){
 // console.log(note);
  //this.allnote.push(note);
  //localStorage.setItem("notes", JSON.stringify(this.allnote));

}
onClick(notes:Notes)
{
  console.log(notes);
  const index = this.allnote.indexOf(notes);
  this.allnote.splice(index, 1);
  //localStorage.setItem("notes", JSON.stringify(this.allnote));
}
}
