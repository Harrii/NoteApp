import { HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from './Notes';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
// import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
localitem:string;
  allnote:Notes[];
  constructor(private http :HttpClient,private processHTTPMsgService:ProcessHTTPMsgService) {

   }
   add(note:Notes){
    console.log(note);
    return this.http.post<Notes>("http://localhost:3000/Notes",note);
    
   }
   getNoteId(id):Observable<Notes>{
     
     return this.http.get<Notes>("http://localhost:3000/Notes/" +id).pipe(catchError(this.processHTTPMsgService.handleError));;
     
   }

  updateNote(note:any):Observable<Notes>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.put<Notes>('http://localhost:3000/Notes/' + note.id,note, httpOptions)
  }
  getNote():Observable<Notes[]>
  {
    return this.http.get<Notes[]>('http://localhost:3000/Notes/');
  }

  deleteNote(id:number):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/Notes/'+id);
  }
}
