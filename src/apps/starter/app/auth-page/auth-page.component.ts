import {
  Component,
  OnInit
} from '@angular/core';
import { UIRouter } from 'ui-router-ng2';

@Component({
  selector: 'ks-auth-page',
  styleUrls: ['auth-page.component.scss'],
  templateUrl: 'auth-page.component.html'
})
export class AuthPageComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter
  ) {
    // console.log('AuthPageComponent');
  }

  public ngOnInit() {
    // console.log('AuthPageComponent.ngOnInit');
  }
}
