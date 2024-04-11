import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylComponent } from './vinyl.component';

describe('VinylComponent', () => {
  let component: VinylComponent;
  let fixture: ComponentFixture<VinylComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinylComponent]
    });
    fixture = TestBed.createComponent(VinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
