import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionRetriverService {
  errors: [];
  baseurl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) {
  }


  getAllQuestions(): Observable<any> {
    return this.http.get(this.baseurl + 'api/questions/', { headers: this.httpHeaders });
  }

  SubmitQuestion(data): Observable<any> {
    return this.http.post(this.baseurl + 'api/questions/', data, { headers: this.httpHeaders })
  }

  registerUser(data): Observable<any> {
    return this.http.post(this.baseurl + 'api/users/', data, { headers: this.httpHeaders });
  }

  loginUser(data): Observable<any> {
    return this.http.post(this.baseurl + 'api/api-token-auth/', data, { headers: this.httpHeaders });

  }


} 
