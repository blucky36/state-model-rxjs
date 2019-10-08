import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectTestComponent } from './replay-subject-test.component';

describe('ReplaySubjectTestComponent', () => {
  let component: ReplaySubjectTestComponent;
  let fixture: ComponentFixture<ReplaySubjectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
