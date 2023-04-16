import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getTrips(): Observable<Trip[]> {
      return this.http.get<Trip[]>(`${this.API_BASE_URL}/trips`);
  }
  
  public addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.API_BASE_URL}/trips`, trip, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.API_BASE_URL}/trips/${code}`);
  }

  public updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.API_BASE_URL}/trips/${code}`, trip, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/trips/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
