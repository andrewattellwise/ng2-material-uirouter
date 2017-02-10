import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from '../../../app.service';
import { AppMainPageComponent } from '../../app-main-page';

@Component({
  styleUrls: [ 'home.component.scss' ],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public appState: AppState,
    private parent: AppMainPageComponent
  ) {
    // console.log('HomeComponent');
  }

  public ngOnInit() {
    console.log('HomeComponent.ngOnInit');
  }
}
