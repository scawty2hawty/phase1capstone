import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoforclientsComponent } from './infoforclients.component';

describe('InfoforclientsComponent', () => {
  let component: InfoforclientsComponent;
  let fixture: ComponentFixture<InfoforclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoforclientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoforclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
