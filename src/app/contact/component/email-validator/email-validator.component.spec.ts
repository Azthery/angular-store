import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidatorComponent } from './email-validator.component';

describe('EmailValidatorComponent', () => {
  let component: EmailValidatorComponent;
  let fixture: ComponentFixture<EmailValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
