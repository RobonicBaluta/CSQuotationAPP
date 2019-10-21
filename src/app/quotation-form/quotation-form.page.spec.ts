import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationFormPage } from './quotation-form.page';

describe('QuotationFormPage', () => {
  let component: QuotationFormPage;
  let fixture: ComponentFixture<QuotationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
