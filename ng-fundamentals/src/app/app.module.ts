import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { EventsAppComponent } from './events-app.component';
//import { EventsListComponent } from './events/events-list.component'
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './events/event-details.component';
@NgModule({
  declarations: [
//    EventsAppComponent,
//    EventsListComponent,
    AppComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
//    EventsAppComponent
    AppComponent
  ]
})
export class AppModule { }
