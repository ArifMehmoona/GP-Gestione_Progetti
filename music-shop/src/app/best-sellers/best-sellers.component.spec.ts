import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Best_SellersComponent } from './best-sellers.component';

describe('Best_sellersComponent', () => {
  let component: Best_SellersComponent;
  let fixture: ComponentFixture<Best_SellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Best_SellersComponent]
    });
    fixture = TestBed.createComponent(Best_SellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
