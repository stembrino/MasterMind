import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGameComponent } from './table-game.component';

describe('TableGameComponent', () => {
  let component: TableGameComponent;
  let fixture: ComponentFixture<TableGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
