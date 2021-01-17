import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionListingComponent } from './Components/petition-listing/petition-listing.component';
import { PetitionDetailsComponent } from './Components/petition-details/petition-details.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PetitionNewComponent } from './Components/petition-new/petition-new.component';

const routes: Routes = [
  { path: 'petitions', pathMatch: 'full', component: PetitionListingComponent },
  { path: 'petitions/:id', pathMatch: 'full', component: PetitionDetailsComponent },
  { path: 'start-a-petition', pathMatch: 'full', component: PetitionNewComponent },
  { path: 'login', pathMatch: 'full', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
