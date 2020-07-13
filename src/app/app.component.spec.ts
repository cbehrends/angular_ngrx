import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have app-layout', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.nativeElement.querySelector('app-layout')).not.toBeNull();
  });
});
