import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

const routes: Routes = [
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip/:tripCode', component: EditTripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
