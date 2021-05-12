import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule,FormGroup } from '@angular/forms';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/notes.service';

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
  title:any;
  cont:string;
  Eform:FormGroup;
  constructor( private notesService:NotesService,private fb:FormBuilder) {
    // this.LocalItem=localStorage.getItem("notes");
    // if(this.LocalItem==null){
    //   this.notes=[];
      
    // }
    // else
    // {
    //   this.notes=JSON.parse(this.LocalItem);
    //   console.log(this.notes[this.notes.length-1].sl);
    // }
    this.notes=notesService.getNote();
    this.temp_notes=notesService.getNote();
    this.LocalItem=true;
    this.LocalItemSecond=false;

   }

  ngOnInit(): void {
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
  }

  close(){
    this.LocalItem=true;
    this.LocalItemSecond=false;
   
  }
}
