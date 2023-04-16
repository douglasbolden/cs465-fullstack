import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LatestService } from '../services/latest.service';

@Component({
  selector: 'app-add-latest',
  templateUrl: './add-latest.component.html',
  styleUrls: ['./add-latest.component.css']
})

export class AddLatestComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private latestService: LatestService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  addLatest() {
    if (this.addForm.valid) {
      this.latestService.addLatest(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/latest']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
