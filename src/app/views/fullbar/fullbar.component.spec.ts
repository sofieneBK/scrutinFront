import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbarComponent } from './fullbar.component';

describe('FullbarComponent', () => {
  let component: FullbarComponent;
  let fixture: ComponentFixture<FullbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
