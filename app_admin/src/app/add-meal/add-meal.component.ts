import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})

export class AddMealComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealsService: MealsService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      mealName: ['', Validators.required],
      mealType: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addMeal() {
    if (this.addForm.valid) {
      this.mealsService.addMeal(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/meals']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
