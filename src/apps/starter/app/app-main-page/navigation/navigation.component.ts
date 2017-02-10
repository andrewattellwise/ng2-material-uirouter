import {
  Component,
  OnInit
} from '@angular/core';
import { UIRouter } from 'ui-router-ng2';
import { AppMainPageComponent } from '../app-main-page';

@Component({
  selector: 'app-navigation',
  styles: [`
    md-icon {
      margin: 0 8px;
    }
    
    a {
      text-decoration: none;
    }
`],
  template: `
    <div class="ks-container-vertical">
      <md-toolbar class="ks-glow-z1 ks-page-toolbar ks-brand">
        <md-icon svgIcon="brand"></md-icon> Ekspand
      </md-toolbar>  
      <div class="ks-scrollable">
        <perfect-scrollbar class="ks-scrollbar-element">
        <md-list>
          <a *ngFor="let menu of appMenu"
            md-list-item
            (click)="parent.navContainer?.start?.close()"
            uiSref="{{menu.state}}"> 
            <md-icon svgIcon="{{menu.icon}}"></md-icon> {{menu.title}}
          </a>
        </md-list>
      </perfect-scrollbar>
      </div>
    </div>
`
})
export class AppNavigationComponent implements OnInit {

  public appMenu = [
    {
      title: 'Home',
      state: 'app.home',
      icon: 'content:ic_send_24px'
    },
    {
      title: 'About',
      state: 'app.about',
      icon: 'communication:ic_contacts_24px'
    },
    {
      title: 'Sign in',
      state: 'auth.signin',
      icon: 'action:ic_settings_24px'
    }
  ];

  constructor(
    public uiRouter: UIRouter,
    public parent: AppMainPageComponent
  ) {
  }

  public ngOnInit() {
    // console.log('AppNavigationComponent.ngOnInit');
  }
}
