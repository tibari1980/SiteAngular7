import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MameteoComponent } from './mameteo.component';

describe('MameteoComponent', () => {
  let component: MameteoComponent;
  let fixture: ComponentFixture<MameteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MameteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MameteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
