import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsListItemComponent } from './dbs-list-item.component';

describe('DbsListItemComponent', () => {
  let component: DbsListItemComponent;
  let fixture: ComponentFixture<DbsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
