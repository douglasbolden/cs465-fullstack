import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent {
  @Input() meal!: Meal;
  @Output() delete = new EventEmitter<string>();

  emitDeleteEvent() {
    this.delete.next(this.meal.code);
  }

}
