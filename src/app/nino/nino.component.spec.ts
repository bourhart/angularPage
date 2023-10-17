import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinoComponent } from './nino.component';

describe('NinoComponent', () => {
  let component: NinoComponent;
  let fixture: ComponentFixture<NinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinoComponent]
    });
    fixture = TestBed.createComponent(NinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
