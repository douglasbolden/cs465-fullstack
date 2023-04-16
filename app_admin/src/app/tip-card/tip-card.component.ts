import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tip } from '../models/tip';

@Component({
  selector: 'app-tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.css']
})
export class TipCardComponent {
  @Input() tip!: Tip;
  @Output() delete = new EventEmitter<string>();

  emitDeleteEvent() {
    this.delete.next(this.tip.code);
  }

}
