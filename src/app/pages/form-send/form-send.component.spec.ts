import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSendComponent } from './form-send.component';

describe('FormSendComponent', () => {
  let component: FormSendComponent;
  let fixture: ComponentFixture<FormSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
