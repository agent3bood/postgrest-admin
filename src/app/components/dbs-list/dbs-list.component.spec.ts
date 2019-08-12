import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsListComponent } from './dbs-list.component';

describe('DbsListComponent', () => {
  let component: DbsListComponent;
  let fixture: ComponentFixture<DbsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
