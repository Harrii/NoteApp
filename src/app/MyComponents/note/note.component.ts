import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotesService } from './../../notes.service';

import { Notes } from './../../Notes';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
notes:Notes;

dte:string=new Date().toLocaleString();
id:any;
NoteForm:FormGroup;
@Output() noteAdd:EventEmitter<Notes>=new EventEmitter();
  constructor( 
    private noteservice:NotesService,private route:ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.NoteForm=new FormGroup({
      Title:new FormControl(null),
      Content:new FormControl(null)
  });
  
  

}

onSubmit(){

this.notes=this.NoteForm.value;
 this.notes.Sl=this.notes.id;
this.notes.NDate=this.dte;
this.noteservice.add(this.notes).subscribe(note =>console.log());
console.log(this.notes.id);
alert("Added");
window.location.reload()


}
}
