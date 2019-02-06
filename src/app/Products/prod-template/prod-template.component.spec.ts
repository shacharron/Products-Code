import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTemplateComponent } from './prod-template.component';

describe('ProdTemplateComponent', () => {
  let component: ProdTemplateComponent;
  let fixture: ComponentFixture<ProdTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
