import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersListItemComponent } from './parameters-list-item.component';

describe('ParametersListItemComponent', () => {
  let component: ParametersListItemComponent;
  let fixture: ComponentFixture<ParametersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
