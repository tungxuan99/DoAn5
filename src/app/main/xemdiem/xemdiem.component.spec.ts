import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemdiemComponent } from './xemdiem.component';

describe('XemdiemComponent', () => {
  let component: XemdiemComponent;
  let fixture: ComponentFixture<XemdiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemdiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
