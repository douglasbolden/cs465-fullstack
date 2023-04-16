import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private blogsService: BlogsService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addBlog() {
    if (this.addForm.valid) {
      this.blogsService.addBlog(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/blogs']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
