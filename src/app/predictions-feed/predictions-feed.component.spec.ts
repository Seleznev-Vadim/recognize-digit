import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsFeedComponent } from './predictions-feed.component';

describe('PredictionsFeedComponent', () => {
  let component: PredictionsFeedComponent;
  let fixture: ComponentFixture<PredictionsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
