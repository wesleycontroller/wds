import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdsSelectComponent } from './wds-select.component';

describe('WdsSelectComponent', () => {
  let component: WdsSelectComponent;
  let fixture: ComponentFixture<WdsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdsSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
