import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeHomeComponent } from './mentee-home.component';

describe('MenteeHomeComponent', () => {
  let component: MenteeHomeComponent;
  let fixture: ComponentFixture<MenteeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenteeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
