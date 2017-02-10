import { inject, TestBed } from '@angular/core/testing';
import { UIRouterModule, UIRouter } from 'ui-router-ng2';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';

describe('About', () => {

  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AboutComponent,
      // provide a better mock
      {
        provide: UIRouter,
        useValue: {
        }
      },
    ]
  }));

  it('should log ngOnInit', inject([AboutComponent], (about: AboutComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
