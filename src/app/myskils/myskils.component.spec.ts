import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskilsComponent } from './myskils.component';

describe('MyskilsComponent', () => {
  let component: MyskilsComponent;
  let fixture: ComponentFixture<MyskilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyskilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
