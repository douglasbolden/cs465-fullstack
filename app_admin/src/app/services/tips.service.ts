import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tip } from '../models/tip';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getTips(): Observable<Tip[]> {
      return this.http.get<Tip[]>(`${this.API_BASE_URL}/tips`);
  }
  
  public addTip(tip: Tip): Observable<Tip> {
    return this.http.post<Tip>(`${this.API_BASE_URL}/tips`, tip, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getTip(code: string): Observable<Tip> {
    return this.http.get<Tip>(`${this.API_BASE_URL}/tips/${code}`);
  }

  public updateTip(code: string, tip: Tip): Observable<Tip> {
    return this.http.put<Tip>(`${this.API_BASE_URL}/tips/${code}`, tip, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteTip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/tips/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
