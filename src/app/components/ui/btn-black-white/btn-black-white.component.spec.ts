import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBlackWhiteComponent } from './btn-black-white.component';

describe('BtnBlackWhiteComponent', () => {
  let component: BtnBlackWhiteComponent;
  let fixture: ComponentFixture<BtnBlackWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnBlackWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnBlackWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
