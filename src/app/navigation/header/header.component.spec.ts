import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new Header component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sideNavToggle when hamburger menu button is clicked', () => {
    spyOn(component.sidenavToggle, 'emit');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('#toggleNav');
    button.dispatchEvent(new Event('click'));

    expect(component.sidenavToggle.emit).toHaveBeenCalled();
  });

});
