import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getMeals(): Observable<Meal[]> {
      return this.http.get<Meal[]>(`${this.API_BASE_URL}/meals`);
  }
  
  public addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(`${this.API_BASE_URL}/meals`, meal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getMeal(code: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.API_BASE_URL}/meals/${code}`);
  }

  public updateMeal(code: string, meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.API_BASE_URL}/meals/${code}`, meal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteMeal(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/meals/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
