import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCdComponent } from './search-cd.component';

describe('SearchCdComponent', () => {
  let component: SearchCdComponent;
  let fixture: ComponentFixture<SearchCdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCdComponent]
    });
    fixture = TestBed.createComponent(SearchCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
