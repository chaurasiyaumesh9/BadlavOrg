import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionNewComponent } from './petition-new.component';

describe('PetitionNewComponent', () => {
  let component: PetitionNewComponent;
  let fixture: ComponentFixture<PetitionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
