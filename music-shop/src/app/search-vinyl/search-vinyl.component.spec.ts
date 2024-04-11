import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVinylComponent } from './search-vinyl.component';

describe('SearchVinylComponent', () => {
  let component: SearchVinylComponent;
  let fixture: ComponentFixture<SearchVinylComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchVinylComponent]
    });
    fixture = TestBed.createComponent(SearchVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
