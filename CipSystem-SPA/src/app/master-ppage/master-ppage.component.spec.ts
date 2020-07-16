import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPPageComponent } from './master-ppage.component';

describe('MasterPPageComponent', () => {
  let component: MasterPPageComponent;
  let fixture: ComponentFixture<MasterPPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
