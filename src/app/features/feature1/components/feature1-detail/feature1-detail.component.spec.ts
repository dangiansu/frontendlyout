import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1DetailComponent } from './feature1-detail.component';

describe('Feature1DetailComponent', () => {
  let component: Feature1DetailComponent;
  let fixture: ComponentFixture<Feature1DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1DetailComponent]
    });
    fixture = TestBed.createComponent(Feature1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
