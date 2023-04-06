import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TripsService } from './services/trips.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    DeleteTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
