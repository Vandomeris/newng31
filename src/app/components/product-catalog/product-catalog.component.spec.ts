import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogComponent } from './product-catalog.component';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
