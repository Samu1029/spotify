import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pairwise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = 'http://localhost:3001/api/1.0/auth/login';

  //Credenciales inicio de sesion
  //email: test@test.com
  //password: 12345678

  constructor(private http: HttpClient) { }

  sendCredencials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }

    console.log('🆗🆗', email, password);

    return this.http.post(`${this.URL}/`,body)
  }
}
