import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public getTrips(): Observable<Trip[]> {
      return this.http.get<Trip[]>(`${this.API_BASE_URL}/trips`);
  }
  
  public addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.API_BASE_URL}/trips`, trip);
  }

  public getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.API_BASE_URL}/trips/${code}`);
  }

  public updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.API_BASE_URL}/trips/${code}`, trip);
  }

  public deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/trips/${code}`);
  }
  
}
