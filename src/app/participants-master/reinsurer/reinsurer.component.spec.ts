import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReinsurerComponent } from './reinsurer.component';

describe('ReinsurerComponent', () => {
  let component: ReinsurerComponent;
  let fixture: ComponentFixture<ReinsurerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinsurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
