import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  public userSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('user') ?? 'null'));
  public tokenSubject = new BehaviorSubject<string|null>(JSON.parse(localStorage.getItem('token') ?? 'null'));

  constructor(private http: HttpClient) {
    this.userSubject.subscribe(user => localStorage.setItem('user', JSON.stringify(user)));
    this.tokenSubject.subscribe(token => localStorage.setItem('token', JSON.stringify(token)));
  }

  public login(credentials: User): Observable<AuthResponse> {
    const obs = new AsyncSubject<AuthResponse>();
    this.http.post<AuthResponse>(`${this.API_BASE_URL}/auth/login`, credentials)
      .subscribe({
        next: resp => {
          this.userSubject.next(credentials);
          this.tokenSubject.next(resp.token);
          obs.next(resp);
          obs.complete();
        },
        error: e => obs.error(e)
      });
      return obs;
  }

  public register(credentials: User): Observable<AuthResponse> {
    const obs = new AsyncSubject<AuthResponse>();
    this.http.post<AuthResponse>(`${this.API_BASE_URL}/auth/register`, credentials)
      .subscribe({
        next: resp => {
          this.userSubject.next(credentials);
          this.tokenSubject.next(resp.token);
          obs.next(resp);
          obs.complete();
        },
        error: e => obs.error(e)
      });
      return obs;
  }

  public logout() {
    this.userSubject.next(null);
    this.tokenSubject.next(null);
  }

}
