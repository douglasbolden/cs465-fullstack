import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Testimonial } from '../models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
  @Output() delete = new EventEmitter<string>();

  emitDeleteEvent() {
    this.delete.next(this.testimonial.code);
  }

}
