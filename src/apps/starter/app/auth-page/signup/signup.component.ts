import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UIRouter } from 'ui-router-ng2';

interface SignupModel {
  name: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

  public active = false;
  public submitted = false;
  public signupForm: FormGroup;

  public signup: SignupModel = {
    name: '',
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(
    public uiRouter: UIRouter,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    // console.log('SignupComponent.ngOnInit');

    this.signupForm = this.formBuilder.group({
      name: [
        this.signup.email, [
          Validators.required
        ]
      ],
      email: [
        this.signup.email, [
          Validators.required
        ]
      ],
      password: [
        this.signup.password, [
          Validators.required
        ]
      ],
      rememberMe: [
        this.signup.rememberMe, []
      ]
    });

    this.active = true;
  }

  public onSubmit() {
    this.submitted = true;
    this.signup = this.signupForm.value;
  }
}
