import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('signin');
  this.route('signout');
  this.route('search');
  this.route('profile');
  this.route('account');
});

export default Router;
