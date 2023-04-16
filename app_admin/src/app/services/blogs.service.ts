import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getBlogs(): Observable<Blog[]> {
      return this.http.get<Blog[]>(`${this.API_BASE_URL}/blogs`);
  }
  
  public addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.API_BASE_URL}/blogs`, blog, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getBlog(code: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.API_BASE_URL}/blogs/${code}`);
  }

  public updateBlog(code: string, blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.API_BASE_URL}/blogs/${code}`, blog, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteBlog(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/blogs/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
