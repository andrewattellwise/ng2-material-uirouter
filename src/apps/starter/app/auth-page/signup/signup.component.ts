import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UIRouter} from 'ui-router-ng2';

class SignupModel {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public rememberMe?: boolean
  ) {  }
}

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

  signup = new SignupModel('', '', '');
  active = false;
  submitted = false;

  signupForm: FormGroup;

  constructor(
    public uiRouter: UIRouter,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    //console.log('SignupComponent.ngOnInit');
    this.signupForm = this.formBuilder.group({
      'name': [
        this.signup.email, [
          Validators.required
        ]
      ],
      'email': [
        this.signup.email, [
          Validators.required
        ]
      ],
      'password': [
        this.signup.password, [
          Validators.required
        ]
      ],
      'rememberMe': [
        this.signup.rememberMe, []
      ]
    });

    this.active = true;
  }

  onSubmit() {
    this.submitted = true;
    this.signup = this.signupForm.value;
  }
}
