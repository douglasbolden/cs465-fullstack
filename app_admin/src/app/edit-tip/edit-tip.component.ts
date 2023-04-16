import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipsService } from '../services/tips.service';

@Component({
  selector: 'app-edit-tip',
  templateUrl: './edit-tip.component.html',
  styleUrls: ['./edit-tip.component.css']
})

export class EditTipComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tipsService: TipsService,
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
    this.tipsService.getTip(this.activatedRoute.snapshot.params['tipCode']).subscribe({
      next: tip => this.editForm.setValue(tip),
      error: e => console.log(e)
    });
  }

  updateTip() {
    if (this.editForm.valid) {
      this.tipsService.updateTip(this.activatedRoute.snapshot.params['tipCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/tips']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
