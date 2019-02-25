import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentEightComponent } from './assignment-eight.component';

describe('AssignmentEightComponent', () => {
  let component: AssignmentEightComponent;
  let fixture: ComponentFixture<AssignmentEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
