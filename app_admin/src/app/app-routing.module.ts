import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { LatestListingComponent } from './latest-listing/latest-listing.component';
import { AddLatestComponent } from './add-latest/add-latest.component';
import { EditLatestComponent } from './edit-latest/edit-latest.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { RoomListingComponent } from './room-listing/room-listing.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { TestimonialListingComponent } from './testimonial-listing/testimonial-listing.component';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial.component';
import { EditTestimonialComponent } from './edit-testimonial/edit-testimonial.component';
import { TipListingComponent } from './tip-listing/tip-listing.component';
import { AddTipComponent } from './add-tip/add-tip.component';
import { EditTipComponent } from './edit-tip/edit-tip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AddUserComponent } from './register/register.component';

const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  const router: Router = inject(Router);

  if (!authService.tokenSubject.getValue()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

const logoutGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  authService.logout();
  return true;
};

const routes: Routes = [
  { path: 'blogs', component: BlogListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-blog', component: AddBlogComponent, canActivate: [authGuard] },
  { path: 'edit-blog/:blogCode', component: EditBlogComponent, canActivate: [authGuard] },
  { path: 'latest', component: LatestListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-latest', component: AddLatestComponent, canActivate: [authGuard] },
  { path: 'edit-latest/:latestCode', component: EditLatestComponent, canActivate: [authGuard] },
  { path: 'meals', component: MealListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-meal', component: AddMealComponent, canActivate: [authGuard] },
  { path: 'edit-meal/:mealCode', component: EditMealComponent, canActivate: [authGuard] },
  { path: 'news', component: NewsListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-news', component: AddNewsComponent, canActivate: [authGuard] },
  { path: 'edit-news/:newsCode', component: EditNewsComponent, canActivate: [authGuard] },
  { path: 'rooms', component: RoomListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-room', component: AddRoomComponent, canActivate: [authGuard] },
  { path: 'edit-room/:roomCode', component: EditRoomComponent, canActivate: [authGuard] },
  { path: 'testimonials', component: TestimonialListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-testimonial', component: AddTestimonialComponent, canActivate: [authGuard] },
  { path: 'edit-testimonial/:testimonialCode', component: EditTestimonialComponent, canActivate: [authGuard] },
  { path: 'tips', component: TipListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-tip', component: AddTipComponent, canActivate: [authGuard] },
  { path: 'edit-tip/:tipCode', component: EditTipComponent, canActivate: [authGuard] },
  { path: 'trips', component: TripListingComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'add-trip', component: AddTripComponent, canActivate: [authGuard] },
  { path: 'edit-trip/:tripCode', component: EditTripComponent, canActivate: [authGuard] },
  { path: 'register', component: AddUserComponent},
  { path: 'logout', component: LoginComponent, canActivate: [logoutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [logoutGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
