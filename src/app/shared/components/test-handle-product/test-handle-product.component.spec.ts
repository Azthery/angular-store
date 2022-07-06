import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHandleProductComponent } from './test-handle-product.component';

describe('TestHandleProductComponent', () => {
  let component: TestHandleProductComponent;
  let fixture: ComponentFixture<TestHandleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHandleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHandleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
