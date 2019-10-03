import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewComponent } from './view/view.component';
import { SummaryComponent } from './summary/summary.component';
import { RecordsComponent } from './records/records.component';
import { GraphComponent } from './graph/graph.component';
import { ViewConfigViewComponent } from './view-config-view/view-config-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    ViewComponent,
    SummaryComponent,
    RecordsComponent,
    GraphComponent,
    ViewConfigViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
