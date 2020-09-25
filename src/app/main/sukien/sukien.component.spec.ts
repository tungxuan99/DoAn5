import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukienComponent } from './sukien.component';

describe('SukienComponent', () => {
  let component: SukienComponent;
  let fixture: ComponentFixture<SukienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
