import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigViewComponent } from './view-config-view.component';

describe('ViewConfigViewComponent', () => {
  let component: ViewConfigViewComponent;
  let fixture: ComponentFixture<ViewConfigViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
