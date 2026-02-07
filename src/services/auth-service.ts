import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_AUTH_LOGIN } from '../constants/constants';
import { LoginResponse } from '../types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor (private http: HttpClient) {

  }

  doLogin(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_AUTH_LOGIN}`, data);
  }
}
