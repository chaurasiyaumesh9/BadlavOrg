import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadlavHeaderComponent } from './badlav-header/badlav-header.component';
import { BadlavFooterComponent } from './badlav-footer/badlav-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BadlavHeaderComponent,
    BadlavFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
