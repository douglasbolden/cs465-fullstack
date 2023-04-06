import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})

export class EditTripComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripsService: TripsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tripsService.getTrip(this.activatedRoute.snapshot.params['tripCode']).subscribe({
      next: trip => this.editForm.setValue(trip),
      error: e => console.log(e)
    });
  }

  updateTrip() {
    if (this.editForm.valid) {
      this.tripsService.updateTrip(this.activatedRoute.snapshot.params['tripCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
