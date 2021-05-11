import { Injectable } from '@angular/core';
import { Notes } from './Notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
localitem:string;
  allnote:Notes[];
  constructor() {

    this.localitem=localStorage.getItem("notes");
    if(this.localitem==null)
    {
      this.allnote=[];

    }
    else
    {
      this.allnote=JSON.parse(this.localitem);
    }
   }

  addNote(note)
  {
    this.allnote.push(note);
    localStorage.setItem("notes",JSON.stringify(this.allnote))
  }
}
