import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepicesFormComponent } from './repices-form.component';

describe('RepicesFormComponent', () => {
  let component: RepicesFormComponent;
  let fixture: ComponentFixture<RepicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepicesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
