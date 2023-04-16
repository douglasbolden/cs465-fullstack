import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LatestService } from '../services/latest.service';

@Component({
  selector: 'app-edit-latest',
  templateUrl: './edit-latest.component.html',
  styleUrls: ['./edit-latest.component.css']
})

export class EditLatestComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private latestsService: LatestService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.latestsService.getLatest(this.activatedRoute.snapshot.params['latestCode']).subscribe({
      next: latest => this.editForm.setValue(latest),
      error: e => console.log(e)
    });
  }

  updateLatest() {
    if (this.editForm.valid) {
      this.latestsService.updateLatest(this.activatedRoute.snapshot.params['latestCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/latest']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
