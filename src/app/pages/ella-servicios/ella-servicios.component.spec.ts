import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllaServiciosComponent } from './ella-servicios.component';

describe('EllaServiciosComponent', () => {
  let component: EllaServiciosComponent;
  let fixture: ComponentFixture<EllaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
