import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnicornButtonComponent } from './add-unicorn-button.component';

describe('AddUnicornButtonComponent', () => {
  let component: AddUnicornButtonComponent;
  let fixture: ComponentFixture<AddUnicornButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnicornButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnicornButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
