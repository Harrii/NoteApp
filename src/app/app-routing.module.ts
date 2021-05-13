import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { EditNotesComponent } from './MyComponents/edit-notes/edit-notes.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NoteComponent } from './MyComponents/note/note.component';
import { OpenComponent } from './MyComponents/open/open.component';

const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'note',component:NoteComponent},
  { path:'edit',component:EditNotesComponent},
  { path:'open',component:OpenComponent},
  { path:'edt',component:EditComponent},
  { path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
