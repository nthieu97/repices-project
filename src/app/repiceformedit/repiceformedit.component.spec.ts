import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepiceformeditComponent } from './repiceformedit.component';

describe('RepiceformeditComponent', () => {
  let component: RepiceformeditComponent;
  let fixture: ComponentFixture<RepiceformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepiceformeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepiceformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
