import { Component, OnInit } from '@angular/core';
import { Tip } from '../models/tip';
import { TipsService } from '../services/tips.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip-listing',
  templateUrl: './tip-listing.component.html',
  styleUrls: ['./tip-listing.component.css']
})
export class TipListingComponent implements OnInit {

  tips: Tip[] = [];

  constructor(private tipsService: TipsService, private router: Router) { }

  ngOnInit(): void {
      this.tipsService.getTips()
      .subscribe({
          next: results => this.tips.push(...results),
          error: err => console.error(err)
        }
      )
  }

  addTip() {
    this.router.navigate(['add-tip']);
  }

  onTipDeleted(tipCode: string) {
    this.tipsService.deleteTip(tipCode).subscribe({
      next: () => (this.tips = this.tips.filter((t) => t.code !== tipCode)),
      error: (err) => console.log(err)
    });
  }
}
