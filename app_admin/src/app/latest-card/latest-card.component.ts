import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Latest } from '../models/latest';

@Component({
  selector: 'app-latest-card',
  templateUrl: './latest-card.component.html',
  styleUrls: ['./latest-card.component.css']
})
export class LatestCardComponent {
  @Input() latest!: Latest;
  @Output() delete = new EventEmitter<string>();

  emitDeleteEvent() {
    this.delete.next(this.latest.code);
  }

}
