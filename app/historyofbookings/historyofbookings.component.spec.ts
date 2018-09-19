import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryofbookingsComponent } from './historyofbookings.component';

describe('HistoryofbookingsComponent', () => {
  let component: HistoryofbookingsComponent;
  let fixture: ComponentFixture<HistoryofbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryofbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryofbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
