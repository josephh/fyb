export function initialize(application) {
  debugger;
  application.register('google:main', window.google, { instantiate: false });
  application.inject('component', 'google', 'google:main');
}

export default {
  name: 'register-google',
  initialize: initialize
};
