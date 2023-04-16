import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealsService } from '../services/meals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-listing',
  templateUrl: './meal-listing.component.html',
  styleUrls: ['./meal-listing.component.css']
})
export class MealListingComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealsService: MealsService, private router: Router) { }

  ngOnInit(): void {
      this.mealsService.getMeals()
      .subscribe({
          next: results => this.meals.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addMeal() {
    this.router.navigate(['add-meal']);
  }

  onMealDeleted(mealCode: string) {
    this.mealsService.deleteMeal(mealCode).subscribe({
      next: () => (this.meals = this.meals.filter((t) => t.code !== mealCode)),
      error: (err) => console.log(err)
    });
  }
}
