import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionListingComponent } from './petition-listing.component';

describe('PetitionListingComponent', () => {
  let component: PetitionListingComponent;
  let fixture: ComponentFixture<PetitionListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
