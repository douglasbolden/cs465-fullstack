import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TestimonialsService } from '../services/testimonials.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.css']
})

export class AddTestimonialComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private testimonialsService: TestimonialsService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      description: ['', Validators.required],
      person: ['', Validators.required],
    });
  }

  addTestimonial() {
    if (this.addForm.valid) {
      this.testimonialsService.addTestimonial(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/testimonials']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
