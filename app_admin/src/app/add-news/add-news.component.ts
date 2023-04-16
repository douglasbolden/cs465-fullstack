import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})

export class AddNewsComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newsService: NewsService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      image: ['', Validators.required],
      postTitle: ['', Validators.required],
      postDate: ['', Validators.required],
      posterName: ['', Validators.required],
      postData: ['', Validators.required]
    });
  }

  addNew() {
    if (this.addForm.valid) {
      this.newsService.addNew(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/news']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
