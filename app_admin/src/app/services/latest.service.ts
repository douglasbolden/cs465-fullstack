import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latest } from '../models/latest';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getLatests(): Observable<Latest[]> {
      return this.http.get<Latest[]>(`${this.API_BASE_URL}/latest`);
  }
  
  public addLatest(latest: Latest): Observable<Latest> {
    return this.http.post<Latest>(`${this.API_BASE_URL}/latest`, latest, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getLatest(code: string): Observable<Latest> {
    return this.http.get<Latest>(`${this.API_BASE_URL}/latest/${code}`);
  }

  public updateLatest(code: string, latest: Latest): Observable<Latest> {
    return this.http.put<Latest>(`${this.API_BASE_URL}/latest/${code}`, latest, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteLatest(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/latest/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
