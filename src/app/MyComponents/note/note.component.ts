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
dte:string=new Date().toLocaleString();
@Output() noteAdd:EventEmitter<Notes>=new EventEmitter();
  constructor( 
    private noteservice:NotesService
  ) { }

  ngOnInit(): void {
  }
onSubmit(){
const Note={
  sl:3,
  NDate:this.dte,
  Title:this.title,
  Content:this.content
}
this.noteAdd.emit(Note);


}
}
