import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogsService } from '../services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogsService: BlogsService, private router: Router) { }

  ngOnInit(): void {
      this.blogsService.getBlogs()
      .subscribe({
          next: results => this.blogs.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addBlog() {
    this.router.navigate(['add-blog']);
  }

  onBlogDeleted(blogCode: string) {
    this.blogsService.deleteBlog(blogCode).subscribe({
      next: () => (this.blogs = this.blogs.filter((t) => t.code !== blogCode)),
      error: (err) => console.log(err)
    });
  }
}
