import { Component, OnInit } from '@angular/core';
import { Latest } from '../models/latest';
import { LatestService } from '../services/latest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-listing',
  templateUrl: './latest-listing.component.html',
  styleUrls: ['./latest-listing.component.css']
})
export class LatestListingComponent implements OnInit {

  latest: Latest[] = [];

  constructor(private latestService: LatestService, private router: Router) { }

  ngOnInit(): void {
      this.latestService.getLatests()
      .subscribe({
          next: results => this.latest.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addLatest() {
    this.router.navigate(['add-latest']);
  }

  onLatestDeleted(latestCode: string) {
    this.latestService.deleteLatest(latestCode).subscribe({
      next: () => (this.latest = this.latest.filter((t) => t.code !== latestCode)),
      error: (err) => console.log(err)
    });
  }
}
