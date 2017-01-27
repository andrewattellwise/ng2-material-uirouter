import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('SignupComponent');
  }

  public ngOnInit() {
    console.log('SignupComponent.ngOnInit');
  }
}
