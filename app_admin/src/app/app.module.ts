import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripsService } from './services/trips.service';
import { BlogsService } from './services/blogs.service';
import { LatestService } from './services/latest.service';
import { MealsService } from './services/meals.service';
import { NewsService } from './services/news.service';
import { RoomsService } from './services/rooms.service';
import { TestimonialsService } from './services/testimonials.service';
import { TipsService } from './services/tips.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddLatestComponent } from './add-latest/add-latest.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial.component';
import { AddTipComponent } from './add-tip/add-tip.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { EditLatestComponent } from './edit-latest/edit-latest.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditTestimonialComponent } from './edit-testimonial/edit-testimonial.component';
import { EditTipComponent } from './edit-tip/edit-tip.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { LatestCardComponent } from './latest-card/latest-card.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TipCardComponent } from './tip-card/tip-card.component';
import { TipListingComponent } from './tip-listing/tip-listing.component';
import { TestimonialListingComponent } from './testimonial-listing/testimonial-listing.component';
import { RoomListingComponent } from './room-listing/room-listing.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { LatestListingComponent } from './latest-listing/latest-listing.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { AddUserComponent } from './register/register.component';

@NgModule({
  declarations: [
    AddUserComponent,
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    LoginComponent,
    AddBlogComponent,
    AddLatestComponent,
    AddMealComponent,
    AddNewsComponent,
    AddRoomComponent,
    AddTestimonialComponent,
    AddTipComponent,
    EditBlogComponent,
    EditLatestComponent,
    EditMealComponent,
    EditNewsComponent,
    EditRoomComponent,
    EditTestimonialComponent,
    EditTipComponent,
    BlogCardComponent,
    LatestCardComponent,
    MealCardComponent,
    NewsCardComponent,
    RoomCardComponent,
    TestimonialCardComponent,
    TipCardComponent,
    TipListingComponent,
    TestimonialListingComponent,
    RoomListingComponent,
    NewsListingComponent,
    MealListingComponent,
    LatestListingComponent,
    BlogListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TripsService,
    BlogsService,
    LatestService,
    MealsService,
    NewsService,
    RoomsService,
    TestimonialsService,
    TipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
