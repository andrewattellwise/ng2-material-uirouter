import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UIRouter} from 'ui-router-ng2';

class SigninModel {
  constructor(
    public email: string,
    public password: string,
    public rememberMe?: boolean
  ) {  }
}

@Component({
  selector: 'signin',
  styles: [`
  `],
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

  signin = new SigninModel('', '');
  active = false;
  submitted = false;

  signinForm: FormGroup;

  constructor(
    public uiRouter: UIRouter,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
//    console.log('SigninComponent.ngOnInit');
    this.signinForm = this.formBuilder.group({
      'email': [
        this.signin.email, [
          Validators.required
        ]
      ],
      'password': [
        this.signin.password, [
          Validators.required
        ]
      ],
      'rememberMe': [
        this.signin.rememberMe, []
      ]
    });

    this.active = true;
  }

  onSubmit() {
    this.submitted = true;
    this.signin = this.signinForm.value;
  }
}
