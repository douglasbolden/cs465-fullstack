import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})

export class EditNewsComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newssService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      image: ['', Validators.required],
      postTitle: ['', Validators.required],
      postDate: ['', Validators.required],
      posterName: ['', Validators.required],
      postData: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.newssService.getNew(this.activatedRoute.snapshot.params['newsCode']).subscribe({
      next: news => this.editForm.setValue(news),
      error: e => console.log(e)
    });
  }

  updateNews() {
    if (this.editForm.valid) {
      this.newssService.updateNew(this.activatedRoute.snapshot.params['newsCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/news']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
