import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../models/testimonial';
import { TestimonialsService } from '../services/testimonials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonial-listing',
  templateUrl: './testimonial-listing.component.html',
  styleUrls: ['./testimonial-listing.component.css']
})
export class TestimonialListingComponent implements OnInit {

  testimonials: Testimonial[] = [];

  constructor(private testimonialsService: TestimonialsService, private router: Router) { }

  ngOnInit(): void {
      this.testimonialsService.getTestimonials()
      .subscribe({
          next: results => this.testimonials.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addTestimonial() {
    this.router.navigate(['add-testimonial']);
  }

  onTestimonialDeleted(testimonialCode: string) {
    this.testimonialsService.deleteTestimonial(testimonialCode).subscribe({
      next: () => (this.testimonials = this.testimonials.filter((t) => t.code !== testimonialCode)),
      error: (err) => console.log(err)
    });
  }
}
