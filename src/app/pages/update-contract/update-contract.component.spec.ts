import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateContractComponent } from './update-contract.component';

describe('UpdateContractComponent', () => {
  let component: UpdateContractComponent;
  let fixture: ComponentFixture<UpdateContractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
