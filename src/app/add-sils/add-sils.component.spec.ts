import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSilsComponent } from './add-sils.component';

describe('AddSilsComponent', () => {
  let component: AddSilsComponent;
  let fixture: ComponentFixture<AddSilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
