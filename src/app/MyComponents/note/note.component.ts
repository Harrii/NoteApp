import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotesService } from './../../notes.service';

import { Notes } from './../../Notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
title:string
content:string
sl:number;
LocalItem:string;
notes:Notes[];
dte:string=new Date().toLocaleString();
@Output() noteAdd:EventEmitter<Notes>=new EventEmitter();
  constructor( 
    private noteservice:NotesService
  ) {
    
    this.LocalItem=localStorage.getItem("notes");
    if(this.LocalItem==null){
      this.notes=[];
      
    }
    else
    {
      this.notes=JSON.parse(this.LocalItem);
      console.log(this.notes[this.notes.length-1].sl);
      this.sl=this.notes[this.notes.length-1].sl+1;
    }

  }

  ngOnInit(): void {
  }
onSubmit(){
const Note={
  sl:this.sl,
  NDate:this.dte,
  Title:this.title,
  Content:this.content
}
console.log(Note.sl)
this.noteAdd.emit(Note);


}
}
