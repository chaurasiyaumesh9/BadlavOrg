import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadlavFooterComponent } from './badlav-footer.component';

describe('BadlavFooterComponent', () => {
  let component: BadlavFooterComponent;
  let fixture: ComponentFixture<BadlavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadlavFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadlavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
