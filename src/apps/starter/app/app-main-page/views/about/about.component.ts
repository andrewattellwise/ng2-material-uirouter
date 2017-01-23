import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {AppMainPage} from '../../app-main-page';

@Component({
  selector: 'app-about',
  styles: [`
  `],
  template: `
<div class="ks-page-view-container">
  <h1 xLarge>About</h1>
  
  <md-card style="max-width: 400px;">
    <md-card-header>
      <div md-card-avatar><md-icon svgIcon="brand"></md-icon></div>
      <md-card-title>Ekspand Starter App</md-card-title>
      <md-card-subtitle>Angular, Flex & Material</md-card-subtitle>
    </md-card-header>
    <img md-card-image src="assets/img/logos/ekspand_logo_64x64.svg">
    <md-card-content>
      <p>
        Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
      </p>
    </md-card-content>
    <md-card-actions>
      <button md-button>LIKE</button>
      <button md-button>SHARE</button>
    </md-card-actions>
  </md-card>
</div>    
`
})
export class AboutComponent implements OnInit {
  constructor(
    public uiRouter: UIRouter,
    private parent: AppMainPage
  ) {
    console.log('AboutComponent');
  }

  public ngOnInit() {
    console.log('AboutComponent.ngOnInit');
  }
}
