import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoComponentsComponent } from './fake-logo-components.component';

describe('FakeLogoComponentsComponent', () => {
  let component: FakeLogoComponentsComponent;
  let fixture: ComponentFixture<FakeLogoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeLogoComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
