import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {

  news: News[] = [];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
      this.newsService.getNews()
      .subscribe({
          next: results => this.news.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addNews() {
    this.router.navigate(['add-news']);
  }

  onNewDeleted(newsCode: string) {
    this.newsService.deleteNew(newsCode).subscribe({
      next: () => (this.news = this.news.filter((t) => t.code !== newsCode)),
      error: (err) => console.log(err)
    });
  }
}
