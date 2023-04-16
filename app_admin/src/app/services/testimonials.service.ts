import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonial } from '../models/testimonial';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getTestimonials(): Observable<Testimonial[]> {
      return this.http.get<Testimonial[]>(`${this.API_BASE_URL}/testimonials`);
  }
  
  public addTestimonial(testimonial: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(`${this.API_BASE_URL}/testimonials`, testimonial, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getTestimonial(code: string): Observable<Testimonial> {
    return this.http.get<Testimonial>(`${this.API_BASE_URL}/testimonials/${code}`);
  }

  public updateTestimonial(code: string, testimonial: Testimonial): Observable<Testimonial> {
    return this.http.put<Testimonial>(`${this.API_BASE_URL}/testimonials/${code}`, testimonial, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteTestimonial(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/testimonials/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
