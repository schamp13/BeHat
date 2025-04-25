import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignScreenComponent } from './sign-screen.component';

describe('SignScreenComponent', () => {
  let component: SignScreenComponent;
  let fixture: ComponentFixture<SignScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignScreenComponent]
    });
    fixture = TestBed.createComponent(SignScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
