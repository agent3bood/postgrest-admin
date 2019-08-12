import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsListItemComponent } from './paths-list-item.component';

describe('PathsListItemComponent', () => {
  let component: PathsListItemComponent;
  let fixture: ComponentFixture<PathsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
