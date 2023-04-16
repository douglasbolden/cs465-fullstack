import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})

export class EditBlogComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private blogsService: BlogsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.blogsService.getBlog(this.activatedRoute.snapshot.params['blogCode']).subscribe({
      next: blog => this.editForm.setValue(blog),
      error: e => console.log(e)
    });
  }

  updateBlog() {
    if (this.editForm.valid) {
      this.blogsService.updateBlog(this.activatedRoute.snapshot.params['blogCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/blogs']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
