import {
  Ng2StateDeclaration
} from 'ui-router-ng2';
import { AppMainPageComponent } from './app-main-page';
import { HomeComponent } from './app-main-page/views/home';
import { AboutComponent } from './app-main-page/views/about';
import { AppNavigationComponent } from './app-main-page/navigation';
import { AppToolbarComponent } from './app-main-page/toolbar';
import { AppQuickPanelComponent } from './app-main-page/quick-panel';
import { AuthPageComponent, SigninComponent, SignupComponent } from './auth-page';

export const UIROUTER_STATES: Ng2StateDeclaration[] = [
  //
  // 'app' state is for authenticated user
  //
  {
    name: 'app',
    abstract: true,
    views : {
      'main@': { component: AppMainPageComponent },
      'toolbar@app': { component: AppToolbarComponent },
      'navigation@app': { component: AppNavigationComponent },
      'quickPanel@app': { component: AppQuickPanelComponent }
    }
  },
  {
    name: 'app.about',
    url: '^/about',
    views: {
      'content@app': { component: AboutComponent }
    },
  },
  {
    name: 'app.home',
    url: '^/home',
    views: {
      'content@app': { component: HomeComponent }
    },
  },

  //
  // 'login' state is for non-authenticated user
  //
  {
    name: 'auth',
    abstract: true,
    views : {
      'main@': { component: AuthPageComponent },
    }
  },
  {
    name: 'auth.signin',
    url: '^/signin',
    views: {
      'content@auth': { component: SigninComponent }
    },
  },
  {
    name: 'auth.signup',
    url: '^/signup',
    views: {
      'content@auth': { component: SignupComponent }
    },
  },
];
