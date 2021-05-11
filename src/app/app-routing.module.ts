import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNotesComponent } from './MyComponents/edit-notes/edit-notes.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NoteComponent } from './MyComponents/note/note.component';
import { OpenComponent } from './MyComponents/open/open.component';

const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'note',component:NoteComponent},
  { path:'edit',component:EditNotesComponent},
  { path:'open',component:OpenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
