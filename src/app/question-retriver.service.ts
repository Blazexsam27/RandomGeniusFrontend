import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionRetriverService {

  baseurl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) {
  }


  private errorHandler = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.log('error happend due to ', error.error.message);
    }

    return throwError('Something bad happend!');
  }

  getAllQuestions(): Observable<any> {
    return this.http.get(this.baseurl + 'api/questions/', { headers: this.httpHeaders });
  }


  registerUser(data): Observable<any> {
    return this.http.post(this.baseurl + 'api/users/', data, { headers: this.httpHeaders });
  }

  loginUser(data): Observable<any> {
    return this.http.post(this.baseurl + 'api/auth/', data, { headers: this.httpHeaders });
  }

} 
