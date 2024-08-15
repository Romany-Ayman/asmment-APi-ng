import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaerComponent } from './navbaer.component';

describe('NavbaerComponent', () => {
  let component: NavbaerComponent;
  let fixture: ComponentFixture<NavbaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbaerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
