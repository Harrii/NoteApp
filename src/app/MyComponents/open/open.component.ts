import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  LocalItem:string;
  notes:Notes[];
  constructor() {
    this.LocalItem=localStorage.getItem("notes");
    if(this.LocalItem==null){
      this.notes=[];
      
    }
    else
    {
      this.notes=JSON.parse(this.LocalItem);
    }
   }

  ngOnInit(): void {
  }

}
