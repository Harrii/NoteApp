import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { from } from 'rxjs';
import { Notes } from './../../Notes';
import { NotesService } from './../../notes.service';
import { Location } from '@angular/common';

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
  private noteService:NotesService,
  private loc:Location )
  
  { 
    
    
    //this.localItem=localStorage.getItem("notes");
  //   if(this.localItem == null){
  //   this.allnote = [];
  //   }
  //   else{ 
  //     this.allnote = JSON.parse(this.localItem); 
  //   } 
  this.noteService.getNote().subscribe(Notes=>this.allnote=Notes);
  
    
    
   }
  
  ngOnInit(): void {
    
  }
EditNote(notes:number){
 console.log(notes);
  

}
onClick(id:number)
{
  
  console.log(id);
  this.noteService.deleteNote(id).subscribe(data=>console.log(data));
  alert("Deleted");
  window.location.reload()
  
  
}
}
