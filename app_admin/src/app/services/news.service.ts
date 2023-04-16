import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getNews(): Observable<News[]> {
      return this.http.get<News[]>(`${this.API_BASE_URL}/news`);
  }
  
  public addNew(news: News): Observable<News> {
    return this.http.post<News>(`${this.API_BASE_URL}/news`, news, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getNew(code: string): Observable<News> {
    return this.http.get<News>(`${this.API_BASE_URL}/news/${code}`);
  }

  public updateNew(code: string, news: News): Observable<News> {
    return this.http.put<News>(`${this.API_BASE_URL}/news/${code}`, news, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteNew(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/news/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
