import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPersonagensComponent } from './nav-personagens.component';

describe('NavPersonagensComponent', () => {
  let component: NavPersonagensComponent;
  let fixture: ComponentFixture<NavPersonagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPersonagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
