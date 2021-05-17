import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/notes.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  LocalItem:boolean;
  LocalItemSecond:boolean;
  notes:Notes[];
  temp_notes:Notes[];
  title:string;
  cont:string;
  Eform:FormGroup;
  para:number;
  index:number;
  dte:string=new Date().toLocaleString();
  constructor( private notesService:NotesService,private fb:FormBuilder,private dialog:MatDialog) {
    // this.LocalItem=localStorage.getItem("notes");
    // if(this.LocalItem==null){
    //   this.notes=[];
      
    // }
    // else
    // {
    //   this.notes=JSON.parse(this.LocalItem);
    //   console.log(this.notes[this.notes.length-1].sl);
    // }
    // this.notes=notesService.getNote();
    // this.temp_notes=notesService.getNote();
    this.LocalItem=true;
    this.LocalItemSecond=false;

   }

  ngOnInit(): void {
    this.Eform=new FormGroup({
      ti:new FormControl(null),
      cnt:new FormControl(null)
    })
    this.notesService.getNote().subscribe(Notes=>this.notes=Notes);
    console.log(this.notes);
    this.notesService.getNote().subscribe(Notes => this.temp_notes=Notes);
  }

  onClick(note:Notes)
  {
    console.log(note);
    const index=this.notes.indexOf(note);
    this.notes.splice(index,1);
    //localStorage.setItem("notes",JSON.stringify(this.notes));
  }
 
  open(i:number)
  {
    this.LocalItem=false;
    this.LocalItemSecond=true;
    
      console.log(this.temp_notes[i].Title);
      // this.title=this.notes2[i];
      // console.log(this.title);
      // this.titl=new FormControl(this.title);
    this.Eform=this.fb.group({
    ti: [this.temp_notes[i].Title],
    cnt:[this.temp_notes[i].Content]
});
this.para=i;
  }

  close(){
    this.LocalItem=true;
    this.LocalItemSecond=false;
   
  }

  updateNote(){
    console.log(this.para);
    this.index=this.para;
    const Note={
      // sl:this.notes[this.para].sl,
      // id:this.notes.
      // NDate:this.dte,
      // Title:this.title,
      // Content:this.cont
    }
   // this.notes.splice(this.para, 1,Note);
    alert("Update Success");
    this.LocalItem=true;
    this.LocalItemSecond=false;
}
}
