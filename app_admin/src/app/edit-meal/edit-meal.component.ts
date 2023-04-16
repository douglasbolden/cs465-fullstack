import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})

export class EditMealComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealsService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      mealName: ['', Validators.required],
      mealType: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.mealsService.getMeal(this.activatedRoute.snapshot.params['mealCode']).subscribe({
      next: meal => this.editForm.setValue(meal),
      error: e => console.log(e)
    });
  }

  updateMeal() {
    if (this.editForm.valid) {
      this.mealsService.updateMeal(this.activatedRoute.snapshot.params['mealCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/meals']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
