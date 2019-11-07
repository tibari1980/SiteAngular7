import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaGalleryComponent } from './ma-gallery.component';

describe('MaGalleryComponent', () => {
  let component: MaGalleryComponent;
  let fixture: ComponentFixture<MaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
