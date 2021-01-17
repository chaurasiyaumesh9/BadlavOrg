import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadlavHeaderComponent } from './Components/badlav-header/badlav-header.component';
import { BadlavFooterComponent } from './Components/badlav-footer/badlav-footer.component';
import { PetitionService } from './Services/Petition.Service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetitionNewComponent } from './Components/petition-new/petition-new.component';


@NgModule({
  declarations: [
    AppComponent,
    PetitionNewComponent,
    BadlavHeaderComponent,
    BadlavFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
