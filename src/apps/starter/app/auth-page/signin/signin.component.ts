import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

@Component({
  selector: 'signin',
  styles: [`
  `],
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('SigninComponent');
  }

  public ngOnInit() {
    console.log('SigninComponent.ngOnInit');
  }
}
