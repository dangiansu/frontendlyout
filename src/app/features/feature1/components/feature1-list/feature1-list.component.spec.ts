import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1ListComponent } from './feature1-list.component';

describe('Feature1ListComponent', () => {
  let component: Feature1ListComponent;
  let fixture: ComponentFixture<Feature1ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1ListComponent]
    });
    fixture = TestBed.createComponent(Feature1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
