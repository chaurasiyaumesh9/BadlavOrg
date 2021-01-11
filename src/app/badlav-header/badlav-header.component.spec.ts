import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadlavHeaderComponent } from './badlav-header.component';

describe('BadlavHeaderComponent', () => {
  let component: BadlavHeaderComponent;
  let fixture: ComponentFixture<BadlavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadlavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadlavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
