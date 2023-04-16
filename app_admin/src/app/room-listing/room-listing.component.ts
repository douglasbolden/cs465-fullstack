import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomsService } from '../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.css']
})
export class RoomListingComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomsService: RoomsService, private router: Router) { }

  ngOnInit(): void {
      this.roomsService.getRooms()
      .subscribe({
          next: results => this.rooms.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addRoom() {
    this.router.navigate(['add-room']);
  }

  onRoomDeleted(roomCode: string) {
    this.roomsService.deleteRoom(roomCode).subscribe({
      next: () => (this.rooms = this.rooms.filter((t) => t.code !== roomCode)),
      error: (err) => console.log(err)
    });
  }
}
