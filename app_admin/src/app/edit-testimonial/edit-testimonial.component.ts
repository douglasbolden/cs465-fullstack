import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestimonialsService } from '../services/testimonials.service';

@Component({
  selector: 'app-edit-testimonial',
  templateUrl: './edit-testimonial.component.html',
  styleUrls: ['./edit-testimonial.component.css']
})

export class EditTestimonialComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private testimonialsService: TestimonialsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      description: ['', Validators.required],
      person: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.testimonialsService.getTestimonial(this.activatedRoute.snapshot.params['testimonialCode']).subscribe({
      next: testimonial => this.editForm.setValue(testimonial),
      error: e => console.log(e)
    });
  }

  updateTestimonial() {
    if (this.editForm.valid) {
      this.testimonialsService.updateTestimonial(this.activatedRoute.snapshot.params['testimonialCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/testimonials']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
