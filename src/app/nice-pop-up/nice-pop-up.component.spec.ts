import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicePopUpComponent } from './nice-pop-up.component';

describe('NicePopUpComponent', () => {
  let component: NicePopUpComponent;
  let fixture: ComponentFixture<NicePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
