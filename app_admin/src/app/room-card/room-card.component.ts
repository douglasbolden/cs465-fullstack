import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent {
  @Input() room!: Room;
  @Output() delete = new EventEmitter<string>();

  emitDeleteEvent() {
    this.delete.next(this.room.code);
  }

}
