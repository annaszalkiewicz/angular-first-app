import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSevenComponent } from './assignment-seven.component';

describe('AssignmentSevenComponent', () => {
  let component: AssignmentSevenComponent;
  let fixture: ComponentFixture<AssignmentSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
