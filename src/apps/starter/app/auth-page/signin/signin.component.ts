import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UIRouter } from 'ui-router-ng2';

interface SigninModel {
  email: string;
  password: string;
  rememberMe?: boolean;
};

@Component({
  selector: 'signin',
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

  public active = false;
  public submitted = false;
  public signinForm: FormGroup;

  public signin: SigninModel = {
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
    // console.log('SigninComponent.ngOnInit');

    this.signinForm = this.formBuilder.group({
      email: [
        this.signin.email, [
          Validators.required
        ]
      ],
      password: [
        this.signin.password, [
          Validators.required
        ]
      ],
      rememberMe: [
        this.signin.rememberMe, []
      ]
    });

    this.active = true;
  }

  public onSubmit() {
    this.submitted = true;
    this.signin = this.signinForm.value;
  }
}
