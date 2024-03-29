import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.models';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(env.apiBaseUrl + 'auth', login);
  }

}
