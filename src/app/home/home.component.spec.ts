import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new Home component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have an H2 tag that says Angular TDD Home Page!', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.nativeElement.querySelector('h2')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe('Angular TDD Home Page!')
  });
});
