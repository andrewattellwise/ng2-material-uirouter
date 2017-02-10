import {
  Component,
  OnInit
} from '@angular/core';
import { UIRouter } from 'ui-router-ng2';
import { AppMainPageComponent } from '../app-main-page';

@Component({
  selector: 'app-quick-panel',
  styles: [`
:host /deep/ .md-tab-label {
  min-width: 0 !important;
  text-transform: uppercase;
}
  `],
  template: `
<div class="ks-container-vertical">
  <md-tab-group>
    <md-tab label="Today">
      <div class="ks-container-vertical-within-tab">
        <div class="ks-scrollable">
          <perfect-scrollbar class="ks-scrollbar-element ks-pad-8">
            <h1>Today</h1>
            <p>...</p>
          </perfect-scrollbar>
        </div>
      </div>
    </md-tab>
    <md-tab label="Activity">
      <div class="ks-container-vertical-within-tab">
        <div class="ks-scrollable">
          <perfect-scrollbar class="ks-scrollbar-element ks-pad-8">
            <h1>Servers</h1>
            <p>...</p>
          </perfect-scrollbar>
        </div>
      </div>
    </md-tab>
  </md-tab-group>
</div>
`
})
export class AppQuickPanelComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter,
    public parent: AppMainPageComponent
  ) {}

  public ngOnInit() {
    // console.log('AppQuickPanelComponent.ngOnInit');
  }
}
