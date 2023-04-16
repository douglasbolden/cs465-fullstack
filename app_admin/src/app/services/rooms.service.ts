import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  private token?: string | null;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.authService.tokenSubject.subscribe(t => this.token = t);
  }

  public getRooms(): Observable<Room[]> {
      return this.http.get<Room[]>(`${this.API_BASE_URL}/rooms`);
  }
  
  public addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.API_BASE_URL}/rooms`, room, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public getRoom(code: string): Observable<Room> {
    return this.http.get<Room>(`${this.API_BASE_URL}/rooms/${code}`);
  }

  public updateRoom(code: string, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.API_BASE_URL}/rooms/${code}`, room, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  public deleteRoom(code: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/rooms/${code}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
}
