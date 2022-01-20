import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipsDataContainerComponent } from './components/ships-data-container/ships-data-container.component';
import { ShipsTableComponent } from './components/ships-data-container/ships-table/ships-table.component';
import { ShipDetailsComponent } from './components/ships-data-container/ship-details/ship-details.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShipsDataContainerComponent,
    ShipsTableComponent,
    ShipDetailsComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
