import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconboxesComponent } from './iconboxes.component';

describe('IconboxesComponent', () => {
  let component: IconboxesComponent;
  let fixture: ComponentFixture<IconboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
