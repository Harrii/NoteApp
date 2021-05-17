import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/notes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {


Title:string
content:string
sl:number;
LocalItem:string;
notes:any;
dte:string=new Date().toLocaleString();
id:any;
NoteForm:FormGroup;
  data: any;
  constructor( 
    private route:ActivatedRoute,
    private noteservice:NotesService,private fb:FormBuilder,
    private location:Location ) { 
  
   
  }

  ngOnInit(): void {

     
     this.NoteForm=new FormGroup({
       Ti:new FormControl(null),
       Cont:new FormControl(null)
   });

 

  this.id=this.route.snapshot.params['id'];
  this.noteservice.getNoteId(this.id)
          .subscribe(data =>{ this.notes=data; console.log(this.data)} );
  console.log(this.data);


  }

  Update(){
    
    this.notes.NDate=this.dte;
    console.log(this.notes)
    this.noteservice.updateNote(this.notes).subscribe(note=>console.log(note));
    alert("Updated");
    this.location.back();
    
    
    }
}
