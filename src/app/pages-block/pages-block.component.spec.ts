import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlockComponent } from './pages-block.component';

describe('PagesBlockComponent', () => {
  let component: PagesBlockComponent;
  let fixture: ComponentFixture<PagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
