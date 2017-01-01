import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing, RootComponent} from './routes';


import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {FooterComponent} from './footer/footer';
import {DashboardComponent} from './dashboard/dashboard';
import {BuildingListComponent} from './building/list/building-list';
import {BuildingDetailsComponent} from './building/details/building-details';
import {WeatherComponent} from './weather/weather';
import {PrayComponent} from './pray/pray';
import {ReminderComponent} from './reminder/reminder';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BuildingListComponent,
    BuildingDetailsComponent,
    WeatherComponent,
    PrayComponent,
    ReminderComponent
  ],
 // providers:[LinksComponent],
  bootstrap: [RootComponent]
})
export class AppModule {
}
