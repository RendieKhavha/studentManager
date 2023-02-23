import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = "http://localhost:63167/api";
  constructor(private http: HttpClient) {}

  login(val: any) {
      return this.http.post(this.APIUrl + '/user/login', val);
  }
  
  get(): Observable<Student[]> {
    return this.http.get<Student[]>(this.APIUrl +'/students');
   }

}
