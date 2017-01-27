import {
  Ng2StateDeclaration
} from 'ui-router-ng2';
import { AppMainPage } from './app-main-page';
import { HomeComponent } from './app-main-page/views/home';
import { AboutComponent } from './app-main-page/views/about';
import { AppNavigation } from './app-main-page/navigation';
import { AppToolbar } from './app-main-page/toolbar';
import { AppQuickPanel } from './app-main-page/quick-panel';
import { AuthPage, SigninComponent, SignupComponent } from './auth-page';

export const UIROUTER_STATES: Ng2StateDeclaration[] = [
  //
  // 'app' state is for authenticated user
  //
  {
    name: 'app',
    abstract: true,
    views : {
      'main@': { component: AppMainPage },
      'toolbar@app': { component: AppToolbar },
      'navigation@app': { component: AppNavigation },
      'quickPanel@app': { component: AppQuickPanel }
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
      'main@': { component: AuthPage },
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
